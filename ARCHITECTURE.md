# Hana Yori — architecture & content contract

Pitch site for Hana Yori (sushi bar & hibachi grill), 12226 Beach Blvd #3, Jacksonville, FL 32246.
Next.js 16 App Router · React 19 · TypeScript · Tailwind CSS v4 · framer-motion · lucide-react · zod.
Same structure as `skate28/madame-brioche` and `skate28/sushi-and-sub`.

## File ownership

| Owner | Files |
| --- | --- |
| **Leads** (content) | `src/content/site.ts`, `public/images/` |
| **Code** | everything else: `src/app/`, `src/components/`, `src/lib/`, `src/content/types.ts`, config |

Leads can replace `src/content/site.ts` wholesale. Code never hard-codes business copy, prices,
hours, reviews, or photos in components.

## The content contract

`src/content/site.ts` exports:

- `site: SiteContent` — every piece of business content
- `textTarget(content)` — number used by every `sms:` link (falls back to the shop line while `textNumber` is null)
- `callTarget(content, isClosed)` — number used by call buttons

Types live in `src/content/types.ts`, adopted verbatim from Leads' `types.reference.ts` (same shape as
the Madame Brioche types). If Leads adds fields, the existing components keep compiling; new fields
need new code.

| `site` field | Renders as |
| --- | --- |
| `name`, `tagline`, `address`, `phone`, `mapUrl` | Hero, header, footer, sticky mobile call bar |
| `hours` (`byDay`, `summary`, `timezone`) | Open/closed pill, hours table (today highlighted), JSON-LD |
| `about.heading` + `about.paragraphs` | Experience section. Paragraph 0 is the lead; each later paragraph is a card, title = text before the first `:` |
| `menu[]` (categories → items with optional `price`, `description`, `pieces`, `number`, `isNew`, `priceFrom`) | Tabbed menu + marquee ribbon. Prices render only when set |
| `customOrders` | Parties & groups panel. Tap-to-call is the live action. Absent = hidden |
| `preorder` | Takeout section. Tap-to-call is the live action; text ordering shows as "coming soon" |
| `faq[]` | FAQ accordion + FAQPage JSON-LD. Empty = hidden |
| `orderingLinks[]` (`online` / `delivery`) | "Order online" section. **Empty = hidden.** Only links the restaurant really uses |
| `photos[]`, `heroImage` | Hero (blurred dark backdrop + framed photo on desktop), interior collage in Experience (`interior` category), a tall food shot in the Parties panel, and the gallery with lightbox (skips `logo` and `menu-board`). **Empty = hidden** |
| `rating`, `testimonials[]` | Reviews section. Testimonials need a `sourceUrl` or they are skipped |
| `socials[]` | Footer links |
| `palette` | CSS variables on `<html>` (dark design: `ink` = page, `rice` = text, `brand` = vermilion, `accent` = ember, `salmon` = sakura, `nori` = secondary bands) |
| `seo`, `description` | `<title>`, meta description, Open Graph, Restaurant JSON-LD |
| `footerCredit` | Last footer line, always linked to https://nicklopacki.com |

### Texting switch

Texting is OFF by default. It turns on only when `site.textNumber` is set or `orderingLinks` contains a
`kind: "sms"` entry (`textingEnabled()` in `src/lib/ordering.ts`). While off, no `sms:` link is rendered
anywhere; text ordering and party text requests show as "coming soon" previews, and the mobile bar
shows Call / Menu / Directions. `phone` ordering links are not repeated (tap-to-call is everywhere).
Only `online` / `delivery` links render in the "Order online" section, which is hidden while empty.

### Code-owned copy rules

- Never promise a tableside hibachi show. Hibachi is cooked on the open grill and brought to the table.
- Never claim the restaurant takes orders or party requests by text until the switch above is on.
- No logo file exists: the header/footer use a typographic wordmark built from `site.name`.

### Content rules

- Never invent prices, hours, reviews, ordering links, or photos. Unverified seed content is marked `// TODO(Leads): verify`.
- No AI-generated or stock photos of the food or the restaurant. Real, owner-approved images only, in `public/images/`, referenced as `/images/<file>`.
- No owner/staff personal names and no photo-source URLs in `site.ts` (it ships in the client bundle). Photo `credit` is a key only.

## Indexing

Off until the owner approves. Only `ALLOW_INDEXING=true` (exact string) enables it. Otherwise:
`robots.txt` disallows `/`, metadata robots is `noindex, nofollow`, and every response sends
`X-Robots-Tag: noindex, nofollow` (`next.config.ts`). Read at build time — redeploy after changing it.

## Deploy

Vercel project `hana-yori` in team `skate28s-projects`, git-connected to `skate28/hana-yori`
(pushes to `main` deploy to production). Next.js preset, repo root, no env vars required.
