import type { PhoneNumber, SiteContent } from "@/content/types";

/**
 * Hana Yori — the only editable content file.
 *
 * Change business info, hours, menu, photos, testimonials, FAQ and palette here.
 * Components read this module and hide anything that is still empty.
 * Shapes: see types.reference.ts (identical to the Madame Brioche shapes; no new fields needed).
 *
 * Photos: files live in `public/images/`. Real customer photos from the restaurant's Google Maps
 * listing only. Credit keys only here; full sources in photo-sources.md. Do not drop in stock or
 * AI-generated pictures. Most photos are 1200–1600 px phone shots (good for cards and the side-column hero).
 *
 * Menu: hibachi / starters / tempura / sides / desserts / drinks prices are the restaurant's most
 * recent published menu (SinglePlatform feed, also shown on Yelp's menu page; read 2026-10-19).
 * In-restaurant menu photos on Google show the same items at older, lower prices, so the feed is newer.
 * Sushi items and descriptions come from the sushi menu (MenuToEat + an in-restaurant menu photo);
 * their prices are left UNSET because the only priced source (MenuToEat) is older than the
 * in-restaurant sushi menu. Owner must confirm all prices before launch.
 *
 * Do NOT confuse with other "Hana" / "Hana Yori" restaurants (e.g. Hana Sushi in Gainesville) or
 * the closed Uber Eats "Hana Yori" listing that carries an unrelated teppan-chain menu.
 *
 * Phone numbers: `afterHoursPhone` and `textNumber` are optional. While they are null,
 * after-hours calls and texts use the restaurant line (+19045278875).
 */

export const site: SiteContent = {
  name: "Hana Yori",
  // Built from the restaurant's own listing copy ("high quality food, at an affordable price",
  // "relaxed atmosphere") and what reviews praise most. TODO(Leads): owner approval.
  tagline: "Fresh sushi and hibachi, cooked to order on Beach Blvd.",
  description:
    "Hana Yori is a casual Japanese restaurant at 12226 Beach Blvd, Unit 3, Jacksonville, FL 32246, serving fresh sushi and hibachi-grilled filet mignon, steak, shrimp, scallops and chicken. Dinner Monday and Wednesday–Sunday 4:30–9:30 PM, closed Tuesdays. Call (904) 527-8875 for takeout.",
  // Instagram handle "hanayori2o12" hints at 2012; Tripadvisor and a Folio Weekly review exist from 2015.
  // TODO(Leads): confirm the opening year before showing it.
  opened: "",

  address: {
    street: "12226 Beach Blvd",
    // Yelp, Apple Maps, Visit Jacksonville ("Unit #3"), SageMenu all list Unit 3.
    suite: "Unit 3",
    // Yelp: "Greater Arlington, Southside". Atly: "Sans Pareil".
    neighborhood: "Southside",
    city: "Jacksonville",
    region: "FL",
    postalCode: "32246",
    country: "US",
    full: "12226 Beach Blvd, Unit 3, Jacksonville, FL 32246",
  },
  // Yahoo Local "Near the intersection of Beach Blvd and Sans Pareil St"; Atly places it in Sans Pareil.
  // TODO(Leads): ask the owner for the plaza name / landmark.
  locationHint: "On Beach Blvd near Sans Pareil St, with a free parking lot.",

  // Google pin from the Google Maps place URL (CID 1201541138162192133); Visit Jacksonville's pin is ~70 m away.
  geo: {
    latitude: 30.2865429,
    longitude: -81.4957073,
  },
  // Google place_id ChIJK4ufSN1K5IgRBQ8tk0y7rBA (matches the CID above).
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Hana+Yori+12226+Beach+Blvd+Jacksonville+FL+32246&query_place_id=ChIJK4ufSN1K5IgRBQ8tk0y7rBA",

  phone: {
    display: "(904) 527-8875",
    tel: "tel:+19045278875",
    e164: "+19045278875",
  },

  // TODO(Leads): set once an AI answering line is live (pitch: answer calls before 4:30 PM, on Tuesdays and after close).
  afterHoursPhone: null,
  // TODO(Leads): confirm the restaurant line can receive texts before showing "Text us" buttons.
  textNumber: null,

  closedNotice:
    "We're closed right now. Dinner is served Monday and Wednesday–Sunday, 4:30–9:30 PM. Closed Tuesdays.",

  // Yelp (via Apple Maps + Yahoo), Restaurantji (updated 2026-10-14), MenuToEat (Google listing checked
  // 2026-03-05), NetWaiter, SinglePlatform and Visit-Jax-style listings all agree.
  // Conflicts (stale): foodyas (Facebook mirror) shows open Tuesdays; food96 shows weekday lunch hours;
  // the closed Uber Eats listing shows 5:00–8:30 PM. No lunch service found anywhere.
  hours: {
    timezone: "America/New_York",
    summary: "Mon & Wed–Sun 4:30–9:30 PM · Closed Tuesday",
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
    // TODO(Leads): holiday hours. Facebook (Dec 2024) posted: closed Christmas Eve and New Year's Day,
    // open Christmas Day and New Year's Eve. Confirm for this year.
  },

  // Yelp, Yahoo, MenuToEat: "$$". Hibachi dinners run $16.99–39.99.
  priceRange: "$$",
  // Apple Maps (Yelp data): credit cards, Apple Pay, contactless. NetWaiter: credit cards yes.
  // TODO(Leads): confirm before showing.
  paymentNote: "",

  // No online ordering exists today: takeout is by phone only (Google Q&A, food96 Q&A, Reddit).
  // Uber Eats "Hana Yori" listing has been closed since Dec 2022 and shows an unrelated menu: do NOT link.
  // No Toast, ChowNow, DoorDash or Grubhub store found.
  orderingLinks: [
    { label: "Call to order (904) 527-8875", href: "tel:+19045278875", kind: "phone" },
    // TODO(Leads): add "Text your order" (sms:) once texting is set up / confirmed.
    // TODO(Leads): add an online-ordering link if the owner adopts one.
  ],

  // Facebook page bio links the Instagram; Visit Jacksonville links both.
  // A second, older Facebook page exists (facebook.com/p/Hana-Yori-100066768754838/). TODO(Leads): which is primary?
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/hanayori2o12/" },
    { label: "Facebook", href: "https://www.facebook.com/hanayorioffical/" },
  ],

  // Google 4.7 from 837 ratings (MenuToEat, Google listing checked 2026-03-05).
  // Others: Yelp 4.4 (354, Apple Maps) / 4.5 (Yahoo), Tripadvisor 4.6 (54), Restaurantji 4.7 (239), Atly 9.3/10.
  // TODO(Leads): re-check the live Google count before launch.
  rating: {
    value: 4.7,
    count: 837,
    source: "Google",
  },

  // Real quotes only, verbatim ("…" marks a trim), names exactly as the platform shows them.
  // Google texts/names: Google reviews republished on third-party mirror pages (see research_brief.md §3).
  // Yelp: review snippets shown on Yahoo Local / Apple Maps (truncated there). Tripadvisor: listing snippet.
  // Staff first names in reviews were trimmed out. TODO(Leads): get the owner's OK before publishing.
  testimonials: [
    {
      quote:
        "Excellent food at a great price paired nicely with a Friendly and Professional Staff! … the chef remembers you and asks about how you have been and is always happy to see you come back …",
      author: "Ryan Case",
      sourceLabel: "Google review",
      sourceUrl:
        "https://www.google.com/maps/search/?api=1&query=Hana+Yori+12226+Beach+Blvd+Jacksonville+FL+32246&query_place_id=ChIJK4ufSN1K5IgRBQ8tk0y7rBA",
    },
    {
      quote:
        "Some of the best sushi in Jacksonville. I loved the ambiance of their walls and the fact that it was decorated in the customer's creations.",
      author: "Stephanie B.",
      sourceLabel: "Yelp review",
      sourceUrl: "https://www.yelp.com/biz/hana-yori-jacksonville-2",
    },
    {
      quote:
        "You get even better food than at the showy places, and cheaper. … The ginger and Wasabi taste homemade. And the service is exceptional.",
      author: "Jennifer Andersson",
      sourceLabel: "Google review",
      sourceUrl:
        "https://www.google.com/maps/search/?api=1&query=Hana+Yori+12226+Beach+Blvd+Jacksonville+FL+32246&query_place_id=ChIJK4ufSN1K5IgRBQ8tk0y7rBA",
    },
    {
      quote:
        "Hana Yori is our go-to spot. The food is consistently amazing, and the service is top notch.",
      author: "Jessica P.",
      sourceLabel: "Yelp review",
      sourceUrl: "https://www.yelp.com/biz/hana-yori-jacksonville-2",
    },
    {
      quote:
        "The meat & veggies in the hibachi are always cooked to perfection in a large portion. … Don’t forget to order their teriyaki sauce for your hibachi, made to your spice level preference!",
      author: "Brittany Hendrickson",
      sourceLabel: "Google review",
      sourceUrl:
        "https://www.google.com/maps/search/?api=1&query=Hana+Yori+12226+Beach+Blvd+Jacksonville+FL+32246&query_place_id=ChIJK4ufSN1K5IgRBQ8tk0y7rBA",
    },
    {
      quote:
        "… service was great even though we had a group of at least 20 people and food was quick to come out very tasty …",
      author: "Jonathan Palmer",
      sourceLabel: "Google review",
      sourceUrl:
        "https://www.google.com/maps/search/?api=1&query=Hana+Yori+12226+Beach+Blvd+Jacksonville+FL+32246&query_place_id=ChIJK4ufSN1K5IgRBQ8tk0y7rBA",
    },
    {
      quote:
        "We travel 30 minutes to eat here as it is SO GOOD! Staff is gracious and cheerful. … Try the filet and shrimp. Best filet I have ever had.",
      author: "cindy h",
      sourceLabel: "Tripadvisor review",
      sourceUrl:
        "https://www.tripadvisor.com/Restaurant_Review-g60805-d3606747-Reviews-Hana_Yori-Jacksonville_Florida.html",
    },
    {
      quote:
        "Greatest restaurant in Jacksonville always delicious food and nice portions. Divine sushi and beverage selection. I recommend steak and chicken hibachi with mushrooms.",
      author: "Andy Mejia",
      sourceLabel: "Google review",
      sourceUrl:
        "https://www.google.com/maps/search/?api=1&query=Hana+Yori+12226+Beach+Blvd+Jacksonville+FL+32246&query_place_id=ChIJK4ufSN1K5IgRBQ8tk0y7rBA",
    },
  ],

  // Verified answers only.
  // TODO(Leads): owner-only FAQs: delivery (NetWaiter says no, Google attributes say yes, Uber Eats closed 2022),
  // reservations policy (listings conflict), catering, gift cards,
  // gluten-free / vegan details (Tripadvisor lists vegan + GF options), corkage, kids' menu.
  faq: [
    {
      question: "What are your hours?",
      answer:
        "Dinner Monday and Wednesday through Sunday, 4:30–9:30 PM. We're closed on Tuesdays.",
    },
    {
      question: "Do you cook hibachi at the table?",
      answer:
        "No. Our hibachi is cooked to order on the open grill and brought to your table hot. If you'd like to watch, ask for a seat at the counter in front of the grill and sushi bar.",
    },
    {
      question: "Can I order takeout?",
      answer: "Yes. Call (904) 527-8875 to place a takeout order for pickup.",
    },
    {
      question: "Can you seat a large group?",
      answer:
        "Yes. We regularly host birthday dinners and big groups. Please call (904) 527-8875 ahead so we can have your tables ready, especially on weekends.",
    },
    {
      question: "Can I get a smaller hibachi portion?",
      answer:
        "Yes. Our hibachi side orders give you just the grilled chicken, steak, filet, shrimp, scallops, calamari, white fish or lobster, without the full dinner.",
    },
    {
      question: "Do you have vegetarian options?",
      answer:
        "Yes. Try the Vegetable Delight hibachi (grilled vegetables with tofu), vegetable tempura, agedashi tofu, edamame and our vegetable sushi rolls.",
    },
    {
      question: "Is there parking?",
      answer: "Yes, there's a free parking lot at 12226 Beach Blvd.",
    },
  ],

  menuNote:
    "Prices may change. Sushi prices are available from your server or by phone. Consuming raw or undercooked meats, poultry, shellfish or eggs may increase your risk of foodborne illness. Call (904) 527-8875 for takeout.",

  // Hibachi side: SinglePlatform/Yelp menu (latest published; read 2026-10-19). Section names and
  // descriptions are the restaurant's. Items match the in-restaurant menu photos on Google.
  // Sushi side: item names/descriptions from MenuToEat (page updated 2026-04-19) and the in-restaurant
  // sushi menu photo; prices intentionally unset (see header). MenuToEat prices for reference are in
  // research_brief.md §2. TODO(Leads): owner confirms every price and fills sushi prices.
  menu: [
    {
      id: "starters",
      name: "Starters",
      items: [
        { id: "edamame", name: "Edamame", price: 5 },
        { id: "dumpling", name: "Dumplings (Fried or Grilled)", price: 6.25 },
        { id: "shrimp-tempura-app", name: "Shrimp Tempura", price: 7.25 },
        { id: "chicken-tempura-app", name: "Chicken Tempura", price: 6.75 },
        { id: "calamari-tempura-app", name: "Calamari Tempura", price: 7 },
        { id: "vegetable-tempura-app", name: "Vegetable Tempura", price: 6 },
        { id: "agedashi-tofu", name: "Agedashi Tofu", description: "Deep-fried tofu with tempura sauce.", price: 6 },
        { id: "soup", name: "Soup", price: 2.5 },
        { id: "salad", name: "Salad", price: 3 },
        { id: "fried-rice", name: "Fried Rice", price: 3.5 },
        { id: "steamed-rice", name: "Steamed Rice", price: 3.5 },
        { id: "seaweed-salad", name: "Seaweed Salad", price: 4.99 },
        { id: "krabstick-cucumber-salad", name: "Krabstick Cucumber Salad", description: "With kimchi sauce and sesame seeds.", price: 4.75 },
        { id: "ika-salad", name: "Ika Salad", description: "Marinated squid salad.", price: 5.25 },
        { id: "beef-tataki", name: "Beef Tataki*", description: "Seared beef with ponzu sauce.", price: 9.99 },
        { id: "tuna-tataki", name: "Tuna Tataki*", description: "Lightly seared tuna with ponzu sauce.", price: 10.99 },
        { id: "softshell-crab", name: "Softshell Crab", price: 11.99 },
      ],
    },
    {
      id: "combination-entrees",
      name: "Hibachi Combination Entrees",
      description:
        "All entrees are served with soup and salad, hibachi vegetables, homemade dipping sauce and steamed or fried rice.",
      items: [
        { id: "shrimp-chicken", name: "Shrimp & Chicken", price: 22.99 },
        { id: "shrimp-white-fish", name: "Shrimp & White Fish", price: 23.99 },
        { id: "calamari-shrimp", name: "Calamari & Shrimp", price: 24.99 },
        { id: "steak-chicken", name: "Steak & Chicken", price: 25.99 },
        { id: "steak-shrimp", name: "Steak & Shrimp", price: 26.99 },
        { id: "scallop-shrimp", name: "Scallop & Shrimp", price: 27.99 },
        { id: "filet-chicken", name: "Filet Mignon & Chicken", price: 27.99 },
        { id: "steak-scallop", name: "Steak & Scallop", price: 28.99 },
        { id: "filet-shrimp", name: "Filet Mignon & Shrimp", price: 28.99 },
        { id: "filet-scallops", name: "Filet Mignon & Scallops", price: 31.99 },
        { id: "twin-lobster-tail", name: "Twin Lobster Tail", description: "Cold-water lobster tails.", price: 39.99 },
      ],
    },
    {
      id: "hibachi-entrees",
      name: "Hibachi Entrees",
      description:
        "All entrees are served with soup and salad, hibachi vegetables, homemade dipping sauce and steamed or fried rice.",
      items: [
        { id: "vegetable-delight", name: "Vegetable Delight", description: "Assorted grilled vegetables with tofu.", price: 16.99 },
        { id: "hibachi-chicken", name: "Hibachi Chicken", description: "Moist chicken breast seasoned with sesame seed and finished with lemon.", price: 18.99 },
        { id: "hibachi-white-fish", name: "Hibachi White Fish", description: "Fish seasoned with homemade garlic butter, scallions and lightly dressed with our homemade sauce.", price: 20.99 },
        { id: "hibachi-shrimp", name: "Hibachi Shrimp", description: "Shrimp lightly seasoned, grilled and finished with lemon.", price: 21.99 },
        { id: "hibachi-calamari", name: "Hibachi Calamari", description: "Giant calamari seasoned with garlic butter and a touch of lemon.", price: 21.99 },
        { id: "hibachi-steak", name: "Hibachi Steak", description: "New York strip steak grilled to perfection.", price: 23.99 },
        { id: "teriyaki-steak", name: "Teriyaki Steak", description: "Thinly sliced steak and scallions, grilled in homemade teriyaki sauce.", price: 23.99 },
        { id: "filet-mignon", name: "Filet Mignon", description: "Tenderloin lightly seasoned with garlic butter and grilled to perfection.", price: 25.99 },
        { id: "hibachi-scallop", name: "Hibachi Scallop", description: "Tender deep-sea scallops grilled hibachi style with a splash of lemon.", price: 25.99 },
        { id: "grilled-mushroom", name: "Add Grilled Mushrooms", price: 5.25 },
      ],
    },
    {
      id: "tempura-dinners",
      name: "Tempura Dinners",
      description:
        "Lightly battered and deep fried, served with tempura sauce, soup and salad, tempura vegetables, homemade dipping sauce and steamed or fried rice.",
      items: [
        { id: "vegetable-tempura-dinner", name: "Vegetable Tempura", price: 16.99 },
        { id: "chicken-tempura-dinner", name: "Chicken Tempura", price: 18.99 },
        { id: "shrimp-tempura-dinner", name: "Shrimp Tempura", price: 20.99 },
      ],
    },
    {
      id: "hibachi-sides",
      name: "Hibachi Side Orders",
      description: "Just the hibachi-grilled meat or seafood, no rice or vegetables. Great for lighter appetites or to add on.",
      items: [
        { id: "side-chicken", name: "Chicken Hibachi", price: 12 },
        { id: "side-white-fish", name: "White Fish Hibachi", price: 13 },
        { id: "side-shrimp", name: "Shrimp Hibachi", price: 14 },
        { id: "side-calamari", name: "Calamari Hibachi", price: 14 },
        { id: "side-steak", name: "Steak Hibachi", price: 15 },
        { id: "side-filet", name: "Filet Mignon", price: 18 },
        { id: "side-scallop", name: "Scallop Hibachi", price: 18 },
        { id: "side-lobster", name: "Cold Water Lobster", price: 20 },
      ],
    },
    {
      id: "sushi-plates",
      name: "Sushi & Sashimi Dinners",
      description: "Chef's choice. Any substitutions will be charged.",
      items: [
        { id: "sushi-plate", name: "Sushi Plate", description: "5 pieces of sushi, a tempura roll and a California roll. Served with soup and salad." },
        { id: "sashimi-plate", name: "Sashimi Plate", description: "9 pieces of sashimi with seaweed salad. Served with soup, salad and steamed rice." },
      ],
    },
    {
      id: "hana-yori-rolls",
      name: "Hana Yori Rolls",
      items: [
        { id: "california-roll", name: "California Roll", description: "Krabstick, cucumber, avocado and fish eggs." },
        { id: "philadelphia-roll", name: "Philadelphia Roll", description: "Krabstick and cream cheese." },
        { id: "shrimp-tempura-roll", name: "Shrimp Tempura Roll", description: "Tempura shrimp, cucumber and fish eggs." },
        { id: "chicken-tempura-roll", name: "Chicken Tempura Roll", description: "Tempura chicken, asparagus and fish eggs." },
        { id: "tampa-roll", name: "Tampa Roll", description: "White fish tempura, onion, mayo and fish eggs." },
        { id: "calamari-tempura-roll", name: "Calamari Tempura Roll", description: "Tempura calamari, cream cheese and eel sauce." },
        { id: "bagel-roll", name: "Bagel Roll", description: "Smoked salmon, cream cheese, avocado and sesame seeds." },
        { id: "salmon-skin-roll", name: "Salmon Skin Roll", description: "Smoked salmon skin, scallions and sesame seeds." },
        { id: "salmon-katsu-roll", name: "Salmon Katsu Roll", description: "Salmon katsu, avocado, cream cheese and eel sauce." },
        { id: "lava-roll", name: "Lava Roll", description: "California roll topped with spicy krab salad, drizzled with shrimp sauce and eel sauce, with fish eggs." },
        { id: "shrimp-delight-roll", name: "Shrimp Delight Roll", description: "California roll topped with shrimp." },
        { id: "salmon-delight-roll", name: "Salmon Delight Roll", description: "California roll topped with salmon." },
        { id: "tuna-delight-roll", name: "Tuna Delight Roll", description: "California roll topped with tuna." },
        { id: "russian-silk-roll", name: "Russian Silk Roll", description: "Tuna, yellowtail and avocado topped with krabstick, fish eggs and scallions, drizzled with spicy mayo, eel sauce and shrimp sauce." },
        { id: "tataki-roll", name: "Tataki Roll", description: "Spicy tuna, fish eggs, scallions and avocado topped with escolar tataki." },
        { id: "jaguar-roll", name: "Jaguar Roll", description: "Krab, cream cheese and avocado topped with eel, mayo and fish eggs." },
        { id: "rainbow-roll", name: "Rainbow Roll", description: "California roll topped with five fishes." },
        { id: "caterpillar-roll", name: "Caterpillar Roll", description: "Eel and cucumber topped with avocado and fish eggs, drizzled with eel sauce." },
        { id: "dragon-roll", name: "Dragon Roll", description: "Shrimp tempura roll topped with eel, avocado and fish eggs, drizzled with eel sauce." },
        { id: "sunshine-roll", name: "Sunshine Roll", description: "Tuna, salmon, yellowtail, krabstick and asparagus wrapped in cucumber with ponzu sauce, fish eggs and scallions." },
        { id: "customer-special-roll", name: "Customer Special Roll", description: "Make your own roll. Ask your server." },
      ],
    },
    {
      id: "deep-fried-rolls",
      name: "Deep Fried Special Rolls",
      items: [
        { id: "spicy-white-tuna-tempura", name: "Spicy White Tuna Tempura", description: "Deep-fried escolar roll topped with fish eggs, scallions, eel sauce, shrimp sauce and hot sauce." },
        { id: "spicy-tuna-tempura", name: "Spicy Tuna Tempura", description: "Deep-fried tuna roll topped with fish eggs, scallions, eel sauce, shrimp sauce and hot sauce." },
        { id: "spicy-yellowtail-tempura", name: "Spicy Yellowtail Tempura", description: "Deep-fried yellowtail roll topped with fish eggs, scallions, eel sauce, shrimp sauce and hot sauce." },
        { id: "dynamite-roll", name: "Dynamite", description: "Krabstick, salmon and asparagus, deep fried, with eel sauce, shrimp sauce and hot sauce." },
        // In-restaurant menu photo: "Panko Tempura"; MenuToEat: "Panko Philly".
        { id: "panko-tempura-roll", name: "Panko Tempura", description: "Shrimp tempura and cream cheese, panko deep fried, with eel sauce." },
        { id: "crispy-philly-roll", name: "Crispy Philly", description: "Panko deep-fried Philly roll with eel sauce." },
      ],
    },
    {
      id: "japanese-rolls",
      name: "Japanese Rolls (Seaweed Outside)",
      items: [
        { id: "asparagus-roll", name: "Asparagus Roll" },
        { id: "avocado-roll", name: "Avocado Roll" },
        { id: "cucumber-roll", name: "Cucumber Roll" },
        { id: "krabstick-roll", name: "Krabstick Roll" },
        { id: "tuna-roll", name: "Tuna Roll" },
        // On the in-restaurant menu photo; not on MenuToEat.
        { id: "spicy-tuna-roll", name: "Spicy Tuna Roll" },
        { id: "salmon-roll", name: "Salmon Roll" },
        { id: "spicy-salmon-roll", name: "Spicy Salmon Roll" },
        { id: "yellowtail-roll", name: "Yellowtail Roll" },
        { id: "spicy-yellowtail-roll", name: "Spicy Yellowtail Roll" },
        { id: "spicy-escolar-roll", name: "Spicy Escolar Roll" },
        { id: "shrimp-roll", name: "Shrimp Roll" },
        { id: "spicy-shrimp-roll", name: "Spicy Shrimp Roll" },
        { id: "eel-roll", name: "Eel Roll" },
        { id: "futomaki", name: "Futomaki", description: "Krabstick, egg, pickled radish, kanpyo and cucumber." },
        { id: "vegetable-combo-roll", name: "Vegetable Combo Roll", description: "Cucumber, avocado, asparagus and lettuce." },
        { id: "spider-roll", name: "Spider Roll", description: "Soft-shell crab, lettuce, eel sauce and fish eggs." },
        { id: "rock-n-roll", name: "Rock N Roll", description: "Shrimp tempura, cream cheese, avocado, crab and eel sauce." },
        { id: "hana-yori-roll", name: "Hana Yori Roll", description: "Deep-fried tuna wrapped with asparagus, topped with shrimp sauce and eel sauce." },
        { id: "lobster-roll", name: "Lobster Roll", description: "Deep-fried lobster, lettuce, avocado, shrimp sauce and fish eggs." },
      ],
    },
    {
      id: "nigiri",
      name: "Nigiri Sushi",
      description: "One piece per order.",
      items: [
        { id: "nigiri-tamago", name: "Egg (Tamago)" },
        { id: "nigiri-masago", name: "Masago", description: "Add quail egg on request." },
        { id: "nigiri-krabstick", name: "Krabstick" },
        { id: "nigiri-shrimp", name: "Shrimp" },
        { id: "nigiri-mackerel", name: "Mackerel" },
        { id: "nigiri-octopus", name: "Octopus" },
        { id: "nigiri-baby-tako", name: "Baby Tako (Octopus)" },
        { id: "nigiri-salmon", name: "Salmon" },
        { id: "nigiri-salmon-toro", name: "Salmon Toro" },
        { id: "nigiri-smoked-salmon", name: "Smoked Salmon" },
        { id: "nigiri-squid", name: "Squid" },
        { id: "nigiri-yellowtail", name: "Yellowtail" },
        { id: "nigiri-surf-clam", name: "Surf Clam" },
        { id: "nigiri-escolar", name: "Escolar (White Tuna)" },
        { id: "nigiri-eel", name: "Eel" },
        { id: "nigiri-tuna", name: "Tuna" },
        { id: "nigiri-scallop", name: "Scallop" },
        { id: "nigiri-spicy-scallop", name: "Spicy Scallop" },
        { id: "nigiri-sweet-shrimp", name: "Sweet Shrimp (with head)" },
        { id: "nigiri-ikura", name: "Salmon Roe (Ikura)" },
      ],
    },
    {
      id: "sashimi",
      name: "Sashimi",
      items: [
        { id: "sashimi-mackerel", name: "Mackerel Sashimi", pieces: 3 },
        { id: "sashimi-yellowtail", name: "Yellowtail Sashimi", pieces: 3 },
        { id: "sashimi-tuna", name: "Tuna Sashimi", pieces: 3 },
        { id: "sashimi-white-tuna", name: "White Tuna (Escolar) Sashimi", pieces: 3 },
        { id: "sashimi-scallop", name: "Scallop Sashimi", pieces: 3 },
        { id: "sashimi-eel", name: "Eel Sashimi", pieces: 3 },
        { id: "sashimi-salmon", name: "Salmon Sashimi", pieces: 3 },
        { id: "sashimi-ikura", name: "Ikura (Salmon Roe)" },
      ],
    },
    {
      id: "sushi-bar-appetizers",
      name: "Sushi Bar Appetizers",
      // MenuToEat sushi-menu appetizers not on the hibachi-menu starters list. Descriptions unknown.
      items: [
        { id: "lava-fries", name: "Lava Fries" },
        { id: "white-tuna-tataki", name: "White Tuna Tataki", description: "Seared escolar." },
        { id: "baby-tako", name: "Baby Tako (Octopus)" },
        { id: "tako-ponzu", name: "Tako (Octopus) Ponzu" },
      ],
    },
    {
      id: "desserts",
      name: "Desserts",
      items: [
        { id: "vanilla-ice-cream", name: "Vanilla Ice Cream", price: 5.5 },
        { id: "banana-tempura", name: "Banana Tempura", description: "With vanilla ice cream.", price: 6.5 },
        { id: "tempura-ice-cream", name: "Tempura Ice Cream", description: "With vanilla ice cream.", price: 7 },
      ],
    },
    {
      id: "drinks",
      name: "Soft Drinks & Tea",
      items: [
        { id: "coke", name: "Coke", price: 3 },
        { id: "diet-coke", name: "Diet Coke", price: 3 },
        { id: "sprite", name: "Sprite", price: 3 },
        { id: "mr-pibb", name: "Mr. Pibb", price: 3 },
        { id: "pink-lemonade", name: "Pink Lemonade", price: 3 },
        { id: "iced-tea", name: "Iced Tea", price: 3 },
        { id: "hot-green-tea", name: "Hot Green Tea", price: 3 },
        { id: "bottled-water", name: "Bottled Water", price: 1.5 },
      ],
    },
    {
      id: "beer-sake-wine",
      name: "Beer, Sake & Wine",
      description: "Beer and wine only. Must be 21+.",
      // Current feed confirms the beer prices and the domestic/imported names listed here; an older menu
      // also lists Yuengling, Michelob Ultra, Asahi, Kirin Light, Heineken and Corona.
      // Sake / plum wine / house wine prices are garbled in the feed. TODO(Leads): confirm drink list and prices.
      items: [
        { id: "domestic-beer", name: "Domestic Beer", description: "Budweiser, Bud Light, Miller Lite.", price: 4 },
        { id: "imported-beer", name: "Imported Beer", description: "Sapporo, Ichiban.", price: 4.5 },
        { id: "bonsai", name: "Bonsai", price: 8.5 },
        { id: "hot-sake", name: "Hot Sake" },
        { id: "cold-sake", name: "Cold Sake" },
        { id: "plum-wine", name: "Plum Wine" },
        { id: "house-wine", name: "House Wine", description: "Chardonnay, Merlot, Pinot Grigio, White Zinfandel, Cabernet Sauvignon." },
      ],
    },
  ],

  // Real photos only (see images/MANIFEST.md). All are customer photos on the restaurant's Google Maps
  // listing. Credit keys only, no URLs. Excluded on purpose: photos of other businesses mixed into the
  // mirror site's gallery, photos showing identifiable people, older menu photos.
  // TODO(Leads): get the owner's OK, and ask for Instagram originals / a short shoot (exterior, grill in action).
  photos: [
    { src: "/images/hibachi-steak-shrimp-fried-rice.jpg", alt: "Hibachi steak and shrimp with grilled vegetables and fried rice on a white plate", category: "food", credit: "google-maps-ugc", width: 1200, height: 1600, hero: true },
    { src: "/images/steak-shrimp-hibachi-plate.jpg", alt: "Seared steak cubes and grilled shrimp with broccoli, onion and fried rice", category: "food", credit: "google-maps-ugc", width: 1600, height: 1200 },
    { src: "/images/hibachi-white-fish-fried-rice.jpg", alt: "Glazed hibachi white fish with fried rice and grilled zucchini, mushrooms and broccoli", category: "food", credit: "google-maps-ugc", width: 1200, height: 1600 },
    { src: "/images/nigiri-platter.jpg", alt: "Platter of nigiri: tuna, salmon, yellowtail, eel, tamago and fish roe", category: "food", credit: "google-maps-ugc", width: 1600, height: 1200 },
    { src: "/images/sushi-rolls-sashimi-plate.jpg", alt: "Sushi rolls with spicy mayo and fish eggs beside salmon and tuna sashimi", category: "food", credit: "google-maps-ugc", width: 1200, height: 1600 },
    { src: "/images/sushi-hibachi-table-spread.jpg", alt: "Overhead view of a table full of sushi rolls, hibachi plates and dipping sauces", category: "food", credit: "google-maps-ugc", width: 778, height: 1600 },
    { src: "/images/sushi-sashimi-hibachi-dinner.jpg", alt: "Dinner for the table: hibachi plate, sashimi and a sushi platter on a granite table", category: "food", credit: "google-maps-ugc", width: 1600, height: 1200 },
    { src: "/images/tempura-platter.jpg", alt: "Golden tempura on shredded cabbage with dipping sauce", category: "food", credit: "google-maps-ugc", width: 1200, height: 1600 },
    { src: "/images/rolls-and-nigiri.jpg", alt: "A sushi roll on a round plate with eel and tamago nigiri in front", category: "food", credit: "google-maps-ugc", width: 1600, height: 1200 },
    { src: "/images/soup-salad-and-menu.jpg", alt: "House salad and a bowl of soup next to the Hana Yori sushi menu", category: "food", credit: "google-maps-ugc", width: 1600, height: 1200 },
    { src: "/images/clear-soup.jpg", alt: "Bowl of clear soup with scallions", category: "food", credit: "google-maps-ugc", width: 1200, height: 1600 },
    { src: "/images/sushi-bar-counter.jpg", alt: "Sushi bar counter with wooden chairs, glass fish case and Sapporo poster", category: "interior", credit: "google-maps-ugc", width: 1088, height: 1200 },
    { src: "/images/dining-room-wood-tile-walls.jpg", alt: "Dining room with wood columns and walls covered in wooden tiles decorated by guests", category: "interior", credit: "google-maps-ugc", width: 1600, height: 1200 },
    { src: "/images/dining-room-grill-line.jpg", alt: "Evening dining room facing the open hibachi grill and sushi bar", category: "interior", credit: "google-maps-ugc", width: 1600, height: 1200 },
    { src: "/images/menu-hibachi-entrees.jpg", alt: "The Hana Yori hibachi menu with starters, combination entrees and tempura", category: "menu-board", credit: "google-maps-ugc", width: 1200, height: 1600 },
  ],
  heroImage: "/images/hibachi-steak-shrimp-fried-rice.jpg",

  // Red from the restaurant's mascot logo on its printed menu; wood from the columns and chairs;
  // charcoal from the granite tables; cream from the walls. Key names are Sushi & Sub's.
  palette: {
    ink: "#1E1B18",
    brand: "#C62828",
    brandDeep: "#8E1C1C",
    accent: "#C08A3E",
    salmon: "#E8825A",
    nori: "#24332B",
    rice: "#FBF7EF",
    paper: "#FFFFFF",
  },

  about: {
    // Built from the restaurant's own listing copy ("a casual dining Japanese restaurant that focuses on
    // serving high quality food, at an affordable price … a relaxed atmosphere") and verified review themes.
    heading: "Great food, fair prices, no show required",
    paragraphs: [
      "Hana Yori is a casual Japanese restaurant on Beach Boulevard focused on serving high-quality food at an affordable price, in a relaxed atmosphere where many guests are longtime regulars.",
      "Our hibachi is cooked to order on the open grill: filet mignon, New York strip, shrimp, scallops, chicken and white fish with hibachi vegetables, soup, salad and fried rice. Ask for our homemade teriyaki sauce made to your heat level. At the sushi bar you'll find fresh nigiri, sashimi and house rolls like the Russian Silk and Lava Roll.",
      "Take a look at the walls: they're covered in wooden tiles decorated by our guests. Then grab a seat, catch the game on Sundays, or call ahead for takeout.",
      // TODO(Leads): the owner's story (opening year, background), only what they want published.
      // Reviews name the owner; keep all names off the site.
    ],
  },

  preorder: {
    heading: "Takeout",
    intro:
      "Call your order in and it will be hot and ready when you arrive. Planning ahead? Text us your order and pickup time.",
    textButtonLabel: "Text us your order",
    textMessage: "Hi Hana Yori, I'd like to place a takeout order for pickup at ___:",
    // TODO(Leads): confirm the restaurant accepts texted orders and how far ahead (same-day only?).
    maxDaysAhead: 1,
  },

  // EXTENSION (types.reference.ts `CustomOrders`), used here for group dinners / hibachi parties /
  // large takeout orders. Reviews confirm groups of 20–30; NetWaiter lists catering (single source).
  // TODO(Leads): owner confirms group size limits, party-tray / catering offerings and lead time.
  customOrders: {
    heading: "Parties & large orders",
    intro:
      "Birthday dinner, team night out or a big takeout order for the game? Tell us the date, time and how many people, and we'll get back to you to confirm.",
    examples: ["Birthday dinners and group tables", "Large hibachi and sushi takeout orders"],
    leadTimeNote: "",
    textButtonLabel: "Text us about a party",
    textMessage:
      "Hi Hana Yori, I'd like to ask about a group/party order. Date: ___ Time: ___ Number of people: ___ Dine-in or takeout: ___",
    email: "",
  },

  seo: {
    title: "Hana Yori | Sushi & Hibachi on Beach Blvd, Jacksonville FL",
    description:
      "Fresh sushi and hibachi-grilled filet mignon, steak, shrimp and scallops at 12226 Beach Blvd, Unit 3, Jacksonville, FL 32246. Dinner Mon & Wed–Sun 4:30–9:30 PM. Call (904) 527-8875 for takeout.",
  },

  footerCredit: "Built by nicklopacki.com",
};

/** Text-us number. Falls back to the restaurant line while `textNumber` is unset. */
export function textTarget(content: SiteContent = site): PhoneNumber {
  if (content.textNumber?.e164 || content.textNumber?.tel) {
    return content.textNumber;
  }
  return content.phone;
}

/**
 * Call number. Open hours always use the restaurant line.
 * After close, `afterHoursPhone` wins when it is set; otherwise the restaurant line.
 */
export function callTarget(content: SiteContent, isClosed: boolean): PhoneNumber {
  if (
    isClosed &&
    (content.afterHoursPhone?.e164 || content.afterHoursPhone?.tel)
  ) {
    return content.afterHoursPhone;
  }
  return content.phone;
}
