# Diego Chagas — Portfolio

Personal portfolio for [diegochagas.com](https://www.diegochagas.com), showcasing 9+ years of front-end experience across clients like Prudential, Petrobras, Shell, Carrefour and Nestlé.

## Pages

- **Home** — About, skills, and portfolio
- **Blog** — Articles and writing, with a client-side search over titles, tags and body text
- **Abacus Institute of Studies** — Project landing page

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Runtime | React 19 |
| Deployment | Vercel |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

```bash
scripts/setup    # First clone: npm ci, Playwright Chromium, pre-push hook
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint (flat config + clean-code limits)
npm run test     # Vitest unit and component tests (tests/)
npm run e2e      # Playwright smoke + search flow, screenshots in e2e/screenshots/
npm run check    # The gate: types, lint, unit, build, clean-code audit
```

## Architecture

```
src/app/data/blog-posts.ts ──┐            src/app/blog/<slug>/page.mdx (title, description, keywords, body)
   (list: title/desc/date)   │                               │
                             ▼                               ▼
          src/app/blog/search-index/route.ts  ──►  src/lib/search/build-search-index.ts
          (static JSON at `next build`)              (mdx-plain-text: strip imports/JSX/markdown)
                             │
                             ▼  fetched once, when the panel opens
          src/app/blog/search/post-search.tsx ──► use-post-search.ts ──► src/lib/search/search-posts.ts
          (header button + panel, Esc/Enter/outside click)                 (tokens, field weights, snippets)
```

- `/blog` and `/blog/<slug>` share `src/app/blog/layout.tsx`, whose header holds the search.
- `src/app/sitemap.ts` and the search index both read `blog-posts.ts`, so a new post needs its
  `page.mdx` plus one entry there.
- Tests: `tests/` (Vitest, mirrors `src/`), `e2e/` (Playwright). See `AGENTS.md` for the rules.
