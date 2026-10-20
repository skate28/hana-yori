"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/cn";

export function HeroTitle({ name, centered }: { name: string; centered: boolean }) {
  const reduce = useReducedMotion();
  const letters = Array.from(name);

  return (
    <h1
      className={cn(
        "mt-8 font-display text-[clamp(4rem,15vw,11rem)] font-semibold leading-[0.88] tracking-tight text-rice",
        centered && "mx-auto",
      )}
      aria-label={name}
    >
      <span aria-hidden className="inline-block">
        {letters.map((ch, i) => (
          <motion.span
            key={`${ch}-${i}`}
            className={cn("inline-block", i >= letters.indexOf(" ") && letters.includes(" ") && "text-ember-gradient")}
            initial={reduce ? false : { opacity: 0, y: "0.4em", filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            {ch === " " ? "\u00a0" : ch}
          </motion.span>
        ))}
      </span>
    </h1>
  );
}
