import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/motion/Reveal";

import { MENU, type MenuItem } from "@/lib/menu-data";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title: "Order Online — Jaaju Kitchen & Bar" },
      { name: "description", content: "Order Jaaju's signature biryanis, pulaos and Andhra starters for pickup or delivery in Hyderabad." },
      { property: "og:title", content: "Order Online — Jaaju Kitchen & Bar" },
      { property: "og:description", content: "Order Jaaju's menu for pickup or delivery." },
    ],
  }),
  component: OrderPage,
});

type CartLine = { key: string; item: MenuItem; qty: number };

function OrderPage() {
  const [cart, setCart] = useState<Record<string, CartLine>>({});
  const [mode, setMode] = useState<"delivery" | "pickup">("delivery");

  const add = (item: MenuItem, catId: string) => {
    const key = `${catId}:${item.id}`;
    setCart((c) => ({
      ...c,
      [key]: { key, item, qty: (c[key]?.qty ?? 0) + 1 },
    }));
  };
  const dec = (key: string) => {
    setCart((c) => {
      const line = c[key];
      if (!line) return c;
      if (line.qty <= 1) {
        const { [key]: _, ...rest } = c;
        return rest;
      }
      return { ...c, [key]: { ...line, qty: line.qty - 1 } };
    });
  };
  const remove = (key: string) => setCart((c) => {
    const { [key]: _, ...rest } = c;
    return rest;
  });

  const lines = Object.values(cart);
  const subtotal = useMemo(
    () => lines.reduce((s, l) => s + l.item.price * l.qty, 0),
    [lines],
  );
  const fee = mode === "delivery" ? 80 : 0;
  const total = subtotal + fee;

  const checkout = () => {
    if (lines.length === 0) return;
    toast.success("Order placed", {
      description: `${lines.reduce((s, l) => s + l.qty, 0)} items · ₹${total.toLocaleString("en-IN")}. We'll text you a confirmation.`,
    });
    setCart({});
  };

  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <Header />
      <main className="pt-16 pb-32">
        <section className="container-page pb-12 border-b border-charcoal/5">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-4">
              Online Ordering
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-6xl font-medium leading-tight text-balance max-w-3xl">
              Jaaju, at your{" "}
              <span className="font-accent italic">doorstep</span>.
            </h1>
          </Reveal>
        </section>

        <section className="container-page mt-12 grid lg:grid-cols-[1fr_22rem] gap-12">
          {/* Menu */}
          <div className="space-y-16">
            {MENU.map((cat) => (
              <div key={cat.id}>
                <div className="mb-6 flex items-baseline justify-between gap-4">
                  <h2 className="font-display text-3xl">{cat.name}</h2>
                  <span className="hairline flex-1 mb-2" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-charcoal/40">
                    {cat.items.length}
                  </span>
                </div>
                <ul className="space-y-3">
                  {cat.items.map((item) => {
                    const key = `${cat.id}:${item.id}`;
                    const line = cart[key];
                    return (
                      <li
                        key={key}
                        className="bg-champagne ring-1 ring-charcoal/5 p-5 grid grid-cols-[1fr_auto] gap-4 items-start"
                      >
                        <div className="min-w-0">
                          <div className="flex items-baseline gap-2 flex-wrap">
                            <h3 className="font-display text-lg">{item.name}</h3>
                            <span className="text-xs text-gold tabular-nums">
                              ₹{item.price.toLocaleString("en-IN")}
                            </span>
                          </div>
                          <p className="text-sm text-charcoal/60 mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => add(item, cat.id)}
                          className="shrink-0 bg-charcoal text-ivory text-[10px] uppercase tracking-[0.25em] font-semibold px-4 py-2.5 hover:bg-saffron transition-colors"
                        >
                          {line ? `× ${line.qty}` : "Add"}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Cart */}
          <aside className="lg:sticky lg:top-28 self-start bg-champagne ring-1 ring-charcoal/5 p-7 h-fit">
            <div className="flex items-baseline justify-between mb-6">
              <h2 className="font-display text-2xl">Your Order</h2>
              <span className="text-[10px] uppercase tracking-[0.25em] text-charcoal/40">
                {lines.length} {lines.length === 1 ? "item" : "items"}
              </span>
            </div>

            <div className="flex gap-1 bg-ivory p-1 mb-6">
              {(["delivery", "pickup"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={`flex-1 text-[10px] uppercase tracking-[0.25em] font-semibold py-2.5 transition-colors ${
                    mode === m ? "bg-charcoal text-ivory" : "text-charcoal/60"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>

            {lines.length === 0 ? (
              <p className="font-accent italic text-charcoal/50 text-center py-8">
                Your basket is empty.
              </p>
            ) : (
              <ul className="space-y-4 mb-6 max-h-[28rem] overflow-y-auto">
                {lines.map((line) => (
                  <li key={line.key} className="grid grid-cols-[1fr_auto] gap-3 items-start text-sm">
                    <div className="min-w-0">
                      <p className="font-medium truncate">{line.item.name}</p>
                      <p className="text-xs text-charcoal/50 tabular-nums">
                        ₹{(line.item.price * line.qty).toLocaleString("en-IN")}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button onClick={() => dec(line.key)} className="size-7 grid place-items-center hover:bg-ivory transition-colors" aria-label="Decrease">
                        <Minus className="size-3" />
                      </button>
                      <span className="w-6 text-center text-sm tabular-nums">{line.qty}</span>
                      <button onClick={() => add(line.item, line.key.split(":")[0])} className="size-7 grid place-items-center hover:bg-ivory transition-colors" aria-label="Increase">
                        <Plus className="size-3" />
                      </button>
                      <button onClick={() => remove(line.key)} className="size-7 grid place-items-center text-charcoal/40 hover:text-saffron transition-colors" aria-label="Remove">
                        <Trash2 className="size-3" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <div className="space-y-2 text-sm border-t border-charcoal/10 pt-5">
              <Row label="Subtotal" value={subtotal} />
              <Row label={mode === "delivery" ? "Delivery" : "Pickup"} value={fee} />
              <Row label="Total" value={total} bold />
            </div>

            <button
              type="button"
              onClick={checkout}
              disabled={lines.length === 0}
              className="mt-6 w-full bg-saffron text-white text-xs uppercase tracking-[0.25em] font-semibold py-4 hover:bg-charcoal transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Place Order
            </button>
            <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-charcoal/40 text-center">
              Prefer to dine in? <Link to="/reserve" className="text-saffron">Reserve a table</Link>
            </p>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Row({ label, value, bold }: { label: string; value: number; bold?: boolean }) {
  return (
    <div className={`flex justify-between ${bold ? "font-medium text-base pt-2 border-t border-charcoal/10" : "text-charcoal/60"}`}>
      <span>{label}</span>
      <span className="tabular-nums">₹{value.toLocaleString("en-IN")}</span>
    </div>
  );
}