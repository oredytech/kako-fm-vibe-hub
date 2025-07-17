import React from 'react';

const APropos = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-kako-blue to-kako-yellow text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            À PROPOS DE KAKO FM
          </h1>
          <p className="text-xl opacity-90">
            La voix de la jeunesse engagée
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Notre Identité */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Notre Identité</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Radio Kako FM</strong> est une radio communautaire basée à Goma, dans l'est de la République démocratique du Congo. Nous sommes une association à but non lucratif, engagée pour le développement local et la cohésion sociale grâce à une communication responsable et participative.
            </p>
          </section>

          {/* Notre Mission */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Notre Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nous croyons que la radio est un puissant levier de changement social, d'ouverture culturelle et de promotion de la citoyenneté. Notre mission principale est de :
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Favoriser l'accès à l'information fiable et indépendante</li>
              <li>Promouvoir le débat citoyen et l'inclusion de toutes les voix de la communauté</li>
              <li>Valoriser la protection de l'environnement et l'économie locale</li>
              <li>Développer des liens interculturels entre les habitants de Goma et au-delà</li>
            </ul>
          </section>

          {/* Nos Valeurs */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Engagement social',
                'Indépendance éditoriale',
                'Écoute et dialogue',
                'Solidarité et résilience',
                'Respect de l\'environnement'
              ].map((valeur, index) => (
                <div key={index} className="bg-card p-4 rounded-lg border">
                  <p className="font-semibold text-kako-blue">• {valeur}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Nos Activités */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Nos Activités</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Diffusion de programmes variés</strong> : actualité locale, débats citoyens, émissions économiques et environnementales</li>
              <li><strong>Organisation de campagnes citoyennes</strong> (ex : Journée mondiale du pardon)</li>
              <li><strong>Plateforme pour les journalistes engagés</strong> et formation aux métiers de la radio</li>
              <li><strong>Animation de débats interactifs avec les auditeurs</strong> pour renforcer la cohésion sociale</li>
            </ul>
          </section>

          {/* Notre Engagement face aux Défis */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Notre Engagement face aux Défis</h2>
            <p className="text-muted-foreground leading-relaxed">
              Dans un contexte marqué par l'insécurité et les crises, Kako FM s'engage à offrir un espace d'expression libre et sécurisé. Malgré les défis, notamment les risques encourus par nos journalistes face à la violence (ex : braquage armé de journalistes en 2024), nous poursuivons notre mission avec détermination et intégrité.
            </p>
          </section>

          {/* Écouter Kako FM */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Écouter Kako FM</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nous diffusons en direct sur :{' '}
              <a 
                href="https://kakofm.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-kako-blue hover:text-kako-yellow transition-colors font-medium"
              >
                www.kakofm.net
              </a>
              , et sommes également accessibles via différentes plateformes de streaming audio pour permettre à toute la communauté, locale et internationale, de suivre nos programmes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default APropos;