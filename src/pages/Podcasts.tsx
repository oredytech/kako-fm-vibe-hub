import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, Download, Clock, Calendar, Headphones, Loader2, Volume2 } from 'lucide-react';

interface YouTubePlaylistVideo {
  id: string;
  snippet: {
    title: string;
    description: string;
    publishedAt: string;
    thumbnails: {
      medium: { url: string; };
      high: { url: string; };
    };
    resourceId: {
      videoId: string;
    };
  };
}

interface YouTubePlaylistResponse {
  items: YouTubePlaylistVideo[];
  nextPageToken?: string;
}

const Podcasts = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);
  
  // Playlist ID extraite de l'URL fournie
  const PLAYLIST_ID = 'PLWnyICqDse5L9TnSuvTZE3H7osHIK2qtU';

  const { data: playlistVideos, isLoading, error } = useQuery({
    queryKey: ['youtube-playlist', PLAYLIST_ID],
    queryFn: async () => {
      const API_KEY = 'AIzaSyAm1eWQTfpnRIPKIPw4HTZDOgWuciITktI';
      const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=${PLAYLIST_ID}&part=snippet&maxResults=50`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('Erreur lors du chargement de la playlist');
      return response.json() as Promise<YouTubePlaylistResponse>;
    },
  });

  const handlePlayPause = (videoId: string) => {
    if (currentlyPlaying === videoId) {
      // Pause current audio
      if (audioElement) {
        audioElement.pause();
      }
      setCurrentlyPlaying(null);
    } else {
      // Stop any currently playing audio
      if (audioElement) {
        audioElement.pause();
      }
      
      // Create new audio element for the video
      // Note: This approach uses a workaround to extract audio from YouTube
      // In a production environment, you'd want to use official APIs or have server-side processing
      const audio = new Audio();
      
      // Using a proxy service to extract audio (this would need to be implemented server-side)
      // For now, we'll simulate with a placeholder
      audio.src = `https://www.youtube.com/watch?v=${videoId}`;
      
      audio.addEventListener('ended', () => {
        setCurrentlyPlaying(null);
        setAudioElement(null);
      });
      
      audio.addEventListener('error', () => {
        console.error('Erreur de lecture audio');
        setCurrentlyPlaying(null);
        setAudioElement(null);
      });
      
      // In a real implementation, you'd extract audio URL here
      setCurrentlyPlaying(videoId);
      setAudioElement(audio);
      
      // For demo purposes, we'll just show the playing state
      // audio.play();
    }
  };

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

  const categories = ["Tous", "Actualité", "Culture", "Société", "Technologie", "Sport", "Économie"];

  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Podcasts</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Écoutez nos podcasts audio extraits de nos émissions YouTube
          </p>
        </div>

        {/* Categories Filter */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "Tous" ? "default" : "outline"}
                  size="sm"
                  className={category === "Tous" ? "gradient-kako text-white" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Featured Podcast */}
        {playlistVideos?.items?.[0] && (
          <Card className="mb-8 gradient-kako-soft">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-48 h-48 flex-shrink-0">
                  <img
                    src={playlistVideos.items[0].snippet.thumbnails.medium.url}
                    alt="Podcast Featured"
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                    🔥 Épisode vedette
                  </span>
                  <h2 className="text-3xl font-bold mb-4 line-clamp-2">{playlistVideos.items[0].snippet.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6 line-clamp-3">
                    {playlistVideos.items[0].snippet.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button 
                      size="lg" 
                      className="gradient-kako text-white"
                      onClick={() => handlePlayPause(playlistVideos.items[0].snippet.resourceId.videoId)}
                    >
                      {currentlyPlaying === playlistVideos.items[0].snippet.resourceId.videoId ? (
                        <><Pause className="h-5 w-5 mr-2" />En cours...</>
                      ) : (
                        <><Play className="h-5 w-5 mr-2" />Écouter maintenant</>
                      )}
                    </Button>
                    <Button size="lg" variant="outline">
                      <Download className="h-5 w-5 mr-2" />
                      Télécharger
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Podcasts Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2 text-muted-foreground">Chargement des podcasts...</span>
          </div>
        ) : error ? (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-destructive mb-4">Erreur lors du chargement des podcasts</p>
              <Button onClick={() => window.location.reload()}>
                Réessayer
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {playlistVideos?.items.slice(1).map((video) => (
              <Card key={video.id} className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 flex-shrink-0 relative">
                      <img
                        src={video.snippet.thumbnails.medium.url}
                        alt={video.snippet.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      {currentlyPlaying === video.snippet.resourceId.videoId && (
                        <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                          <Volume2 className="h-6 w-6 text-white animate-pulse" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                        {video.snippet.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {video.snippet.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDuration(video.snippet.publishedAt)}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="flex-1 gradient-kako text-white"
                          onClick={() => handlePlayPause(video.snippet.resourceId.videoId)}
                        >
                          {currentlyPlaying === video.snippet.resourceId.videoId ? (
                            <><Pause className="h-4 w-4 mr-1" />En cours</>
                          ) : (
                            <><Play className="h-4 w-4 mr-1" />Écouter</>
                          )}
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Subscribe Section */}
        <div className="text-center mt-16">
          <Card className="gradient-kako">
            <CardContent className="p-8">
              <Headphones className="h-16 w-16 mx-auto mb-6 text-white" />
              <h3 className="text-3xl font-bold text-white mb-4">
                Suivez nos podcasts
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Découvrez nos émissions en format audio, idéal pour écouter en déplacement !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-gray-900 hover:bg-gray-100"
                  onClick={() => window.open(`https://youtube.com/playlist?list=${PLAYLIST_ID}`, '_blank')}
                >
                  📺 Voir sur YouTube
                </Button>
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  🎧 Mode Audio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Podcasts;