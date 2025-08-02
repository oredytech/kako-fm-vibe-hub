import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Politique de Confidentialité</h1>
          <p className="text-lg text-muted-foreground">Dernière mise à jour : 02 août 2025</p>
        </div>

        <Card>
          <CardContent className="p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                KAKO FM s'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre site web www.kakofm.net et nos services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Informations que nous collectons</h2>
              <div className="space-y-3">
                <h3 className="text-lg font-medium">2.1 Informations fournies volontairement</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Nom, adresse e-mail lors de l'abonnement à notre newsletter</li>
                  <li>Messages et commentaires que vous soumettez</li>
                  <li>Informations de contact lors de demandes de renseignements</li>
                </ul>

                <h3 className="text-lg font-medium mt-4">2.2 Informations collectées automatiquement</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Adresse IP et informations de navigation</li>
                  <li>Type de navigateur et système d'exploitation</li>
                  <li>Pages visitées et temps passé sur le site</li>
                  <li>Données d'analyse via Google Analytics</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Utilisation des informations</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Nous utilisons vos informations pour :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Fournir et améliorer nos services</li>
                <li>Envoyer des newsletters et communications</li>
                <li>Répondre à vos demandes et commentaires</li>
                <li>Analyser l'utilisation du site pour l'améliorer</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Cookies et technologies similaires</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Notre site utilise des cookies pour :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Améliorer votre expérience de navigation</li>
                <li>Analyser le trafic du site (Google Analytics)</li>
                <li>Personnaliser le contenu et les publicités</li>
                <li>Mémoriser vos préférences</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Publicité et Google AdSense</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Notre site utilise Google AdSense pour afficher des publicités. Google peut utiliser des cookies pour personnaliser les annonces selon vos centres d'intérêt. Pour plus d'informations sur la politique de confidentialité de Google, visitez : https://policies.google.com/privacy
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Vous pouvez désactiver la personnalisation des annonces en visitant : https://adssettings.google.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Partage des informations</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos informations uniquement dans les cas suivants :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-3">
                <li>Avec votre consentement explicite</li>
                <li>Pour respecter nos obligations légales</li>
                <li>Avec nos prestataires de services (hébergement, analyse)</li>
                <li>En cas de fusion ou d'acquisition d'entreprise</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Sécurité des données</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous mettons en place des mesures de sécurité appropriées pour protéger vos informations contre l'accès non autorisé, la modification, la divulgation ou la destruction. Cependant, aucune transmission sur Internet n'est 100% sécurisée.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Vos droits</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Vous avez le droit de :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Accéder à vos données personnelles</li>
                <li>Corriger ou supprimer vos données</li>
                <li>Vous opposer au traitement de vos données</li>
                <li>Demander la portabilité de vos données</li>
                <li>Vous désabonner de nos communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Conservation des données</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous conservons vos informations personnelles aussi longtemps que nécessaire pour fournir nos services et respecter nos obligations légales. Les données d'analyse sont conservées conformément aux politiques de Google Analytics.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Modifications de cette politique</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous pouvons modifier cette politique de confidentialité à tout moment. Les modifications entreront en vigueur dès leur publication sur cette page. Nous vous encourageons à consulter régulièrement cette page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Contact</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Pour toute question concernant cette politique de confidentialité, contactez-nous :
              </p>
              <div className="text-muted-foreground space-y-2">
                <p><strong>Email :</strong> direction@kakofm.net</p>
                <p><strong>Téléphone :</strong> +243 979 130 601</p>
                <p><strong>Adresse :</strong> Ville de Goma, Commune de Karisimbi, Blvd SAKE (Référence ENTREPÔT AKIFAR/Afia Bora)</p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;