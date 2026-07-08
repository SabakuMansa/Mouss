import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { historyTimeline } from "@/lib/data/about";

export function HistoryTimeline() {
  return (
    <ol className="relative space-y-10 border-l-2 border-gold-400/30 pl-8 sm:pl-10">
      {historyTimeline.map((beat, index) => (
        <RevealOnScroll as="li" key={beat.year} delay={index * 0.1} className="relative">
          <span className="absolute top-1 -left-[41px] flex size-5 items-center justify-center rounded-full bg-gold-400 sm:-left-[49px]" />
          <p className="font-heading text-2xl tracking-wide text-gold-500 uppercase">{beat.year}</p>
          <h3 className="mt-1 font-heading text-xl tracking-wide text-navy-950 uppercase">{beat.title}</h3>
          <p className="mt-2 max-w-2xl text-navy-900/70">{beat.text}</p>
        </RevealOnScroll>
      ))}
    </ol>
  );
}
