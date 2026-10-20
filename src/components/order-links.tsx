import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { container, eyebrow, focusRing } from "@/components/styles";
import { cn } from "@/lib/cn";
import { webOrderingLinks } from "@/lib/nav";

/** Online / delivery links. Hidden while site.orderingLinks has none (never invent links). */
export function OrderLinks() {
  const links = webOrderingLinks();
  if (links.length === 0) return null;

  return (
    <section id="order-online" className="pb-24">
      <div className={container}>
        <Reveal>
          <p className={eyebrow}>Order online</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group flex items-center justify-between rounded-2xl bg-surface p-6 ring-1 ring-rice/10 transition-all hover:-translate-y-0.5 hover:ring-accent/50",
                  focusRing,
                )}
              >
                <span>
                  <span className="block font-display text-2xl text-rice">{link.label}</span>
                  <span className="text-xs uppercase tracking-widest text-rice/50">
                    {link.kind === "delivery" ? "Delivery" : "Pickup"}
                  </span>
                </span>
                <ArrowUpRight className="size-6 text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
