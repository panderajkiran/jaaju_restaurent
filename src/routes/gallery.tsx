import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/motion/Reveal";

// Auto-load every gallery image from src/assets/gallery (gallery1.webp …).
// Drop new files in that folder and they appear here — no code changes needed.
// Vite hashes & caches them at build time.
const galleryModules = import.meta.glob(
  "../assets/gallery/*.{webp,png,jpg,jpeg,avif}",
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

// Order gallery<number>.* files numerically (1,2,…,35), then any other
// image files (e.g. image.png) after, sorted by name. Non-image files in
// the folder (.mhtml etc.) are never matched by the glob above.
const GALLERY = Object.entries(galleryModules)
  .map(([path, src]) => {
    const name = path.split("/").pop() ?? path;
    const match = name.match(/^gallery(\d+)\./);
    return { src, name, n: match ? Number(match[1]) : Number.POSITIVE_INFINITY };
  })
  .sort((a, b) => a.n - b.n || a.name.localeCompare(b.name))
  .map(({ src }) => ({
    src,
    alt: "Jaaju Kitchen & Bar — gallery photo",
  }));

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
