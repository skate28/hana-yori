import type { PhoneNumber, SiteContent } from "@/content/types";

/**
 * Hana Yori — the only editable content file. Owned by Leads.
 *
 * This is a MINIMAL Wave 1 seed. Leads is preparing the real file (handoff/site.ts) and it
 * replaces this one wholesale. Anything not confirmed by the restaurant is marked
 * `TODO(Leads): verify`. Never invent prices, hours, reviews, or photos.
 *
 * Components read this module and hide anything that is empty:
 *  - `photos: []`       → hero and gallery photo slots are hidden (design works with zero photos)
 *  - `orderingLinks: []` → the "Order online" links section is hidden
 *  - `testimonials: []` → only the aggregate rating shows
 *  - menu items without `price` render without a price
 *
 * Do not put owner/staff personal names or photo-source URLs in this file.
 */

const shopLine: PhoneNumber = {
  display: "(904) 527-8875",
  tel: "tel:+19045278875",
  e164: "+19045278875",
};

export const site: SiteContent = {
  name: "Hana Yori",
  // TODO(Leads): verify tagline wording with the owner.
  tagline: "Sushi bar & hibachi grill on Beach Boulevard.",
  description:
    "Hana Yori is a neighborhood Japanese restaurant in Jacksonville, Florida serving fresh sushi and hibachi-grilled steak, filet mignon, seafood and chicken.",
  opened: "",

  address: {
    street: "12226 Beach Blvd",
    suite: "#3",
    neighborhood: "Beach Boulevard",
    city: "Jacksonville",
    region: "FL",
    postalCode: "32246",
    country: "US",
    full: "12226 Beach Blvd #3, Jacksonville, FL 32246",
  },
  locationHint: "",
  // Null keeps the map on the street address. Do not guess coordinates.
  geo: { latitude: null, longitude: null },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Hana+Yori+12226+Beach+Blvd+%233+Jacksonville+FL+32246",

  phone: shopLine,
  afterHoursPhone: null,
  // Null = texts go to the shop line. Swap in the texting number when it is live.
  textNumber: null,
  closedNotice: "We're closed right now. Call during open hours to order or reserve.",

  // TODO(Leads): verify hours on the Google listing / with the owner. Two aggregators agree on
  // dinner 4:30–9:30 PM, closed Tuesday; one older listing shows weekday lunch.
  hours: {
    timezone: "America/New_York",
    summary: "Wed–Mon 4:30–9:30 PM · Closed Tuesday",
    openTime: null,
    closeTime: null,
    byDay: {
      mon: { openTime: "16:30", closeTime: "21:30" },
      tue: { openTime: null, closeTime: null, closed: true },
      wed: { openTime: "16:30", closeTime: "21:30" },
      thu: { openTime: "16:30", closeTime: "21:30" },
      fri: { openTime: "16:30", closeTime: "21:30" },
      sat: { openTime: "16:30", closeTime: "21:30" },
      sun: { openTime: "16:30", closeTime: "21:30" },
    },
  },

  priceRange: "$$",
  paymentNote: "",

  // Only links the restaurant really uses. Public Q&A says pickup orders are by phone and
  // there is no online ordering yet, so this stays empty (the section is hidden).
  // TODO(Leads): verify; add DoorDash/Uber Eats etc. only if the restaurant confirms them.
  orderingLinks: [],

  // TODO(Leads): add official socials if any exist. Yelp listing is unclaimed.
  socials: [],

  rating: { value: 4.7, count: 837, source: "Google" },
  testimonials: [],
  faq: [],

  // TODO(Leads): verify. Prices differ across aggregators, so none are shown yet.
  menuNote: "Ask about today's specials. Prices and availability confirmed in the restaurant.",
  menu: [
    {
      id: "starters",
      name: "Starters",
      // TODO(Leads): verify items against the current printed menu.
      items: [
        { id: "edamame", name: "Edamame" },
        { id: "dumplings", name: "Dumplings", description: "Fried or grilled" },
        { id: "shrimp-tempura-app", name: "Shrimp Tempura" },
        { id: "calamari-tempura", name: "Calamari Tempura" },
        { id: "agedashi-tofu", name: "Agedashi Tofu", description: "Deep-fried tofu with tempura sauce" },
        { id: "beef-tataki", name: "Beef Tataki", description: "Seared beef with ponzu sauce" },
        { id: "tuna-tataki", name: "Tuna Tataki", description: "Lightly seared tuna with ponzu sauce" },
        { id: "softshell-crab", name: "Softshell Crab" },
      ],
    },
    {
      id: "hibachi",
      name: "Hibachi Dinners",
      // TODO(Leads): verify what each hibachi dinner comes with (soup, salad, rice, vegetables).
      description: "Grilled on the hibachi.",
      items: [
        { id: "hibachi-chicken", name: "Hibachi Chicken", description: "Chicken breast seasoned with sesame seed and finished with lemon" },
        { id: "hibachi-steak", name: "Hibachi Steak", description: "New York strip grilled to order" },
        { id: "teriyaki-steak", name: "Teriyaki Steak", description: "Thinly sliced steak and scallions in house teriyaki sauce" },
        { id: "filet-mignon", name: "Filet Mignon", description: "Tenderloin lightly seasoned with garlic butter" },
        { id: "hibachi-shrimp", name: "Hibachi Shrimp", description: "Lightly seasoned and finished with lemon" },
        { id: "hibachi-scallop", name: "Hibachi Scallop", description: "Deep sea scallops with a splash of lemon" },
        { id: "hibachi-calamari", name: "Hibachi Calamari", description: "Seasoned with garlic butter and a touch of lemon" },
        { id: "hibachi-white-fish", name: "Hibachi White Fish", description: "House garlic butter, scallions and house sauce" },
        { id: "vegetable-delight", name: "Vegetable Delight", description: "Assorted grilled vegetables with tofu" },
      ],
    },
    {
      id: "combinations",
      name: "Combinations",
      // TODO(Leads): verify combination list.
      items: [
        { id: "shrimp-chicken", name: "Shrimp & Chicken" },
        { id: "steak-chicken", name: "Steak & Chicken" },
        { id: "steak-shrimp", name: "Steak & Shrimp" },
        { id: "steak-scallop", name: "Steak & Scallop" },
        { id: "scallop-shrimp", name: "Scallop & Shrimp" },
        { id: "filet-shrimp", name: "Filet Mignon & Shrimp" },
        { id: "filet-scallops", name: "Filet Mignon & Scallops" },
        { id: "twin-lobster", name: "Twin Lobster Tail", description: "Cold water lobster" },
      ],
    },
    {
      id: "sushi",
      name: "Sushi & Rolls",
      // TODO(Leads): verify. Roll names come from guest favorites on listing pages, not a menu.
      description: "Rolls, sushi and sashimi from the sushi bar.",
      items: [
        { id: "dynamite-roll", name: "Dynamite Roll" },
        { id: "lava-roll", name: "Lava Roll" },
        { id: "bagel-roll", name: "Bagel Roll" },
        { id: "spicy-tuna-roll", name: "Spicy Tuna Roll" },
        { id: "chicken-tempura-roll", name: "Chicken Tempura Roll" },
        { id: "california-roll", name: "California Roll" },
        { id: "sashimi-platter", name: "Sashimi Platter" },
      ],
    },
    {
      id: "desserts",
      name: "Desserts",
      // TODO(Leads): verify.
      items: [
        { id: "tempura-ice-cream", name: "Tempura Ice Cream", description: "With vanilla ice cream" },
        { id: "banana-tempura", name: "Banana Tempura", description: "With vanilla ice cream" },
      ],
    },
  ],

  // No approved photos yet. Leave empty; the design is built to look complete without them.
  photos: [],

  palette: {
    ink: "#0c0b0d",
    brand: "#d8452b",
    brandDeep: "#9e2a17",
    accent: "#f0a24a",
    salmon: "#f2b8c0",
    nori: "#13201c",
    rice: "#f4ece0",
    paper: "#ffffff",
  },

  about: {
    // TODO(Leads): verify copy with the owner.
    heading: "Two kitchens, one table.",
    paragraphs: [
      "A cozy, low-lit neighborhood spot on Beach Boulevard where the sushi bar and the hibachi grill share one menu, so everyone at the table gets what they came for.",
      "The sushi bar: Fresh rolls, sushi and sashimi made to order, from classic California and spicy tuna to house favorites like the Dynamite and Lava rolls.",
      "The hibachi grill: Steak, filet mignon, scallops, shrimp, white fish and chicken seared hot on the grill. Grab a seat at the grill counter to watch it cooked.",
      // TODO(Leads): verify the guest-decorated wood tiles are still a thing before launch.
      "The wall of tiles: Guests leave their mark on little wooden tiles that cover the walls. Read a few while you wait, then add your own.",
    ],
  },

  preorder: {
    heading: "Text your order. Skip the wait.",
    intro:
      "Send your order and a pickup time by text, and it will be hot and ready when you walk in. Prefer to talk? Call and order for pickup.",
    textButtonLabel: "Text your order",
    textMessage: "Hi Hana Yori! I'd like to place a pickup order: ",
    // TODO(Leads): confirm the restaurant accepts texted orders (wire to the texting number).
    maxDaysAhead: 2,
  },

  // Rendered as the hibachi party / group reservation section.
  // TODO(Leads): verify group size limits, private room, deposits and lead time with the owner.
  customOrders: {
    heading: "Birthdays, team dinners & hibachi nights",
    intro:
      "Bringing a crowd? Tell us the date, time and party size and we'll get back to you to confirm your table.",
    examples: ["Birthday dinners", "Family celebrations", "Office and team nights", "Date night at the grill counter"],
    leadTimeNote: "",
    textButtonLabel: "Text a reservation request",
    textMessage: "Hi Hana Yori! I'd like to reserve a table. Date: ___ Time: ___ Party size: ___ Occasion: ___",
    email: "",
  },

  seo: {
    title: "Hana Yori | Sushi & Hibachi on Beach Blvd, Jacksonville FL",
    description:
      "Fresh sushi and hibachi steak, filet mignon, scallops and shrimp at 12226 Beach Blvd #3, Jacksonville, FL 32246. Rated 4.7 on Google. Call (904) 527-8875 for pickup orders and reservations.",
  },

  footerCredit: "Built by nicklopacki.com",
};

/** Text-us number. Falls back to the shop line while `textNumber` is unset. */
export function textTarget(content: SiteContent = site): PhoneNumber {
  if (content.textNumber?.e164 || content.textNumber?.tel) {
    return content.textNumber;
  }
  return content.phone;
}

/**
 * Call number. Open hours always use the shop line.
 * After close, `afterHoursPhone` wins when it is set; otherwise the shop line.
 */
export function callTarget(content: SiteContent, isClosed: boolean): PhoneNumber {
  if (isClosed && (content.afterHoursPhone?.e164 || content.afterHoursPhone?.tel)) {
    return content.afterHoursPhone;
  }
  return content.phone;
}
