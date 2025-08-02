
import React from 'react';
import Navigation from './Navigation';
import LiveBanner from './LiveBanner';
import RadioPlayer from './RadioPlayer';
import Footer from './Footer';
import { Button } from '@/components/ui/button';

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
      
      <Footer />
      
      <RadioPlayer />
    </div>
  );
};

export default Layout;
