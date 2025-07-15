
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Twitter, Instagram, Linkedin, Mic, Headphones, Camera, Settings } from 'lucide-react';

const Equipe = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Oredy MUSANDA",
      role: "Directeur Général",
      speciality: "Technique et Gestion de la radio",
      image: "/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png",
      bio: "Passionnant de la radio dépuis 2018, Oredy Musanda est le Directeur Général de la Kako FM dépuis Juillet 2025 ",
      shows: ["Ondes Libre"],
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      id: 2,
      name: "Kethia RUGAMIKA",
      role: "Directrice de Finance & Présentatrice",
      speciality: "Journaliste & Chroniqueuse",
      image: "/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png",
      bio: "Finance et animatrice radio. Expert en musiques africaines contemporaines et découvreur de talents.",
      shows: ["Autours de la Féminité", "A la une nutrition"],
      social: {
        twitter: "#",
        instagram: "#"
      }
    },
    {
      id: 3,
      name: "Gracieux BAZEGE",
      role: "Chargé des Programmes",
      speciality: "Programmes & Animation",
      image: "/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png",
      bio: "Docteur en sociologie, militante pour l'égalité des genres et l'autonomisation des femmes africaines.",
      shows: ["Femmes Leaders", "Société & Débats"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 4,
      name: "DJ AfroKing",
      role: "DJ & Programmateur Musical",
      speciality: "Musiques Africaines",
      image: "/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png",
      bio: "DJ professionnel spécialisé dans les musiques africaines. Ambassadeur de la culture afro-urbaine.",
      shows: ["Afro Beats", "Night Vibes"],
      social: {
        instagram: "#",
        twitter: "#"
      }
    },
    {
      id: 5,
      name: "Kevin Tech",
      role: "Animateur Tech",
      speciality: "Technologie & Innovation",
      image: "/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png",
      bio: "Ingénieur en informatique et passionné de nouvelles technologies. Vulgarisateur tech pour le grand public.",
      shows: ["Tech Talk", "Innovation Hub"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      id: 6,
      name: "Lisa Morgan",
      role: "Journaliste & Animatrice",
      speciality: "Culture & Arts",
      image: "/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png",
      bio: "Journaliste culturelle et critique d'art. Experte en arts contemporains africains et diaspora.",
      shows: ["KAKO Evening", "Culture Mix"],
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  const technicalTeam = [
    {
      name: "Marc Technicien",
      role: "Ingénieur du Son",
      icon: Headphones,
      description: "Responsable de la qualité sonore et de la diffusion"
    },
    {
      name: "Julie Réalisatrice",
      role: "Réalisatrice",
      icon: Camera,
      description: "Production et réalisation des émissions en direct"
    },
    {
      name: "Paul Admin",
      role: "Administrateur Système",
      icon: Settings,
      description: "Gestion technique et maintenance des équipements"
    }
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

        {/* Main Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Équipe d'Animation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
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
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-kako-blue font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.speciality}</p>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{member.bio}</p>
                  
                  {/* Shows */}
                  <div className="mb-4">
                    <p className="text-xs font-medium text-gray-500 mb-2">ÉMISSIONS :</p>
                    <div className="flex flex-wrap gap-1">
                      {member.shows.map((show, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {show}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-3">
                    {Object.entries(member.social).map(([platform, url]) => {
                      const IconComponent = getSocialIcon(platform);
                      return (
                        <Button key={platform} size="sm" variant="outline" className="p-2">
                          <IconComponent className="h-4 w-4" />
                        </Button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Équipe Technique</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalTeam.map((member, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-r from-kako-yellow to-kako-red p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <member.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-kako-blue font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join Team Section */}
        <Card className="gradient-kako">
          <CardContent className="p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Rejoignez l'équipe KAKO FM</h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Vous avez du talent et l'envie de faire partie d'une radio engagée ? 
              Nous recherchons toujours de nouveaux talents passionnés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                📧 Candidature Spontanée
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                💼 Voir les Offres
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
