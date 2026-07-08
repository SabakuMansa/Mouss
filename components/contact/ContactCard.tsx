import type { LucideIcon } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export function ContactCard({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <GlassCard className="h-full text-center">
      <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-navy-950/8">
        <Icon className="size-5 text-navy-900" aria-hidden />
      </div>
      <h3 className="font-heading text-lg tracking-wide text-navy-950 uppercase">{title}</h3>
      <div className="mt-3 text-sm text-navy-900/70">{children}</div>
    </GlassCard>
  );
}
