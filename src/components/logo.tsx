import { cn } from "@/lib/cn";

/** Sakura mon. A drawn mark (not a photo or a logo file) used until a real logo is approved. */
export function SakuraMon({ className }: { className?: string }) {
  const petals = [0, 72, 144, 216, 288];
  return (
    <svg viewBox="0 0 100 100" aria-hidden className={cn("size-10", className)}>
      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.9" />
      {petals.map((deg) => (
        <path
          key={deg}
          transform={`rotate(${deg} 50 50)`}
          d="M50 50 C 38 38, 36 20, 46 13 L 50 18 L 54 13 C 64 20, 62 38, 50 50 Z"
          fill="currentColor"
        />
      ))}
      <circle cx="50" cy="50" r="5" fill="var(--hy-ink)" />
    </svg>
  );
}
