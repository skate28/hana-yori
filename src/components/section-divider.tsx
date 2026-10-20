/** Thin brush-stroke style divider with a centered ember mark. */
export function SectionDivider() {
  return (
    <div aria-hidden className="mx-auto flex max-w-6xl items-center gap-4 px-5 sm:px-8">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-rice/15" />
      <span className="size-2 rotate-45 bg-accent shadow-[0_0_16px] shadow-accent" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-rice/15" />
    </div>
  );
}
