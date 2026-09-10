import type { SVGProps } from "react";

/**
 * lucide-react a retiré les logos de marque (Facebook, Instagram). Ces icônes
 * sont des équivalents dessinés à la main, au même style de trait que le reste
 * des icônes Lucide utilisées sur le site.
 */
export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14 9v-2a1 1 0 0 1 1-1h2V3h-2a4 4 0 0 0-4 4v2H9v3h2v9h3v-9h2.5l.5-3H14Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
