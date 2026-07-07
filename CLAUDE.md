# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

This repo currently contains a single app: `hookhub/`, a Next.js project. All commands below are run from inside `hookhub/`.

## Commands

```bash
cd hookhub
npm run dev      # start dev server (http://localhost:3000)
npm run build    # production build
npm run start    # run production build
npm run lint     # eslint (flat config via eslint.config.mjs)
```

There is no test runner configured yet.

## Critical: this is not the Next.js you know

`hookhub` pins `next@16.2.9` and `react@19.2.4` — versions newer than your training data. APIs, conventions, and file structure may differ from what you expect. Before writing any Next.js code, read the relevant guide under `hookhub/node_modules/next/dist/docs/` (sections: `01-app`, `02-pages`, `03-architecture`, `04-community`) and heed any deprecation notices found there rather than relying on prior knowledge of Next.js.

## Architecture

- Next.js App Router (`hookhub/app/`), TypeScript with `strict: true`, path alias `@/*` → `hookhub/*`.
- Styling via Tailwind CSS v4, configured through PostCSS (`postcss.config.mjs`) — no `tailwind.config.*` file; Tailwind v4 is configured via CSS (`app/globals.css`) instead.
- ESLint uses the flat config format (`eslint.config.mjs`), extending `eslint-config-next`'s `core-web-vitals` and `typescript` rule sets.
- The app is currently the unmodified `create-next-app` scaffold (a single page in `app/page.tsx` and root layout in `app/layout.tsx`) — no custom routes, components, or data layer exist yet.

