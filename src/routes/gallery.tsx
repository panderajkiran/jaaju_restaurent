import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/motion/Reveal";

import jaajuBar from "@/assets/jaaju-bar.webp";
import heroDish from "@/assets/home-hero-dish.jpeg";
import interiorJaaju from "@/assets/interior-jaaju.webp";
import spices from "@/assets/gallery-spices.jpg";
import reserveImg from "@/assets/reserve.webp";
import parotta from "@/assets/gallery-parotta.jpg";
import aboveFooter from "@/assets/above-footer.webp";
import coffee from "@/assets/gallery-coffee.jpg";
import thali from "@/assets/hero-thali.jpg";
import biryani from "@/assets/dish-biryani.jpg";
import dosa from "@/assets/dish-dosa.jpg";
import idli from "@/assets/dish-idli.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Jaaju Kitchen & Bar" },
      {
        name: "description",
        content:
          "A look inside Jaaju Kitchen & Bar, Miyapur — the room, the bar, and the Andhra & Telangana dishes that fill our tables.",
      },
      { property: "og:title", content: "Gallery — Jaaju Kitchen & Bar" },
      {
        property: "og:description",
        content: "Step into the world of Jaaju — interiors and signature plates.",
      },
    ],
  }),
  component: GalleryPage,
});

const GALLERY: { src: string; alt: string }[] = [
  { src: jaajuBar, alt: "The Jaaju bar — backlit bottles and terracotta tiling" },
  { src: heroDish, alt: "Signature Hyderabadi chicken biryani, steaming" },
  { src: interiorJaaju, alt: "Jaaju dining room with teak chairs and greenery" },
  { src: spices, alt: "Hand-pounded Andhra spices" },
  { src: reserveImg, alt: "Bar seating and dining tables at Jaaju" },
  { src: parotta, alt: "Flaky layered parotta, fresh off the tawa" },
  { src: aboveFooter, alt: "Warm interior corner of Jaaju Kitchen & Bar" },
  { src: coffee, alt: "Irani chai served at the table" },
  { src: thali, alt: "A generous Andhra thali" },
  { src: biryani, alt: "Long-grain dum biryani plated" },
  { src: dosa, alt: "Crisp golden dosa" },
  { src: idli, alt: "Soft steamed idli with chutney" },
];

function GalleryPage() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <Header />
      <main>
        <section className="pt-28 pb-12">
          <div className="container-page text-center">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-6">
                The Gallery
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-5xl md:text-6xl font-medium leading-tight text-balance mb-6">
                Inside <span className="font-accent italic">Jaaju</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-accent italic text-xl text-charcoal/60 max-w-xl mx-auto">
                The room, the bar, and the plates that keep Miyapur coming back.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="container-page pb-24">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
            {GALLERY.map((item, i) => (
              <Reveal
                key={item.src}
                delay={(i % 3) * 0.08}
                className="mb-4 md:mb-6 break-inside-avoid"
              >
                <div className="overflow-hidden rounded-2xl ring-1 ring-charcoal/5 group">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
