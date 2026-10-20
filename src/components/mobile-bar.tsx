import { MessageSquareText, Navigation, Phone } from "lucide-react";

import { focusRing } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { telHref } from "@/lib/contact";
import { directionsHref } from "@/lib/maps";
import { preorderSmsHref } from "@/lib/ordering";

/** Sticky bottom action bar on phones: call (primary), text, directions. */
export function MobileBar() {
  const call = telHref(site.phone);
  const sms = preorderSmsHref();
  const directions = directionsHref();
  if (!call && !sms && !directions) return null;
  const item = cn(
    "flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl py-2 text-[0.7rem] font-semibold text-rice/85",
    focusRing,
  );

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-3 bottom-3 z-40 flex items-stretch gap-1 rounded-3xl bg-ink/85 p-1.5 shadow-[0_20px_50px_-10px] shadow-black ring-1 ring-rice/15 backdrop-blur-xl md:hidden"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      {call && (
        <a href={call} className={cn(item, "flex-[1.6] flex-row gap-2 bg-gradient-to-r from-brand-deep via-brand to-accent text-sm text-paper")}>
          <Phone className="size-5" aria-hidden /> Call now
        </a>
      )}
      {sms && (
        <a href={sms} className={item}>
          <MessageSquareText className="size-5 text-sakura" aria-hidden /> Text
        </a>
      )}
      {directions && (
        <a href={directions} target="_blank" rel="noopener noreferrer" className={item}>
          <Navigation className="size-5 text-accent" aria-hidden /> Directions
        </a>
      )}
    </nav>
  );
}
