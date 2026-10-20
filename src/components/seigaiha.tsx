import { useId } from "react";

import { cn } from "@/lib/cn";

/**
 * Seigaiha (blue ocean wave) pattern. Rings are filled with `fill` so each row overlaps the one
 * above it, the way the traditional pattern is drawn. Fade it with a mask class.
 */
export function Seigaiha({
  className,
  stroke = "currentColor",
  fill = "var(--hy-ink)",
  size = 56,
}: {
  className?: string;
  stroke?: string;
  fill?: string;
  size?: number;
}) {
  const id = useId().replace(/:/g, "");
  const rows: Array<[number, number]> = [
    [20, 0],
    [0, 10],
    [40, 10],
    [20, 20],
  ];
  return (
    <svg aria-hidden className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}>
      <defs>
        <pattern id={id} width={size} height={size / 2} patternUnits="userSpaceOnUse" viewBox="0 0 40 20">
          {rows.map(([cx, cy]) => (
            <g key={`${cx}-${cy}`}>
              {[20, 15, 10, 5].map((r) => (
                <circle key={r} cx={cx} cy={cy} r={r} fill={fill} stroke={stroke} strokeWidth={0.7} />
              ))}
            </g>
          ))}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
