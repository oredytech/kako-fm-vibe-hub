import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ConditionsUtilisation = () => {
  return (
    <div className="min-h-screen pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Conditions d'Utilisation</h1>
          <p className="text-lg text-muted-foreground">Dernière mise à jour : 02 août 2025</p>
        </div>

        <Card>
          <CardContent className="p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptation des conditions</h2>
              <p className="text-muted-foreground leading-relaxed">
                En accédant et en utilisant le site web www.kakofm.net (le "Site"), vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Description du service</h2>
              <p className="text-muted-foreground leading-relaxed">
                KAKO FM est une station de radio et télévision basée à Goma, RDC. Notre site web fournit des informations sur nos programmes, articles, podcasts, vidéos et services de diffusion en direct.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Utilisation acceptable</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Vous vous engagez à utiliser notre site de manière appropriée et à ne pas :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Violer toute loi ou réglementation applicable</li>
                <li>Publier du contenu offensant, diffamatoire ou illégal</li>
                <li>Utiliser le site pour spammer ou harceler d'autres utilisateurs</li>
                <li>Tenter d'accéder de manière non autorisée à nos systèmes</li>
                <li>Interférer avec le fonctionnement normal du site</li>
                <li>Reproduire ou distribuer notre contenu sans autorisation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Propriété intellectuelle</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Tout le contenu présent sur ce site, incluant mais non limité aux textes, images, logos, vidéos, podcasts et émissions, est la propriété de KAKO FM ou de ses partenaires et est protégé par les lois sur le droit d'auteur.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Vous pouvez consulter et utiliser le contenu à des fins personnelles et non commerciales, mais toute reproduction ou distribution nécessite notre autorisation écrite préalable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Contenu utilisateur</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                En soumettant du contenu sur notre site (commentaires, messages, etc.), vous :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Garantissez que vous avez le droit de publier ce contenu</li>
                <li>Accordez à KAKO FM le droit d'utiliser, modifier et afficher ce contenu</li>
                <li>Acceptez que nous puissions modérer ou supprimer le contenu inapproprié</li>
                <li>Demeurez responsable du contenu que vous publiez</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Services de diffusion</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nos services de radio et télévision en ligne sont fournis "tels quels". Nous nous réservons le droit de modifier, suspendre ou interrompre nos services à tout moment sans préavis. La qualité de diffusion peut varier selon votre connexion internet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Publicité</h2>
              <p className="text-muted-foreground leading-relaxed">
                Notre site peut afficher des publicités de tiers via Google AdSense et d'autres réseaux publicitaires. Nous ne sommes pas responsables du contenu des publicités ou des sites vers lesquels elles renvoient.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Limitation de responsabilité</h2>
              <p className="text-muted-foreground leading-relaxed">
                KAKO FM ne saurait être tenu responsable des dommages directs, indirects, accessoires ou consécutifs résultant de l'utilisation ou de l'impossibilité d'utiliser notre site ou nos services. Nous ne garantissons pas l'exactitude, l'exhaustivité ou l'actualité des informations publiées.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Liens externes</h2>
              <p className="text-muted-foreground leading-relaxed">
                Notre site peut contenir des liens vers des sites web tiers. Ces liens sont fournis pour votre convenance uniquement. Nous ne contrôlons pas ces sites et ne sommes pas responsables de leur contenu ou de leurs pratiques.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Modification des conditions</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. Les modifications entreront en vigueur dès leur publication sur cette page. Votre utilisation continue du site constitue votre acceptation des conditions modifiées.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Résiliation</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous nous réservons le droit de suspendre ou de résilier votre accès au site à tout moment, avec ou sans préavis, en cas de violation de ces conditions d'utilisation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Droit applicable</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ces conditions d'utilisation sont régies par les lois de la République Démocratique du Congo. Tout litige sera soumis à la juridiction compétente de Goma, Nord-Kivu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Contact</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Pour toute question concernant ces conditions d'utilisation, contactez-nous :
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

export default ConditionsUtilisation;