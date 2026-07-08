"use client";

import Image from "next/image";
import { deletePhoto } from "@/app/admin/galerie/actions";
import type { Photo } from "@/lib/supabase/photos";

export function PhotoGrid({ photos }: { photos: Photo[] }) {
  if (photos.length === 0) return <p className="text-sm text-navy-900/60">Aucune photo pour l&apos;instant.</p>;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {photos.map((photo) => (
        <div key={photo.id} className="group relative aspect-square overflow-hidden rounded-xl bg-navy-950/5">
          <Image src={photo.image_url} alt={photo.caption ?? ""} fill className="object-cover" />
          <button
            onClick={() => {
              if (confirm("Supprimer cette photo ?")) deletePhoto(photo.id);
            }}
            className="absolute inset-0 flex items-center justify-center bg-navy-950/0 text-sm font-semibold text-white opacity-0 transition-all group-hover:bg-navy-950/60 group-hover:opacity-100"
          >
            Supprimer
          </button>
        </div>
      ))}
    </div>
  );
}
