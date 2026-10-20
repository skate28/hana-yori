# Hana Yori

Pitch site for Hana Yori, a sushi bar & hibachi grill at 12226 Beach Blvd #3, Jacksonville, FL 32246 · (904) 527-8875.

Next.js (App Router), TypeScript, Tailwind CSS, framer-motion, lucide-react. See [ARCHITECTURE.md](./ARCHITECTURE.md) for the content contract and file ownership.

```bash
npm install
npm run dev
npm run lint
npm run build
```

- All business content: `src/content/site.ts` (owned by Leads). Images: `public/images/`.
- Search indexing is off (`noindex, nofollow`) until `ALLOW_INDEXING=true` is set on Vercel.
- Deployed on Vercel (team `skate28s-projects`, project `hana-yori`), git-connected to `main`.
