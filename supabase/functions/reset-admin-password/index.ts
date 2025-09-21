import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Simple in-memory stores (shared with other functions)
const otpStore = new Map<string, { otp: string; expires: number }>();
const passwordStore = new Map<string, string>();

interface ResetPasswordRequest {
  email: string;
  otp: string;
  newPassword: string;
}

// Initialize default passwords
const initializePasswords = () => {
  if (passwordStore.size === 0) {
    passwordStore.set('sandeep@idea2unicorn.ai', 'Sandeep@123');
    passwordStore.set('atharv.kumar@webisdom.com', 'Atharv@123');
    passwordStore.set('amardeep.bajpai@webisdom.com', 'Amardeep@123');
  }
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    initializePasswords();
    
    const { email, otp, newPassword }: ResetPasswordRequest = await req.json();

    // Verify OTP first
    const storedOTP = otpStore.get(email);

    if (!storedOTP) {
      return new Response(
        JSON.stringify({ error: "No OTP found for this email" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (Date.now() > storedOTP.expires) {
      otpStore.delete(email);
      return new Response(
        JSON.stringify({ error: "OTP has expired" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (storedOTP.otp !== otp) {
      return new Response(
        JSON.stringify({ error: "Invalid OTP" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Validate new password
    if (newPassword.length < 8) {
      return new Response(
        JSON.stringify({ error: "Password must be at least 8 characters long" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Update password
    passwordStore.set(email, newPassword);
    
    // Clean up OTP
    otpStore.delete(email);

    console.log("Password reset successfully for:", email);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in reset-admin-password function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);