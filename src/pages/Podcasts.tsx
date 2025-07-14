
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, Download, Clock, Calendar, Headphones } from 'lucide-react';

const Podcasts = () => {
  const podcasts = [
    {
      id: 1,
      title: "KAKO Talk - L'actualité décryptée",
      description: "Chaque semaine, notre équipe décrypte l'actualité politique, sociale et culturelle avec des invités experts.",
      duration: "45 min",
      date: "2024-01-10",
      imageUrl: "/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png",
      audioUrl: "#",
      category: "Actualité"
    },
    {
      id: 2,
      title: "Musique & Culture",
      description: "Découverte de nouveaux artistes, interviews exclusives et analyse des tendances musicales actuelles.",
      duration: "35 min",
      date: "2024-01-08",
      imageUrl: "/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png",
      audioUrl: "#",
      category: "Culture"
    },
    {
      id: 3,
      title: "Jeunesse & Engagement",
      description: "Focus sur les initiatives de la jeunesse africaine et les projets d'engagement social.",
      duration: "40 min",
      date: "2024-01-05",
      imageUrl: "/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png",
      audioUrl: "#",
      category: "Société"
    },
    {
      id: 4,
      title: "Tech & Innovation",
      description: "L'actualité tech, les startups africaines et les innovations qui changent notre quotidien.",
      duration: "38 min",
      date: "2024-01-03",
      imageUrl: "/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png",
      audioUrl: "#",
      category: "Technologie"
    },
    {
      id: 5,
      title: "Sport & Performance",
      description: "Analyses sportives, interviews d'athlètes et couverture des événements majeurs.",
      duration: "42 min",
      date: "2024-01-01",
      imageUrl: "/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png",
      audioUrl: "#",
      category: "Sport"
    },
    {
      id: 6,
      title: "Économie & Business",
      description: "Décryptage de l'économie africaine, entrepreneuriat et opportunités d'affaires.",
      duration: "50 min",
      date: "2023-12-28",
      imageUrl: "/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png",
      audioUrl: "#",
      category: "Économie"
    }
  ];

  const categories = ["Tous", "Actualité", "Culture", "Société", "Technologie", "Sport", "Économie"];

  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Podcasts</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Écoutez et téléchargez nos podcasts sur l'actualité, la culture et la société
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
        <Card className="mb-8 gradient-kako-soft">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 flex-shrink-0">
                <img
                  src="/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png"
                  alt="Podcast Featured"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block bg-kako-yellow text-black px-3 py-1 rounded-full text-sm font-medium mb-4">
                  🔥 Épisode vedette
                </span>
                <h2 className="text-3xl font-bold mb-4">KAKO Talk - L'actualité décryptée</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Notre podcast phare qui décrypte l'actualité avec des experts et des analyses approfondies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button size="lg" className="gradient-kako text-white">
                    <Play className="h-5 w-5 mr-2" />
                    Écouter maintenant
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

        {/* Podcasts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {podcasts.map((podcast) => (
            <Card key={podcast.id} className="hover-lift">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-24 h-24 flex-shrink-0">
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
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                      {podcast.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {podcast.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{podcast.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(podcast.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 gradient-kako text-white">
                        <Play className="h-4 w-4 mr-1" />
                        Écouter
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

        {/* Subscribe Section */}
        <div className="text-center mt-16">
          <Card className="gradient-kako">
            <CardContent className="p-8">
              <Headphones className="h-16 w-16 mx-auto mb-6 text-white" />
              <h3 className="text-3xl font-bold text-white mb-4">
                Abonnez-vous à nos podcasts
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Ne manquez aucun épisode ! Abonnez-vous sur vos plateformes préférées.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  🎵 Spotify
                </Button>
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  🎧 Apple Podcasts
                </Button>
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  📻 Google Podcasts
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
