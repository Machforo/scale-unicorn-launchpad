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
      // Send email to both recipients
      const emailResponse = await resend.emails.send({
        from: "Idea2Unicorn <onboarding@resend.dev>",
        to: ["atharvkumar43@gmail.com", "sandeep@idea2unicorn.ai"],
        subject: `New Contact Form Inquiry from ${formData.name}`,
        html: `
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
        `,
      });

      if (emailResponse.error) {
        console.error("Resend API error:", emailResponse.error);
        
        let errorMessage = "Failed to send email. Please try again.";
        if (emailResponse.error.name === "rate_limit_exceeded" || emailResponse.error.message?.includes("429")) {
          errorMessage = "Rate limit exceeded. Please wait a moment and try again.";
        }
        
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: errorMessage,
            details: emailResponse.error
          }),
          {
            status: 429,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          }
        );
      }

      console.log("Email sent successfully:", emailResponse);
    } catch (resendError: any) {
      console.error("Resend service error:", resendError);
      
      let errorMessage = "Email service temporarily unavailable. Please try again.";
      let statusCode = 500;
      
      if (resendError.message?.includes("429") || resendError.status === 429) {
        errorMessage = "Rate limit exceeded. Please wait a moment and try again.";
        statusCode = 429;
      }
      
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: errorMessage,
          details: resendError.message 
        }),
        {
          status: statusCode,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
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