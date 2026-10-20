import { Clock, MessageSquareText, Phone } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { buttonPrimary, buttonSecondary, container, eyebrow, sectionTitle } from "@/components/styles";
import { site, textTarget } from "@/content/site";
import { cn } from "@/lib/cn";
import { phoneLabel, telHref } from "@/lib/contact";
import { preorderSmsHref } from "@/lib/ordering";

/**
 * Text pre-order. Built to be rewired to a dedicated texting number later: set
 * `site.textNumber` (or add an `sms` ordering link) and every text button follows.
 */
export function Preorder() {
  const p = site.preorder;
  if (!p.heading.trim()) return null;
  const sms = preorderSmsHref();
  const call = telHref(site.phone);
  const to = phoneLabel(textTarget());

  return (
    <section id="order" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden className="absolute top-1/2 left-0 -z-10 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--hy-salmon)_14%,transparent),transparent)]" />
      <div className={cn(container, "grid items-center gap-14 md:grid-cols-2")}>
        <Reveal>
          <p className={eyebrow}>Pickup</p>
          <h2 className={cn(sectionTitle, "mt-4")}>{p.heading}</h2>
          {p.intro.trim() && <p className="mt-6 max-w-lg text-lg leading-relaxed text-rice/70">{p.intro}</p>}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {sms && (
              <a href={sms} className={cn(buttonPrimary, "min-h-14 px-8 text-base")}>
                <MessageSquareText className="size-5" aria-hidden />
                {p.textButtonLabel.trim() || "Text your order"}
              </a>
            )}
            {call && (
              <a href={call} className={cn(buttonSecondary, "min-h-14 px-8 text-base")}>
                <Phone className="size-5" aria-hidden />
                Call to order
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          {/* Phone-style preview of the prefilled text */}
          <div className="relative mx-auto w-full max-w-sm rounded-[2.5rem] bg-gradient-to-b from-surface-2 to-surface p-3 shadow-[0_40px_100px_-30px] shadow-black ring-1 ring-rice/15">
            <div className="rounded-[2rem] bg-ink px-5 pt-5 pb-8">
              <div className="mx-auto h-1.5 w-16 rounded-full bg-rice/15" aria-hidden />
              <div className="mt-5 flex items-center gap-3 border-b border-rice/10 pb-4">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-brand to-accent font-display text-lg font-bold text-paper">
                  {site.name.trim().charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-rice">{site.name}</p>
                  <p className="text-xs text-rice/50">{to}</p>
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
                <p className="flex items-center gap-2 text-xs text-rice/40">
                  <Clock className="size-3.5" aria-hidden /> Add your order and pickup time
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
