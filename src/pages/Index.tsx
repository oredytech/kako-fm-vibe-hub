
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock, Eye, Users, Play, ExternalLink, Download, Headphones, Phone, Mail, MapPin } from 'lucide-react';
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

interface YouTubeVideo {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
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

  const { data: videos, isLoading: videosLoading } = useQuery({
    queryKey: ['youtube-videos-home'],
    queryFn: async () => {
      const API_KEY = 'AIzaSyAm1eWQTfpnRIPKIPw4HTZDOgWuciITktI';
      const CHANNEL_ID = 'UCFG9Mr12mxqs82snzRXbjeg';
      const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&type=video&maxResults=3`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('Erreur lors du chargement des vidéos');
      const data = await response.json();
      return data.items as YouTubeVideo[];
    },
  });

  const podcasts = [
    {
      id: 1,
      title: "KAKO Talk - L'actualité décryptée",
      description: "Chaque semaine, notre équipe décrypte l'actualité politique, sociale et culturelle.",
      duration: "45 min",
      date: "2024-01-10",
      imageUrl: "/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png",
      category: "Actualité"
    },
    {
      id: 2,
      title: "Musique & Culture",
      description: "Découverte de nouveaux artistes et analyse des tendances musicales.",
      duration: "35 min",
      date: "2024-01-08",
      imageUrl: "/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png",
      category: "Culture"
    },
    {
      id: 3,
      title: "Jeunesse & Engagement",
      description: "Focus sur les initiatives de la jeunesse africaine.",
      duration: "40 min",
      date: "2024-01-05",
      imageUrl: "/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png",
      category: "Société"
    }
  ];

  const formatDuration = (publishedAt: string) => {
    const date = new Date(publishedAt);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Hier';
    if (diffDays < 7) return `Il y a ${diffDays} jours`;
    if (diffDays < 30) return `Il y a ${Math.ceil(diffDays / 7)} semaines`;
    return `Il y a ${Math.ceil(diffDays / 30)} mois`;
  };

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
                    <Link to="/programmes">Voir le Programme</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Section */}
      <section className="pt-16 pb-16 bg-gradient-kako-soft">
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

      {/* Latest Videos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Dernières Vidéos</h2>
            <Button variant="outline" asChild>
              <Link to="/videos" className="flex items-center space-x-2">
                <span>Voir toutes</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {videosLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videos?.map((video) => (
                <Card key={video.id.videoId} className="hover-lift overflow-hidden">
                  <div className="relative group">
                    <img
                      src={video.snippet.thumbnails.medium.url}
                      alt={video.snippet.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        size="lg"
                        className="bg-white/90 text-gray-900 hover:bg-white"
                        onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id.videoId}`, '_blank')}
                      >
                        <Play className="h-5 w-5 mr-2" />
                        Regarder
                      </Button>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-black/70 rounded-full p-3 opacity-80">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                      {video.snippet.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {video.snippet.description}
                    </p>
                    
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDuration(video.snippet.publishedAt)}</span>
                      </div>
                    </div>
                    
                    <Button
                      size="sm"
                      className="w-full gradient-kako text-white"
                      onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id.videoId}`, '_blank')}
                    >
                      <Play className="h-4 w-4 mr-1" />
                      Regarder
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Latest Podcasts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Derniers Podcasts</h2>
            <Button variant="outline" asChild>
              <Link to="/podcasts" className="flex items-center space-x-2">
                <span>Voir tous</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {podcasts.map((podcast) => (
              <Card key={podcast.id} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex gap-4 mb-4">
                    <div className="w-20 h-20 flex-shrink-0">
                      <img
                        src={podcast.imageUrl}
                        alt={podcast.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-kako-blue/10 text-kako-blue px-2 py-1 rounded-full text-xs font-medium">
                          {podcast.category}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg mb-1 line-clamp-1">
                        {podcast.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{podcast.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(podcast.date).toLocaleDateString('fr-FR')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {podcast.description}
                  </p>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 gradient-kako text-white">
                      <Play className="h-4 w-4 mr-1" />
                      Écouter
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png" 
                  alt="KAKO FM" 
                  className="h-12 w-auto"
                />
                <div>
                  <h3 className="text-xl font-bold">KAKO FM</h3>
                  <p className="text-gray-400 text-sm">La voix de la jeunesse engagée</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Radio & Télévision Kako - Votre média de référence pour l'actualité, 
                la culture et l'engagement social en République Démocratique du Congo.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" className="gradient-kako text-white">
                  <Headphones className="h-4 w-4 mr-2" />
                  Écouter en direct
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
              <ul className="space-y-2">
                <li><Link to="/articles" className="text-gray-300 hover:text-white transition-colors">Articles</Link></li>
                <li><Link to="/videos" className="text-gray-300 hover:text-white transition-colors">Vidéos</Link></li>
                <li><Link to="/podcasts" className="text-gray-300 hover:text-white transition-colors">Podcasts</Link></li>
                <li><Link to="/programmes" className="text-gray-300 hover:text-white transition-colors">Programmes</Link></li>
                <li><Link to="/equipe" className="text-gray-300 hover:text-white transition-colors">Notre équipe</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-kako-yellow" />
                  <div>
                    <p className="text-sm text-gray-300">Direction</p>
                    <p className="text-white">+243 996 886 079</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-kako-yellow" />
                  <div>
                    <p className="text-sm text-gray-300">Antenne</p>
                    <p className="text-white">À venir</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-kako-yellow" />
                  <div>
                    <p className="text-sm text-gray-300">Email</p>
                    <p className="text-white">contact@kakofm.net</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 KAKO FM. Tous droits réservés.
              </p>
              <p className="text-gray-400 text-sm mt-2 md:mt-0">
                Fièrement conçu par{' '}
                <a 
                  href="https://oredytech.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-kako-yellow hover:text-white transition-colors font-medium"
                >
                  Oredy TECHNOLOGIES
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
