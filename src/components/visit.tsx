import { Clock, MapPin, Navigation, Phone } from "lucide-react";

import { HoursList } from "@/components/hours-list";
import { Reveal } from "@/components/reveal";
import { buttonPrimary, buttonSecondary, container, eyebrow, sectionTitle } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { telHref } from "@/lib/contact";
import { directionsHref, mapEmbedSrc } from "@/lib/maps";

export function Visit() {
  const call = telHref(site.phone);
  const directions = directionsHref();
  const embed = mapEmbedSrc();

  return (
    <section id="visit" className="relative py-24 md:py-32">
      <div className={container}>
        <Reveal className="max-w-2xl">
          <p className={eyebrow}>Visit</p>
          <h2 className={cn(sectionTitle, "mt-4")}>Find us on Beach Blvd</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="grid gap-6">
            <div className="rounded-3xl bg-surface p-7 ring-1 ring-rice/10">
              <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-rice/60">
                <Clock className="size-4 text-accent" aria-hidden /> Hours
              </h3>
              <HoursList />
            </div>
            <div className="rounded-3xl bg-surface p-7 ring-1 ring-rice/10">
              <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-rice/60">
                <MapPin className="size-4 text-accent" aria-hidden /> Address
              </h3>
              <address className="mt-4 font-display text-2xl leading-snug not-italic text-rice">
                {site.address.street} {site.address.suite}
                <br />
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </address>
              {site.locationHint.trim() && <p className="mt-2 text-sm text-rice/60">{site.locationHint}</p>}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {directions && (
                  <a href={directions} target="_blank" rel="noopener noreferrer" className={buttonPrimary}>
                    <Navigation className="size-4" aria-hidden /> Directions
                  </a>
                )}
                {call && (
                  <a href={call} className={buttonSecondary}>
                    <Phone className="size-4" aria-hidden /> {site.phone.display}
                  </a>
                )}
              </div>
            </div>
          </Reveal>

          {embed && (
            <Reveal delay={0.1} className="min-h-[24rem]">
              <div className="relative h-full min-h-[24rem] overflow-hidden rounded-3xl ring-1 ring-rice/15">
                <iframe
                  title={`Map to ${site.name}, ${site.address.full}`}
                  src={embed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0 [filter:invert(0.9)_hue-rotate(180deg)_saturate(0.6)_brightness(0.95)]"
                />
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
