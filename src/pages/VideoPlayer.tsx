
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ThumbsUp, 
  ThumbsDown, 
  Share2, 
  Download, 
  MoreHorizontal,
  ArrowLeft,
  Eye,
  Calendar,
  Bell,
  BellRing
} from 'lucide-react';

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
      high: {
        url: string;
      };
    };
    channelTitle: string;
  };
}

interface YouTubeResponse {
  items: YouTubeVideo[];
}

const VideoPlayer = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const navigate = useNavigate();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Simuler des données de statistiques
  const mockStats = {
    views: Math.floor(Math.random() * 100000) + 1000,
    likes: Math.floor(Math.random() * 10000) + 100,
    dislikes: Math.floor(Math.random() * 500) + 10,
    subscribers: "15,2K"
  };

  const { data: videos } = useQuery({
    queryKey: ['youtube-videos'],
    queryFn: async () => {
      const API_KEY = 'AIzaSyAm1eWQTfpnRIPKIPw4HTZDOgWuciITktI';
      const CHANNEL_ID = 'UCFG9Mr12mxqs82snzRXbjeg';
      const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&type=video&maxResults=20`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('Erreur lors du chargement des vidéos');
      return response.json() as Promise<YouTubeResponse>;
    },
  });

  // Trouver la vidéo actuelle
  const currentVideo = videos?.items.find(video => video.id.videoId === videoId);
  const relatedVideos = videos?.items.filter(video => video.id.videoId !== videoId).slice(0, 10);

  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`;
    }
    return views.toString();
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
    const shareUrl = `https://kakofm.net/video/${videoId}`;
    if (navigator.share) {
      navigator.share({
        title: currentVideo?.snippet.title || 'Vidéo KAKO FM',
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      // Ici vous pourriez ajouter un toast pour confirmer la copie
    }
  };

  const handleLike = () => {
    if (disliked) setDisliked(false);
    setLiked(!liked);
  };

  const handleDislike = () => {
    if (liked) setLiked(false);
    setDisliked(!disliked);
  };

  if (!currentVideo) {
    return (
      <div className="min-h-screen pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Vidéo non trouvée</h1>
            <Button onClick={() => navigate('/videos')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux vidéos
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-8 bg-background">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Video Content */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={currentVideo.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Title */}
            <h1 className="text-xl font-bold mb-3 text-foreground">
              {currentVideo.snippet.title}
            </h1>

            {/* Video Stats and Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>{formatViews(mockStats.views)} vues</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(currentVideo.snippet.publishedAt)}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant={liked ? "default" : "outline"}
                  size="sm"
                  onClick={handleLike}
                  className={liked ? "bg-primary text-primary-foreground" : ""}
                >
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  {formatViews(mockStats.likes)}
                </Button>
                
                <Button
                  variant={disliked ? "default" : "outline"}
                  size="sm"
                  onClick={handleDislike}
                  className={disliked ? "bg-destructive text-destructive-foreground" : ""}
                >
                  <ThumbsDown className="h-4 w-4 mr-1" />
                  {formatViews(mockStats.dislikes)}
                </Button>

                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-1" />
                  Partager
                </Button>

                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  Télécharger
                </Button>

                <Button variant="outline" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Channel Info */}
            <Card className="mb-4">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-kako rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">KF</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">KAKO FM</h3>
                      <p className="text-sm text-muted-foreground">{mockStats.subscribers} abonnés</p>
                    </div>
                  </div>
                  <Button
                    variant={isSubscribed ? "outline" : "default"}
                    size="sm"
                    onClick={() => setIsSubscribed(!isSubscribed)}
                    className={isSubscribed ? "" : "bg-red-600 hover:bg-red-700 text-white"}
                  >
                    {isSubscribed ? (
                      <>
                        <BellRing className="h-4 w-4 mr-1" />
                        Abonné
                      </>
                    ) : (
                      <>
                        <Bell className="h-4 w-4 mr-1" />
                        S'abonner
                      </>
                    )}
                  </Button>
                </div>

                {/* Description */}
                <div className="mt-4">
                  <div className={`text-sm text-foreground ${showFullDescription ? '' : 'line-clamp-3'}`}>
                    {currentVideo.snippet.description || 'Aucune description disponible.'}
                  </div>
                  {currentVideo.snippet.description && currentVideo.snippet.description.length > 150 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowFullDescription(!showFullDescription)}
                      className="mt-2 p-0 h-auto text-primary hover:bg-transparent"
                    >
                      {showFullDescription ? 'Afficher moins' : 'Afficher plus'}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Related Videos */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-foreground">Vidéos suggérées</h3>
            <div className="space-y-3">
              {relatedVideos?.map((video) => (
                <Card
                  key={video.id.videoId}
                  className="cursor-pointer hover:bg-accent transition-colors"
                  onClick={() => navigate(`/video/${video.id.videoId}`)}
                >
                  <CardContent className="p-3">
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0">
                        <img
                          src={video.snippet.thumbnails.medium.url}
                          alt={video.snippet.title}
                          className="w-40 h-24 object-cover rounded"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm line-clamp-2 mb-1 text-foreground">
                          {video.snippet.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-1">KAKO FM</p>
                        <p className="text-xs text-muted-foreground">
                          {formatDate(video.snippet.publishedAt)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
