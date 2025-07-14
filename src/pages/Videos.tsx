import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Clock, Calendar, Eye, ExternalLink, Loader2 } from 'lucide-react';

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
  };
}

interface YouTubeResponse {
  items: YouTubeVideo[];
  nextPageToken?: string;
}

const Videos = () => {
  const navigate = useNavigate();

  const { data: videos, isLoading, error } = useQuery({
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
    <div className="min-h-screen pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Vidéos</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos dernières vidéos, reportages et émissions en replay
          </p>
        </div>

        {/* Videos Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2 text-muted-foreground">Chargement des vidéos...</span>
          </div>
        ) : error ? (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-destructive mb-4">Erreur lors du chargement des vidéos</p>
              <Button onClick={() => window.location.reload()}>
                Réessayer
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos?.items.map((video) => (
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
                      onClick={() => navigate(`/video/${video.id.videoId}`)}
                    >
                      <Play className="h-5 w-5 mr-2" />
                      Regarder
                    </Button>
                  </div>
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-black/70 rounded-full p-3 opacity-80">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-foreground">
                    {video.snippet.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {video.snippet.description}
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDuration(video.snippet.publishedAt)}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 gradient-kako text-white"
                      onClick={() => navigate(`/video/${video.id.videoId}`)}
                    >
                      <Play className="h-4 w-4 mr-1" />
                      Voir ici
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id.videoId}`, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="gradient-kako-soft">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Suivez-nous sur YouTube</h3>
              <p className="text-muted-foreground mb-6">
                Abonnez-vous à notre chaîne pour ne manquer aucune de nos vidéos
              </p>
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={() => window.open('https://www.youtube.com/channel/UCFG9Mr12mxqs82snzRXbjeg', '_blank')}
              >
                📺 S'abonner sur YouTube
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Videos;
