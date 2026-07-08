import Link from "next/link";
import { type LucideIcon, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { TapButton } from "@/components/ui/TapButton";

type ButtonVariant = "primary" | "secondary" | "ghost";

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 shadow-[0_8px_24px_-8px_rgba(242,183,5,0.6)] hover:shadow-[0_12px_32px_-8px_rgba(242,183,5,0.75)] hover:-translate-y-0.5",
  secondary:
    "bg-white/10 text-white backdrop-blur-md border border-white/25 hover:bg-white/20 hover:-translate-y-0.5",
  ghost: "text-navy-900 hover:text-gold-500",
};

interface BaseProps {
  variant?: ButtonVariant;
  icon?: LucideIcon;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = BaseProps &
  (
    | ({ href: string } & React.ComponentPropsWithoutRef<typeof Link>)
    | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  );

export function Button({ variant = "primary", icon: Icon = ArrowRight, className, children, ...props }: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400",
    VARIANT_STYLES[variant],
    className
  );

  const content = (
    <>
      {children}
      <Icon className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
    </>
  );

  if ("href" in props && props.href) {
    const { href } = props;
    return (
      <TapButton href={href} className={classes}>
        {content}
      </TapButton>
    );
  }

  return (
    <TapButton className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </TapButton>
  );
}
