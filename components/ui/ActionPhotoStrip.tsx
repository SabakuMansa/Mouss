import Image from "next/image";

/** Cinematic real-photo banner with a slow Ken Burns zoom — adds motion without illustration. */
export function ActionPhotoStrip() {
  return (
    <div className="relative h-56 overflow-hidden bg-navy-950 sm:h-72">
      <div className="absolute inset-0 animate-kenburns">
        <Image
          src="/images/hero/a-propos.jpg"
          alt="Les Mousquetaires en action"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-transparent to-navy-950/70" />
      <div className="absolute inset-0 bg-navy-950/20" />
    </div>
  );
}
