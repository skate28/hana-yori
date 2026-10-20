"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { focusRing } from "@/components/styles";
import type { MenuCategory } from "@/content/types";
import { cn } from "@/lib/cn";
import { formatPrice } from "@/lib/money";

export function MenuTabs({ categories }: { categories: MenuCategory[] }) {
  const [active, setActive] = useState(categories[0]?.id ?? "");
  const current = categories.find((c) => c.id === active) ?? categories[0];
  if (!current) return null;

  return (
    <div className="mt-12">
      <div
        role="tablist"
        aria-label="Menu categories"
        className="scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {categories.map((category) => {
          const selected = category.id === current.id;
          return (
            <button
              key={category.id}
              role="tab"
              type="button"
              id={`tab-${category.id}`}
              aria-selected={selected}
              aria-controls={`panel-${category.id}`}
              onClick={() => setActive(category.id)}
              className={cn(
                "relative shrink-0 cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                selected ? "text-ink" : "text-rice/70 ring-1 ring-inset ring-rice/15 hover:text-rice",
                focusRing,
              )}
            >
              {selected && (
                <motion.span
                  layoutId="menu-tab-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-sakura"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{category.name}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8"
        >
          {current.description?.trim() && (
            <p className="mb-6 font-display text-xl italic text-rice/60">{current.description}</p>
          )}
          <ul className="grid gap-x-10 md:grid-cols-2">
            {current.items.map((item) => (
              <li key={item.id} className="group border-b border-dashed border-rice/10 py-5">
                <div className="flex items-baseline gap-3">
                  {item.number != null && <span className="text-xs font-semibold text-accent/80">{item.number}</span>}
                  <h3 className="font-display text-xl font-semibold text-rice transition-colors group-hover:text-accent md:text-2xl">
                    {item.name}
                  </h3>
                  {item.isNew && (
                    <span className="rounded-full bg-brand/20 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-sakura">
                      New
                    </span>
                  )}
                  {typeof item.price === "number" && Number.isFinite(item.price) && (
                    <>
                      <span aria-hidden className="mx-1 hidden flex-1 translate-y-[-0.3em] border-b border-dotted border-rice/20 sm:block" />
                      <span className="ml-auto shrink-0 font-display text-xl font-semibold text-accent sm:ml-0">
                        {formatPrice(item.price, item.priceFrom)}
                      </span>
                    </>
                  )}
                </div>
                {(item.description?.trim() || item.pieces) && (
                  <p className="mt-1.5 text-sm leading-relaxed text-rice/55">
                    {item.description}
                    {item.pieces ? `${item.description ? " · " : ""}${item.pieces} pc` : ""}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
