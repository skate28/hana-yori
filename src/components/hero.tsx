import { ArrowDown, MapPin, Phone, Star } from "lucide-react";
import Image from "next/image";

import { HeroTitle } from "@/components/hero-title";
import { SakuraPetals } from "@/components/sakura-petals";
import { Seigaiha } from "@/components/seigaiha";
import { ShopStatusPill } from "@/components/shop-status";
import { buttonPrimary, buttonSecondary, container, focusRing } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { telHref } from "@/lib/contact";
import { directionsHref } from "@/lib/maps";
import { heroPhoto, photoDimensions } from "@/lib/photos";

export function Hero() {
  const call = telHref(site.phone);
  const directions = directionsHref();
  const photo = heroPhoto();
  const rating = site.rating;

  return (
    <section id="top" className="grain relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-28 md:pb-20">
      {/* Grill glow */}
      <div aria-hidden className="absolute inset-0 -z-20 bg-ink" />
      <div
        aria-hidden
        className="absolute -bottom-[30%] left-1/2 -z-10 h-[75vh] w-[140vw] -translate-x-1/2 animate-ember rounded-[50%] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--hy-accent)_70%,transparent),color-mix(in_oklab,var(--hy-brand)_45%,transparent)_45%,transparent_75%)] blur-2xl"
      />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 -z-10 size-[36rem] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--hy-salmon)_22%,transparent),transparent)] blur-2xl"
      />
      {photo && (
        <div aria-hidden className="absolute inset-0 -z-10">
          <Image
            src={photo.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="scale-110 object-cover opacity-45 blur-[2px] saturate-[1.1]"
          />
          {/* Dark overlay keeps the type legible over any photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/70" />
        </div>
      )}
      <Seigaiha className="-z-10 text-rice/[0.07] mask-fade-t" fill={photo ? "transparent" : "var(--hy-ink)"} />
      <SakuraPetals />

      <div className={cn(container, "grid grid-cols-1 items-center gap-12", photo && "lg:grid-cols-[1.2fr_0.8fr]")}>
        <div className={cn("min-w-0", !photo && "mx-auto max-w-4xl text-center")}>
          <ShopStatusPill />
          <HeroTitle name={site.name} centered={!photo} />
          {site.tagline.trim() && (
            <p className={cn("mt-6 max-w-xl text-lg leading-relaxed text-rice/75 sm:text-xl", !photo && "mx-auto")}>
              {site.tagline}
            </p>
          )}
          <p className={cn("mt-3 flex items-center gap-2 text-sm text-rice/55", !photo && "justify-center")}>
            <MapPin className="size-4 text-accent" aria-hidden />
            {site.address.full}
          </p>

          <div className={cn("mt-9 flex flex-col gap-3 sm:flex-row", !photo && "justify-center")}>
            {call && (
              <a href={call} className={cn(buttonPrimary, "min-h-14 px-8 text-base")}>
                <Phone className="size-5" aria-hidden />
                Call {site.phone.display}
              </a>
            )}
            {directions && (
              <a href={directions} target="_blank" rel="noopener noreferrer" className={cn(buttonSecondary, "min-h-14 px-8 text-base")}>
                <MapPin className="size-5" aria-hidden />
                Get directions
              </a>
            )}
          </div>

          {rating && rating.count > 0 && (
            <a
              href="#reviews"
              className={cn(
                "mt-10 inline-flex items-center gap-3 rounded-full px-1 text-sm text-rice/70 transition-colors hover:text-rice",
                focusRing,
              )}
            >
              <span className="flex" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" />
                ))}
              </span>
              <span>
                <strong className="font-semibold text-rice">{rating.value.toFixed(1)}</strong> from{" "}
                {rating.count.toLocaleString("en-US")} {rating.source} ratings
              </span>
            </a>
          )}
        </div>

        {photo && (
          <div className="relative mx-auto hidden w-full max-w-sm rotate-[1.5deg] lg:block">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/40 via-brand/30 to-sakura/30 blur-xl" aria-hidden />
            <Image
              src={photo.src}
              alt={photo.alt}
              {...photoDimensions(photo)}
              priority
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="relative aspect-[3/4] h-auto w-full rounded-[1.75rem] object-cover ring-1 ring-rice/15"
            />
          </div>
        )}
      </div>

      <a
        href="#experience"
        aria-label="Scroll to the experience section"
        className={cn(
          "absolute bottom-24 left-1/2 hidden -translate-x-1/2 rounded-full p-2 text-rice/50 transition-colors hover:text-rice md:bottom-8 md:block",
          focusRing,
        )}
      >
        <ArrowDown className="size-5 animate-bounce" />
      </a>
    </section>
  );
}
