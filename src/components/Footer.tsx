import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('newsletters')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') { // unique constraint violation
          toast({
            title: "Email déjà inscrit",
            description: "Cet email est déjà inscrit à notre newsletter.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Inscription réussie !",
          description: "Vous recevrez nos dernières actualités par email.",
        });
        setEmail('');
      }
    } catch (error) {
      console.error('Erreur inscription newsletter:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <footer className="bg-gray-900 text-white mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo et Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png" alt="KAKO FM" className="h-10 w-auto" />
              <span className="text-xl font-bold">KAKO FM</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Radio en ligne engagée et jeune. Nous donnons la voix aux invisibles et promouvons l'inclusion sociale à Goma et dans la région du Nord-Kivu.
            </p>
            <div className="flex space-x-4">
              <a href="https://whatsapp.com/channel/0029Vb6WpqMH5JLupOdQDF3S" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/kakofm97.2/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/kakofm/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@KAKOTV-yl6ig" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Accueil
              </Link>
              <Link to="/articles" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Articles
              </Link>
              <Link to="/videos" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Vidéos
              </Link>
              <Link to="/podcasts" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Podcasts
              </Link>
              <Link to="/programmes" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Programmes
              </Link>
              <Link to="/equipe" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Équipe
              </Link>
            </nav>
          </div>

          {/* Informations légales */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Informations légales</h3>
            <nav className="space-y-2">
              <Link to="/mentions-legales" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Politique de confidentialité
              </Link>
              <Link to="/conditions-utilisation" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Conditions d'utilisation
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Contact
              </Link>
              <Link to="/soutenir" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Soutenir
              </Link>
              <Link to="/a-propos" className="block text-gray-300 hover:text-white transition-colors text-sm">
                À propos
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-gray-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Ville de Goma, Commune de Karisimbi, Blvd SAKE<br />
                  (Référence ENTREPÔT AKIFAR/Afia Bora)
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <p className="text-gray-300 text-sm">+243 979 130 601</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <a href="mailto:direction@kakofm.net" className="text-gray-300 hover:text-white transition-colors text-sm">
                  direction@kakofm.net
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-300 text-sm">
              Recevez nos dernières actualités et programmes directement dans votre boîte email.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-kako-blue"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                size="sm"
                className="w-full gradient-kako text-white"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-2"></div>
                    Inscription...
                  </>
                ) : (
                  <>
                    <Send className="h-3 w-3 mr-2" />
                    S'inscrire
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 KAKO FM. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm">Couverture FM : +174 km² • </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;