import Link from "next/link";
import { CalendarClock, Users, ImageIcon, Handshake, Settings } from "lucide-react";

const sections = [
  { href: "/admin/matchs", label: "Matchs & résultats", icon: CalendarClock, description: "Calendrier de la saison" },
  { href: "/admin/joueurs", label: "Joueurs & staff", icon: Users, description: "Effectif Sénior, U18 et coachs" },
  { href: "/admin/galerie", label: "Galerie", icon: ImageIcon, description: "Photos du club" },
  { href: "/admin/partenaires", label: "Partenaires", icon: Handshake, description: "Sponsors et partenaires" },
  { href: "/admin/infos", label: "Infos pratiques", icon: Settings, description: "Adresse, horaires, réseaux sociaux" },
];

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="font-heading text-3xl tracking-wide text-navy-950 uppercase">Tableau de bord</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-950/5 transition-transform hover:-translate-y-1"
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-navy-950/8">
              <section.icon className="size-6 text-navy-900" />
            </div>
            <div>
              <p className="font-heading tracking-wide text-navy-950 uppercase">{section.label}</p>
              <p className="text-sm text-navy-900/60">{section.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
