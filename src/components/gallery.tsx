import { GalleryGrid } from "@/components/gallery-grid";
import { Reveal } from "@/components/reveal";
import { container, eyebrow, sectionTitle } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { galleryPhotos } from "@/lib/photos";

/** Renders only when site.photos has approved images. */
export function Gallery() {
  const photos = galleryPhotos();
  if (photos.length === 0) return null;

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className={container}>
        <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className={eyebrow}>Gallery</p>
            <h2 className={cn(sectionTitle, "mt-4")}>A table at {site.name}</h2>
          </div>
          <p className="text-sm text-rice/50">Tap a photo to view it larger.</p>
        </Reveal>
        <GalleryGrid photos={photos} />
      </div>
    </section>
  );
}
