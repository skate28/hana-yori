import { MessageSquareText } from "lucide-react";

import { cn } from "@/lib/cn";

/** Non-interactive preview chip for a feature that is not switched on yet. */
export function ComingSoon({ label, className }: { label: string; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex min-h-12 flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-dashed border-rice/25 px-5 py-3 text-sm font-medium text-rice/60",
        className,
      )}
    >
      <MessageSquareText className="size-4 shrink-0" aria-hidden />
      <span>{label}</span>
      <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-accent">
        Coming soon
      </span>
    </p>
  );
}
