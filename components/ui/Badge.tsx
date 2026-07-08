import { cn } from "@/lib/utils";

type BadgeTone = "gold" | "live" | "past" | "neutral";

const TONE_STYLES: Record<BadgeTone, string> = {
  gold: "bg-gold-400/15 text-gold-500 ring-1 ring-inset ring-gold-400/40",
  live: "bg-state-live/15 text-state-live ring-1 ring-inset ring-state-live/40",
  past: "bg-anthracite-600/15 text-anthracite-600 ring-1 ring-inset ring-anthracite-600/30",
  neutral: "bg-navy-900/8 text-navy-900 ring-1 ring-inset ring-navy-900/15",
};

export function Badge({
  tone = "neutral",
  className,
  children,
}: {
  tone?: BadgeTone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase",
        TONE_STYLES[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
