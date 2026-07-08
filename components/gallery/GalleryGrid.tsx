import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { Photo } from "@/lib/supabase/photos";

export function GalleryGrid({ photos }: { photos: Photo[] }) {
  return (
    <RevealOnScroll className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:auto-rows-[220px] lg:grid-cols-4">
      {photos.map((photo, index) => {
        const tall = index % 7 === 0;
        return (
          <div
            key={photo.id}
            className={`group relative overflow-hidden rounded-xl ${
              tall ? "row-span-2" : "aspect-square sm:aspect-auto"
            }`}
          >
            <Image
              src={photo.image_url}
              alt={photo.caption ?? "Photo des Mousquetaires"}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-navy-950/0 transition-colors duration-300 group-hover:bg-navy-950/10" />
          </div>
        );
      })}
    </RevealOnScroll>
  );
}
