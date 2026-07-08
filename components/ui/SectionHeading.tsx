import { cn } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
  tone = "dark",
  className,
}: {
  kicker?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <RevealOnScroll
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {kicker ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold tracking-[0.3em] uppercase",
            tone === "dark" ? "text-gold-400" : "text-gold-500"
          )}
        >
          {kicker}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-heading text-4xl leading-[0.95] uppercase tracking-tight sm:text-5xl",
          tone === "dark" ? "text-white" : "text-navy-950"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-white/70" : "text-navy-900/70"
          )}
        >
          {description}
        </p>
      ) : null}
    </RevealOnScroll>
  );
}
