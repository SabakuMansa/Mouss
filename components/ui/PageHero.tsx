import Image from "next/image";

export function PageHero({
  image,
  imageAlt,
  kicker,
  title,
  description,
}: {
  image: string;
  imageAlt: string;
  kicker?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative flex h-[60svh] min-h-[420px] items-end overflow-hidden bg-navy-950">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/20" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 sm:px-8 lg:px-10">
        {kicker ? (
          <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-gold-400 uppercase">{kicker}</p>
        ) : null}
        <h1 className="font-heading text-5xl leading-[0.95] text-white uppercase sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description ? <p className="mt-4 max-w-xl text-white/75">{description}</p> : null}
      </div>
    </section>
  );
}
