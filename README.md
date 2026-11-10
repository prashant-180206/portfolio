# Prashant Suthar — Portfolio

A typographic, motion-led portfolio built with Next.js 16, React 19, Tailwind CSS v4, and anime.js. Server-rendered by default, with a small set of client components for interaction and animation.

## Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm build   # production build
pnpm lint    # eslint
```

## Editing content

All copy, projects, stack groups, journey entries, and GitHub metadata live in [`src/data/site.ts`](src/data/site.ts). That file is the single source of truth for the page — update it first when personalising the site.

Project entries include the case-study copy used by the detail pages:

- `description` and `subtitle` — short and long summaries
- `highlights` — what was built
- `facts` — scope, format, and other at-a-glance details
- `stack` and `tags` — tooling shown in the list and detail page
- `links` — external project links

## Structure

| Path | Purpose |
| --- | --- |
| `src/app/page.tsx` | Page composition |
| `src/app/work/page.tsx` | Full project index |
| `src/app/work/[slug]/page.tsx` | Static project detail pages |
| `src/app/layout.tsx` | Fonts, metadata, theme bootstrap, skip link |
| `src/app/globals.css` | Design tokens, theme palettes, motion, utilities |
| `src/components/` | Sections, UI primitives, and interaction components |
| `src/data/site.ts` | Portfolio content |
| `src/lib/use-theme.ts` | Shared theme store built on `useSyncExternalStore` |

## Design system

- **Palette** — cool paper and ink with a cobalt-blue signal accent defined in OKLCH for light and dark themes; pink appears only in chart tokens.
- **Type** — Instrument Serif for display, Geist for body, Geist Mono for labels and metadata.
- **Motion** — anime.js for entrance choreography, scroll reveals, and filter transitions. Every animation respects `prefers-reduced-motion`.
- **Components** — shadcn/ui primitives (dialog, sheet, command, badge, tooltip, button) on Base UI.

## Interaction

- Keyboard command palette (`⌘K` / `Ctrl+K`)
- Project filters and static case-study pages
- Year-by-year journey section
- Theme toggle with no-flash bootstrap
- Copy-to-clipboard email
- Live local clock
- Scroll progress and scroll-linked reveals

## Notes

The GitHub section reflects public profile data for `prashant-180206` — fifteen project repositories (plus the profile README). It is intentionally a snapshot rather than a live API integration; replace `site.github` and `githubRepos` in `src/data/site.ts` if the username or repository list changes. The same handle is linked for LeetCode via `site.leetcode`.

This is a prototype, not a published deployment. Add your own domain and social preview image before shipping.
