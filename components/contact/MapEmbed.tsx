export function MapEmbed({ src }: { src: string }) {
  return (
    <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-navy-950/8">
      <iframe
        src={src}
        width="100%"
        height="360"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localisation du stade Jean Longuet, Châtenay-Malabry"
      />
    </div>
  );
}
