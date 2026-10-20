export const focusRing =
  "focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent";

export const buttonBase = `inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-sm font-semibold tracking-wide leading-none transition-all duration-300 ${focusRing}`;

/** Vermilion → ember glow. Primary action (call). */
export const buttonPrimary = `${buttonBase} bg-gradient-to-r from-brand-deep via-brand to-accent text-paper shadow-[0_10px_40px_-10px] shadow-brand/70 hover:shadow-brand hover:brightness-110`;

/** Rice-paper outline on ink. */
export const buttonSecondary = `${buttonBase} bg-rice/5 text-rice ring-1 ring-inset ring-rice/25 backdrop-blur hover:bg-rice hover:text-ink`;

/** Solid rice on dark. */
export const buttonLight = `${buttonBase} bg-rice text-ink hover:bg-paper`;

export const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";

export const eyebrow = "text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-accent";

export const sectionTitle =
  "font-display text-4xl font-semibold leading-[1.05] tracking-tight text-rice sm:text-5xl md:text-6xl";
