
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Target, Gift, Star, ArrowRight, CheckCircle, Lightbulb } from 'lucide-react';

const Soutenir = () => {
  const supportWays = [
    {
      icon: Heart,
      title: "Don ponctuel",
      description: "Soutenez nos projets avec un don unique",
      amount: "À partir de 5€",
      color: "bg-kako-red",
      benefits: ["Soutien direct aux émissions", "Reconnaissance publique", "Newsletter exclusive"]
    },
    {
      icon: Users,
      title: "Membre mensuel",
      description: "Devenez membre supporter avec un don mensuel",
      amount: "10€/mois",
      color: "bg-kako-blue",
      benefits: ["Accès à du contenu exclusif", "Invitations aux événements", "Badge membre sur les réseaux"]
    },
    {
      icon: Star,
      title: "Parrain Premium",
      description: "Parrainez une émission ou un projet spécifique",
      amount: "50€/mois",
      color: "bg-kako-yellow text-black",
      benefits: ["Mention à l'antenne", "Rencontre avec l'équipe", "Rapport d'impact trimestriel"]
    }
  ];

  const impact = [
    { number: "50,000+", label: "Auditeurs touchés chaque mois", icon: Users },
    { number: "25", label: "Émissions produites par semaine", icon: Target },
    { number: "12", label: "Pays où nous sommes écoutés", icon: Star },
    { number: "100+", label: "Jeunes formés cette année", icon: Lightbulb }
  ];

  return (
    <div className="min-h-screen pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Soutenir KAKO FM</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aidez-nous à développer une radio libre, indépendante et engagée pour la jeunesse africaine
          </p>
        </div>

        {/* Hero Section */}
        <Card className="mb-12 gradient-kako overflow-hidden">
          <CardContent className="p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              💛 Ensemble, construisons l'avenir de la radio
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              KAKO FM, c'est plus qu'une radio : c'est un mouvement pour l'information libre, 
              l'engagement citoyen et l'épanouissement de la jeunesse africaine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8">
                💳 Faire un don maintenant
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8">
                📋 En savoir plus
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Support Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Comment nous soutenir</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportWays.map((way, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="p-8">
                  <div className={`${way.color} p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center`}>
                    <way.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{way.title}</h3>
                  <p className="text-gray-600 mb-4">{way.description}</p>
                  <div className="text-2xl font-bold text-kako-blue mb-6">{way.amount}</div>
                  
                  {/* Benefits */}
                  <div className="space-y-2 mb-6">
                    {way.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full gradient-kako text-white">
                    Choisir cette option
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Projets en cours</h2>
          <Card className="text-center p-12">
            <CardContent>
              <Lightbulb className="h-16 w-16 mx-auto mb-6 text-kako-blue opacity-50" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Projets en cours de rédaction</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nous travaillons actuellement sur de nouveaux projets passionnants qui seront bientôt disponibles. 
                Restez connectés pour découvrir comment vous pourrez nous aider à les concrétiser !
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Impact Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Notre Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impact.map((stat, index) => (
              <Card key={index} className="text-center gradient-kako-soft">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-kako-blue" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Support Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pourquoi nous soutenir ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="h-6 w-6 mr-3 text-kako-blue" />
                  Radio Indépendante
                </h3>
                <p className="text-gray-600 mb-4">
                  KAKO FM est une radio associative, indépendante de tout groupe politique ou économique. 
                  Votre soutien garantit notre liberté éditoriale.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Information libre et objective
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Pas de publicité intrusive
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Contenu de qualité
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="h-6 w-6 mr-3 text-kako-red" />
                  Engagement Social
                </h3>
                <p className="text-gray-600 mb-4">
                  Nous formons les jeunes aux médias, soutenons l'entrepreneuriat et donnons 
                  la parole aux acteurs du changement social.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Formation gratuite
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Accompagnement des projets
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    Plateforme d'expression
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="gradient-kako-soft text-center">
          <CardContent className="p-8">
            <h3 className="text-3xl font-bold mb-6">Prêt à nous rejoindre ?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Chaque contribution, petite ou grande, nous aide à construire une radio 
              plus forte et plus impactante pour notre communauté.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-kako text-white px-8">
                💛 Faire un don
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                📞 Nous contacter
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Soutenir;
