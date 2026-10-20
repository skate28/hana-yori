"use client";

import { motion, useReducedMotion } from "framer-motion";

/** A few drifting sakura petals. Deterministic positions so server and client markup match. */
const PETALS = [
  { left: "8%", delay: 0, duration: 16, size: 10, drift: 60 },
  { left: "22%", delay: 5, duration: 19, size: 7, drift: -40 },
  { left: "41%", delay: 2, duration: 17, size: 9, drift: 80 },
  { left: "63%", delay: 8, duration: 21, size: 12, drift: -70 },
  { left: "78%", delay: 3.5, duration: 18, size: 8, drift: 50 },
  { left: "91%", delay: 11, duration: 20, size: 10, drift: -30 },
];

export function SakuraPetals() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {PETALS.map((p, i) => (
        <motion.span
          key={i}
          className="absolute -top-6 block rounded-[60%_0_60%_0] bg-sakura/70 shadow-[0_0_12px] shadow-sakura/30"
          style={{ left: p.left, width: p.size, height: p.size * 0.8 }}
          initial={{ y: -40, x: 0, rotate: 0, opacity: 0 }}
          animate={{ y: "110vh", x: p.drift, rotate: 360, opacity: [0, 0.9, 0.9, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}
