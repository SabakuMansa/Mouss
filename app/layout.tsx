import type { Metadata } from "next";
import { Anton, Bungee, Manrope } from "next/font/google";
import { club } from "@/lib/data/club";
import { EnvironmentBadge } from "@/components/ui/EnvironmentBadge";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

/** Bold athletic block font — used only for the "Les Mousquetaires" wordmark, echoing the jersey lettering. */
const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bungee",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mousquetairesfootus.fr"),
  title: {
    default: `${club.name} — Club de football américain à Châtenay-Malabry`,
    template: `%s — ${club.name}`,
  },
  description: club.tagline,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: club.name,
    title: `${club.name} — Club de football américain à Châtenay-Malabry`,
    description: club.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${club.name} — Club de football américain à Châtenay-Malabry`,
    description: club.tagline,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    name: club.fullLegalName,
    alternateName: club.name,
    sport: "American Football",
    foundingDate: String(club.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: "254 avenue de la Division Leclerc",
      postalCode: "92290",
      addressLocality: club.city,
      addressCountry: "FR",
    },
    email: club.legalEmail,
  };

  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${anton.variable} ${manrope.variable} ${bungee.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <EnvironmentBadge />
        {children}
      </body>
    </html>
  );
}
