import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Initialize Supabase client for storing form data
const supabaseClient = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  interest: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();

    console.log("Received contact form data:", formData);

    // Store form data in database first
    const { error: dbError } = await supabaseClient
      .from('form_responses')
      .insert({
        form_type: 'contact',
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        company: formData.company || null,
        message: formData.message
      });

    if (dbError) {
      console.error('Error storing form data:', dbError);
    } else {
      console.log('Form data stored successfully in database');
    }

    try {
      // Throttle + retry logic to respect Resend rate limits and improve deliverability
      const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

      // Recipients list (individual sends for better error tracking)
      const recipients = [
        "atharvkumar43@gmail.com",
        "sandeep@idea2unicorn.ai",
        "atharvkyt@gmail.com",
      ];

      // Allow overriding the from address via secret once your domain is verified in Resend
      // Set RESEND_FROM_ADDRESS in the Supabase Functions secrets to something like:
      //   Idea2Unicorn <notifications@idea2unicorn.ai>
      const fromAddress =
        Deno.env.get("RESEND_FROM_ADDRESS") || "Idea2Unicorn <onboarding@resend.dev>";

      const emailTemplate = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Inquiry
          </h1>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #007bff; margin-top: 0;">Contact Details</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Company:</strong> ${formData.company || 'Not specified'}</p>
            <p><strong>Area of Interest:</strong> ${formData.interest || 'Not specified'}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #555;">
              ${formData.message || 'No message provided.'}
            </p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e7f3ff; border-left: 4px solid #007bff;">
            <p style="margin: 0; color: #555; font-size: 14px;">
              This inquiry was submitted through the Idea2Unicorn contact form.
            </p>
          </div>
        </div>
      `;

      type EmailResult = { recipient: string; success: boolean; id?: string; error?: any };
      const emailResults: EmailResult[] = [];
      let hasErrors = false;

      const sendToRecipient = async (recipient: string, attempt = 1): Promise<void> => {
        try {
          console.log(`Attempting to send email to: ${recipient} (attempt ${attempt})`);

          const emailResponse = await resend.emails.send({
            from: fromAddress,
            to: [recipient],
            subject: `New Contact Form Inquiry from ${formData.name}`,
            html: emailTemplate,
            // Let recipients reply directly to the sender
            reply_to: formData.email,
          } as any);

          if ((emailResponse as any)?.error) {
            const err = (emailResponse as any).error;
            // Retry on Resend rate limit (429)
            if ((err.statusCode === 429 || err.status === 429) && attempt < 3) {
              const backoff = 800 * attempt; // simple backoff: 800ms, 1600ms
              console.warn(`429 rate limit for ${recipient}. Retrying after ${backoff}ms ...`);
              await sleep(backoff);
              return sendToRecipient(recipient, attempt + 1);
            }

            console.error(`Failed to send email to ${recipient}:`, err);
            emailResults.push({ recipient, success: false, error: err });
            hasErrors = true;
          } else {
            console.log(`Email sent successfully to ${recipient}:`, emailResponse);
            emailResults.push({ recipient, success: true, id: (emailResponse as any).data?.id });
          }
        } catch (individualError: any) {
          // Retry on generic network rate limit errors
          const isRateLimited =
            individualError?.status === 429 ||
            individualError?.statusCode === 429 ||
            `${individualError?.message || ''}`.includes('429');

          if (isRateLimited && attempt < 3) {
            const backoff = 800 * attempt;
            console.warn(`429 exception for ${recipient}. Retrying after ${backoff}ms ...`);
            await sleep(backoff);
            return sendToRecipient(recipient, attempt + 1);
          }

          console.error(`Exception sending email to ${recipient}:`, individualError);
          emailResults.push({ recipient, success: false, error: individualError });
          hasErrors = true;
        }
      };

      // Send sequentially with a small delay to respect 2 req/s limit
      for (const recipient of recipients) {
        await sendToRecipient(recipient);
        // Throttle between sends (Resend free plan: 2 req/s)
        await sleep(700);
      }

      // Log summary of email delivery results
      console.log("Email delivery summary:", emailResults);

      if (hasErrors) {
        const failedRecipients = emailResults.filter((r) => !r.success).map((r) => r.recipient);
        const successfulRecipients = emailResults.filter((r) => r.success).map((r) => r.recipient);

        console.warn(
          `Partial email delivery failure. Failed: ${failedRecipients.join(', ')}, Successful: ${successfulRecipients.join(', ')}`,
        );

        // If everything failed with 403, guide domain verification
        const all403 = emailResults.length > 0 && emailResults.every((r) => {
          const msg = typeof r.error === 'string' ? r.error : r.error?.message;
          const code = r.error?.statusCode || r.error?.status;
          return !r.success && (code === 403 || `${msg || ''}`.includes('testing emails'));
        });

        if (all403) {
          return new Response(
            JSON.stringify({
              success: false,
              error:
                "Emails blocked by Resend test mode. Verify your domain at resend.com/domains and set RESEND_FROM_ADDRESS to your verified address (e.g., notifications@idea2unicorn.ai).",
              deliveryDetails: emailResults,
            }),
            {
              status: 400,
              headers: { "Content-Type": "application/json", ...corsHeaders },
            },
          );
        }

        // Still return success if at least one email was sent
        if (successfulRecipients.length > 0) {
          return new Response(
            JSON.stringify({
              success: true,
              message: `Your inquiry has been sent successfully! (Delivered to: ${successfulRecipients.join(', ')})`,
              deliveryDetails: emailResults,
            }),
            {
              status: 200,
              headers: { "Content-Type": "application/json", ...corsHeaders },
            },
          );
        }

        // If none succeeded and not all were 403, report a generic failure
        return new Response(
          JSON.stringify({
            success: false,
            error:
              "Failed to deliver emails. Please try again shortly or contact support.",
            deliveryDetails: emailResults,
          }),
          {
            status: 502,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          },
        );
      }

      return new Response(
        JSON.stringify({ success: true, message: "Your inquiry has been sent successfully!" }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    } catch (resendError: any) {
      console.error("Resend service error:", resendError);

      let errorMessage = "Email service temporarily unavailable. Please try again.";
      let statusCode = 500;

      if (resendError.message?.includes("429") || resendError.status === 429) {
        errorMessage = "Rate limit exceeded. Please wait a moment and try again.";
        statusCode = 429;
      }

      return new Response(
        JSON.stringify({ success: false, error: errorMessage, details: resendError.message }),
        { status: statusCode, headers: { "Content-Type": "application/json", ...corsHeaders } },
      );
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Your inquiry has been sent successfully!" 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "Failed to send email. Please try again." 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);