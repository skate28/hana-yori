import Link from "next/link";

import { buttonPrimary } from "@/components/styles";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <main id="content" className="flex min-h-[80vh] items-center">
      <div className="mx-auto max-w-xl px-5 py-24 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">404</p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-rice md:text-6xl">This page slipped off the grill.</h1>
        <p className="mt-4 text-lg text-rice/70">The menu, hours and directions are on the home page.</p>
        <Link href="/" className={`${buttonPrimary} mt-8`}>
          Back to {site.name}
        </Link>
      </div>
    </main>
  );
}
