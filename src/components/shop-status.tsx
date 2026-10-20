"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { getShopStatus, nextOpeningLabel, type ShopStatus } from "@/lib/hours";

/** Status is computed after mount so a static page does not freeze the clock. */
export function useShopStatus(): ShopStatus | null {
  const [status, setStatus] = useState<ShopStatus | null>(null);

  useEffect(() => {
    const update = () => setStatus(getShopStatus(new Date()));
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return status;
}

export function ShopStatusPill({ className }: { className?: string }) {
  const status = useShopStatus();
  const summary = site.hours.summary.trim() || "Hours coming soon";
  let label = summary;
  // Short version for phones (< sm). The full hours summary shows from sm up.
  let short = summary;
  let tone: "open" | "closed" | "neutral" = "neutral";
  if (status?.isOpen === true) {
    label = status.todayWindow ? `Open now · until ${status.todayWindow.split("–")[1]}` : "Open now";
    short = label;
    tone = "open";
  } else if (status?.isOpen === false) {
    label = `Closed now · ${summary}`;
    const next = nextOpeningLabel(new Date());
    short = next ? `Closed now · ${next}` : "Closed now";
    tone = "closed";
  }

  return (
    <p
      aria-live="polite"
      className={cn(
        "inline-flex max-w-full items-center gap-2 rounded-2xl sm:rounded-full text-left leading-snug bg-rice/5 px-3.5 py-1.5 text-xs font-medium text-rice/85 ring-1 ring-rice/15 backdrop-blur",
        className,
      )}
    >
      <span className="relative flex size-2 shrink-0">
        {tone === "open" && (
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        )}
        <span
          className={cn(
            "relative inline-flex size-2 rounded-full",
            tone === "open" && "bg-emerald-400",
            tone === "closed" && "bg-brand",
            tone === "neutral" && "bg-accent",
          )}
        />
      </span>
      <span className="sm:hidden">{short}</span>
      <span className="hidden sm:inline">{label}</span>
    </p>
  );
}

function todayKey(): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: site.hours.timezone || "America/New_York",
    weekday: "short",
  })
    .format(new Date())
    .toLowerCase()
    .slice(0, 3);
}

const noopSubscribe = () => () => {};

/** Highlights today's row in the hours table. Null on the server so static HTML stays neutral. */
export function useTodayKey(): string | null {
  return useSyncExternalStore(noopSubscribe, todayKey, () => null);
}
