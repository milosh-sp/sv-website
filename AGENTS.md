# AGENTS.md — SkillVerdict Website

This file is the canonical AI-agent guide for the `nisam-mipsao` repository
(the **SkillVerdict** marketing / waitlist site). Read it in full before making
any changes. Every section reflects the real conventions in the codebase;
violations will fail formatting, linting, or type-checks in the build.

---

## Table of contents

- [AGENTS.md — SkillVerdict Website](#agentsmd--skillverdict-website)
  - [Table of contents](#table-of-contents)
  - [1. Project overview](#1-project-overview)
  - [2. Tech stack](#2-tech-stack)
  - [3. Development commands](#3-development-commands)
  - [4. Project structure](#4-project-structure)
  - [5. TypeScript conventions](#5-typescript-conventions)
    - [Path alias](#path-alias)
    - [Types live in `types/`](#types-live-in-types)
    - [Error handling](#error-handling)
  - [6. Code style — Biome 2](#6-code-style--biome-2)
  - [7. Naming conventions](#7-naming-conventions)
  - [8. Components — atomic design](#8-components--atomic-design)
  - [9. Content and strings](#9-content-and-strings)
  - [10. Routing — App Router](#10-routing--app-router)
    - [Adding a route](#adding-a-route)
  - [11. State and forms](#11-state-and-forms)
  - [12. API and Netlify functions](#12-api-and-netlify-functions)
  - [13. Styling — Tailwind v4](#13-styling--tailwind-v4)
  - [14. Analytics and tracking](#14-analytics-and-tracking)
  - [15. Environment variables](#15-environment-variables)
  - [16. Build and deployment](#16-build-and-deployment)
  - [17. Git conventions](#17-git-conventions)
    - [Things to keep in mind always](#things-to-keep-in-mind-always)

---

## 1. Project overview

**SkillVerdict** is a peer-vetted developer hiring / "CV 2.0" marketing and
waitlist site. It is a **Next.js 16 App Router** application written in
TypeScript and **statically exported** (`output: 'export'`) to the `out/`
directory. Form submissions are handled by **Netlify serverless functions**
that forward to the Sender.net API.

There is no backend service, database, or authentication in this repo — it is a
content-driven marketing site with multi-step waitlist forms.

> The `package.json` name is still the scaffold default (`my-v0-project`); the
> product branding is **SkillVerdict**.

---

## 2. Tech stack

- **Meta-framework** — [Next.js 16](https://nextjs.org/docs) (App Router, static export)
- **UI framework** — [React 19](https://react.dev/) (React Compiler enabled)
- **Language** — [TypeScript 5.9](https://www.typescriptlang.org/docs/) (`strict: true`)
- **Styling** — [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first config, no `tailwind.config.js`)
- **Class merging** — [`clsx`](https://github.com/lukeed/clsx) + [`tailwind-merge`](https://github.com/dcastil/tailwind-merge) via the `cn()` helper
- **Icons** — [lucide-react](https://lucide.dev/)
- **Carousel** — [Embla Carousel](https://www.embla-carousel.com/) (`embla-carousel-react`)
- **Video** — [next-video](https://next-video.dev/)
- **Analytics** — [Mixpanel](https://docs.mixpanel.com/) (consent-gated via Cookiebot), Meta Pixel
- **Forms backend** — [Netlify Functions](https://docs.netlify.com/functions/overview/) → [Sender.net](https://www.sender.net/) API
- **Lint / format** — [Biome 2](https://biomejs.dev/)
- **Deploy** — [Netlify](https://docs.netlify.com/) (`netlify.toml`)

**Listed but not used** (do not add without confirming): there is **no test
framework** configured. Unused scaffold deps (`zod`, `next-themes`) have been
removed from `package.json`.

---

## 3. Development commands

> **Requirement:** Node ≥ 20.

```bash
# Dev server: formats, lints, type-checks, then runs Next (turbo) + next-video sync
npm run dev

# Production build (static export to out/): format + lint + next build
npm run build

# TypeScript type-check only
npm run typecheck

# Biome lint only
npm run lint

# Biome lint with autofix
npm run lint:fix

# Biome format (check) / format + write
npm run format
npm run format:write

# Serve a built app locally
npm run start
```

Both `npm run dev` and `npm run build` run Biome format + lint first, so keep
the tree clean or these commands will surface violations before anything runs.

---

## 4. Project structure

```
nisam-mipsao/
├── app/                      # Next.js App Router routes
│   ├── layout.tsx            # Root layout: fonts, global CSS, header/footer, SEO, analytics
│   ├── page.tsx              # Homepage (renders homePageSections)
│   ├── not-found.tsx         # Custom 404
│   ├── sitemap.ts            # Generated sitemap
│   ├── robots.txt            # Static robots
│   ├── candidate/            # Route folders → page.tsx per route
│   ├── verifier/
│   ├── hiring-manager/
│   ├── contact/
│   ├── confirm-email/
│   ├── explainer-video/
│   ├── for-talent-cv2.0/
│   └── privacy-policy/
├── components/               # Atomic-design UI
│   ├── atoms/                # Primitives (Button, Input, Text, …)
│   ├── molecules/            # Composed UI (FormField, Accordion, form steps, …)
│   ├── organisms/            # Sections/forms (ContactForm, Carousel, waitlist forms, …)
│   └── templates/            # Page sections + chrome (*PageSection, Navigation, Footer, PageLayout)
├── context/                  # React Context providers for multi-step forms
├── hooks/                    # Custom React hooks
├── lib/                      # Content, config, API client, utils
│   ├── strings.ts            # ALL user-facing text (single source of content)
│   ├── navigationData.ts     # Section order + header/nav menus
│   ├── api.ts                # fetch() client → Netlify functions
│   ├── seo.ts, seo-config.ts # Per-route metadata
│   ├── consts.ts, envs.ts    # Constants + env access
│   ├── validation.ts, waitlist*Validators.ts
│   ├── utils.ts              # cn() and shared helpers
│   ├── utils/                # Small single-purpose util modules
│   └── netlify/              # Shared logic for the serverless functions
├── netlify/functions/        # submit-form.ts, update-form.ts
├── types/                    # ALL TypeScript type files (*.types.ts)
├── styles/                   # globals.css (Tailwind v4) + embla.css
├── public/                   # Static assets (favicons, logo, og-image, llms.txt)
├── videos/                   # next-video source assets
├── hooks/                    # (see above)
├── biome.json
├── next.config.mjs
├── netlify.toml
├── postcss.config.mjs
├── tsconfig.json
└── out/                      # Static export output (gitignored)
```

---

## 5. TypeScript conventions

`tsconfig.json` enforces `strict: true`. Target near-full type coverage; avoid
`any` and avoid type assertions unless there is no alternative (see `lib/api.ts`
for the accepted pattern of narrowing `unknown` with type guards).

### Path alias

The only alias is `@/*` → project root. Always use it for cross-directory
imports:

```typescript
// GOOD
import { cn } from '@/lib/utils'
import type { ButtonProps } from '@/types/Buttons.types'

// BAD — deep relative paths
import { cn } from '../../../lib/utils'
```

### Types live in `types/`

Every type/interface goes in `types/` as a `*.types.ts` file — **including types
from util, lib, and context files**. Do not co-locate types inside component or
util files.

```
types/Buttons.types.ts
types/CandidateFormContext.types.ts
types/api.types.ts
```

### Error handling

Narrow error types explicitly; never rely on implicit `any` from `catch`.

```typescript
} catch (error) {
  console.error('Form submission error:', error)
  return { success: false, error: 'Network error…' }
}
```

---

## 6. Code style — Biome 2

Configuration: [`biome.json`](biome.json).

| Rule | Value |
|---|---|
| Indent | 2 spaces |
| Line width | 80 chars |
| Line ending | LF |
| Quotes (JS/TS) | single |
| Quotes (JSX attributes) | single |
| Semicolons | as needed (omit where possible) |
| Trailing commas | es5 |
| Arrow parentheses | always |
| Linter | recommended rules (`useUniqueElementIds` off, `noUnknownAtRules` off) |

Run `npm run format:write` and `npm run lint:fix` before committing. Note that
JSX attribute quotes here are **single** (this differs from many React
projects). `out/`, `.next/`, `node_modules/`, and `public/` are excluded.

---

## 7. Naming conventions

| Artefact | Convention | Example |
|---|---|---|
| Route folder / page | `app/<route>/page.tsx` | `app/candidate/page.tsx` |
| Component file | `PascalCase.tsx`, **named export** | `Button.tsx` → `export function Button` |
| Page section (template) | `*PageSection.tsx` | `HeroPageSection.tsx` |
| Hook file | `useCamelCase.ts` | `useForm.ts`, `useTracking.ts` |
| Context provider | `NameFormContext.tsx` | `CandidateFormContext.tsx` |
| Type file | `Name.types.ts` in `types/` | `Buttons.types.ts` |
| Lib module | camelCase / kebab | `navigationData.ts`, `seo-config.ts` |
| Netlify function | kebab-case | `submit-form.ts` |

Components use **named exports** (not default exports). There are no barrel
`index.ts` files — import directly from the component path.

---

## 8. Components — atomic design

Components are organised by atomic-design layer under `components/`:

- **atoms/** — primitives with no domain logic (`Button`, `Input`, `Text`, `VideoPlayer`).
- **molecules/** — small compositions (`FormField`, `Accordion`, individual form steps).
- **organisms/** — full sections and forms (`ContactForm`, `Carousel`, waitlist forms).
- **templates/** — page sections (`*PageSection`) and layout chrome (`Navigation`, `Footer`, `PageLayout`).

Rules:

- **One component per file**, PascalCase, named export.
- Add `'use client'` only to interactive components (forms, navigation,
  carousels). Route `page.tsx` and `layout.tsx` stay server components where
  possible.
- Reuse existing components before creating new ones — check the relevant layer
  first.
- Compose styles with `cn()` and Tailwind classes (see `Button.tsx` for the
  variant/size map pattern).
- Interactive page sections split server + client where possible (e.g.
  `FaqPageSection` + `FaqPageSectionClient`). Cards like `BenefitCard` and
  `FaqItem` live in `molecules/`; route-specific sections use the `*PageSection`
  suffix (e.g. `ConfirmEmailPageSection.tsx`).

Pages are thin: they map a section array from `lib/navigationData.ts` to
template components.

```tsx
// app/page.tsx
{homePageSections.map(({ id, Component, props }) => (
  <Component key={id} id={id} {...(props ?? {})} />
))}
```

---

## 9. Content and strings

**All user-facing text lives in `lib/strings.ts`** — there is no i18n library;
the site is single-language.

- Text is organised into sectioned `const` objects, aggregated into one
  `strings` export. Reference nested keys from components:

```tsx
import { strings } from '@/lib/strings'
// ...
<h1>{strings.hero.mainHeading}</h1>
```

- Never hardcode user-facing copy in JSX — add it to `lib/strings.ts` and
  reference the key. Validation messages use `strings.contactPage.validation`,
  `strings.waitlistForms.validation`, and `strings.validationCommon`; client
  API errors use `strings.apiResponses.client`.
- **Exception:** the SEO keyword corpus in `lib/seo-config.ts` stays there
  (metadata config, not JSX). Page titles/descriptions for routes belong in
  `strings.seoPages` and are referenced from `seo-config.ts`.
- Some content objects co-locate a Lucide icon with the text (icon + label
  pairs). Follow the existing shape when adding entries.
- **Section ordering and navigation** are controlled by `lib/navigationData.ts`
  (section arrays + header menus). Reordering entries there reorders the page.

---

## 10. Routing — App Router

File-based routing under `app/`. Each route is a folder with a `page.tsx`.

| Route | File |
|---|---|
| `/` | `app/page.tsx` |
| `/for-talent-cv2.0` | `app/for-talent-cv2.0/page.tsx` |
| `/candidate` | `app/candidate/page.tsx` |
| `/verifier` | `app/verifier/page.tsx` |
| `/hiring-manager` | `app/hiring-manager/page.tsx` |
| `/contact` | `app/contact/page.tsx` |
| `/confirm-email` | `app/confirm-email/page.tsx` |
| `/explainer-video` | `app/explainer-video/page.tsx` |
| `/privacy-policy` | `app/privacy-policy/page.tsx` |
| 404 | `app/not-found.tsx` |

### Adding a route

1. Create `app/<route>/page.tsx` (named default export for the page component).
2. Add SEO metadata via `generateMetadata(pageSeoConfig['/<route>'])` from
   `lib/seo.ts` / `lib/seo-config.ts`.
3. If it should appear in navigation, add it to `lib/navigationData.ts`.

Because the app is a **static export**: `images.unoptimized` is `true`, there
are no runtime server routes, and in-page navigation uses hash anchors
(e.g. `/#faq`).

---

## 11. State and forms

There is **no global state library** (no Redux/Zustand/XState). State is local
and per-feature.

- **Multi-step waitlist forms** use React Context providers in `context/`
  (`CandidateFormProvider`, etc.) mounted at the route level. Organisms consume
  **only** the matching form hook (`useCandidateForm`, `useVerifierForm`,
  `useHiringManagerForm`) — those hooks wrap context + `useForm` internally
  (step navigation, submit orchestration, field state). Do not call
  `use*FormContext()` from components.
- **Simple forms** (contact) use the `useForm` hook (`hooks/useForm.ts`) with
  local state, honeypot, and debounced validation.
- Step identifiers and step navigation live in `lib/stepIdentifiers.ts`.
- Validation lives in `lib/validation.ts`, `lib/waitlistValidators.ts`, and
  `lib/waitlistFormValidators.ts`.

Providers wrap only the route/subtree that needs them — mount them at the page
or template level, not globally, unless the state is truly app-wide.

---

## 12. API and Netlify functions

- The client-side API layer is `lib/api.ts`. It uses `fetch()` to POST/PATCH to
  the Netlify functions and converts camelCase keys to snake_case
  (`lib/utils/convertToSnakeCase.ts`) for the backend.
- **Do not hardcode endpoints in components.** Components submit by calling the
  form hooks, which call `lib/api.ts`.
- Serverless handlers live in `netlify/functions/`:
  - `submit-form.ts` — unified handler for all form types (contact, candidate,
    verifier, hiring manager).
  - `update-form.ts` — subscriber updates.
- Shared function logic lives in `lib/netlify/` (`form-validation.ts`,
  `sender-api.ts`, `response-builder.ts`, `client-info.ts`). Put reusable
  function logic there, not inline in the handler.
- All responses follow the `ApiResponse` shape (`types/api.types.ts`):
  `{ success, error? }`. Validate untyped responses with the `isApiResponse`
  type guard.

---

## 13. Styling — Tailwind v4

- **Tailwind CSS v4, CSS-first.** There is no `tailwind.config.js`. Tailwind is
  imported and configured in `styles/globals.css` (`@import "tailwindcss"`),
  with design tokens defined as CSS variables under `:root` / `.dark` and custom
  utilities/layers declared there.
- PostCSS uses `@tailwindcss/postcss` (`postcss.config.mjs`).
- `styles/embla.css` holds plain CSS for the Embla carousel.
- **No CSS Modules, no SCSS.** Style components with Tailwind utility classes on
  `className`, merged with `cn()` from `lib/utils.ts`.
- Group variant/size class maps as `const` objects keyed by a typed union (see
  `components/atoms/Button.tsx`).
- Fonts (Inter + Open Sans) are loaded via `next/font/google` in
  `app/layout.tsx`.
- All styling must be responsive on mobile.

---

## 14. Analytics and tracking

- Mixpanel is wrapped in `hooks/useTracking.ts` and is **consent-gated via
  Cookiebot** — do not fire events outside that gate.
- Meta Pixel and Cookiebot scripts are injected in `app/layout.tsx`.
- The Mixpanel token comes from `envs.MIXPANEL_TOKEN` (see below) — never read
  `process.env` directly in components.

---

## 15. Environment variables

All public env vars are `NEXT_PUBLIC_*` and accessed **only** through
`lib/envs.ts`:

```typescript
// lib/envs.ts
export const envs = {
  WEBSITE_DOMAIN: process.env.NEXT_PUBLIC_WEBSITE_DOMAIN,
  GOOGLE_VERIFICATION: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  MIXPANEL_TOKEN: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN,
}
```

```typescript
// GOOD
import { envs } from '@/lib/envs'
const token = envs.MIXPANEL_TOKEN

// BAD — reading env directly in feature code
const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN
```

Local values go in `.env.local` (gitignored). Server-side secrets used by the
Netlify functions (e.g. the Sender.net API key) are configured in the Netlify
dashboard, never committed.

---

## 16. Build and deployment

- **Host:** Netlify (`netlify.toml`).
  - `command = "npm run build"`
  - `publish = "out"` (the static export)
  - `functions = "netlify/functions"`
- `next build` produces a fully static site (`output: 'export'`) plus the
  Netlify functions bundle.
- The React Compiler is enabled (`reactCompiler: true` in `next.config.mjs`) —
  do not add manual `useMemo`/`useCallback` (see next section).
- `lucide-react` imports are optimized via `optimizePackageImports`.

---

## 17. Git conventions

- Keep commits scope-focused; one logical change per commit.
- Run `npm run format:write`, `npm run lint`, and `npm run typecheck` before
  committing (the `build`/`dev` scripts also enforce format + lint).
- Never commit `.env.local`, secrets, or the `out/` / `.next/` build output.

---

### Things to keep in mind always
- Do NOT use `useCallback` or `useMemo` react19 handles that automatically
- Types should be placed ONLY in `types` directory as a type file, even from
  util files
- Any new code that is not related to UI should be wrapped into a re-usable
  hook, if the hook is not something generic then let is stay specific to the
  component, example would be having a reusable `useEventListener` hook instead
  of writing JS code directly 
- Always check if a component is already built to re-use instead of creating a
  new one
- Avoid using `useEffect` , it should be only used if there is no other way,
  last resort
- When creating components: one file per component, PascalCase, named export,
  correct atomic-design layer (see §8), reuse existing components first
- Use React S.O.L.I.D. strictly, the codebase is STRICT React S.O.L.I.D, principles
- When writing styling, make sure it is responsive on mobile devices
- Write pure functions always
- Keep it DRY, check if something is already built and use it
- Put shared util functions in `lib/utils.ts` (e.g. `cn()`) or focused modules
  under `lib/utils/` (e.g. `convertToSnakeCase.ts`); avoid one file per function
- If the projects stalls building delete `.next` and try again, this is a known issue
---

*Last updated: July 2026*
