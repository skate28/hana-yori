import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { container, eyebrow, sectionTitle } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { galleryPhotos, photoDimensions } from "@/lib/photos";

/** Renders only when site.photos has approved images. */
export function Gallery() {
  const photos = galleryPhotos();
  if (photos.length === 0) return null;

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className={container}>
        <Reveal>
          <p className={eyebrow}>Gallery</p>
          <h2 className={cn(sectionTitle, "mt-4")}>Inside {site.name}</h2>
        </Reveal>
        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {photos.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 3) * 0.08} className="mb-5 break-inside-avoid">
              <figure className="overflow-hidden rounded-3xl ring-1 ring-rice/10">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  {...photoDimensions(photo)}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full transition-transform duration-700 hover:scale-[1.03]"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
