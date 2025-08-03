import { useState, useEffect, useCallback } from 'react';

interface NotificationOptions {
  title: string;
  body: string;
  tag?: string;
  icon?: string;
}

export const useNotifications = () => {
  const [permission, setPermission] = useState<NotificationPermission>('default');
  const [isSupported, setIsSupported] = useState(false);
  const [serviceWorkerReady, setServiceWorkerReady] = useState(false);

  useEffect(() => {
    // Vérifier le support des notifications
    const supported = 'Notification' in window && 'serviceWorker' in navigator;
    setIsSupported(supported);
    
    if (supported) {
      setPermission(Notification.permission);
      
      // Enregistrer le service worker
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker enregistré:', registration);
          setServiceWorkerReady(true);
        })
        .catch((error) => {
          console.error('Erreur lors de l\'enregistrement du Service Worker:', error);
        });
    }
  }, []);

  const requestPermission = useCallback(async () => {
    if (!isSupported) {
      return false;
    }

    try {
      const result = await Notification.requestPermission();
      setPermission(result);
      return result === 'granted';
    } catch (error) {
      console.error('Erreur lors de la demande de permission:', error);
      return false;
    }
  }, [isSupported]);

  const showNotification = useCallback(async (options: NotificationOptions) => {
    if (!isSupported || !serviceWorkerReady) {
      return false;
    }

    if (permission !== 'granted') {
      const granted = await requestPermission();
      if (!granted) {
        return false;
      }
    }

    try {
      // Envoyer le message au service worker
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
          type: 'SHOW_NOTIFICATION',
          title: options.title,
          body: options.body,
          tag: options.tag || 'kako-fm',
          icon: options.icon
        });
        return true;
      }
      return false;
    } catch (error) {
      console.error('Erreur lors de l\'affichage de la notification:', error);
      return false;
    }
  }, [isSupported, serviceWorkerReady, permission, requestPermission]);

  return {
    isSupported,
    permission,
    requestPermission,
    showNotification,
    canNotify: permission === 'granted' && serviceWorkerReady
  };
};