import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface WordPressPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  slug: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

const NewsletterTrigger = () => {
  // Check for new articles every 5 minutes
  const { data: latestArticles } = useQuery({
    queryKey: ['latest-articles-newsletter'],
    queryFn: async () => {
      const response = await fetch('https://kakofm.net/wp-json/wp/v2/posts?_embed&per_page=5&orderby=date&order=desc');
      if (!response.ok) throw new Error('Failed to fetch articles');
      return response.json() as Promise<WordPressPost[]>;
    },
    refetchInterval: 5 * 60 * 1000, // 5 minutes
  });

  useEffect(() => {
    const checkAndTriggerNewsletters = async () => {
      if (!latestArticles || latestArticles.length === 0) return;

      for (const article of latestArticles) {
        // Check if we already sent a newsletter for this article
        const { data: existingNotification } = await supabase
          .from('content_notifications')
          .select('id')
          .eq('content_id', article.id.toString())
          .eq('content_type', 'article')
          .single();

        if (!existingNotification) {
          // Article is new, trigger newsletter
          const articleDate = new Date(article.date);
          const now = new Date();
          const hoursDiff = (now.getTime() - articleDate.getTime()) / (1000 * 60 * 60);

          // Only trigger for articles published in the last 2 hours
          if (hoursDiff <= 2) {
            console.log('Triggering newsletter for new article:', article.title.rendered);
            
            try {
              const { error } = await supabase.functions.invoke('trigger-newsletter', {
                body: {
                  trigger: 'article',
                  data: {
                    id: article.id.toString(),
                    title: article.title.rendered,
                    brief: article.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 200),
                    imageUrl: article._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
                  },
                },
              });

              if (error) {
                console.error('Error triggering newsletter:', error);
              }
            } catch (error) {
              console.error('Failed to trigger newsletter:', error);
            }
          }
        }
      }
    };

    checkAndTriggerNewsletters();
  }, [latestArticles]);

  return null; // This component doesn't render anything
};

export default NewsletterTrigger;