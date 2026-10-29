# AGENTS.md

Diego Chagas' portfolio and blog at diegochagas.com. Next.js 16 App Router, React 19, TypeScript,
Tailwind CSS, MDX posts. Every push to `master` is deployed to production by Vercel; other branches
get preview deploys.

- Blog posts live in `src/app/blog/<slug>/page.mdx`; each one also needs an entry in
  `src/app/data/blog-posts.ts` (newest first). The sitemap and the search index read that list.
- Blog search (`src/lib/search/` + `src/app/blog/search/`): the index is built at `next build` by the
  static route `src/app/blog/search-index/route.ts` from the MDX sources (title, description, date,
  `metadata.keywords` as tags, body text) and matched in the browser. No search service, no API key.
- The site is English only; there is no language toggle.

## Testing and shipping (dev-playbook)

This repo follows the dev-playbook (`~/.claude/skills/dev-playbook/PLAYBOOK.md`).

- One gate: `scripts/check` (types + lint + unit + build + clean-code audit). The pre-push hook runs it
  (`git config core.hooksPath .githooks`, done by `scripts/setup`). Never push with `--no-verify`.
- Unit tests (Vitest) live in `tests/`, mirroring `src/`: the search index builder, matcher and snippets,
  a data-integrity test that indexes every real post, and a jsdom test of the search panel.
- E2E (Playwright, Chromium desktop 1280 + Pixel 7) lives in `e2e/`: smoke of every route (home, blog,
  every post, Abacus page) with no console errors or failed requests, the search index route, and the
  search flow. `npm run e2e` builds and serves on 3000 (`BASE_URL=...` targets a dev server or a Vercel
  preview); full-page screenshots land in `e2e/screenshots/` (gitignored).
- Bugs: write a failing regression test first, then fix.
- Never weaken, skip or delete a test to make it pass.
- UI changes: run the Playwright e2e and attach desktop (1280) + mobile (Pixel 7)
  screenshots of every changed screen to the PR or final message.
- Risk class for this repo: none (public static content). Still a public site used for job search,
  so every route stays in the smoke test and SEO metadata is not changed casually.
- External APIs: none at runtime.
- No real paths, IPs, passwords or tokens in code, tests, fixtures or docs.
- Before finishing: run `/code-review` on the diff, then give the evidence package:
  summary, risk class, test results, screenshots, rollback steps.
- Rollback: `git revert <sha> && git push` (Vercel redeploys), or promote the previous
  deployment in the Vercel dashboard.

### Definition of done

- [ ] `scripts/check` passes locally (types, lint, unit, build, audit)
- [ ] New/changed logic has unit tests; bugs have a regression test
- [ ] UI changes: Playwright e2e passes and screenshots are attached
- [ ] No real paths/IPs/passwords/tokens in code, tests, fixtures or README
- [ ] `/code-review` run on the diff and findings addressed
- [ ] Rollback path stated

## Clean code (dev-playbook CLEAN-CODE.md)

Language: TypeScript, Next.js 16 App Router, Tailwind CSS. Formatter: none wired; `eslint .` (flat config
with `eslint-clean-code.mjs`) runs in `scripts/check`, keep the existing style and don't discuss it.

- Functions 4–20 lines; React components ≤40 lines, split into hooks/subcomponents.
  Files ≤300 lines, hard max 500. `scripts/clean-code-audit --strict` runs in `scripts/check`
  (the repo is clean today; keep it that way). ESLint warns on functions over 40 lines in the
  legacy home components; shrink them when a change touches them, never in a mass refactor.
- One responsibility per module. Layout: `src/app/` routes and page components, `src/app/data/` typed
  content, `src/lib/` pure logic (no React), `tests/` mirrors `src/`, `e2e/` Playwright.
- Names specific and searchable (<5 grep hits). Banned: `data`, `handler`, `utils`, `Manager`, `Service`
  (`src/app/data/` predates this rule; don't add more generic names).
- Types explicit: no `any` (lint error), typed exports and props.
- Early returns, max 2 nested levels. Extract duplicated logic the second time it appears.
- Errors include the offending value and the expected shape
  (`blog post "x" has an empty body: expected markdown text in its page.mdx`).
- Comments: keep the ones you find. Write WHY, cite issue numbers / SHAs. Never `// increment i`.
- Dependencies injected via parameters: the index builder takes a `readPostSource` function and the
  search panel a `loadIndex` function, so tests pass fixtures instead of files or `fetch`.
- Logging: none (static site).
- Defensive code this repo needs: none beyond build-time validation (the index build fails on a post
  with an empty body) and a graceful "Search is unavailable" state. Flag anything else instead of
  adding it silently.
- README keeps an "Architecture" section; update it when the shape changes.
- `scripts/setup` bootstraps a clean clone; `scripts/check` is the single validation command (`npm run check`).
