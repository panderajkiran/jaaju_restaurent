import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/motion/Reveal";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

import { FEATURED } from "@/lib/menu-data";
import { TESTIMONIALS } from "@/lib/testimonials";

import interiorImage from "@/assets/interior-jaaju.webp";
import aboveFooterImage from "@/assets/above-footer.webp";
import jaajuBackground from "@/assets/jaaju-background.webp";
import homeHeroDish from "@/assets/home-hero-dish.jpeg";

/* ------------------------------------------------------------------ *
 * HERO CONFIG — swap these out later.
 * `media`      → the image/video that expands as you scroll.
 * `background` → the full-screen image behind it (fades out on scroll).
 * For a video hero set mediaType: "video" and point `media` at an mp4
 * or a youtube.com URL.
 * ------------------------------------------------------------------ */
const HERO = {
  mediaType: "image" as "image" | "video",
  media: homeHeroDish,
  background: jaajuBackground,
  title: "JAAJU Kitchen & Bar",
  date: "Andhra · Telangana",
  scrollToExpand: "Scroll to enter",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jaaju Kitchen & Bar — Andhra & Telangana Cuisine, Hyderabad" },
      {
        name: "description",
        content:
          "Jaaju Kitchen & Bar in Miyapur, Hyderabad — flavourful Andhra and Telangana cuisine, signature biryanis and pulaos, served in a warm, family-friendly room. 4.5 ★ · 3,422 reviews.",
      },
      { property: "og:title", content: "Jaaju Kitchen & Bar — Hyderabad" },
      {
        property: "og:description",
        content:
          "Reserve a table, explore the menu, and step into the world of Jaaju.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal overflow-x-clip">
      <Header />
      <main>
        <ScrollExpandMedia
          mediaType={HERO.mediaType}
          mediaSrc={HERO.media}
          bgImageSrc={HERO.background}
          title={HERO.title}
          date={HERO.date}
          scrollToExpand={HERO.scrollToExpand}
          bgBlur
          textBlend
        >
          <HeroIntro />
        </ScrollExpandMedia>
        <QuickInfo />
        <Featured />
        <Heritage />
        
        <Testimonials />
        <ReserveBand />
      </main>
      <Footer />
    </div>
  );
}

/* ----------------------------- Hero Intro --------------------------- */

// Fades in once the scroll-expand hero is fully open.
function HeroIntro() {
  return (
    <div className="max-w-3xl mx-auto text-center text-charcoal">
      <p className="text-[10px] uppercase tracking-[0.4em] text-saffron font-semibold mb-4">
        Welcome to
      </p>
      <h2 className="font-display text-5xl md:text-6xl font-medium leading-[0.95] mb-6">
        <span className="block text-charcoal">JAAJU</span>
        <span className="block mt-2 text-xl md:text-2xl text-saffron">
          Kitchen &amp; Bar
        </span>
      </h2>
      <p className="text-base md:text-lg text-charcoal/65 leading-relaxed max-w-[60ch] mx-auto">
        Jaaju Kitchen &amp; Bar is a flavour-first room in Miyapur — signature
        biryanis, fragrant pulaos, and fiery Andhra starters rooted in
        generations of home cooking. Plated with care, served with warmth.
      </p>
      <div className="mt-10 flex items-center justify-center gap-6">
        <Link
          to="/menu"
          className="inline-flex items-center gap-3 bg-saffron text-white text-xs uppercase tracking-[0.25em] font-semibold px-8 py-4 rounded-full hover:bg-charcoal transition-colors"
        >
          View Menu
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}

/* ----------------------------- Quick Info ---------------------------- */

function QuickInfo() {
  return (
    <section className="border-y border-charcoal/5 bg-ivory">
      <div className="container-page grid grid-cols-2 md:grid-cols-4 divide-x divide-charcoal/5">
        <InfoCell label="Location" value="Miyapur, Hyderabad" />
        <InfoCell label="Kitchen Status">
          <span className="flex items-center gap-2 text-sm font-medium">
            <span className="size-1.5 bg-green-600 rounded-full animate-pulse" />
            Open · Closes 11:30 pm
          </span>
        </InfoCell>
        <InfoCell label="Cuisine" value="Andhra · Telangana" />
        <InfoCell label="Reservations" value="090522 10101" />
      </div>
    </section>
  );
}

function InfoCell({
  label,
  value,
  children,
}: {
  label: string;
  value?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="py-7 px-5 md:px-8">
      <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-2">
        {label}
      </p>
      {children ?? <p className="text-sm font-medium">{value}</p>}
    </div>
  );
}

/* ----------------------------- Featured ----------------------------- */

function Featured() {
  return (
    <section className="py-16 md:py-24" id="featured">
      <div className="container-page mb-10 flex flex-col md:flex-row items-end justify-between gap-6">
        <Reveal>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-3">
              Menu Highlights
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-balance max-w-xl leading-tight">
              What the regulars{" "}
              <span className="font-accent italic">keep ordering</span>.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            to="/menu"
            className="text-xs uppercase tracking-[0.2em] border-b border-gold pb-1 text-gold font-semibold hover:text-saffron hover:border-saffron transition-colors"
          >
            View Full Menu
          </Link>
        </Reveal>
      </div>

      <div className="container-page grid md:grid-cols-3 gap-12">
        {FEATURED.map((dish, i) => (
          <Reveal key={dish.id} delay={i * 0.1} className={i === 1 ? "md:mt-16" : ""}>
            <article className="group">
              <div className="aspect-[4/5] bg-champagne mb-6 ring-1 ring-charcoal/5 overflow-hidden rounded-sm">
                <img
                  src={dish.image}
                  alt={dish.name}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-baseline mb-2 gap-4">
                <h3 className="font-display text-xl font-medium">{dish.name}</h3>
              </div>
              <p className="text-sm text-charcoal/60 leading-relaxed max-w-[38ch]">
                {dish.description}
              </p>
              <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-charcoal/40">
                {dish.ingredients.slice(0, 3).join(" · ")}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- Heritage ----------------------------- */

function Heritage() {
  return (
    <section className="bg-[#3E1C0D] text-ivory py-16 md:py-24">
      <div className="container-page grid md:grid-cols-12 gap-8 lg:gap-16 items-center">
        <Reveal className="md:col-span-6">
          <div className="aspect-[4/5] overflow-hidden ring-1 ring-ivory/10">
            <img
              src={interiorImage}
              alt="Jaaju Kitchen & Bar dining room — warm terracotta walls, teak chairs, and lush greenery"
              width={1400}
              height={900}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
        <div className="md:col-span-6">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-6">
              Our Heritage
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight text-balance mb-6">
              A neighbourhood kitchen, plated with the{" "}
              <span className="font-accent italic">care of a fine-dining room</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-ivory/70 leading-relaxed mb-6 max-w-[52ch]">
              Jaaju brings together generations of Andhra and Telangana home
              cooking — slow-fried mutton, hand-pounded masalas, and the
              biryanis that built Hyderabad — inside a calm, family-friendly
              room with a private dining space and a full bar.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex gap-8 mb-8">
              <Stat value="4.5" label="Google rating" />
              <Stat value="3,422" label="Reviews" />
              <Stat value="30+" label="House dishes" />
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <Link
              to="/about"
              className="text-xs uppercase tracking-[0.2em] border-b border-ivory/30 pb-1 hover:text-saffron hover:border-saffron transition-colors"
            >
              Read the full story
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <span className="block font-display text-3xl mb-1">{value}</span>
      <span className="text-[10px] uppercase tracking-[0.25em] text-ivory/50">
        {label}
      </span>
    </div>
  );
}


/* --------------------------- Testimonials --------------------------- */

function Testimonials() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % TESTIMONIALS.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-champagne text-charcoal py-16 md:py-24 overflow-hidden">
      <div className="container-page max-w-4xl text-center mx-auto">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-8">
            Press & Voices
          </p>
        </Reveal>
        <div className="relative min-h-[14rem]">
          {TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={false}
              animate={{
                opacity: i === active ? 1 : 0,
                y: i === active ? 0 : 10,
              }}
              transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
              className="absolute inset-0"
              aria-hidden={i !== active}
            >
              <p className="font-accent italic text-2xl md:text-4xl leading-snug text-balance mb-8">
                "{t.quote}"
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold">
                {t.author}
              </p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-charcoal/50 mt-2">
                {t.role}
              </p>
            </motion.blockquote>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-12">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === active ? "w-10 bg-saffron" : "w-5 bg-charcoal/20 hover:bg-charcoal/40"
              }`}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Reserve Band --------------------------- */

function ReserveBand() {
  return (
    <section className="relative py-20 md:py-28 text-center overflow-hidden">
      {/* Background image */}
      <img
        src={aboveFooterImage}
        alt="Jaaju restaurant interior"
        className="absolute inset-0 w-full h-full object-cover blur-[2px] scale-105"
      />
      {/* Dark overlay for text readability */}
      <div
        aria-hidden
        className="absolute inset-0 bg-black/30"
      />

      <div className="relative z-10 container-page max-w-2xl mx-auto">
        <Reveal>
          <p className="font-accent italic text-3xl md:text-4xl text-ivory/90 mb-10 text-balance">
            Your table is ready in Miyapur.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            to="/reserve"
            className="inline-block bg-saffron text-white text-xs uppercase tracking-[0.25em] font-semibold px-12 py-5 hover:bg-charcoal transition-colors"
          >
            Request a Reservation
          </Link>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 text-[10px] uppercase tracking-[0.25em] text-ivory/60">
            Currently booking 30 days in advance
          </p>
        </Reveal>
      </div>
    </section>
  );
}