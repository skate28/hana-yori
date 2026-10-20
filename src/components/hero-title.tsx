"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/cn";

/** Animated name. Words never break mid-word; the last word gets the ember gradient. */
export function HeroTitle({ name, centered }: { name: string; centered: boolean }) {
  const reduce = useReducedMotion();
  const words = name.trim().split(/\s+/);
  let index = 0;

  return (
    <h1
      className={cn(
        "mt-8 font-display font-semibold leading-[0.9] tracking-tight text-rice",
        centered ? "mx-auto text-[clamp(4rem,15vw,11rem)]" : "text-[clamp(3.75rem,10vw,8.5rem)]",
      )}
      aria-label={name}
    >
      <span aria-hidden>
        {words.map((word, w) => (
          <span key={`${word}-${w}`} className="inline-block whitespace-nowrap">
            {Array.from(word).map((ch) => {
              const i = index++;
              return (
                <motion.span
                  key={i}
                  className={cn("inline-block", words.length > 1 && w === words.length - 1 && "text-ember-gradient")}
                  initial={reduce ? false : { opacity: 0, y: "0.4em", filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  {ch}
                </motion.span>
              );
            })}
            {w < words.length - 1 && <span className="inline-block w-[0.25em]" />}
          </span>
        ))}
      </span>
    </h1>
  );
}
