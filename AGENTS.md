<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Arcadis AI Studio

Next.js 16 blog site with App Router, TypeScript, and Tailwind CSS v4.

## Commands

- `npm run dev` — start dev server (Turbopack)
- `npm run build` — production build
- `npm run lint` — run ESLint

## Architecture

```
src/
  app/            # App Router pages & layouts
    blog/         # Blog listing (/blog)
      [slug]/     # Individual post pages (/blog/:slug)
    layout.tsx    # Root layout (Geist font, global CSS)
    page.tsx      # Home page
  lib/
    posts.ts      # Blog post data & helpers (getAllPosts, getPostBySlug)
```

## Conventions

- **App Router only** — no `pages/` directory. Use `src/app/` for all routes.
- **Server Components by default** — only add `"use client"` when you need browser APIs or interactivity.
- **Route params are async** — `params` is `Promise<{ slug: string }>`, always `await` it. See `src/app/blog/[slug]/page.tsx` for the pattern.
- **Tailwind CSS v4** — configured via `@tailwindcss/postcss`; no `tailwind.config.ts` needed. Use `@import "tailwindcss"` in CSS.
- **Import alias** — use `@/` to reference `src/` (e.g. `import { getAllPosts } from "@/lib/posts"`).
- **Blog posts** — stored as data in `src/lib/posts.ts`. To add a post, append to the `posts` array with a unique `slug`.
- **Static generation** — blog post pages use `generateStaticParams` for static pre-rendering.
- Prefer `next/link` `<Link>` over `<a>` for internal navigation.
- Refer to `node_modules/next/dist/docs/` for Next.js 16 API specifics before using unfamiliar APIs.
