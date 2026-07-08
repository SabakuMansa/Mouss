import { UserRound } from "lucide-react";
import { initials } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function PlayerPlaceholder({ name, className }: { name: string; className?: string }) {
  return (
    <div
      className={cn(
        "relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-navy-800 via-navy-900 to-ink-950",
        className
      )}
      role="img"
      aria-label={`Photo à venir — ${name}`}
    >
      <UserRound className="absolute -bottom-3 size-28 text-white/10" strokeWidth={1} aria-hidden />
      <span className="font-heading text-3xl tracking-wide text-gold-400">{initials(name)}</span>
    </div>
  );
}
