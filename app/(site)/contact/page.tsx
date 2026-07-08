import type { Metadata } from "next";
import { Mail, MapPinned, Share2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Stagger, StaggerItem } from "@/components/ui/RevealOnScroll";
import { ContactCard } from "@/components/contact/ContactCard";
import { MapEmbed } from "@/components/contact/MapEmbed";
import { contactInfo } from "@/lib/data/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Les Mousquetaires ou venez nous retrouver au stade Jean Longuet, Châtenay-Malabry.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/images/hero/contact.jpg"
        imageAlt="Stade des Mousquetaires"
        title="Envoie-nous un message ou viens nous retrouver"
      />

      <section className="bg-offwhite-50 py-24 sm:py-32">
        <Container>
          <Stagger className="grid gap-6 sm:grid-cols-3">
            <StaggerItem>
              <ContactCard icon={Mail} title="Nos coordonnées">
                <a href={`mailto:${contactInfo.email}`} className="block hover:text-navy-950">
                  {contactInfo.email}
                </a>
                <p className="mt-1">{contactInfo.address}</p>
              </ContactCard>
            </StaggerItem>

            <StaggerItem>
              <ContactCard icon={Share2} title="Retrouvez-nous">
                <div className="flex justify-center gap-4">
                  <a href={contactInfo.facebookUrl} target="_blank" rel="noreferrer" className="hover:text-navy-950">
                    Facebook
                  </a>
                  <a href={contactInfo.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-navy-950">
                    Instagram
                  </a>
                </div>
              </ContactCard>
            </StaggerItem>

            <StaggerItem>
              <ContactCard icon={MapPinned} title="Localisation">
                <p>Stade Jean Longuet, Châtenay-Malabry</p>
              </ContactCard>
            </StaggerItem>
          </Stagger>

          <div className="mt-14">
            <MapEmbed src={contactInfo.mapEmbedSrc} />
          </div>
        </Container>
      </section>
    </>
  );
}
