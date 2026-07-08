import type { LucideIcon } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import type { RecruitProfile } from "@/lib/types";

export function ProfileCard({ profile, icon: Icon }: { profile: RecruitProfile; icon?: LucideIcon }) {
  return (
    <GlassCard className="h-full text-center">
      {Icon ? (
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-navy-950/8">
          <Icon className="size-6 text-navy-900" aria-hidden />
        </div>
      ) : null}
      <h3 className="font-heading text-xl tracking-wide text-navy-950 uppercase">{profile.title}</h3>
      <p className="mt-2 text-sm text-navy-900/70">{profile.description}</p>
    </GlassCard>
  );
}
