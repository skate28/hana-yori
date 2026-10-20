"use client";

import { useTodayKey } from "@/components/shop-status";
import { site } from "@/content/site";
import type { Weekday } from "@/content/types";
import { cn } from "@/lib/cn";
import { dayHours, formatClock } from "@/lib/hours";

const DAYS: Array<[Weekday, string]> = [
  ["mon", "Monday"],
  ["tue", "Tuesday"],
  ["wed", "Wednesday"],
  ["thu", "Thursday"],
  ["fri", "Friday"],
  ["sat", "Saturday"],
  ["sun", "Sunday"],
];

export function HoursList() {
  const today = useTodayKey();
  const rows = DAYS.map(([key, label]) => {
    const day = dayHours(site.hours, key);
    let value: string | null = null;
    if (day?.closed) value = "Closed";
    else if (day?.openTime && day.closeTime) value = `${formatClock(day.openTime)} – ${formatClock(day.closeTime)}`;
    return { key, label, value };
  }).filter((row) => row.value);

  if (rows.length === 0) {
    return <p className="mt-4 text-rice/70">{site.hours.summary.trim() || "Call for hours"}</p>;
  }

  return (
    <dl className="mt-4 grid">
      {rows.map((row) => {
        const isToday = row.key === today;
        return (
          <div
            key={row.key}
            className={cn(
              "flex items-center justify-between rounded-xl px-3 py-2.5 text-sm",
              isToday ? "bg-gradient-to-r from-brand/25 to-transparent text-rice" : "text-rice/70",
            )}
          >
            <dt className="flex items-center gap-2 font-medium">
              {row.label}
              {isToday && <span className="rounded-full bg-accent px-1.5 py-0.5 text-[0.6rem] font-bold uppercase text-ink">Today</span>}
            </dt>
            <dd className={cn(row.value === "Closed" && "text-sakura")}>{row.value}</dd>
          </div>
        );
      })}
    </dl>
  );
}
