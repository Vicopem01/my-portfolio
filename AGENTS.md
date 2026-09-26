# AGENTS.md

## Project overview

`my-portfolio` is the personal portfolio website of Victor Ogunjobi, a full-stack
software developer. It is a single-page-app-style marketing/portfolio site
showcasing past projects, tech stacks, and professional background. The live
version is hosted at https://vicopem.com/ (repository:
https://github.com/Vicopem01/my-portfolio).

The site presents the owner in several professional roles via separate pages
(`/developer`, `/manager`, `/devops`; a `/founder` page exists in the codebase
but is intentionally commented out of the navigation modal).

## Tech stack

- **Framework:** Next.js 15 (App Router), with Turbopack for dev (`next dev --turbopack`)
- **UI:** React 19, TypeScript 5 (`strict: true`)
- **Styling:** Tailwind CSS 3 (+ `tailwindcss-animate`, `tailwind-merge`, `clsx`),
  SCSS (`sass`, used by `app/page.scss` and `components/Dock/dock.scss`),
  plain CSS in `app/globals.css` with shadcn-style CSS variables
- **Animations:** `motion` (framer-motion successor), custom animated components
- **Icons:** `@tabler/icons-react`, `lucide-react`
- **Analytics:** `@vercel/analytics`, `@microsoft/clarity`
  (Clarity initialized client-side in `app/layout.tsx` with
  `NEXT_PUBLIC_CLARITY_ID`)
- **Fonts:** `next/font/google` — Oswald (global, in `app/layout.tsx`),
  Six Caps (exported from `utils/fonts.ts`)
- **Tooling config:** shadcn `components.json` (style "new-york"), path alias
  `@/*` → project root (tsconfig)

## Build and run commands

```bash
npm install        # install dependencies (npm + package-lock.json)
npm run dev        # dev server with Turbopack
npm run build      # production build (next build)
npm run start      # serve production build
npm run lint       # ESLint via next lint (config: .eslintrc.json, extends next/core-web-vitals)
```

Environment variable: `NEXT_PUBLIC_CLARITY_ID` (optional; falls back to empty
string in `app/layout.tsx`).

## Code organization

- `app/` — App Router routes and global layout:
  - `app/layout.tsx` — **client component** ("use client") root layout; sets up
    the dark/light theme via `ThemeContext` + `localStorage` (`theme` key,
    `dark` class on `<html>`), initializes Clarity and Vercel Analytics, loads
    the Oswald font. Contains the `<title>`/meta in a manual `<head>`.
  - `app/page.tsx` — landing page: interactive big-name hero (`BigText`),
    portfolio-role modal (`PortfolioOptions`), dock links (`dockLinks` from
    `constant/`), custom cursor, `BackgroundBeams`.
  - `app/developer/page.tsx`, `app/manager/page.tsx`, `app/devops/page.tsx`,
    `app/founder/page.tsx` — role pages built around the `Timeline` component
    and `Carousel` with images imported from `public/images/Projects/`.
  - `app/stacks/page.tsx` — tech-stack listing page (data defined inline in the
    page component).
  - `app/not-found.tsx` — 404 page that immediately redirects (`router.replace`)
    to `/`.
  - `app/_app.tsx` — legacy pages-router style file; **unused** by the App Router.
- `components/UI/` — reusable presentational components, mostly adapted from
  Aceternity UI / shadcn patterns: `AnimatedModal`, `PortfolioOptions`,
  `Tooltip` (AnimatedTooltip), `timeline`, `BigText`, `BackgroundBeam`,
  `Button`, `Carousel`.
- `components/Dock/` — dock navigation (`dock.tsx` composes `mobile.tsx` and
  `desktop.tsx`, styles in `dock.scss`). Currently **commented out** of
  `app/layout.tsx`.
- `constant/index.tsx` — shared static data: `dockLinks` (GitHub/LinkedIn/Email),
  `TECHNOLOGIES` (shields.io badge list), inline SVG icon components. Large
  blocks of legacy data are commented out — this file doubles as a scratchpad.
- `context/index.tsx` — `ThemeContext` (theme + setTheme).
- `lib/utils.ts` — `cn()` helper (`clsx` + `tailwind-merge`), the standard
  shadcn utility.
- `utils/fonts.ts` — additional `next/font` definitions (Six Caps).
- `public/images/` — static assets: `Projects/` (per-project screenshots),
  `Dock/` (icons), `Landing/`; `public/svgs/` — SVG assets.
- `.d.ts` — module declaration for `react-outside-click-handler`.
- `Victor Ogunjobi - Resume.pdf` — resume stored at repo root (not served from
  `public/`).

## Development conventions

- TypeScript strict mode; path alias `@/` (e.g. `@/components/...`,
  `@/constant`, `@/public/images/...`).
- Client-side interactivity is heavy: most components and even the root layout
  use `"use client"`. Pages import `next/image` and `next/link`.
- Styling is primarily Tailwind utility classes with `dark:` variants
  (dark mode via `class` strategy); SCSS partials for the landing page and
  dock. Custom Tailwind theme in `tailwind.config.js` (font sizes, screens).
- Components in `components/UI/` follow the shadcn/Aceternity UI convention
  (self-contained, copy-in components using `cn()` from `lib/utils`).
- Data is often defined inline in page components or in `constant/index.tsx`
  rather than fetched; there is no backend/API layer.
- Commented-out code (legacy data, disabled routes/components) is common and
  kept intentionally as reference — check before deleting.

## Testing

There is **no test framework, test script, or test files** in this project.
`npm run lint` is the only automated check (passes cleanly). Verify changes
manually with `npm run dev` and `npm run build`.

## Deployment

Deployed to **Cloudflare** as a fully static site: `next.config.js` sets
`output: "export"`, so `next build` emits a plain `out/` directory (all routes
are prerendered; there is no server runtime). `wrangler.jsonc` declares `out/`
as static assets — its presence prevents Cloudflare's connected-build flow from
auto-detecting Next.js and attempting an OpenNext/Workers build. Cloudflare
build settings: command `npm run build`, deploy command `npx wrangler deploy`,
no framework preset.

Notes:

- `images.unoptimized: true` is required for static export — `next/image` does
  no on-the-fly optimization. Source images are kept full-resolution and were
  losslessly compressed in place; keep them reasonably sized when adding new
  ones.
- `npm run start` does **not** serve the export; preview locally with a static
  server, e.g. `npx serve out` or `python3 -m http.server -d out`.
- `NEXT_PUBLIC_CLARITY_ID` must be set in the Cloudflare Pages environment if
  analytics are wanted.
- No CI/CD configuration files are present in the repo.

## Security considerations

- The only secret-ish value is `NEXT_PUBLIC_CLARITY_ID`, a public analytics
  project ID read from the environment; never commit `.env` files.
- `next.config.js` sets `images.dangerouslyAllowSVG: true` and allows remote
  images from `img.shields.io` / `shields.io` (used for tech badges); be
  careful when extending the allowed image domains.
- External links in `constant/index.tsx` are opened with
  `rel="noopener noreferrer"` — keep that pattern when adding links.
