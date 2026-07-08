import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { club, navLinks } from "@/lib/data/club";
import { contactInfo } from "@/lib/data/contact";
import { Container } from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white/70">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-wordmark text-xl tracking-normal text-white uppercase">{club.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">{club.tagline}</p>
          <div className="mt-5 flex gap-3">
            <a
              href={contactInfo.facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook des Mousquetaires"
              className="flex size-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-gold-400 hover:text-navy-950"
            >
              <FacebookIcon className="size-4" />
            </a>
            <a
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram des Mousquetaires"
              className="flex size-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-gold-400 hover:text-navy-950"
            >
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Plan du site">
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">Navigation</p>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">Contact</p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-gold-400" />
              <a href={`mailto:${contactInfo.email}`} className="transition-colors hover:text-white">
                {contactInfo.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold-400" />
              <span>{contactInfo.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">Rejoindre</p>
          <p className="text-sm leading-relaxed">
            Saison en cours — joueurs, coachs, arbitres et bénévoles bienvenus.
          </p>
          <Link
            href="/nous-rejoindre"
            className="mt-3 inline-block text-sm font-semibold text-gold-400 hover:text-gold-300"
          >
            Postuler →
          </Link>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {club.name}</p>
          <Link href="/mentions-legales" className="hover:text-white/70">
            Mentions légales
          </Link>
        </Container>
      </div>
    </footer>
  );
}
