import React, { useEffect } from 'react';

const SidebarAd = () => {
  useEffect(() => {
    // Créer et insérer le script publicitaire pour la barre latérale
    const script = document.createElement('script');
    script.src = '//pl27584092.revenuecpmgate.com/01/d1/ff/01d1ffe5bd1bca7c0721c9f51003867e.js';
    script.type = 'text/javascript';
    document.head.appendChild(script);

    return () => {
      // Nettoyer le script au démontage du composant
      const existingScript = document.querySelector('script[src="//pl27584092.revenuecpmgate.com/01/d1/ff/01d1ffe5bd1bca7c0721c9f51003867e.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="my-4">
      <div className="text-xs text-gray-400 mb-2 text-center">Publicité</div>
      <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 min-h-[200px] flex items-center justify-center">
        <span className="text-gray-400 text-sm">Espace publicitaire</span>
      </div>
    </div>
  );
};

export default SidebarAd;