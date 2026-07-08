import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/RevealOnScroll";

const categories = [
  {
    title: "Les Seniors",
    description: "Une équipe expérimentée et ambitieuse prête à relever tous les défis.",
    image: "/images/hero/equipes.jpg",
    href: "/equipes",
  },
  {
    title: "Les Jeunes",
    description: "Nos U15 et U18, la relève du club et des futurs champions.",
    image: "/images/hero/calendrier.jpg",
    href: "/equipes",
  },
  {
    title: "Flag Football",
    description: "Dès 14 ans, mixte et ouvert à tous — une autre façon de vivre le foot US.",
    image: "/images/hero/nous-rejoindre.jpg",
    href: "/nous-rejoindre",
  },
];

export function Categories() {
  return (
    <section className="bg-offwhite-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading kicker="Nos sections" title="Les catégories" tone="light" />

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <StaggerItem key={category.title}>
              <Link
                href={category.href}
                className="group relative flex aspect-[4/5] overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 ease-out hover:-translate-y-1 hover:rotate-[0.5deg]"
              >
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                <div className="relative mt-auto p-7">
                  <h3 className="font-heading text-2xl tracking-wide text-white uppercase">{category.title}</h3>
                  <p className="mt-2 max-w-xs text-sm text-white/75">{category.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-gold-400 uppercase opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Découvrir <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
