import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ThumbsUp, 
  ThumbsDown, 
  Share2, 
  Download, 
  Flag, 
  MoreHorizontal,
  Calendar,
  Eye,
  ArrowLeft
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const VideoPlayer = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Pause radio when video starts
  useEffect(() => {
    const handleVideoPlay = () => {
      const audioPlayer = document.querySelector('audio');
      if (audioPlayer && !audioPlayer.paused) {
        audioPlayer.pause();
      }
    };

    const videoIframe = document.querySelector('iframe');
    if (videoIframe) {
      // Listen for video play events
      videoIframe.addEventListener('load', handleVideoPlay);
      return () => videoIframe.removeEventListener('load', handleVideoPlay);
    }
  }, [videoId]);

  const { data: videoData, isLoading } = useQuery({
    queryKey: ['video-details', videoId],
    queryFn: async () => {
      const API_KEY = 'AIzaSyAm1eWQTfpnRIPKIPw4HTZDOgWuciITktI';
      const url = `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoId}&part=snippet,statistics`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('Erreur lors du chargement de la vidéo');
      return response.json();
    },
    enabled: !!videoId,
  });

  // Fetch related videos from KAKO FM channel
  const { data: relatedVideos } = useQuery({
    queryKey: ['related-videos'],
    queryFn: async () => {
      const API_KEY = 'AIzaSyAm1eWQTfpnRIPKIPw4HTZDOgWuciITktI';
      const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=UCFG9Mr12mxqs82snzRXbjeg&part=snippet,id&order=date&type=video&maxResults=12`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('Erreur lors du chargement des vidéos');
      return response.json();
    },
  });

  // Fetch articles for sidebar
  const { data: articles } = useQuery({
    queryKey: ['sidebar-articles'],
    queryFn: async () => {
      const url = 'https://kakofm.net/wp-json/wp/v2/posts?_embed&per_page=5';
      const response = await fetch(url);
      if (!response.ok) throw new Error('Erreur lors du chargement des articles');
      return response.json();
    },
  });

  const video = videoData?.items?.[0];

  const formatNumber = (num: string | number) => {
    const number = typeof num === 'string' ? parseInt(num) : num;
    if (number >= 1000000) {
      return `${(number / 1000000).toFixed(1)}M`;
    } else if (number >= 1000) {
      return `${(number / 1000).toFixed(1)}K`;
    }
    return number?.toString() || '0';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'il y a 1 jour';
    if (diffDays < 7) return `il y a ${diffDays} jours`;
    if (diffDays < 30) return `il y a ${Math.ceil(diffDays / 7)} semaines`;
    return `il y a ${Math.ceil(diffDays / 30)} mois`;
  };

  const handleShare = () => {
    const videoUrl = `https://kakofm.net/video/${videoId}`;
    navigator.clipboard.writeText(videoUrl);
    toast({
      title: "Lien copié !",
      description: "Le lien de la vidéo a été copié dans le presse-papiers",
    });
  };

  const handleLike = () => {
    setLiked(!liked);
    if (disliked) setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked(!disliked);
    if (liked) setLiked(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-8 pb-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-kako-blue mx-auto mb-4"></div>
          <p>Chargement de la vidéo...</p>
        </div>
      </div>
    );
  }

  if (!video) {
    return (
      <div className="min-h-screen pt-8 pb-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Vidéo non trouvée</h1>
          <Button onClick={() => navigate('/videos')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux vidéos
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-4 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Video Player Section */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Video Title */}
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight">
              {video.snippet.title}
            </h1>

            {/* Video Stats and Actions */}
            <div className="flex flex-col space-y-4 mb-6">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>{formatNumber(video.statistics.viewCount)} vues</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(video.snippet.publishedAt)}</span>
                </div>
              </div>

              {/* Actions - Responsive Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                <Button
                  variant={liked ? "default" : "outline"}
                  size="sm"
                  onClick={handleLike}
                  className="flex items-center justify-center space-x-1 text-xs"
                >
                  <ThumbsUp className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
                  <span className="hidden sm:inline">{formatNumber(video.statistics.likeCount)}</span>
                </Button>

                <Button
                  variant={disliked ? "default" : "outline"}
                  size="sm"
                  onClick={handleDislike}
                  className="flex items-center justify-center"
                >
                  <ThumbsDown className={`h-4 w-4 ${disliked ? 'fill-current' : ''}`} />
                </Button>

                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleShare}
                  className="flex items-center justify-center space-x-1 text-xs"
                >
                  <Share2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Partager</span>
                </Button>

                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center justify-center space-x-1 text-xs"
                >
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Télécharger</span>
                </Button>

                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center justify-center"
                >
                  <Flag className="h-4 w-4" />
                </Button>

                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center justify-center"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Channel Info and Description */}
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-kako-yellow to-kako-red rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm md:text-lg">K</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                      <h3 className="font-semibold text-gray-900">KAKO FM</h3>
                      <Button size="sm" className="gradient-kako text-white self-start">
                        S'abonner
                      </Button>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      La voix de la jeunesse engagée
                    </p>
                    
                    <div className="text-sm text-gray-700">
                      <p className={showFullDescription ? '' : 'line-clamp-3'}>
                        {video.snippet.description || 'Aucune description disponible.'}
                      </p>
                      {video.snippet.description && video.snippet.description.length > 200 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowFullDescription(!showFullDescription)}
                          className="mt-2 p-0 h-auto text-gray-600 hover:text-gray-900"
                        >
                          {showFullDescription ? 'Afficher moins' : 'Afficher plus'}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comments Section */}
            <Card className="mt-6">
              <CardContent className="p-4 md:p-6">
                <h3 className="font-semibold text-lg mb-4">
                  {formatNumber(video.statistics.commentCount)} commentaires
                </h3>
                <div className="text-center py-8 text-gray-500">
                  <p>Les commentaires seront bientôt disponibles.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Articles */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card>
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-semibold text-lg mb-4">Articles récents</h3>
                {articles && articles.length > 0 ? (
                  <div className="space-y-4">
                    {articles.map((article: any) => (
                      <div key={article.id} className="flex space-x-3 hover:bg-gray-50 p-2 rounded-lg cursor-pointer transition-colors">
                        {article._embedded?.['wp:featuredmedia']?.[0] && (
                          <img
                            src={article._embedded['wp:featuredmedia'][0].source_url}
                            alt={article.title.rendered}
                            className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm line-clamp-2 mb-1">
                            {article.title.rendered}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {new Date(article.date).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <p>Chargement des articles...</p>
                  </div>
                )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Related Videos Section */}
        <div className="mt-8 lg:mt-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Autres vidéos de KAKO FM</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {relatedVideos?.items?.filter((item: any) => item.id.videoId !== videoId).map((item: any) => (
              <Card key={item.id.videoId} className="hover-lift cursor-pointer" onClick={() => navigate(`/video/${item.id.videoId}`)}>
                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                  <img
                    src={item.snippet.thumbnails.medium.url}
                    alt={item.snippet.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-3 md:p-4">
                  <h4 className="font-semibold text-sm line-clamp-2 mb-2">
                    {item.snippet.title}
                  </h4>
                  <p className="text-xs text-gray-600 mb-1">KAKO FM</p>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span>{formatDate(item.snippet.publishedAt)}</span>
                  </div>
                </CardContent>
              </Card>
            )) || 
            // Fallback if no videos
            [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Card key={item} className="hover-lift cursor-pointer">
                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-kako-blue to-kako-yellow opacity-20"></div>
                </div>
                <CardContent className="p-3 md:p-4">
                  <h4 className="font-semibold text-sm line-clamp-2 mb-2">
                    Chargement des vidéos...
                  </h4>
                  <p className="text-xs text-gray-600 mb-1">KAKO FM</p>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span>Récent</span>
                  </div>
                </CardContent>
              </Card>
            ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
