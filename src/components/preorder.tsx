import { MessageSquareText, Phone } from "lucide-react";

import { ComingSoon } from "@/components/coming-soon";
import { Reveal } from "@/components/reveal";
import { buttonPrimary, buttonSecondary, container, eyebrow, sectionTitle } from "@/components/styles";
import { site, textTarget } from "@/content/site";
import { cn } from "@/lib/cn";
import { phoneLabel, telHref } from "@/lib/contact";
import { liveSmsHref, textingEnabled } from "@/lib/ordering";

/**
 * Takeout / pre-order. Tap-to-call is the live action. Text ordering is a switch: it turns on when
 * site.ts sets `textNumber` (or lists an `sms` ordering link). Until then it shows as "coming soon"
 * and no sms: link is rendered.
 */
export function Preorder() {
  const p = site.preorder;
  if (!p.heading.trim()) return null;
  const live = textingEnabled();
  const sms = liveSmsHref(p.textMessage);
  const call = telHref(site.phone);
  const label = p.textButtonLabel.trim() || "Text your order";

  return (
    <section id="order" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden className="absolute top-1/2 left-0 -z-10 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--hy-salmon)_14%,transparent),transparent)]" />
      <div className={cn(container, "grid items-center gap-14 md:grid-cols-2")}>
        <Reveal>
          <p className={eyebrow}>Pickup</p>
          <h2 className={cn(sectionTitle, "mt-4")}>{p.heading}</h2>
          {p.intro.trim() && <p className="mt-6 max-w-lg text-lg leading-relaxed text-rice/70">{p.intro}</p>}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {call && (
              <a href={call} className={cn(buttonPrimary, "min-h-14 px-8 text-base")}>
                <Phone className="size-5" aria-hidden />
                Call to order {site.phone.display}
              </a>
            )}
            {live && sms ? (
              <a href={sms} className={cn(buttonSecondary, "min-h-14 px-8 text-base")}>
                <MessageSquareText className="size-5" aria-hidden />
                {label}
              </a>
            ) : (
              <ComingSoon label="Text-ahead ordering" />
            )}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mx-auto w-full max-w-sm">
            {!live && (
              <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-ink shadow-lg">
                Preview · not live yet
              </span>
            )}
            {/* Phone-style preview of the prefilled text */}
            <div className={cn("rounded-[2.5rem] bg-gradient-to-b from-surface-2 to-surface p-3 shadow-[0_40px_100px_-30px] shadow-black ring-1 ring-rice/15", !live && "opacity-90")}>
              <div className="rounded-[2rem] bg-ink px-5 pt-5 pb-8">
                <div className="mx-auto h-1.5 w-16 rounded-full bg-rice/15" aria-hidden />
                <div className="mt-5 flex items-center gap-3 border-b border-rice/10 pb-4">
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-brand to-accent font-display text-lg font-bold text-paper">
                    {site.name.trim().charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-rice">{site.name}</p>
                    <p className="text-xs text-rice/50">{live ? phoneLabel(textTarget()) : "Texting line coming soon"}</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 text-sm">
                  <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-gradient-to-br from-brand to-brand-deep px-4 py-3 text-paper">
                    {p.textMessage.trim()}
                  </p>
                  <p className="ml-auto flex w-fit items-center gap-1 rounded-2xl rounded-br-md bg-rice/10 px-4 py-3" aria-hidden>
                    {[0, 1, 2].map((i) => (
                      <span key={i} className="size-1.5 animate-bounce rounded-full bg-rice/60" style={{ animationDelay: `${i * 150}ms` }} />
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
