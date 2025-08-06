import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface NewsletterRequest {
  contentType: 'article' | 'video' | 'program';
  contentId: string;
  title: string;
  description?: string;
  imageUrl?: string;
  brief?: string;
  videoUrl?: string;
  programName?: string;
}

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

const handler = async (req: Request): Promise<Response> => {
  console.log('Newsletter function called');

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { contentType, contentId, title, description, imageUrl, brief, videoUrl, programName }: NewsletterRequest = await req.json();

    // Get all active newsletter subscribers
    const { data: subscribers, error: subscribersError } = await supabase
      .from('newsletters')
      .select('email')
      .eq('is_active', true);

    if (subscribersError) {
      console.error('Error fetching subscribers:', subscribersError);
      throw subscribersError;
    }

    if (!subscribers || subscribers.length === 0) {
      console.log('No active subscribers found');
      return new Response(JSON.stringify({ message: 'No active subscribers' }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    console.log(`Found ${subscribers.length} active subscribers`);

    // Generate email content based on content type
    let emailSubject = '';
    let emailHtml = '';

    switch (contentType) {
      case 'article':
        emailSubject = `📰 Nouvel article: ${title}`;
        emailHtml = `
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
                .container { max-width: 600px; margin: 0 auto; background-color: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                .header { background: linear-gradient(135deg, #3b82f6, #1e40af); color: white; padding: 30px 20px; text-align: center; }
                .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
                .content { padding: 30px 20px; }
                .article-image { width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 20px; }
                .title { font-size: 22px; font-weight: bold; color: #1f2937; margin-bottom: 15px; line-height: 1.3; }
                .brief { color: #6b7280; font-size: 16px; line-height: 1.6; margin-bottom: 25px; }
                .cta-button { background: linear-gradient(135deg, #3b82f6, #1e40af); color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; display: inline-block; font-weight: bold; margin: 20px 0; }
                .footer { background-color: #f9fafb; padding: 20px; text-align: center; color: #6b7280; font-size: 14px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <div class="logo">📻 KAKO FM</div>
                  <div>Votre radio engagée</div>
                </div>
                <div class="content">
                  ${imageUrl ? `<img src="${imageUrl}" alt="${title}" class="article-image" />` : ''}
                  <h1 class="title">${title}</h1>
                  ${brief ? `<p class="brief">${brief}</p>` : ''}
                  <a href="https://kakofm.net/articles/${contentId}" class="cta-button">📖 Lire l'article</a>
                </div>
                <div class="footer">
                  <p>© 2025 KAKO FM - Radio engagée et jeune<br>
                  Goma, Nord-Kivu, RDC</p>
                  <p><a href="https://kakofm.net">Visitez notre site</a> | <a href="#">Se désabonner</a></p>
                </div>
              </div>
            </body>
          </html>
        `;
        break;

      case 'video':
        emailSubject = `🎥 Nouvelle vidéo: ${title}`;
        emailHtml = `
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
                .container { max-width: 600px; margin: 0 auto; background-color: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                .header { background: linear-gradient(135deg, #dc2626, #991b1b); color: white; padding: 30px 20px; text-align: center; }
                .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
                .content { padding: 30px 20px; }
                .video-thumbnail { width: 100%; height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 20px; position: relative; }
                .play-button { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: rgba(0,0,0,0.8); color: white; border-radius: 50%; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; font-size: 24px; }
                .title { font-size: 22px; font-weight: bold; color: #1f2937; margin-bottom: 15px; line-height: 1.3; }
                .description { color: #6b7280; font-size: 16px; line-height: 1.6; margin-bottom: 25px; }
                .cta-button { background: linear-gradient(135deg, #dc2626, #991b1b); color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; display: inline-block; font-weight: bold; margin: 20px 0; }
                .footer { background-color: #f9fafb; padding: 20px; text-align: center; color: #6b7280; font-size: 14px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <div class="logo">📺 KAKO TV</div>
                  <div>Découvrez nos vidéos</div>
                </div>
                <div class="content">
                  <div class="video-thumbnail">
                    ${imageUrl ? `<img src="${imageUrl}" alt="${title}" style="width: 100%; height: 100%; object-fit: cover;" />` : ''}
                    <div class="play-button">▶</div>
                  </div>
                  <h1 class="title">${title}</h1>
                  ${description ? `<p class="description">${description}</p>` : ''}
                  <a href="${videoUrl || `https://kakofm.net/videos/${contentId}`}" class="cta-button">🎥 Regarder la vidéo</a>
                </div>
                <div class="footer">
                  <p>© 2025 KAKO FM - Radio engagée et jeune<br>
                  Goma, Nord-Kivu, RDC</p>
                  <p><a href="https://kakofm.net">Visitez notre site</a> | <a href="#">Se désabonner</a></p>
                </div>
              </div>
            </body>
          </html>
        `;
        break;

      case 'program':
        emailSubject = `🎙️ Émission en cours: ${programName || title}`;
        emailHtml = `
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background-color: #f5f5f5; }
                .container { max-width: 600px; margin: 0 auto; background-color: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
                .header { background: linear-gradient(135deg, #059669, #047857); color: white; padding: 30px 20px; text-align: center; }
                .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
                .live-badge { background: #dc2626; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; font-weight: bold; display: inline-block; margin-bottom: 10px; animation: pulse 2s infinite; }
                .content { padding: 30px 20px; text-align: center; }
                .program-name { font-size: 28px; font-weight: bold; color: #1f2937; margin-bottom: 15px; }
                .program-description { color: #6b7280; font-size: 18px; line-height: 1.6; margin-bottom: 25px; }
                .cta-button { background: linear-gradient(135deg, #059669, #047857); color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; display: inline-block; font-weight: bold; margin: 20px 0; font-size: 18px; }
                .footer { background-color: #f9fafb; padding: 20px; text-align: center; color: #6b7280; font-size: 14px; }
                @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <div class="live-badge">🔴 EN DIRECT</div>
                  <div class="logo">📻 KAKO FM</div>
                  <div>97.2 MHz - Votre radio engagée</div>
                </div>
                <div class="content">
                  <h1 class="program-name">${programName || title}</h1>
                  <p class="program-description">L'émission "${programName || title}" est actuellement en cours de diffusion sur KAKO FM. Ne manquez pas ce moment d'écoute exceptionnel !</p>
                  <a href="https://kakofm.net" class="cta-button">🎧 ÉCOUTER EN DIRECT</a>
                </div>
                <div class="footer">
                  <p>© 2025 KAKO FM - Radio engagée et jeune<br>
                  97.2 MHz - Goma, Nord-Kivu, RDC</p>
                  <p><a href="https://kakofm.net">Visitez notre site</a> | <a href="#">Se désabonner</a></p>
                </div>
              </div>
            </body>
          </html>
        `;
        break;
    }

    // Send emails to all subscribers
    const emailPromises = subscribers.map(async (subscriber) => {
      try {
        const emailResponse = await resend.emails.send({
          from: "KAKO FM <newsletter@kakofm.net>",
          to: [subscriber.email],
          subject: emailSubject,
          html: emailHtml,
        });
        console.log(`Email sent to ${subscriber.email}:`, emailResponse);
        return { email: subscriber.email, success: true, id: emailResponse.data?.id };
      } catch (error) {
        console.error(`Failed to send email to ${subscriber.email}:`, error);
        return { email: subscriber.email, success: false, error: error.message };
      }
    });

    const results = await Promise.all(emailPromises);
    const successCount = results.filter(r => r.success).length;
    const failureCount = results.filter(r => !r.success).length;

    // Log the notification
    const { error: logError } = await supabase
      .from('content_notifications')
      .insert([{
        content_type: contentType,
        content_id: contentId,
        content_title: title
      }]);

    if (logError) {
      console.error('Error logging notification:', logError);
    }

    console.log(`Newsletter sent: ${successCount} success, ${failureCount} failures`);

    return new Response(JSON.stringify({
      message: `Newsletter sent successfully`,
      results: {
        total: subscribers.length,
        success: successCount,
        failures: failureCount
      },
      details: results
    }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });

  } catch (error: any) {
    console.error("Error in send-newsletter function:", error);
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