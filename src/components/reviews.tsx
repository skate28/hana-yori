import { ArrowUpRight, Quote, Star } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Seigaiha } from "@/components/seigaiha";
import { container, eyebrow, focusRing } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { safeHref } from "@/lib/ordering";

/** Aggregate rating plus linked testimonials. Only real, verifiable data from site.ts. */
export function Reviews() {
  const rating = site.rating;
  const quotes = site.testimonials.flatMap((t) => {
    const href = safeHref(t.sourceUrl);
    if (!t.quote.trim() || !href) return [];
    return [{ ...t, href }];
  });
  if (!rating && quotes.length === 0) return null;
  const pct = rating ? Math.max(0, Math.min(100, (rating.value / 5) * 100)) : 0;

  return (
    <section id="reviews" className="relative overflow-hidden bg-nori/50 py-24 md:py-32">
      <Seigaiha className="text-rice/[0.05] mask-fade-y" fill="var(--hy-nori)" />
      <div className={cn(container, "relative")}>
        {rating && rating.count > 0 && (
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>What guests say</p>
            <div className="mt-6 font-display text-[clamp(6rem,20vw,12rem)] leading-none font-semibold text-ember-gradient">
              {rating.value.toFixed(1)}
            </div>
            <div className="relative mx-auto mt-2 inline-flex" aria-label={`${rating.value} out of 5 stars`}>
              <span className="flex gap-1 text-rice/20" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-7 fill-current" />
                ))}
              </span>
              <span className="absolute inset-0 flex gap-1 overflow-hidden text-accent" style={{ width: `${pct}%` }} aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-7 shrink-0 fill-current" />
                ))}
              </span>
            </div>
            <p className="mt-5 text-lg text-rice/70">
              Average across about{" "}
              <strong className="font-semibold text-rice">{rating.count.toLocaleString("en-US")}</strong> {rating.source} ratings
            </p>
          </Reveal>
        )}

        {quotes.length > 0 && (
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {quotes.map((q, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <figure className="flex h-full flex-col rounded-3xl bg-ink/60 p-7 ring-1 ring-rice/10">
                  <Quote className="size-7 text-brand" aria-hidden />
                  <blockquote className="mt-4 flex-1 font-display text-xl leading-snug text-rice/90">“{q.quote}”</blockquote>
                  <figcaption className="mt-6 flex items-center justify-between text-sm text-rice/60">
                    <span>{q.author?.trim()}</span>
                    <a href={q.href} target="_blank" rel="noopener noreferrer" className={cn("inline-flex items-center gap-1 rounded-full underline underline-offset-4", focusRing)}>
                      {q.sourceLabel} <ArrowUpRight className="size-3.5" aria-hidden />
                    </a>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
