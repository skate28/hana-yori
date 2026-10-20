import { Flame } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { MenuTabs } from "@/components/menu-tabs";
import { container, eyebrow, sectionTitle } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { visibleCategories } from "@/lib/menu";

export function MenuSection() {
  const categories = visibleCategories(site.menu);
  if (categories.length === 0) return null;

  return (
    <section id="menu" className="relative overflow-hidden bg-nori/60 py-24 md:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className={container}>
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className={eyebrow}>Menu</p>
            <h2 className={cn(sectionTitle, "mt-4")}>
              From the sushi bar <span className="text-ember-gradient italic">&amp; the grill</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-rice/70">
            <Flame className="mr-1.5 inline size-4 -translate-y-px text-accent" aria-hidden />
            Hibachi is cooked to order on our open grill and brought to your table. It is not cooked tableside.
          </p>
        </Reveal>
        <MenuTabs categories={categories} />
        {site.menuNote.trim() && (
          <p className="mt-10 max-w-3xl border-l-2 border-accent/50 pl-4 text-sm leading-relaxed text-rice/55">{site.menuNote}</p>
        )}
      </div>
    </section>
  );
}
