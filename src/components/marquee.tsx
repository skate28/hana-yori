import { site } from "@/content/site";
import { visibleCategories } from "@/lib/menu";

/** Slow scrolling ribbon built from the menu category names in site.ts. */
export function Marquee() {
  const words = visibleCategories(site.menu).map((c) => c.name);
  if (words.length === 0) return null;
  const run = [...words, ...words, ...words];

  return (
    <div aria-hidden className="relative overflow-hidden border-y border-rice/10 bg-gradient-to-r from-brand-deep/30 via-ink to-brand-deep/30 py-5">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex gap-10">
            {run.map((word, i) => (
              <span key={`${copy}-${i}`} className="flex items-center gap-10 font-display text-2xl text-rice/70 italic sm:text-3xl">
                {word}
                <span className="text-sm not-italic text-accent">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
