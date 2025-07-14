
import React from 'react';
import Navigation from './Navigation';
import RadioPlayer from './RadioPlayer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pb-20">
        {children}
      </main>
      <RadioPlayer />
    </div>
  );
};

export default Layout;
