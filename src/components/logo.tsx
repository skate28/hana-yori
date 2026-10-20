import { cn } from "@/lib/cn";

/**
 * Typographic wordmark: the restaurant has no logo file yet. The name comes from site.ts;
 * the last word gets the ember gradient. A small diamond is the only decorative glyph.
 */
export function Wordmark({ name, className }: { name: string; className?: string }) {
  const words = name.trim().split(/\s+/);
  const last = words.length > 1 ? words.pop() : null;
  return (
    <span className={cn("inline-flex items-center gap-2.5 font-display font-semibold tracking-wide text-rice", className)}>
      <span aria-hidden className="size-2 rotate-45 bg-brand shadow-[0_0_12px] shadow-brand" />
      <span>
        {words.join(" ")}
        {last && (
          <>
            {" "}
            <span className="text-ember-gradient">{last}</span>
          </>
        )}
      </span>
    </span>
  );
}
