import { site } from "@/content/site";
import { visibleCategories } from "@/lib/menu";
import { orderingLinks, safeHref } from "@/lib/ordering";
import { galleryPhotos } from "@/lib/photos";

export type NavLink = {
  href: string;
  label: string;
};

export function webOrderingLinks() {
  return orderingLinks().filter((link) => link.kind === "online" || link.kind === "delivery");
}

export function primaryNav(): NavLink[] {
  const about = Boolean(
    site.about.heading.trim() || site.about.paragraphs.some((paragraph) => paragraph.trim()),
  );
  const parties = Boolean(site.customOrders?.heading.trim() || site.customOrders?.intro.trim());

  return [
    { href: "/#experience", label: "Experience", show: about },
    { href: "/#menu", label: "Menu", show: visibleCategories(site.menu).length > 0 },
    { href: "/#parties", label: "Parties", show: parties },
    { href: "/#order", label: "Order", show: Boolean(site.preorder.heading.trim()) },
    { href: "/#gallery", label: "Gallery", show: galleryPhotos().length > 0 },
    {
      href: "/#reviews",
      label: "Reviews",
      show: Boolean(site.rating) || site.testimonials.some((t) => t.quote.trim() && safeHref(t.sourceUrl)),
    },
    { href: "/#faq", label: "FAQ", show: site.faq.some((f) => f.question.trim() && f.answer.trim()) },
    { href: "/#visit", label: "Visit", show: true },
  ]
    .filter((link) => link.show)
    .map(({ href, label }) => ({ href, label }));
}
