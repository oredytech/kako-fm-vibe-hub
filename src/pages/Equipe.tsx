
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Twitter, Instagram, Linkedin, Mic, Headphones, Camera, Settings } from 'lucide-react';

const Equipe = () => {
  // Direction
  const direction = [
    {
      id: 1,
      name: "Fidèle KARUHIJE",
      role: "Directeur Général",
      image: "/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png"
    },
    {
      id: 2,
      name: "Kethia RUGAMIKA",
      role: "Directrice Financière, Journaliste et Animatrice",
      image: "/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png"
    },
    {
      id: 3,
      name: "Gracieux BAZEGE",
      role: "Chargé des Programmes et animateur",
      image: "/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png"
    }
  ];

  // Animateurs et chroniqueurs
  const animateurs = [
    { name: "Samuel MATABARO", role: "Animateur et Chroniqueur" },
    { name: "Ismael BENJAMIN", role: "Animateur et Chroniqueur" },
    { name: "Grace MIDAGU", role: "Marketing" },
    { name: "Dieuveut MUBI", role: "Animateur et Chroniqueur" },
    { name: "Ricardo OLENGA", role: "Animateur et Chroniqueur" },
    { name: "Boniface MALIMINGI", role: "Animateur et Chroniqueur" }
  ];

  // Journalistes
  const journalistes = [
    { name: "Gloire BALOLAGE", role: "Rédacteur en chef" },
    { name: "Patience NGORORA", role: "Journaliste" },
    { name: "Dieuaime RUGO", role: "Journaliste" },
    { name: "Fanny SHAMAMBA", role: "Journaliste" }
  ];

  // Techniciens
  const techniciens = [
    { name: "Gabriel MUPENDA", role: "Modulateur", icon: Settings },
    { name: "Libu MANGA BLACK", role: "Caméra", icon: Camera }
  ];

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'twitter': return Twitter;
      case 'instagram': return Instagram;
      case 'linkedin': return Linkedin;
      default: return Mail;
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Notre Équipe</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rencontrez les voix et les talents qui donnent vie à KAKO FM chaque jour
          </p>
        </div>

        {/* Direction */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Direction</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {direction.map((member) => (
              <Card key={member.id} className="hover-lift overflow-hidden">
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-kako-yellow text-black p-2 rounded-full">
                    <Mic className="h-5 w-5" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-kako-blue font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Animateurs et Chroniqueurs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Animateurs et Chroniqueurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {animateurs.map((member, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-kako-yellow to-kako-red p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Headphones className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                  <p className="text-kako-blue font-medium text-sm">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Journalistes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Journalistes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journalistes.map((member, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-kako-yellow to-kako-red p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Mic className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                  <p className="text-kako-blue font-medium text-sm">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Techniciens */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Techniciens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techniciens.map((member, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-r from-kako-yellow to-kako-red p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <member.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-kako-blue font-medium mb-3">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join Team Section */}
        <Card className="gradient-kako">
          <CardContent className="p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Un message à l'Equipe ?</h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Vous avez un mot à dire à notre Equipe ? 
              Nous vous écouterons sans attentivement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                Contacter la technique
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                Contacter la Rédaction
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Values Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Engagement", desc: "Nous nous engageons pour une société meilleure", emoji: "💪" },
              { title: "Diversité", desc: "Nous célébrons la richesse de nos différences", emoji: "🌍" },
              { title: "Innovation", desc: "Nous embrassons les nouvelles technologies", emoji: "🚀" },
              { title: "Proximité", desc: "Nous restons proches de nos auditeurs", emoji: "❤️" }
            ].map((value, index) => (
              <Card key={index} className="text-center gradient-kako-soft">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{value.emoji}</div>
                  <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipe;
