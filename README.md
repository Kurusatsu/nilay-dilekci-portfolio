# Nilay Dilekçi Portfolio

Bilingual (TR/EN) creative portfolio for Nilay Dilekçi — Koç University Media and Visual Arts.

Built with **Astro + Tailwind**. Static output → free hosting on Cloudflare Pages or Vercel.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Free deploy (Cloudflare Pages)

1. Push this repo to GitHub
2. Cloudflare Dashboard → Pages → Connect repo
3. Build command: `npm run build`
4. Output directory: `dist`
5. Done — you get a `*.pages.dev` URL

## Free deploy (Vercel)

1. Import the GitHub repo at [vercel.com](https://vercel.com)
2. Framework preset: Astro (auto-detected)
3. Deploy

## Content

- Copy: `src/i18n/ui.ts`
- Projects: `src/data/projects.ts`
- Images: `public/projects/`
- **CV (pending):** put the PDF at `public/cv/Nilay-Dilekci-CV.pdf` — the contact section and nav already link to it.
