"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { focusRing } from "@/components/styles";
import type { Photo } from "@/content/types";
import { cn } from "@/lib/cn";
import { photoDimensions } from "@/lib/photos";

export function GalleryGrid({ photos }: { photos: Photo[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir: number) => setOpen((i) => (i == null ? i : (i + dir + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (open == null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  const current = open == null ? null : photos[open];

  return (
    <>
      <ul className="mt-12 columns-2 gap-3 sm:gap-5 lg:columns-3">
        {photos.map((photo, i) => (
          <motion.li
            key={photo.src}
            className="mb-3 break-inside-avoid sm:mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`View larger: ${photo.alt}`}
              className={cn("group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl ring-1 ring-rice/10 sm:rounded-3xl", focusRing)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                {...photoDimensions(photo)}
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </button>
          </motion.li>
        ))}
      </ul>

      <AnimatePresence>
        {current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.figure
              key={current.src}
              className="relative flex max-h-full max-w-5xl flex-col items-center"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={current.src}
                alt={current.alt}
                {...photoDimensions(current)}
                sizes="100vw"
                className="h-auto max-h-[80vh] w-auto rounded-2xl object-contain"
              />
              <figcaption className="mt-4 max-w-xl text-center text-sm text-rice/70">{current.alt}</figcaption>
            </motion.figure>
            <button type="button" onClick={close} aria-label="Close" className={cn("absolute top-4 right-4 inline-flex size-11 items-center justify-center rounded-full bg-rice/10 text-rice", focusRing)}>
              <X className="size-5" />
            </button>
            {photos.length > 1 && (
              <>
                <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous photo" className={cn("absolute left-3 inline-flex size-11 items-center justify-center rounded-full bg-rice/10 text-rice", focusRing)}>
                  <ChevronLeft className="size-6" />
                </button>
                <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next photo" className={cn("absolute right-3 inline-flex size-11 items-center justify-center rounded-full bg-rice/10 text-rice", focusRing)}>
                  <ChevronRight className="size-6" />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
