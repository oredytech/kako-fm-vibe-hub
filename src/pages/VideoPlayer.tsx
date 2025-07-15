
import React, { useState } from 'react';
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
      <div className="min-h-screen pt-20 pb-8 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-kako-blue mx-auto mb-4"></div>
          <p>Chargement de la vidéo...</p>
        </div>
      </div>
    );
  }

  if (!video) {
    return (
      <div className="min-h-screen pt-20 pb-8 flex items-center justify-center">
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
    <div className="min-h-screen pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
              {video.snippet.title}
            </h1>

            {/* Video Stats and Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 space-y-4 md:space-y-0">
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

              <div className="flex items-center space-x-2">
                <Button
                  variant={liked ? "default" : "outline"}
                  size="sm"
                  onClick={handleLike}
                  className="flex items-center space-x-2"
                >
                  <ThumbsUp className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
                  <span>{formatNumber(video.statistics.likeCount)}</span>
                </Button>

                <Button
                  variant={disliked ? "default" : "outline"}
                  size="sm"
                  onClick={handleDislike}
                >
                  <ThumbsDown className={`h-4 w-4 ${disliked ? 'fill-current' : ''}`} />
                </Button>

                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Partager
                </Button>

                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger
                </Button>

                <Button variant="outline" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Channel Info and Description */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-kako-yellow to-kako-red rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">K</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">KAKO FM</h3>
                      <Button size="sm" className="gradient-kako text-white">
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
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">
                  {formatNumber(video.statistics.commentCount)} commentaires
                </h3>
                <div className="text-center py-8 text-gray-500">
                  <p>Les commentaires seront bientôt disponibles.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Related Videos */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Vidéos suggérées</h3>
                <div className="text-center py-8 text-gray-500">
                  <p>Suggestions bientôt disponibles.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
