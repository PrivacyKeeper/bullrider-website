# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start development server (Next.js, http://localhost:3000)
- `npm run build` — Production build
- `npm run lint` — Run ESLint (flat config with next/core-web-vitals and next/typescript)
- `npm start` — Serve production build

## Architecture

This is a **Next.js 16** app using the **App Router** (`src/app/`), React 19, TypeScript, and Tailwind CSS v4.

### Pages

- `src/app/page.tsx` — Landing page (client component with feature cards, pricing, waitlist form). This is the main marketing page for the Bullrider.Pro mobile app.
- `src/app/layout.tsx` — Root layout. Uses Inter font via `next/font/google`.
- `src/app/terms/page.tsx` — Terms of Service (static, server component)
- `src/app/privacy/page.tsx` — Privacy Policy (static, server component)
- `src/app/refund/page.tsx` — Refund Policy (static, server component)

### Styling

- Tailwind CSS v4 via `@tailwindcss/postcss` plugin — configured in `postcss.config.mjs`
- CSS custom properties defined in `src/app/globals.css` (`--gold`, `--background`, `--foreground`, etc.) and exposed as Tailwind theme colors via `@theme inline`
- Brand color palette: dark brown backgrounds (`#2e2418`, `#3a2e20`), gold accents (`#d4a017`), warm cream text (`#f5e6d0`)

### Path Aliases

`@/*` maps to `./src/*` (configured in `tsconfig.json`).
