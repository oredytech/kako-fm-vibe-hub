
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Calendar, Users, Radio, Play, Star } from 'lucide-react';

const Programmes = () => {
  const schedule = [
    {
      day: "Lundi",
      shows: [
        { time: "06:00-10:00", title: "Réveil KAKO", host: "Équipe Matinale", type: "Actualité & Musique" },
        { time: "10:00-14:00", title: "KAKO Midi", host: "Sarah & Alex", type: "Talk & Hits" },
        { time: "14:00-18:00", title: "Après-Midi Kako", host: "DJ Mike", type: "Musique & Divertissement" },
        { time: "18:00-22:00", title: "KAKO Evening", host: "Lisa Morgan", type: "Culture & Société" },
        { time: "22:00-06:00", title: "Nuit KAKO", host: "Programmation Auto", type: "Musique Continue" }
      ]
    },
    {
      day: "Mardi",
      shows: [
        { time: "06:00-10:00", title: "Réveil KAKO", host: "Équipe Matinale", type: "Actualité & Musique" },
        { time: "10:00-14:00", title: "KAKO Business", host: "Jean-Paul Akono", type: "Économie & Entrepreneuriat" },
        { time: "14:00-18:00", title: "Jeunesse Active", host: "Marie & David", type: "Engagement Social" },
        { time: "18:00-22:00", title: "Tech Talk", host: "Kevin Tech", type: "Technologie & Innovation" },
        { time: "22:00-06:00", title: "Nuit KAKO", host: "Programmation Auto", type: "Musique Continue" }
      ]
    },
    {
      day: "Mercredi",
      shows: [
        { time: "06:00-10:00", title: "Réveil KAKO", host: "Équipe Matinale", type: "Actualité & Musique" },
        { time: "10:00-14:00", title: "Culture Mix", host: "Aminata Sow", type: "Arts & Culture" },
        { time: "14:00-18:00", title: "Sport Passion", host: "Coach Bruno", type: "Sport & Bien-être" },
        { time: "18:00-22:00", title: "KAKO Talk", host: "Panel d'experts", type: "Débats & Analyses" },
        { time: "22:00-06:00", title: "Nuit KAKO", host: "Programmation Auto", type: "Musique Continue" }
      ]
    },
    {
      day: "Jeudi",
      shows: [
        { time: "06:00-10:00", title: "Réveil KAKO", host: "Équipe Matinale", type: "Actualité & Musique" },
        { time: "10:00-14:00", title: "Femmes Leaders", host: "Dr. Fatou Diop", type: "Leadership Féminin" },
        { time: "14:00-18:00", title: "Découverte Musicale", host: "DJ Cosmos", type: "Nouveautés & Talents" },
        { time: "18:00-22:00", title: "Santé & Vie", host: "Dr. Mamadou Fall", type: "Santé & Bien-être" },
        { time: "22:00-06:00", title: "Nuit KAKO", host: "Programmation Auto", type: "Musique Continue" }
      ]
    },
    {
      day: "Vendredi",
      shows: [
        { time: "06:00-10:00", title: "Réveil KAKO", host: "Équipe Matinale", type: "Actualité & Musique" },
        { time: "10:00-14:00", title: "KAKO Education", host: "Prof. Moussa Kane", type: "Éducation & Formation" },
        { time: "14:00-18:00", title: "Weekend Preview", host: "Équipe Animation", type: "Divertissement" },
        { time: "18:00-22:00", title: "Afro Beats", host: "DJ AfroKing", type: "Musiques Africaines" },
        { time: "22:00-06:00", title: "Night Vibes", host: "DJ Luna", type: "Musique & Ambiance" }
      ]
    },
    {
      day: "Samedi",
      shows: [
        { time: "08:00-12:00", title: "Saturday Morning", host: "Équipe Weekend", type: "Musique & Fun" },
        { time: "12:00-16:00", title: "KAKO Sports", host: "Team Sports", type: "Sport & Analyses" },
        { time: "16:00-20:00", title: "Afro Culture", host: "Maître Griot", type: "Culture Traditionnelle" },
        { time: "20:00-00:00", title: "Saturday Night Live", host: "DJ Party", type: "Soirée Musicale" },
        { time: "00:00-08:00", title: "Night Mix", host: "Programmation Auto", type: "Musique Continue" }
      ]
    },
    {
      day: "Dimanche",
      shows: [
        { time: "08:00-12:00", title: "Dimanche Spirituel", host: "Pasteur Jean", type: "Spiritualité & Paix" },
        { time: "12:00-16:00", title: "Famille & Tradition", host: "Maman Aicha", type: "Famille & Valeurs" },
        { time: "16:00-20:00", title: "Détente Dominicale", host: "Équipe Relax", type: "Musique Douce" },
        { time: "20:00-00:00", title: "Sunday Sessions", host: "DJ Smooth", type: "Jazz & Soul" },
        { time: "00:00-08:00", title: "Nuit Tranquille", host: "Programmation Auto", type: "Musique Continue" }
      ]
    }
  ];

  const featuredShows = [
    {
      title: "KAKO Talk",
      description: "Notre émission phare qui décrypte l'actualité avec des experts",
      host: "Panel d'experts",
      time: "Mercredi 18:00-22:00",
      image: "/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png",
      featured: true
    },
    {
      title: "Réveil KAKO",
      description: "Commencez votre journée avec l'actualité et la bonne humeur",
      host: "Équipe Matinale",
      time: "Lundi-Vendredi 06:00-10:00",
      image: "/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png",
      featured: true
    },
    {
      title: "Afro Beats",
      description: "Les meilleurs sons africains avec DJ AfroKing",
      host: "DJ AfroKing",
      time: "Vendredi 18:00-22:00",
      image: "/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png",
      featured: true
    }
  ];

  const getCurrentShow = () => {
    const now = new Date();
    const currentDay = now.toLocaleString('fr-FR', { weekday: 'long' });
    const currentTime = now.getHours() * 100 + now.getMinutes();
    
    const todaySchedule = schedule.find(day => 
      day.day.toLowerCase() === currentDay.toLowerCase()
    );
    
    if (todaySchedule) {
      const currentShow = todaySchedule.shows.find(show => {
        const [startTime, endTime] = show.time.split('-');
        const start = parseInt(startTime.replace(':', ''));
        const end = parseInt(endTime.replace(':', ''));
        
        if (end < start) { // Show crosses midnight
          return currentTime >= start || currentTime <= end;
        }
        return currentTime >= start && currentTime <= end;
      });
      
      return currentShow || todaySchedule.shows[0];
    }
    
    return null;
  };

  const currentShow = getCurrentShow();

  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Programmes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre programmation riche et variée, 24h/24 et 7j/7
          </p>
        </div>

        {/* Current Show */}
        {currentShow && (
          <Card className="mb-8 gradient-kako">
            <CardContent className="p-8 text-white text-center">
              <div className="flex items-center justify-center mb-4">
                <Radio className="h-8 w-8 mr-3 animate-pulse-radio" />
                <h2 className="text-2xl font-bold">🔴 À l'antenne maintenant</h2>
              </div>
              <h3 className="text-3xl font-bold mb-2">{currentShow.title}</h3>
              <p className="text-lg opacity-90 mb-2">avec {currentShow.host}</p>
              <p className="opacity-80 mb-4">{currentShow.type} • {currentShow.time}</p>
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Play className="h-5 w-5 mr-2" />
                Écouter en direct
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Featured Shows */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Programmes Vedettes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredShows.map((show, index) => (
              <Card key={index} className="hover-lift">
                <div className="relative">
                  <img
                    src={show.image}
                    alt={show.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-kako-yellow text-black px-2 py-1 rounded-full">
                    <Star className="h-4 w-4" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{show.title}</h3>
                  <p className="text-gray-600 mb-3">{show.description}</p>
                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {show.host}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {show.time}
                    </div>
                  </div>
                  <Button className="w-full gradient-kako text-white">
                    <Play className="h-4 w-4 mr-2" />
                    En savoir plus
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Programming Schedule */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Grille de Programmation</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {schedule.map((day, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Calendar className="h-5 w-5 mr-2 text-kako-blue" />
                    {day.day}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {day.shows.map((show, showIndex) => (
                      <div 
                        key={showIndex}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{show.title}</h4>
                          <p className="text-sm text-gray-600">{show.host}</p>
                          <p className="text-xs text-gray-500">{show.type}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-sm font-medium text-kako-blue">
                            <Clock className="h-4 w-4 mr-1" />
                            {show.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="gradient-kako-soft">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Proposez votre programme</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Vous avez une idée de programme ? Rejoignez l'équipe KAKO FM et partagez votre passion avec nos auditeurs.
            </p>
            <Button size="lg" className="gradient-kako text-white">
              Contactez-nous
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Programmes;
