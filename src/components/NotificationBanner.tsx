import React, { useState, useEffect } from 'react';
import { Bell, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNotifications } from '@/hooks/useNotifications';

const NotificationBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { isSupported, permission, requestPermission } = useNotifications();

  useEffect(() => {
    // Afficher le banner uniquement si les notifications sont supportées
    // et que la permission n'a pas encore été demandée
    if (isSupported && permission === 'default') {
      // Attendre un peu avant d'afficher le banner pour ne pas être intrusif
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isSupported, permission]);

  const handleEnable = async () => {
    const granted = await requestPermission();
    if (granted) {
      setShowBanner(false);
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
  };

  if (!showBanner || !isSupported) {
    return null;
  }

  return (
    <div className="bg-kako-red/10 border-l-4 border-kako-red p-4 mx-4 my-2 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Bell className="h-5 w-5 text-kako-red" />
          <div>
            <h3 className="text-sm font-medium text-foreground">
              Restez informé en temps réel
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Recevez des notifications pour les nouveaux programmes et contenus
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            size="sm" 
            onClick={handleEnable}
            className="bg-kako-red hover:bg-kako-red/90"
          >
            Activer
          </Button>
          <Button 
            size="sm" 
            variant="ghost" 
            onClick={handleDismiss}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotificationBanner;