import { cn } from "@/lib/utils";

export function GlassCard({
  className,
  children,
  tone = "light",
}: {
  className?: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6 shadow-[0_8px_30px_-12px_rgba(6,11,22,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(6,11,22,0.35)]",
        tone === "light"
          ? "border-navy-950/8 bg-white/90 backdrop-blur"
          : "border-white/10 bg-white/[0.06] backdrop-blur-md",
        className
      )}
    >
      {children}
    </div>
  );
}
