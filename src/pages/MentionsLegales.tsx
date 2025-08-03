import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MentionsLegales = () => {
  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Mentions Légales</h1>
          <p className="text-lg text-muted-foreground">Informations légales et éditoriales</p>
        </div>

        <Card>
          <CardContent className="p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Informations sur l'éditeur</h2>
              <div className="text-muted-foreground space-y-2">
                <p><strong>Nom de l'organisation :</strong> KAKO FM</p>
                <p><strong>Statut :</strong> Station de radio et télévision</p>
                <p><strong>Adresse :</strong> Ville de Goma, Commune de Karisimbi, Blvd SAKE (Référence ENTREPÔT AKIFAR/Afia Bora)</p>
                <p><strong>Pays :</strong> République Démocratique du Congo</p>
                <p><strong>Direction :</strong> +243 996 886 079</p>
                <p><strong>Antenne :</strong> +243 979 130 601</p>
                <p><strong>Email :</strong> direction@kakofm.net</p>
                <p><strong>Site web :</strong> www.kakofm.net</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Directeur de la publication</h2>
              <div className="text-muted-foreground space-y-2">
                <p><strong>Responsable éditorial :</strong> Direction de KAKO FM</p>
                <p><strong>Email :</strong> direction@kakofm.net</p>
              </div>
            </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Hébergement et développement du site</h2>
                <div className="text-muted-foreground space-y-2">
                  <p><strong>Développement :</strong> Site créé avec Lovable (https://lovable.dev)</p>
                  <p><strong>Nom de domaine :</strong> Hébergé chez LWS</p>
                  <p><strong>Hébergement du site :</strong> Serveurs Netlify</p>
                  <p><strong>APIs utilisées :</strong> WordPress (articles), YouTube (vidéos)</p>
                  <p>Le site utilise des services tiers pour la diffusion de contenu et bénéficie d'une infrastructure cloud sécurisée.</p>
                </div>
              </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Propriété intellectuelle</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                L'ensemble du contenu présent sur ce site web (textes, images, vidéos, podcasts, émissions, logos, graphismes, etc.) est la propriété exclusive de KAKO FM, sauf mention contraire.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de KAKO FM.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Conditions d'utilisation</h2>
              <p className="text-muted-foreground leading-relaxed">
                L'utilisation du site www.kakofm.net implique l'acceptation pleine et entière des conditions générales d'utilisation. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter de manière régulière.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Protection des données personnelles</h2>
              <p className="text-muted-foreground leading-relaxed">
                KAKO FM s'engage à protéger la vie privée des utilisateurs de son site. Les informations personnelles collectées sont traitées conformément à notre politique de confidentialité disponible sur le site. Aucune information personnelle n'est collectée à l'insu des utilisateurs, ni cédée à des tiers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Cookies et technologies de suivi</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic via Google Analytics. Les utilisateurs peuvent configurer leur navigateur pour refuser les cookies, mais certaines fonctionnalités du site pourraient ne plus être disponibles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Limitation de responsabilité</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                KAKO FM s'efforce de fournir des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                KAKO FM ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l'utilisateur, lors de l'accès au site www.kakofm.net.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Liens hypertextes</h2>
              <p className="text-muted-foreground leading-relaxed">
                Le site www.kakofm.net peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. KAKO FM ne dispose d'aucun moyen pour contrôler le contenu de ces sites et n'assume aucune responsabilité de ce fait.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Droit applicable et juridiction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Tout litige en relation avec l'utilisation du site www.kakofm.net est soumis au droit de la République Démocratique du Congo. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Goma, Nord-Kivu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Contact</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Pour toute question ou réclamation concernant le site, vous pouvez nous contacter :
              </p>
              <div className="text-muted-foreground space-y-2">
                <p><strong>Par email :</strong> direction@kakofm.net</p>
                <p><strong>Direction :</strong> +243 996 886 079</p>
                <p><strong>Antenne :</strong> +243 979 130 601</p>
                <p><strong>Par courrier :</strong> KAKO FM, Ville de Goma, Commune de Karisimbi, Blvd SAKE (Référence ENTREPÔT AKIFAR/Afia Bora), République Démocratique du Congo</p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MentionsLegales;