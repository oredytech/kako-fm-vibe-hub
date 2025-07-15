
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Radio, Headphones, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/articles', label: 'Articles' },
    { path: '/videos', label: 'Vidéos' },
    { path: '/podcasts', label: 'Podcasts' },
    { path: '/programmes', label: 'Programmes' },
    { path: '/equipe', label: 'Équipe' },
    { path: '/contact', label: 'Contact' },
    { path: '/soutenir', label: 'Soutenir' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleLiveRadio = () => {
    // Trigger radio player
    const radioPlayer = document.querySelector('audio');
    if (radioPlayer) {
      if (radioPlayer.paused) {
        radioPlayer.play();
      }
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="logo-rounded">
              <img 
                src="/lovable-uploads/aabba1de-25fd-401f-93f5-5dec01693fae.png" 
                alt="KAKO FM" 
                className="h-10 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-kako-yellow to-kako-red text-white'
                      : 'text-gray-700 hover:text-kako-blue hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Live Radio Button - Desktop */}
              <Button 
                onClick={handleLiveRadio}
                size="sm" 
                className="gradient-kako text-white hover:opacity-90 transition-opacity"
              >
                <Play className="h-4 w-4 mr-2" />
                En direct
              </Button>
            </div>
          </div>

          {/* Medium screens navigation */}
          <div className="hidden md:block lg:hidden">
            <div className="flex items-center space-x-2">
              <Button 
                onClick={handleLiveRadio}
                size="sm" 
                className="gradient-kako text-white hover:opacity-90 transition-opacity"
              >
                <Play className="h-4 w-4 mr-2" />
                En direct
              </Button>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-kako-blue hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-kako-blue"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Live Radio Button - Mobile */}
            <Button 
              onClick={handleLiveRadio}
              size="sm" 
              className="gradient-kako text-white hover:opacity-90 transition-opacity"
            >
              <Play className="h-4 w-4 mr-1" />
              <span className="text-xs">En direct</span>
            </Button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-kako-blue hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-kako-blue"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-kako-yellow to-kako-red text-white'
                    : 'text-gray-700 hover:text-kako-blue hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Medium screens menu */}
      {isOpen && (
        <div className="hidden md:block lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'bg-gradient-to-r from-kako-yellow to-kako-red text-white'
                    : 'text-gray-700 hover:text-kako-blue hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
