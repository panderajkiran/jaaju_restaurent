import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/motion/Reveal";

import instaLogo from "@/assets/insta-logo.avif";
import swiggyLogo from "@/assets/swiggy-logo.jpeg";


export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Jaaju Kitchen & Bar" },
      { name: "description", content: "Visit Jaaju Kitchen & Bar in Miyapur, Hyderabad. Hours, phone, and directions." },
      { property: "og:title", content: "Contact & Location — Jaaju Kitchen & Bar" },
      { property: "og:description", content: "Find us, call us, write to us." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      <Header />
      <main className="pt-24 pb-32">
        <section className="container-page grid md:grid-cols-12 gap-12 lg:gap-20 mb-20">
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-6">
                Visit
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-5xl md:text-6xl font-medium leading-tight text-balance mb-10">
                Find us in{" "}
                <span className="font-accent italic">Miyapur</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-8">
                <Item
                  icon={MapPin}
                  label="Address"
                  lines={[
                    "First Floor, Block 1, Satyanarayana Enclave",
                    "Block-F, Madinaguda, Durga Estates, Miyapur",
                    "Hyderabad, Telangana 500049",
                  ]}
                />
                <Item icon={Phone} label="Phone" lines={["090522 10101"]} />
                <Item icon={Mail} label="Email" lines={["hello@jaajukitchen.com"]} />
                <Item icon={Clock} label="Hours" lines={["Open daily · Closes 11:30 pm"]} />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <ul className="flex items-center gap-8 mt-12">
                <li>
                  <a
                    href="https://www.instagram.com/jaaju.hyd/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Jaaju on Instagram"
                    className="inline-flex hover:opacity-80 transition-opacity"
                  >
                    <img src={instaLogo} alt="Instagram" className="h-9 w-auto object-contain" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.zomato.com/hyderabad/jaaju-kitchen-bar-miyapur/order"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Order from Jaaju on Zomato"
                    className="inline-flex items-center font-display lowercase tracking-tight text-4xl leading-none font-semibold text-[#e23744] hover:opacity-80 transition-opacity"
                  >
                    zomato
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.swiggy.com/restaurants/jaaju-kitchen-and-bar-miyapur-hyderabad-962721/dineout"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Order from Jaaju on Swiggy"
                    className="inline-flex hover:opacity-80 transition-opacity"
                  >
                    <img src={swiggyLogo} alt="Swiggy" className="h-9 w-auto object-contain" />
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="md:col-span-7">
            <div className="aspect-[4/5] md:aspect-square w-full bg-champagne ring-1 ring-charcoal/5 overflow-hidden">
              <iframe
                title="Jaaju Kitchen & Bar location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=78.3550%2C17.4880%2C78.3850%2C17.5080&layer=mapnik&marker=17.4980%2C78.3700"
                className="w-full h-full grayscale-[35%]"
                loading="lazy"
              />
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Item({
  icon: Icon,
  label,
  lines,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  lines: string[];
}) {
  return (
    <div className="flex gap-4">
      <Icon className="size-4 text-saffron mt-1 shrink-0" />
      <div>
        <p className="text-[10px] uppercase tracking-[0.25em] text-charcoal/40 mb-1">{label}</p>
        {lines.map((l) => (
          <p key={l} className="text-sm">{l}</p>
        ))}
      </div>
    </div>
  );
}