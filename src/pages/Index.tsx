
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, Eye, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WordPressPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

const Index = () => {
  const { data: articles, isLoading: articlesLoading } = useQuery({
    queryKey: ['articles', 'featured'],
    queryFn: async () => {
      const response = await fetch('https://kakofm.net/wp-json/wp/v2/posts?_embed&per_page=6');
      if (!response.ok) throw new Error('Erreur lors du chargement des articles');
      return response.json() as Promise<WordPressPost[]>;
    },
  });

  const stats = [
    { label: 'Auditeurs', value: '50K+', icon: Users },
    { label: 'Émissions', value: '25+', icon: Calendar },
    { label: 'Heures/jour', value: '24h', icon: Clock },
    { label: 'Pays', value: '12+', icon: Eye },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="gradient-kako min-h-[70vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center text-white">
              <div className="animate-slide-up">
                <img 
                  src="/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png" 
                  alt="KAKO FM" 
                  className="h-32 w-auto mx-auto mb-8"
                />
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  KAKO FM
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                  Radio & Télévision Kako - La voix de la jeunesse engagée
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3">
                    🎧 Écouter en direct
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3"
                    asChild
                  >
                    <Link to="/emissions">Découvrir nos émissions</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Stats */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white/95 backdrop-blur-sm hover-lift">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-kako-blue" />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Section */}
      <section className="pt-32 pb-16 bg-gradient-kako-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                🔴 À l'antenne maintenant
              </CardTitle>
              <p className="text-gray-600">Écoutez KAKO FM en direct</p>
            </CardHeader>
            <CardContent className="text-center py-8">
              <div className="bg-gradient-to-r from-kako-yellow to-kako-red p-6 rounded-2xl text-white mb-6">
                <h3 className="text-2xl font-bold mb-2">Émission du Matin</h3>
                <p className="opacity-90">Avec l'équipe KAKO FM</p>
                <div className="flex items-center justify-center space-x-4 mt-4 text-sm">
                  <span>🕐 06:00 - 10:00</span>
                  <span>•</span>
                  <span>📻 En direct</span>
                </div>
              </div>
              <Button size="lg" className="gradient-kako text-white hover:opacity-90">
                🎵 Écouter maintenant
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Derniers Articles</h2>
            <Button variant="outline" asChild>
              <Link to="/articles" className="flex items-center space-x-2">
                <span>Voir tous</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {articlesLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="hover-lift">
                  <div className="h-48 bg-gray-200 animate-pulse"></div>
                  <CardContent className="p-6">
                    <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles?.slice(0, 6).map((article) => (
                <Card key={article.id} className="hover-lift overflow-hidden">
                  {article._embedded?.['wp:featuredmedia']?.[0] && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={article._embedded['wp:featuredmedia'][0].source_url}
                        alt={article._embedded['wp:featuredmedia'][0].alt_text || article.title.rendered}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                      {article.title.rendered}
                    </h3>
                    <div 
                      className="text-gray-600 text-sm mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{ 
                        __html: article.excerpt.rendered.replace(/<[^>]*>/g, '') 
                      }}
                    />
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {new Date(article.date).toLocaleDateString('fr-FR')}
                      </span>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open('https://kakofm.net', '_blank')}
                      >
                        Lire plus
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-kako">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Rejoignez la communauté KAKO FM
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Découvrez nos émissions, podcasts et restez connecté avec nous
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
              <Link to="/soutenir">💛 Soutenir KAKO</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
              <Link to="/contact">📞 Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
