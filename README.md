# Jaaju Kitchen & Bar

Marketing website for **Jaaju Kitchen & Bar** — an Andhra & Telangana restaurant
in Miyapur, Hyderabad. Built with TanStack Start (React 19), Vite, and Tailwind CSS v4.

## Pages
- **Home** — scroll-expand hero, featured dishes, heritage, testimonials, reserve band
- **Menu** — searchable, category-tabbed menu (`src/lib/menu-data.ts`)
- **Our Story** — about page with floating dish + heritage timeline
- **Gallery** — masonry photo grid
- **Contact** — details, map, and order/social links (Instagram, Zomato, Swiggy)
- **Reserve** — reservation request form backed by a server function

## Getting started

```bash
npm install        # or: bun install
npm run dev        # start the dev server
npm run build      # production build (client + SSR)
npm run preview    # preview the production build
```

## Environment

Copy `.env.example` to `.env` and fill in values. The reservation form emails the
restaurant via [Resend](https://resend.com) when `RESEND_API_KEY` and
`RESERVATION_EMAIL_TO` are set; otherwise it validates and logs the request
server-side. Secrets must live only in `.env` (gitignored).

## Project structure

```
src/
  routes/        # file-based routes (TanStack Router)
  components/    # layout, ui (shadcn), motion helpers
  lib/           # menu data, server functions, utils
  assets/        # images used by the site (imported, hashed at build)
  styles.css     # Tailwind v4 theme + design tokens
```

## Tech
TanStack Start · React 19 · Vite 7 · Tailwind CSS v4 · framer-motion · shadcn/ui · Zod
