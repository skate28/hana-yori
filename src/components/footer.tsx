import Link from "next/link";

import { SakuraMon } from "@/components/logo";
import { Seigaiha } from "@/components/seigaiha";
import { focusRing } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { telHref } from "@/lib/contact";
import { directionsHref } from "@/lib/maps";
import { primaryNav } from "@/lib/nav";
import { safeHref } from "@/lib/ordering";

export function Footer() {
  const phoneHref = safeHref(telHref(site.phone));
  const directions = directionsHref();
  const socials = site.socials.flatMap((s) => {
    const href = safeHref(s.href);
    if (!href || !s.label.trim()) return [];
    return [{ label: s.label.trim(), href }];
  });
  const credit = site.footerCredit.trim() || "Built by nicklopacki.com";

  return (
    <footer className="relative overflow-hidden border-t border-rice/10 bg-ink">
      <Seigaiha className="text-rice/[0.05] mask-fade-t" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <SakuraMon className="size-12 text-brand" />
            <p className="font-display text-4xl font-semibold text-rice">{site.name}</p>
          </div>
          {site.tagline.trim() && <p className="mt-4 max-w-sm font-display text-lg italic text-rice/60">{site.tagline}</p>}
          <p className="mt-6 text-rice/80">{site.address.full}</p>
          {phoneHref && (
            <a href={phoneHref} className={cn("mt-2 inline-block rounded-full text-lg font-semibold text-accent", focusRing)}>
              {site.phone.display}
            </a>
          )}
        </div>
        <nav aria-label="Footer" className="grid content-start gap-2 text-sm">
          {primaryNav().map((link) => (
            <Link key={link.href} href={link.href} className={cn("w-fit rounded-full py-1 text-rice/70 hover:text-rice", focusRing)}>
              {link.label}
            </Link>
          ))}
          {directions && (
            <a href={directions} target="_blank" rel="noopener noreferrer" className={cn("w-fit rounded-full py-1 text-rice/70 hover:text-rice", focusRing)}>
              Get directions
            </a>
          )}
        </nav>
        <div className="grid content-start gap-2 text-sm text-rice/70">
          {site.hours.summary.trim() && <p className="text-base font-semibold text-rice">{site.hours.summary}</p>}
          {socials.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className={cn("w-fit rounded-full underline underline-offset-4", focusRing)}>
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <div className="relative border-t border-rice/10 px-5 pt-6 pb-28 md:pb-8">
        <p className="text-center text-xs text-rice/40">
          © {site.name} · {site.address.city}, {site.address.region}
        </p>
        <p className="mt-3 text-center text-sm">
          <a
            href="https://nicklopacki.com"
            target="_blank"
            rel="noopener noreferrer"
            className={cn("rounded-full text-rice/70 underline decoration-brand underline-offset-4 hover:text-rice", focusRing)}
          >
            {credit}
          </a>
        </p>
      </div>
    </footer>
  );
}
