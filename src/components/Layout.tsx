
import React from 'react';
import Navigation from './Navigation';
import LiveBanner from './LiveBanner';
import RadioPlayer from './RadioPlayer';
import { Button } from '@/components/ui/button';
import { Headphones, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <LiveBanner />
      <main className="pb-24">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png" 
                  alt="KAKO FM" 
                  className="h-12 w-auto rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-bold">KAKO FM</h3>
                  <p className="text-gray-400 text-sm">La voix de la jeunesse engagée</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Radio & Télévision Kako - Votre média de référence pour l'actualité, 
                la culture et l'engagement social en République Démocratique du Congo.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" className="gradient-kako text-white" asChild>
                  <Link to="/a-propos">À propos</Link>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
              <ul className="space-y-2">
                <li><Link to="/articles" className="text-gray-300 hover:text-white transition-colors">Articles</Link></li>
                <li><Link to="/videos" className="text-gray-300 hover:text-white transition-colors">Vidéos</Link></li>
                <li><Link to="/podcasts" className="text-gray-300 hover:text-white transition-colors">Podcasts</Link></li>
                <li><Link to="/programmes" className="text-gray-300 hover:text-white transition-colors">Programmes</Link></li>
                <li><Link to="/equipe" className="text-gray-300 hover:text-white transition-colors">Notre équipe</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-kako-yellow" />
                  <div>
                    <p className="text-sm text-gray-300">Direction</p>
                    <p className="text-white">+243 996 886 079</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-kako-yellow" />
                  <div>
                    <p className="text-sm text-gray-300">Antenne</p>
                    <p className="text-white">À venir</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-kako-yellow" />
                  <div>
                    <p className="text-sm text-gray-300">Email</p>
                    <p className="text-white">contact@kakofm.net</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 KAKO FM. Tous droits réservés.
              </p>
              <p className="text-gray-400 text-sm mt-2 md:mt-0">
                Fièrement conçu par{' '}
                <a 
                  href="https://oredytech.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-kako-yellow hover:text-white transition-colors font-medium"
                >
                  Oredy TECHNOLOGIES
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      
      <RadioPlayer />
    </div>
  );
};

export default Layout;
