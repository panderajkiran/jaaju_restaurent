import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/motion/Reveal";

import { MENU, type MenuItem } from "@/lib/menu-data";
import jaajuBar from "@/assets/jaaju-bar.webp";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Jaaju Kitchen & Bar" },
      {
        name: "description",
        content:
          "The Jaaju Kitchen & Bar menu — starters, biryanis, pulaos, Andhra curries, desserts and beverages.",
      },
      { property: "og:title", content: "Menu — Jaaju Kitchen & Bar" },
      {
        property: "og:description",
        content: "Andhra and Telangana cuisine, served in Miyapur, Hyderabad.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(MENU[0].id);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return MENU;
    return MENU.map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q) ||
          i.ingredients.some((ing) => ing.toLowerCase().includes(q)),
      ),
    })).filter((c) => c.items.length > 0);
  }, [query]);

  const isSearching = query.trim().length > 0;
  const visibleCategories = isSearching
    ? filtered
    : filtered.filter((c) => c.id === active);
  const activeCategory = MENU.find((c) => c.id === active) ?? MENU[0];

  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <Header />
      <main>
        <section className="relative pt-24 pb-12 text-ivory border-b border-ivory/10 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${jaajuBar})`,
              filter: "blur(3px)",
              transform: "scale(1.06)",
            }}
          />
          <div aria-hidden className="absolute inset-0 bg-[#3E1C0D]/70" />
          <div className="relative container-page text-center">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-6">
                The Jaaju Menu
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-5xl md:text-6xl font-medium leading-tight text-balance mb-6">
                Fired hot. Plated{" "}
                <span className="font-accent italic">with care</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-accent italic text-xl text-ivory/70 max-w-xl mx-auto">
                The flavours of Andhra and Telangana, from our kitchen in
                Miyapur.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="sticky top-20 z-30 bg-ivory/85 backdrop-blur-xl border-b border-charcoal/5">
          <div className="container-page py-4">
            <div className="relative max-w-md mx-auto mb-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-charcoal/40" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search dishes, ingredients…"
                className="w-full pl-11 pr-4 py-2.5 bg-charcoal/5 rounded-full text-sm placeholder:text-charcoal/40 focus:outline-none focus:ring-1 focus:ring-saffron/60 focus:bg-white transition"
              />
            </div>
            <nav
              aria-label="Menu categories"
              className="overflow-x-auto pb-1 -mx-4 px-4 scrollbar-none"
              style={{ scrollbarWidth: "none" }}
            >
              <div className="flex gap-1.5 w-max mx-auto">
                {MENU.map((cat) => {
                const isActive = !isSearching && active === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setActive(cat.id);
                      setQuery("");
                    }}
                    className={`text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                      isActive
                        ? "bg-saffron text-white shadow-sm"
                        : "text-charcoal/70 hover:text-charcoal hover:bg-charcoal/5"
                    }`}
                  >
                    {cat.name}
                  </button>
                );
                })}
              </div>
            </nav>
          </div>
        </section>

        <section className="container-page py-16 md:py-20">
          {isSearching && visibleCategories.length === 0 && (
            <p className="text-center font-accent italic text-2xl text-charcoal/50 py-20">
              No dishes match "{query}".
            </p>
          )}

          {!isSearching && (
            <Reveal>
              <div className="max-w-2xl mx-auto text-center mb-14">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-4">
                  {activeCategory.name}
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight text-balance">
                  {activeCategory.subtitle}
                </h2>
              </div>
            </Reveal>
          )}

          <div className="max-w-3xl mx-auto space-y-20">
            {visibleCategories.map((cat) => (
              <div key={cat.id} id={cat.id} className="scroll-mt-44">
                {isSearching && (
                  <div className="mb-8">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-2">
                      {cat.name}
                    </p>
                    <h2 className="font-display text-3xl md:text-4xl font-medium leading-tight text-balance">
                      {cat.subtitle}
                    </h2>
                  </div>
                )}
                <ul className="divide-y divide-charcoal/10">
                  {cat.items.map((item) => (
                    <MenuRow key={item.id} item={item} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function MenuRow({ item }: { item: MenuItem }) {
  return (
    <li className="py-8 grid grid-cols-[1fr_auto] gap-x-8 gap-y-2 items-start">
      <div className="min-w-0">
        <div className="flex items-baseline gap-3 mb-2 flex-wrap">
          <h3 className="font-display text-2xl font-medium">{item.name}</h3>
          <span className="hairline flex-1 min-w-[2rem] mb-1.5 hidden sm:block" />
        </div>
        <p className="text-sm text-charcoal/65 leading-relaxed max-w-[60ch] mb-3">
          {item.description}
        </p>
        <p className="text-[10px] uppercase tracking-[0.25em] text-charcoal/40">
          {item.ingredients.join(" · ")}
        </p>
      </div>
      <span className="text-sm text-gold font-medium tabular-nums shrink-0 pt-1">
        ₹{item.price.toLocaleString("en-IN")}
      </span>
    </li>
  );
}