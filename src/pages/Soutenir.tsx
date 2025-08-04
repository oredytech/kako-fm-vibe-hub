import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Target, Gift, Star, ArrowRight, CheckCircle, Lightbulb, Phone, Mail } from 'lucide-react';
const Soutenir = () => {
  const handleDonation = (type: string) => {
    // Redirection vers PayPal ou système de paiement
    window.open('https://www.paypal.com/donate', '_blank');
  };
  const handleContact = () => {
    window.location.href = 'mailto:direction@kakofm.net?subject=Soutien KAKO FM';
  };
  const handleCallAntenne = () => {
    window.location.href = 'tel:+243979130601';
  };
  const supportWays = [{
    icon: Heart,
    title: "Don ponctuel",
    description: "Soutenez nos projets avec un don unique",
    amount: "À partir de 5€",
    color: "bg-kako-red text-white",
    benefits: ["Soutien direct aux émissions", "Reconnaissance publique", "Newsletter exclusive"]
  }, {
    icon: Users,
    title: "Membre mensuel",
    description: "Devenez membre supporter avec un don mensuel",
    amount: "10€/mois",
    color: "bg-kako-blue text-white",
    benefits: ["Accès à du contenu exclusif", "Invitations aux événements", "Badge membre sur les réseaux"]
  }, {
    icon: Star,
    title: "Parrain Premium",
    description: "Parrainez une émission ou un projet spécifique",
    amount: "50€/mois",
    color: "bg-kako-yellow text-black",
    benefits: ["Mention à l'antenne", "Rencontre avec l'équipe", "Rapport d'impact trimestriel"]
  }];
  const impact = [{
    number: "Monde entier",
    label: "Écoutés via notre site web",
    icon: Users
  }, {
    number: "+174 km²",
    label: "Couverture en FM",
    icon: Target
  }, {
    number: "25",
    label: "Émissions produites par semaine",
    icon: Star
  }, {
    number: "100+",
    label: "Jeunes formés cette année",
    icon: Lightbulb
  }];
  return <div className="min-h-screen pt-16 pb-8">
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
              <Button size="lg" onClick={() => handleDonation('hero')} className="bg-white text-gray-900 hover:bg-gray-100 px-8">
                💳 Faire un don maintenant
              </Button>
              <Button size="lg" variant="outline" onClick={handleContact} className="border-white text-white hover:text-gray-900 px-8 bg-white/0">
                📋 En savoir plus
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Support Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Comment nous soutenir</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportWays.map((way, index) => <Card key={index} className="hover-lift text-center">
                <CardContent className="p-8">
                  <div className={`${way.color} p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center`}>
                    <way.icon className={`h-10 w-10 ${way.title === 'Parrain Premium' ? 'text-black' : 'text-white'}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{way.title}</h3>
                  <p className="text-gray-600 mb-4">{way.description}</p>
                  <div className="text-2xl font-bold text-kako-blue mb-6">{way.amount}</div>
                  
                  {/* Benefits */}
                  <div className="space-y-2 mb-6">
                    {way.benefits.map((benefit, idx) => <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        {benefit}
                      </div>)}
                  </div>
                  
                  <Button onClick={() => handleDonation(way.title)} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Choisir cette option
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Current Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Projets en cours</h2>
          <Card className="hover-lift">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="bg-kako-blue p-4 rounded-full flex-shrink-0">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">KAKO FM – Une Voix pour les Invisibles</h3>
                  <p className="text-lg font-semibold text-kako-blue mb-4">
                    Sensibilisation à l'épilepsie à travers la radio communautaire à Goma, RDC
                  </p>
                  <div className="text-gray-600 space-y-3 mb-6">
                    <p>
                      <strong>Objectif :</strong> Lutter contre la stigmatisation des personnes vivant avec l'épilepsie 
                      à Goma et dans la région du Nord-Kivu, en utilisant la radio communautaire comme vecteur 
                      d'information, d'éducation et de mobilisation sociale.
                    </p>
                    <p>
                      <strong>Activités principales :</strong>
                    </p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Production et diffusion de 4 émissions radio dédiées à la sensibilisation</li>
                      <li>Création de 2 spots audio de sensibilisation</li>
                      <li>Formation de 10 journalistes/animateurs sur le traitement éthique des sujets de santé</li>
                      <li>Création de 6 vidéos courtes et 10 visuels pour les réseaux sociaux</li>
                      <li>Organisation d'un événement public de sensibilisation</li>
                    </ul>
                    <p>
                      <strong>Budget nécessaire :</strong> 4 500 USD
                    </p>
                    <p>
                      <strong>Impact attendu :</strong> 50 000 personnes sensibilisées, réduction de la stigmatisation, 
                      amélioration de l'accès aux soins pour les personnes épileptiques.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button onClick={() => handleDonation('epilepsie')} className="bg-kako-blue text-white hover:bg-kako-blue/90">
                      💛 Soutenir ce projet
                    </Button>
                    <Button variant="outline" onClick={() => window.open('https://kakofm.net/wp-content/uploads/2025/08/Projet-KAKO-FM-–-Une-Voix-pour-les-Invisibles-complet.pdf', '_blank')}>
                      📄 Télécharger le dossier complet
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Notre Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {impact.map((stat, index) => <Card key={index} className="text-center gradient-kako-soft">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-kako-blue" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </CardContent>
              </Card>)}
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
              <Button size="lg" onClick={() => handleDonation('final')} className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                💛 Faire un don
              </Button>
              <Button size="lg" variant="outline" onClick={handleContact} className="px-8">
                <Mail className="h-4 w-4 mr-2" />
                Nous contacter
              </Button>
              <Button size="lg" variant="outline" onClick={handleCallAntenne} className="px-8">
                <Phone className="h-4 w-4 mr-2" />
                Antenne: +243 979 130 601
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default Soutenir;