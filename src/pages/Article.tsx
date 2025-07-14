
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, Share2, Facebook, Twitter, MessageCircle, Copy, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WordPressPost {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  slug: string;
  author: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    author?: Array<{
      name: string;
    }>;
  };
}

const Article = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: article, isLoading, error } = useQuery({
    queryKey: ['article', slug],
    queryFn: async () => {
      const response = await fetch(`https://kakofm.net/wp-json/wp/v2/posts?slug=${slug}&_embed`);
      if (!response.ok) throw new Error('Article non trouvé');
      const data = await response.json();
      if (data.length === 0) throw new Error('Article non trouvé');
      return data[0] as WordPressPost;
    },
    enabled: !!slug,
  });

  const shareUrl = `https://kakofm.net/article/${slug}`;
  const shareTitle = article?.title.rendered || 'Article KAKO FM';

  const handleShare = (platform: string) => {
    let url = '';
    
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
        break;
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(`${shareTitle} ${shareUrl}`)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        return;
    }
    
    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4"></div>
            <div className="h-64 bg-gray-200 rounded mb-6"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen pt-20 pb-8 flex items-center justify-center">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
            <p className="text-gray-600 mb-6">L'article que vous recherchez n'existe pas ou a été supprimé.</p>
            <Button asChild>
              <Link to="/articles" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Retour aux articles</span>
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <Link to="/articles" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Retour aux articles</span>
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            dangerouslySetInnerHTML={{ __html: article.title.rendered }}
          />
          
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(article.date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            {article._embedded?.author?.[0] && (
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Par {article._embedded.author[0].name}</span>
              </div>
            )}
          </div>

          {/* Featured Image */}
          {article._embedded?.['wp:featuredmedia']?.[0] && (
            <div className="mb-8">
              <img
                src={article._embedded['wp:featuredmedia'][0].source_url}
                alt={article._embedded['wp:featuredmedia'][0].alt_text || article.title.rendered}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Share Buttons */}
          <Card className="mb-8">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Share2 className="h-5 w-5 text-gray-600" />
                  <span className="font-medium text-gray-900">Partager cet article :</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleShare('facebook')}
                    className="flex items-center space-x-1"
                  >
                    <Facebook className="h-4 w-4" />
                    <span className="hidden sm:inline">Facebook</span>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleShare('twitter')}
                    className="flex items-center space-x-1"
                  >
                    <Twitter className="h-4 w-4" />
                    <span className="hidden sm:inline">Twitter</span>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleShare('whatsapp')}
                    className="flex items-center space-x-1"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span className="hidden sm:inline">WhatsApp</span>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleShare('copy')}
                    className="flex items-center space-x-1"
                  >
                    <Copy className="h-4 w-4" />
                    <span className="hidden sm:inline">Copier</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div 
            className="text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content.rendered }}
          />
        </article>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-sm text-gray-600">
              Publié le {new Date(article.date).toLocaleDateString('fr-FR')} par KAKO FM
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Partager :</span>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleShare('facebook')}
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleShare('twitter')}
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleShare('whatsapp')}
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </footer>

        {/* Call to Action */}
        <Card className="mt-12 gradient-kako text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Restez connecté avec KAKO FM</h3>
            <p className="mb-6 opacity-90">
              Découvrez nos derniers articles, émissions et contenus exclusifs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
                <Link to="/articles">Plus d'articles</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
                <Link to="/">🎧 Écouter en direct</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Article;
