import React, { useEffect } from 'react';

const BannerAd = () => {
  useEffect(() => {
    // Configuration des options publicitaires pour les bannières
    (window as any).atOptions = {
      'key': 'df421ab88c4974a058523b0c1a87cd02',
      'format': 'iframe',
      'height': 90,
      'width': 728,
      'params': {}
    };

    // Créer et insérer le script publicitaire pour les bannières
    const script = document.createElement('script');
    script.src = '//www.highperformanceformat.com/df421ab88c4974a058523b0c1a87cd02/invoke.js';
    script.type = 'text/javascript';
    document.head.appendChild(script);

    return () => {
      // Nettoyer le script au démontage du composant
      const existingScript = document.querySelector('script[src="//www.highperformanceformat.com/df421ab88c4974a058523b0c1a87cd02/invoke.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="my-8 text-center">
      <div className="text-xs text-gray-400 mb-2">Publicité</div>
      <div className="flex justify-center">
        <div style={{ width: '728px', height: '90px' }} />
      </div>
    </div>
  );
};

export default BannerAd;