
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, MessageSquare, Send, Clock, Globe } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["contact@kakofm.net", "redaction@kakofm.net"],
      color: "text-kako-blue"
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: ["Direction : +243 996 886 079 (WhatsApp)", "Antenne : A venir"],
      color: "text-kako-red"
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Ville de Goma, Commune de Karisimbi", "Blvd SAKE (Référence ENTREPÔT AKILI/Afia Bora)"],
      color: "text-kako-yellow"
    },
    {
      icon: Clock,
      title: "Horaires",
      details: ["24h/24 - 7j/7", "Bureau : 8h-18h"],
      color: "text-gray-600"
    }
  ];

  const socialLinks = [
    { name: "WhatsApp", url: "https://whatsapp.com/channel/0029Vb6WpqMH5JLupOdQDF3S", emoji: "💬", color: "bg-green-500" },
    { name: "Facebook", url: "https://www.facebook.com/kakofm97.2/", emoji: "📘", color: "bg-blue-600" },
    { name: "Instagram", url: "https://www.instagram.com/kakofm/", emoji: "📷", color: "bg-pink-500" },
    { name: "YouTube", url: "https://www.youtube.com/@KAKOTV-yl6ig", emoji: "📺", color: "bg-red-600" }
  ];

  return (
    <div className="min-h-screen pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une question, une suggestion ou envie de collaborer ? N'hésitez pas à nous contacter !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 lg:sticky lg:top-20">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <MessageSquare className="h-6 w-6 mr-3 text-kako-blue" />
                  Envoyez-nous un message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Votre nom"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="votre@email.com"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Sujet de votre message"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Votre message..."
                      rows={6}
                      className="w-full"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full gradient-kako text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-xl">Informations de contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg bg-gray-100 ${info.color}`}>
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <Card className="gradient-kako text-white hover-lift">
              <CardContent className="p-6 text-center">
                <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-lg font-bold mb-2">Contactez-nous sur WhatsApp</h3>
                <p className="text-white/90 text-sm mb-4">
                  Pour une réponse rapide, écrivez-nous directement
                </p>
                <Button 
                  size="sm" 
                  className="bg-white text-gray-900 hover:bg-gray-100"
                  onClick={() => window.open('https://whatsapp.com/channel/0029Vb6WpqMH5JLupOdQDF3S', '_blank')}
                >
                  💬 Ouvrir WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-xl">Suivez-nous</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="flex items-center justify-center space-x-2 hover:scale-105 transition-transform"
                      onClick={() => window.open(social.url, '_blank')}
                    >
                      <span>{social.emoji}</span>
                      <span className="text-xs">{social.name}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Questions Fréquentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "Comment écouter KAKO FM ?",
                answer: "Vous pouvez nous écouter en direct sur notre site web, via notre lecteur radio en bas de page."
              },
              {
                question: "Comment proposer un sujet d'émission ?",
                answer: "Contactez-nous via le formulaire ci-dessus ou par email à redaction@kakofm.net avec votre proposition."
              },
              {
                question: "Puis-je passer une annonce publicitaire ?",
                answer: "Oui ! Contactez notre équipe commerciale pour connaître nos tarifs et disponibilités."
              },
              {
                question: "Comment devenir partenaire de KAKO FM ?",
                answer: "Nous sommes toujours ouverts aux partenariats. Envoyez-nous votre proposition de collaboration."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg mb-2 text-kako-blue">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
