/**
 * Content shapes for Hana Yori.
 * Copied unchanged (field names and all) from the Madame Brioche build
 * (skate28/madame-brioche src/content/types.ts), which extends the Sushi & Sub shape.
 * Leads' handoff types.reference.ts is a SUPERSET of these, so it can replace this file
 * as long as every field below keeps its name and type. Components should tolerate empty fields.
 *
 * Hana Yori mapping notes (no new fields were added):
 *  - `customOrders` renders as the hibachi party / group reservation request section.
 *  - `preorder` renders as the text pre-order section.
 *  - `about.paragraphs[0]` is the lead line; any further paragraphs render as experience cards
 *    (sushi bar, hibachi grill, ...). The card title is the text before the first ":".
 *  - Palette roles for the dark design are documented on `Palette` below.
 */

export type PhoneNumber = {
  /** Shown to people, e.g. "(904) 858-7032". */
  display: string;
  /** `tel:` href, e.g. "tel:+19048587032". */
  tel: string;
  /** E.164, e.g. "+19048587032". Also used for `sms:` links. */
  e164: string;
};

export type Weekday = "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";

export type DayHours = {
  /** 24-hour "HH:MM", or null when that edge is still unknown. */
  openTime: string | null;
  closeTime: string | null;
  /** True closes the shop for the whole day. */
  closed?: boolean;
};

export type Hours = {
  /** IANA zone used to decide open vs closed. */
  timezone: string;
  /** Short public line. The per-day schedule below is what open/closed uses. */
  summary: string;
  /** Fallback window for a weekday missing from `byDay`. Null = unknown, don't assume. */
  openTime: string | null;
  closeTime: string | null;
  /** Per-day hours. This is the schedule open/closed reads. */
  byDay?: Partial<Record<Weekday, DayHours>>;
};

export type MenuItem = {
  id: string;
  /** Number printed on the shop's takeout menu, e.g. 1 for California. */
  number?: number;
  name: string;
  description?: string;
  /** Pieces per order, as printed. Omit when the menu leaves it blank. */
  pieces?: number;
  /** Dollars. Leave unset until a real price is confirmed. Never invent one. */
  price?: number;
  /** Seeded stand-in copy. Hidden once real items replace it. */
  placeholder?: boolean;
  /** EXTENSION: `price` is a starting price (size upcharges). Render as "$3.75+". */
  priceFrom?: boolean;
  /** EXTENSION: the shop labels the item "New!". Render a small badge; keep it out of `name`. */
  isNew?: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  /** Shown under the heading, or when the category has no real items. */
  description?: string;
  items: MenuItem[];
};

export type PhotoCategory = "storefront" | "interior" | "food" | "menu-board" | "logo" | "drinks";

/** Where a photo came from. Full URLs live in photo-sources.md / images/MANIFEST.md, never here. */
export type PhotoCredit =
  | "google-maps-ugc"
  | "yelp-ugc"
  | "owner"
  | "nick-shoot"
  /** EXTENSION: image the business uploaded to its Toast ordering page (e.g. the logo). */
  | "toast-listing"
  /** EXTENSION: image posted on the business's UNation profile (Oct 2025). */
  | "unation-listing";

export type Photo = {
  /** Public path under `/images`, e.g. "/images/storefront-sign-dusk.jpg". */
  src: string;
  alt: string;
  category: PhotoCategory;
  credit: PhotoCredit;
  width?: number;
  height?: number;
  /** Homepage hero. The hero is a side column, not a full-bleed banner. */
  hero?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Testimonial = {
  quote: string;
  /** Display name exactly as the platform shows it. Never a staff or owner name. */
  author?: string;
  /** Visible link text, e.g. "Google review". */
  sourceLabel: string;
  /** Reviews must link here. Testimonials without a URL are not shown. */
  sourceUrl: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type OrderingLink = {
  /** e.g. "Call to order", "DoorDash". */
  label: string;
  href: string;
  kind: "phone" | "sms" | "online" | "delivery";
};

/**
 * Key names kept from Sushi & Sub for drop-in reuse. Hana Yori (dark design) roles:
 * ink = sumi ink page background and dark surfaces, rice = rice-paper text on ink,
 * brand = vermilion buttons, brandDeep = deep vermilion hover/gradients,
 * accent = hibachi ember gold (prices, highlights), salmon = sakura pink (soft accents),
 * nori = deep green-black secondary bands, paper = brightest highlight (white).
 * Per-key comments below are the original bakery wording.
 */
export type Palette = {
  /** Espresso. Primary text, header/footer. */
  ink: string;
  /** Logo terracotta. Primary fills and buttons. */
  brand: string;
  brandDeep: string;
  /** Counter sage. Accent fills only — not body text on white. */
  accent: string;
  /** Pastry gold. Prices, badges ("New"), highlights. */
  salmon: string;
  /** Deep sage. Secondary sections. */
  nori: string;
  /** Cream. Page background. */
  rice: string;
  /** Cards. */
  paper: string;
};

/** EXTENSION: custom / bulk order intake (whole cakes, pastry boxes, group orders). */
export type CustomOrders = {
  heading: string;
  intro: string;
  /** Short bullet list of what can be requested. Only items the owner confirms. */
  examples: string[];
  /** e.g. "Please order at least 48 hours ahead." Empty hides it. */
  leadTimeNote: string;
  textButtonLabel: string;
  /** Body of the `sms:` link; prompts for date, item, size, servings, pickup time. */
  textMessage: string;
  /** Optional email for inquiries. Empty hides it. */
  email: string;
};

export type Rating = {
  value: number;
  count: number;
  /** e.g. "Google". */
  source: string;
};

export type SiteContent = {
  name: string;
  tagline: string;
  /** Used for the meta description fallback and Restaurant JSON-LD. */
  description: string;
  /** Free-text opening, e.g. "2004". Empty hides the line. */
  opened: string;
  address: {
    street: string;
    suite: string;
    neighborhood: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    /** Single line used for maps and the footer. */
    full: string;
  };
  /** Short wayfinding line shown under the address. */
  locationHint: string;
  /** Null coordinates keep the map on the street address. Do not guess. */
  geo: {
    latitude: number | null;
    longitude: number | null;
  };
  /** "Get directions" link. */
  mapUrl: string;
  phone: PhoneNumber;
  /** Optional after-hours / assistant number. Null uses the shop line. */
  afterHoursPhone: PhoneNumber | null;
  /** Optional number for "Text us" links. Null uses the shop line. */
  textNumber: PhoneNumber | null;
  /** Shown on the call button outside that day's open window. */
  closedNotice: string;
  hours: Hours;
  /** e.g. "$". Empty hides it. */
  priceRange: string;
  /** e.g. "Cash only". Empty hides it. */
  paymentNote: string;
  orderingLinks: OrderingLink[];
  socials: SocialLink[];
  /** Aggregate score only. Quotes belong in `testimonials`. */
  rating: Rating | null;
  testimonials: Testimonial[];
  faq: FaqItem[];
  menuNote: string;
  menu: MenuCategory[];
  photos: Photo[];
  /** Public path for the homepage hero. Wins over a photo `hero` flag. */
  heroImage?: string;
  palette: Palette;
  about: {
    heading: string;
    paragraphs: string[];
  };
  preorder: {
    heading: string;
    intro: string;
    textButtonLabel: string;
    /** Body of the `sms:` link. */
    textMessage: string;
    /** How far ahead a pickup date may be. */
    maxDaysAhead: number;
  };
  /** EXTENSION: optional custom-order section. Absent = hidden. */
  customOrders?: CustomOrders;
  seo: {
    title: string;
    description: string;
  };
  /** Footer credit line. */
  footerCredit: string;
};
