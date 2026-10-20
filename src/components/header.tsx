"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu as MenuIcon, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Wordmark } from "@/components/logo";
import { buttonPrimary, focusRing } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { telHref } from "@/lib/contact";
import type { NavLink } from "@/lib/nav";

export function Header({ links }: { links: NavLink[] }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const call = telHref(site.phone);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled || open
          ? "bg-ink/80 shadow-[0_1px_0] shadow-rice/10 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8 md:h-20">
        <Link href="/#top" className={cn("flex items-center gap-3 rounded-full", focusRing)} onClick={() => setOpen(false)}>
          <Wordmark name={site.name} className="text-xl md:text-2xl" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium text-rice/75 transition-colors hover:text-rice",
                focusRing,
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {call && (
            <span className="hidden sm:block">
              <a href={call} className={cn(buttonPrimary, "min-h-10 px-4")}>
                <Phone className="size-4" aria-hidden />
                {site.phone.display}
              </a>
            </span>
          )}
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex size-11 items-center justify-center rounded-full text-rice ring-1 ring-rice/20 lg:hidden",
              focusRing,
            )}
          >
            {open ? <X className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-rice/10 lg:hidden"
          >
            <ul className="mx-auto grid max-w-6xl gap-1 px-5 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-xl px-3 py-3 font-display text-2xl text-rice/90 hover:bg-rice/5",
                      focusRing,
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
