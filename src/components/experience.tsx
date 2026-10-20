import { Fish, Flame, Sparkles, Users } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Seigaiha } from "@/components/seigaiha";
import { container, eyebrow, sectionTitle } from "@/components/styles";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

const ICONS = [Fish, Flame, Sparkles, Users];
const TONES = [
  "from-sakura/25 via-sakura/5",
  "from-accent/30 via-brand/10",
  "from-rice/15 via-rice/5",
  "from-brand/25 via-brand/5",
];

function splitCard(text: string): { title: string; body: string } {
  const at = text.indexOf(":");
  if (at > 0 && at < 40) return { title: text.slice(0, at).trim(), body: text.slice(at + 1).trim() };
  return { title: "", body: text.trim() };
}

export function Experience() {
  const paragraphs = site.about.paragraphs.map((p) => p.trim()).filter(Boolean);
  if (!site.about.heading.trim() && paragraphs.length === 0) return null;
  const [lead, ...rest] = paragraphs;
  const cards = rest.map(splitCard);

  return (
    <section id="experience" className="relative overflow-hidden py-24 md:py-32">
      <div className={container}>
        <Reveal className="max-w-3xl">
          <p className={eyebrow}>The experience</p>
          {site.about.heading.trim() && <h2 className={cn(sectionTitle, "mt-4")}>{site.about.heading}</h2>}
          {lead && <p className="mt-6 text-lg leading-relaxed text-rice/70 md:text-xl">{lead}</p>}
        </Reveal>

        {cards.length > 0 && (
          <div className={cn("mt-14 grid gap-5", cards.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2")}>
            {cards.map((card, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <Reveal key={i} delay={i * 0.1}>
                  <article
                    className={cn(
                      "group relative h-full overflow-hidden rounded-3xl bg-gradient-to-br to-transparent p-7 ring-1 ring-rice/10 transition-all duration-500 hover:-translate-y-1 hover:ring-rice/25 md:p-8",
                      TONES[i % TONES.length],
                    )}
                  >
                    <Seigaiha className="text-rice/[0.06] mask-fade-t opacity-0 transition-opacity duration-700 group-hover:opacity-100" fill="transparent" />
                    <span className="relative inline-flex size-12 items-center justify-center rounded-2xl bg-ink/60 text-accent ring-1 ring-rice/10">
                      <Icon className="size-6" aria-hidden />
                    </span>
                    {card.title && (
                      <h3 className="relative mt-6 font-display text-2xl font-semibold text-rice md:text-3xl">{card.title}</h3>
                    )}
                    <p className="relative mt-3 leading-relaxed text-rice/70">{card.body}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
