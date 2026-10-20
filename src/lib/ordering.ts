import { z } from "zod";

import { site, textTarget } from "@/content/site";
import type { OrderingLink, SiteContent } from "@/content/types";
import { smsHref } from "@/lib/contact";

const orderingLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
  kind: z.enum(["phone", "sms", "online", "delivery"]),
});

export function safeHref(href: string | null | undefined): string | null {
  const value = href?.trim() ?? "";
  if (!value) return null;
  if (/^(https?:|tel:|sms:|mailto:|\/)/i.test(value)) return value;
  return null;
}

/** Valid ordering links. Empty hrefs are dropped so a blank URL hides that button. */
export function orderingLinks(content: SiteContent = site): OrderingLink[] {
  return content.orderingLinks.flatMap((link) => {
    const parsed = orderingLinkSchema.safeParse(link);
    if (!parsed.success) return [];
    const href = safeHref(parsed.data.href);
    const label = parsed.data.label.trim();
    if (!href || !label) return [];
    if (parsed.data.kind === "phone" && !/^tel:/i.test(href)) return [];
    if (parsed.data.kind === "sms" && !/^sms:/i.test(href)) return [];
    if ((parsed.data.kind === "online" || parsed.data.kind === "delivery") && !/^https?:/i.test(href)) return [];
    return [{ ...parsed.data, href, label }];
  });
}

export function linksOfKind(kind: OrderingLink["kind"], content: SiteContent = site): OrderingLink[] {
  return orderingLinks(content).filter((link) => link.kind === kind);
}

/** Pickup ordering. The first online link is the primary Order CTA. */
export function primaryOnlineLink(content: SiteContent = site): OrderingLink | null {
  return linksOfKind("online", content)[0] ?? null;
}

/** Delivery links in content order. Uber Eats is first when it is listed first. */
export function deliveryLinks(content: SiteContent = site): OrderingLink[] {
  return linksOfKind("delivery", content);
}

export function phoneOrderingLinks(content: SiteContent = site): OrderingLink[] {
  return linksOfKind("phone", content);
}

/**
 * SMS pre-order. An explicit sms ordering link wins.
 * Otherwise `textTarget` is used, which falls back to the shop line while `textNumber` is null.
 */
export function preorderSmsHref(
  content: SiteContent = site,
  message = content.preorder.textMessage,
): string | null {
  const listed = linksOfKind("sms", content)[0];
  if (listed && message === content.preorder.textMessage) return listed.href;
  return safeHref(smsHref(textTarget(content), message));
}

/**
 * Texting is a switch, not a promise. It is ON only when content sets a dedicated `textNumber`
 * or lists an explicit `sms` ordering link. While it is off, text ordering and party requests
 * render as "coming soon" previews and no `sms:` link is shown anywhere.
 */
export function textingEnabled(content: SiteContent = site): boolean {
  return Boolean(content.textNumber?.e164?.trim() || content.textNumber?.tel?.trim()) || linksOfKind("sms", content).length > 0;
}

/** `sms:` href only when texting is switched on. */
export function liveSmsHref(message: string, content: SiteContent = site): string | null {
  if (!textingEnabled(content)) return null;
  const listed = linksOfKind("sms", content)[0];
  if (listed && !content.textNumber) return listed.href;
  return safeHref(smsHref(textTarget(content), message));
}
