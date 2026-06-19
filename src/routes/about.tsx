import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/motion/Reveal";

import aboutImage from "@/assets/about-image.png";
import logoMark from "@/assets/restaurant-logo.png";
import aboveFooterImage from "@/assets/above-footer.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Jaaju Kitchen & Bar" },
      { name: "description", content: "The story behind Jaaju Kitchen & Bar — Andhra and Telangana cooking in Miyapur, Hyderabad." },
      { property: "og:title", content: "Our Story — Jaaju Kitchen & Bar" },
      { property: "og:description", content: "The heritage and philosophy behind Jaaju." },
    ],
  }),
  component: AboutPage,
});

const TIMELINE = [
  { year: "Origins", title: "Home kitchens of Telangana", body: "Family recipes from the villages around Warangal — slow-cooked mutton, gongura, hand-pounded masalas." },
  { year: "The Move", title: "Miyapur opens its doors", body: "Jaaju Kitchen & Bar takes root in Madinaguda, building a warm, family-friendly room with a private dining space." },
  { year: "The Bar", title: "A full bar joins the kitchen", body: "House cocktails and Hyderabadi classics — Irani chai by day, perfectly mixed drinks by night." },
  { year: "Today", title: "3,422 reviews and counting", body: "A 4.5-star regular's room for biryanis, pulaos, and the fiery starters Hyderabad keeps coming back for." },
];

function AboutPage() {
  const reduce = useReducedMotion();
  return (
    <div className="min-h-screen bg-[#2a1408] text-ivory">
      <Header />
      <main>
        {/* Hero: ABOUT US wordmark with dish overlapping below, copy bottom-left and bottom-right */}
        <section className="relative min-h-[100vh] overflow-hidden">
          {/* subtle radial vignette */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(197,160,89,0.18) 0%, rgba(42,20,8,0) 60%)",
            }}
          />

          {/* Top eyebrow */}
          <div className="absolute top-10 left-0 right-0 text-center z-20">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold/90 font-semibold">
              Jaaju · Est. Hyderabad
            </p>
          </div>

          {/* ABOUT US wordmark — sits in upper half, dish overlaps its lower portion */}
          <div className="absolute inset-x-0 top-[11%] flex items-center justify-center pointer-events-none z-10">
            <h1
              aria-label="About Us"
              className="select-none font-display font-medium leading-none whitespace-nowrap flex items-center justify-center"
              style={{
                fontSize: "clamp(4.5rem, 16vw, 15rem)",
                color: "#f4e9d2",
                letterSpacing: "-0.03em",
                textShadow: "0 2px 80px rgba(0,0,0,0.45)",
              }}
            >
              <span>AB</span>
              <span
                className="relative inline-flex items-center justify-center mx-[0.01em]"
                style={{ fontSize: "1.25em", lineHeight: 0.8 }}
              >
                <span className="font-display italic">O</span>
                <img
                  src={logoMark}
                  alt="Jaaju logo"
                  className="absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2 object-contain"
                  style={{ width: "0.62em", height: "auto" }}
                />
              </span>
              <span>UT&nbsp;US</span>
            </h1>
          </div>

          {/* Floating dish — centered, overlapping the bottom half of the wordmark */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[22%] z-30 pointer-events-none">
            <div
              aria-hidden
              className="absolute left-1/2 -translate-x-1/2 bottom-[4%] w-[70%] h-10 rounded-full blur-2xl opacity-60"
              style={{ background: "radial-gradient(ellipse, rgba(0,0,0,0.75), transparent 70%)" }}
            />
            <motion.img
              src={aboutImage}
              alt="Signature Jaaju dish on an ornate plate"
              width={1920}
              height={1080}
              className="relative z-10 w-[clamp(280px,36vw,520px)] drop-shadow-[0_40px_60px_rgba(0,0,0,0.55)]"
              style={{ transformOrigin: "center" }}
              initial={reduce ? false : { y: 30, opacity: 0 }}
              animate={
                reduce
                  ? { opacity: 1 }
                  : { y: [0, -12, 0], opacity: 1 }
              }
              transition={
                reduce
                  ? { duration: 0.6 }
                  : {
                      y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                      opacity: { duration: 1.2 },
                    }
              }
            />
          </div>

          {/* Bottom left + right copy columns, flanking the dish */}
          <div className="absolute inset-x-0 top-[58%] z-30 px-8 md:px-14">
            <div className="grid grid-cols-12 gap-6 items-end">
              <div className="col-span-12 md:col-span-5 text-left md:text-right space-y-3 md:-translate-x-20">
                <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">
                  Our Story
                </p>
                <p className="font-accent italic text-xl md:text-2xl leading-relaxed text-ivory/85">
                  Jaaju is a Telugu term of affection — reserved for family.
                </p>
                <p className="text-base md:text-lg leading-snug text-ivory/65 max-w-[52ch] md:ml-auto text-balance">
                  We plate Andhra and Telangana cooking the way it's eaten at home: bold, generous, built to be shared.
                </p>
              </div>
              <div className="hidden md:block md:col-span-2" />
              <div className="col-span-12 md:col-span-5 text-left space-y-3 md:translate-x-20">
                <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">
                  Our Kitchen
                </p>
                <p className="font-accent italic text-xl md:text-2xl leading-relaxed text-ivory/85">
                  We cook with fire, and serve with care.
                </p>
                <p className="text-base md:text-lg leading-snug text-ivory/65 max-w-[52ch] text-balance">
                  Hand-pounded masalas, slow-cooked mutton, gongura from the villages around Warangal.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom corner labels — editorial detail */}
          <div className="absolute bottom-4 right-6 text-[10px] uppercase tracking-[0.3em] text-ivory/40 z-30">
            Miyapur · Hyderabad
          </div>
        </section>


        <section className="bg-ivory py-28">
          <div className="container-page">
            <Reveal>
              <h2
                className="font-display uppercase font-medium leading-none tracking-[0.04em] mb-8 text-[clamp(2.25rem,5vw,4rem)]"
                style={{ color: "#9e2a2b" }}
              >
                Heritage
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="font-display text-3xl md:text-4xl font-medium mb-16 text-balance max-w-2xl text-charcoal">
                From village kitchens to{" "}
                <span className="font-accent italic">Miyapur's main room</span>.
              </h3>
            </Reveal>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.08}>
                  <li className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-4 sm:gap-8 items-start border-t border-charcoal/15 pt-8 h-full">
                    <div className="font-display text-3xl md:text-4xl text-saffron">{t.year}</div>
                    <div>
                      <h3 className="font-display text-2xl mb-3 text-charcoal">{t.title}</h3>
                      <p className="text-charcoal/70 leading-relaxed">{t.body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="relative py-32 text-center overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${aboveFooterImage})`, filter: "blur(3px)", transform: "scale(1.06)" }}
          />
          <div aria-hidden className="absolute inset-0 bg-charcoal/55" />
          <div className="relative container-page">
            <Reveal>
              <p className="font-accent italic text-3xl md:text-4xl text-ivory mb-10 max-w-2xl mx-auto text-balance drop-shadow-lg">
                The fire stays on. The table stays set.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                to="/reserve"
                className="inline-block bg-saffron text-white text-xs uppercase tracking-[0.25em] font-semibold px-10 py-4 hover:bg-charcoal transition-colors"
              >
                Reserve a Table
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}