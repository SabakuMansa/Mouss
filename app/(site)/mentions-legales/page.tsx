import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { club } from "@/lib/data/club";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site des Mousquetaires Foot US.",
};

export default function LegalPage() {
  return (
    <section className="bg-offwhite-50 py-28 sm:py-36">
      <Container className="max-w-3xl">
        <h1 className="font-heading text-4xl tracking-wide text-navy-950 uppercase sm:text-5xl">Mentions légales</h1>

        <div className="mt-10 space-y-8 text-navy-900/80">
          <section>
            <h2 className="font-heading text-lg tracking-wide text-navy-950 uppercase">1. Éditeur du site</h2>
            <p className="mt-2">
              Association : <strong>{club.fullLegalName}</strong>
              <br />
              Forme : {club.legalForm}
              <br />
              Siège social : {club.legalAddress}
              <br />
              Représentant légal : {club.legalRepresentative}
              <br />
              Contact : {club.legalEmail}
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg tracking-wide text-navy-950 uppercase">2. Hébergement</h2>
            <p className="mt-2">Le site est hébergé par la plateforme {club.hostingProvider}.</p>
          </section>

          <section>
            <h2 className="font-heading text-lg tracking-wide text-navy-950 uppercase">3. Objet du site</h2>
            <p className="mt-2">
              Ce site présente l&apos;activité sportive de l&apos;association et permet l&apos;accès au paiement des
              cotisations via HelloAsso.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg tracking-wide text-navy-950 uppercase">4. Propriété intellectuelle</h2>
            <p className="mt-2">
              Les contenus de ce site (textes, images, logo) sont la propriété de l&apos;association{" "}
              {club.fullLegalName}.
              <br />
              Toute reproduction est interdite sans autorisation préalable.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg tracking-wide text-navy-950 uppercase">5. Données personnelles</h2>
            <p className="mt-2">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit
              d&apos;accès, de rectification, d&apos;opposition et de suppression des données vous concernant.
              <br />
              <br />
              Demande : {club.legalEmail}
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg tracking-wide text-navy-950 uppercase">6. Cookies</h2>
            <p className="mt-2">
              Ce site peut utiliser des cookies techniques. Aucun cookie publicitaire n&apos;est exploité.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg tracking-wide text-navy-950 uppercase">
              7. Limitation de responsabilité
            </h2>
            <p className="mt-2">
              L&apos;association ne peut être tenue responsable d&apos;un mauvais fonctionnement du site ou
              d&apos;informations obsolètes.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg tracking-wide text-navy-950 uppercase">8. Liens externes</h2>
            <p className="mt-2">
              Le site peut contenir des liens vers d&apos;autres plateformes (ex : HelloAsso). L&apos;association
              n&apos;est pas responsable de leur contenu.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg tracking-wide text-navy-950 uppercase">9. Crédits photos</h2>
            <p className="mt-2">
              Toutes les images présentes sur le site proviennent de l&apos;association {club.fullLegalName}.
            </p>
          </section>

          <p className="pt-4 text-sm text-navy-900/50">
            Dernière mise à jour : <strong>{club.lastLegalUpdate}</strong>
          </p>
        </div>
      </Container>
    </section>
  );
}
