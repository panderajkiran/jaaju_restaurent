
# Project Annam — UI-Only Build Plan

Per your note ("focus on just UI"), V1 is **frontend presentation only**. No backend, no reservation persistence, no cart logic, no Supabase. Forms and order buttons will be visually complete but non-functional (or use local state only). Everything is wired so backend can be added in a later pass.

## Scope for this pass

**In scope (UI shell, all sections, animations):**
1. Sticky cinematic header with logo, nav, Reserve / Order CTAs, mobile drawer
2. Hero — fullscreen, floating signature dish (3D), animated tagline, dual CTAs
3. Quick info bar — open/closed, hours, phone, address, delivery badge
4. Featured Dishes — interactive cards, hover ingredient reveal, price, CTA
5. Full Menu — category tabs (Breakfast, Meals, South Indian Specials, Veg, Non-Veg, Desserts, Beverages), search input, expandable items
6. Story / About — founder vision, heritage timeline, pinned scroll narrative
7. Gallery — masonry grid, lightbox
8. Testimonials — auto-scrolling carousel with ratings
9. Reservation form — name / phone / date / time / guests (UI + client-side validation, toast confirmation, no DB)
10. Online Ordering — menu → cart drawer → checkout summary (local React state only)
11. Contact & Location — embedded map, address, socials
12. Footer

**Out of scope this pass:** Supabase, real reservation storage, real order submission, payments, auth, AI, multi-language. Reserved for follow-up.

## Design system (locked from PRD)

- Theme: ultra-luxury light, editorial
- Background: warm ivory · Secondary: champagne white
- Accent: deep saffron · Highlight: muted gold · Text: charcoal black
- Display: Playfair Display + Cormorant Garamond
- Body: Inter
- All values go into `src/styles.css` as `@theme` tokens (oklch). No hardcoded colors in components.

## Animation stack

- Framer Motion — reveals, hover, page transitions
- GSAP + ScrollTrigger — pinned cinematic sections, scroll-linked dish camera
- Lenis — smooth scroll
- Three.js + React Three Fiber + drei — floating signature dish, particles, steam, lighting
- Graceful degradation: reduced-motion users and low-power devices get a static hero image instead of the 3D canvas

## Route architecture (TanStack Start)

Single long-scroll homepage is appropriate for a restaurant launch site, but per stack rules I'll still split distinct destinations into real routes so each has its own meta:

```
src/routes/
  __root.tsx          (fonts, Lenis provider, head defaults)
  index.tsx           (hero → featured → story → gallery → testimonials → CTA band)
  menu.tsx            (full menu, search, filters)
  reserve.tsx         (reservation form, UI only)
  order.tsx           (menu + cart + checkout summary, local state)
  about.tsx           (extended story + timeline)
  contact.tsx         (map + details)
```

Header nav links to these routes. Home keeps anchor scroll for in-page storytelling only.

## Component layout

```
src/components/
  layout/            Header, Footer, MobileNav, AnnouncementBar
  hero/              Hero, DishCanvas (R3F), HeroCopy
  sections/          FeaturedDishes, Story, Gallery, Testimonials, ReserveCTA
  menu/              MenuTabs, MenuSearch, MenuItem, DishCard
  order/             CartDrawer, CartItem, CheckoutSummary
  reserve/           ReservationForm
  ui/                (existing shadcn)
  motion/            Reveal, Parallax, SteamParticles
  three/             SignatureDish, SceneLights, Particles
src/lib/
  menu-data.ts       static menu seed (categories, items, prices, ingredients)
  testimonials.ts    static seed
  use-lenis.ts
```

## Next step before I build

Since this is a design-led, "make it stunning" brief and the PRD locks palette + typography but leaves composition open, I want to render **3 distinct cinematic directions** (all using the same warm-ivory / saffron / Playfair system) so you can pick the structural feel — editorial magazine vs. full-bleed cinematic vs. gallery-driven — before I commit. After your pick I implement the full scope above against it.

## Technical notes (for the curious)

- R3F canvas lazy-loaded and code-split so initial paint stays fast; Lighthouse targets 95+ desktop / 90+ mobile.
- `prefers-reduced-motion` disables Lenis, GSAP scroll pins, and swaps the 3D dish for an `<img>`.
- All dish/restaurant imagery generated via image gen into `src/assets/` (no stock).
- Reservation + order submit handlers are stubbed with `toast.success` so the flows feel complete; swapping in `createServerFn` + Supabase later is a localized change.

Approve this and I'll generate the 3 directions for you to pick from.
