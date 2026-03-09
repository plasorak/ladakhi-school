# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Build static export to out/
npm run lint     # Run ESLint
```

Build with GitHub Pages base path (required for correct image paths):
```bash
NEXT_PUBLIC_BASE_PATH=/ladakh-school npm run build
```

There are no tests in this project.

## Architecture

This is a **Next.js static site** (App Router, `output: "export"`) for the Himalayan International School in Ladakh, deployed to GitHub Pages.

**Single-page layout:** `app/page.tsx` composes all section components in order. Navigation links use anchor IDs (`#about`, `#offer`, etc.).

**All components are client components** (`"use client"`) located in `app/components/`. Each component is a self-contained section of the page.

**Image handling:** A custom image loader (`imageLoader.ts`) prepends `NEXT_PUBLIC_BASE_PATH` to all image `src` values, which is required for GitHub Pages deployment. All `<Image>` components must use `loader={imageLoader}`.

**Styling:** Tailwind CSS v4 via `globals.css` (`@import "tailwindcss"`). Custom CSS variables defined in `:root`: `--warm` (background color #FFF6EF), `--background`, `--foreground`, and flag colors.

**Images/assets:** Large images (gallery, back-cover) are tracked via Git LFS (`.gitattributes`). When adding new large images, ensure LFS is configured.

## Deployment

CI/CD is via GitHub Actions:
- `ci.yml`: Runs on PRs — builds with `NEXT_PUBLIC_BASE_PATH=/ladakhi-school`
- `deploy.yml`: Runs on push to `main` — builds and deploys `out/` to GitHub Pages using the repo name as basePath

The `main` branch is the deploy target. PRs should target `main`.
