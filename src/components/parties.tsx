import { CalendarHeart, Check, MessageSquareText, Phone } from "lucide-react";
import Image from "next/image";

import { ComingSoon } from "@/components/coming-soon";
import { Reveal } from "@/components/reveal";
import { Seigaiha } from "@/components/seigaiha";
import { buttonLight, buttonSecondary, container, eyebrow } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { telHref } from "@/lib/contact";
import { liveSmsHref } from "@/lib/ordering";
import { heroPhoto, photosOfCategory } from "@/lib/photos";

/** Hibachi party / group reservation request. Renders `site.customOrders`; hidden when absent. */
export function Parties() {
  const party = site.customOrders;
  if (!party || (!party.heading.trim() && !party.intro.trim())) return null;
  const sms = liveSmsHref(party.textMessage);
  // A tall food shot (not the hero) makes the panel feel like a full table. Optional.
  const hero = heroPhoto();
  const photo =
    photosOfCategory("food").find(
      (p) => p.src !== hero?.src && p.width && p.height && p.height / p.width >= 1.5,
    ) ?? null;
  const call = telHref(site.phone);
  const email = party.email.trim();
  const examples = party.examples.map((e) => e.trim()).filter(Boolean);

  return (
    <section id="parties" className="relative py-24 md:py-32">
      <div className={container}>
        <Reveal>
          <div className="grain relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-deep via-brand to-accent p-8 text-paper shadow-[0_40px_120px_-40px] shadow-brand/60 sm:p-12 md:p-16">
            <Seigaiha className="-z-10 text-paper/15 mask-fade-b" fill="transparent" size={64} />
            <div aria-hidden className="absolute -right-24 -bottom-24 -z-10 size-96 rounded-full bg-ink/25 blur-3xl" />
            <div className={cn("grid gap-10 md:items-end", photo ? "lg:grid-cols-[1.2fr_1fr_0.7fr] md:grid-cols-[1.3fr_1fr]" : "md:grid-cols-[1.3fr_1fr]")}>
              <div>
                <p className={cn(eyebrow, "text-paper/80")}>
                  <CalendarHeart className="mr-2 inline size-4 -translate-y-px" aria-hidden />
                  Parties &amp; groups
                </p>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl md:text-6xl">
                  {party.heading}
                </h2>
                {party.intro.trim() && <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/85">{party.intro}</p>}
                {party.leadTimeNote.trim() && <p className="mt-3 text-sm font-semibold text-paper/90">{party.leadTimeNote}</p>}
              </div>
              <div className="rounded-3xl bg-ink/30 p-6 ring-1 ring-paper/20 backdrop-blur-md">
                {examples.length > 0 && (
                  <ul className="grid gap-3">
                    {examples.map((example) => (
                      <li key={example} className="flex items-center gap-3 text-paper/95">
                        <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-paper/20">
                          <Check className="size-3.5" aria-hidden />
                        </span>
                        {example}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-6 grid gap-3">
                  {call && (
                    <a href={call} className={cn(buttonLight, "w-full")}>
                      <Phone className="size-4" aria-hidden />
                      Call {site.phone.display}
                    </a>
                  )}
                  {sms ? (
                    <a href={sms} className={cn(buttonSecondary, "w-full ring-paper/40 text-paper hover:text-ink")}>
                      <MessageSquareText className="size-4" aria-hidden />
                      {party.textButtonLabel.trim() || "Text us"}
                    </a>
                  ) : (
                    <ComingSoon label="Text requests" className="w-full border-paper/40 text-paper/80" />
                  )}
                  {email && (
                    <a href={`mailto:${email}`} className="text-center text-sm underline underline-offset-4">
                      {email}
                    </a>
                  )}
                </div>
              </div>
              {photo && (
                <div className="relative hidden aspect-[3/5] overflow-hidden rounded-3xl ring-1 ring-paper/25 lg:block">
                  <Image src={photo.src} alt={photo.alt} fill sizes="20rem" className="object-cover" />
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
