import React, { useEffect } from 'react';

const ArticleAd = () => {
  useEffect(() => {
    // Créer et insérer le script publicitaire pour les articles
    const script = document.createElement('script');
    script.src = '//pl27584072.revenuecpmgate.com/71338ab7aea0c2bf22b72d499cf4ac9a/invoke.js';
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    document.head.appendChild(script);

    return () => {
      // Nettoyer le script au démontage du composant
      const existingScript = document.querySelector('script[src="//pl27584072.revenuecpmgate.com/71338ab7aea0c2bf22b72d499cf4ac9a/invoke.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="my-8 text-center">
      <div className="text-xs text-gray-400 mb-2">Publicité</div>
      <div id="container-71338ab7aea0c2bf22b72d499cf4ac9a"></div>
    </div>
  );
};

export default ArticleAd;