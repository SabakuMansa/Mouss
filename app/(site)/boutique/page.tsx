import type { Metadata } from "next";
import { ShieldCheck, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem, RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/shop/ProductCard";
import { shopProducts, HELLOASSO_SHOP_URL } from "@/lib/data/shop";

export const metadata: Metadata = {
  title: "Boutique",
  description: "La boutique officielle des Mousquetaires : maillots, textiles et accessoires, via HelloAsso.",
};

export default function ShopPage() {
  return (
    <>
      <PageHero
        image="/images/hero/boutique.jpg"
        imageAlt="Boutique officielle des Mousquetaires"
        title="Boutique officielle"
        description="Tous les produits sont à récupérer directement au club. Pour un envoi postal, contactez directement le bureau."
      />

      <section className="bg-offwhite-50 py-24 sm:py-32">
        <Container>
          <RevealOnScroll className="mx-auto max-w-2xl text-center">
            <p className="text-navy-900/75">
              Nous sommes fiers de collaborer avec HelloAsso, notre partenaire officiel, qui gère en toute sécurité
              notre boutique en ligne et vos paiements.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-navy-900/50">
              <ShieldCheck className="size-4 text-gold-500" />
              Paiement 100% sécurisé via HelloAsso
            </div>
          </RevealOnScroll>

          <SectionHeading kicker="Nos articles" title="Toute la collection" tone="light" className="mt-16" />

          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shopProducts.map((product) => (
              <StaggerItem key={product.name}>
                <ProductCard product={product} href={HELLOASSO_SHOP_URL} />
              </StaggerItem>
            ))}
          </Stagger>

          <div className="mt-16 text-center">
            <Button href={HELLOASSO_SHOP_URL} icon={ExternalLink}>
              Voir la boutique complète sur HelloAsso
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
