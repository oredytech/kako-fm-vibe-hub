import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

interface TriggerRequest {
  trigger: 'article' | 'video' | 'program';
  data: {
    id: string;
    title: string;
    description?: string;
    imageUrl?: string;
    brief?: string;
    videoUrl?: string;
    programName?: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  console.log('Newsletter trigger function called');

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { trigger, data }: TriggerRequest = await req.json();
    
    console.log(`Triggering newsletter for ${trigger}:`, data);

    // Call the send-newsletter function
    const newsletterResponse = await supabase.functions.invoke('send-newsletter', {
      body: {
        contentType: trigger,
        contentId: data.id,
        title: data.title,
        description: data.description,
        imageUrl: data.imageUrl,
        brief: data.brief,
        videoUrl: data.videoUrl,
        programName: data.programName
      }
    });

    if (newsletterResponse.error) {
      console.error('Error calling send-newsletter:', newsletterResponse.error);
      throw newsletterResponse.error;
    }

    console.log('Newsletter triggered successfully:', newsletterResponse.data);

    return new Response(JSON.stringify({
      message: 'Newsletter triggered successfully',
      trigger,
      data: newsletterResponse.data
    }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });

  } catch (error: any) {
    console.error("Error in trigger-newsletter function:", error);
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