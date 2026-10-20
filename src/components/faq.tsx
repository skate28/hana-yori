import { Plus } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { container, eyebrow, sectionTitle } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

/** FAQ accordion from site.faq. Hidden when empty. FAQPage JSON-LD is emitted by json-ld.tsx. */
export function Faq() {
  const items = site.faq.filter((item) => item.question.trim() && item.answer.trim());
  if (items.length === 0) return null;

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className={cn(container, "grid gap-12 md:grid-cols-[0.8fr_1.2fr]")}>
        <Reveal>
          <p className={eyebrow}>Good to know</p>
          <h2 className={cn(sectionTitle, "mt-4")}>Questions</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="divide-y divide-rice/10 border-y border-rice/10">
            {items.map((item) => (
              <details key={item.question} className="group py-1 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-xl py-5 font-display text-xl text-rice outline-none transition-colors hover:text-accent focus-visible:text-accent md:text-2xl">
                  {item.question}
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full ring-1 ring-rice/20 transition-transform duration-300 group-open:rotate-45 group-open:bg-brand group-open:ring-brand">
                    <Plus className="size-4" aria-hidden />
                  </span>
                </summary>
                <p className="max-w-2xl pb-6 leading-relaxed text-rice/70">{item.answer}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
