import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { submitReservation } from "@/lib/api/reservations.functions";
import reserveBg from "@/assets/reserve.webp";

export const Route = createFileRoute("/reserve")({
  head: () => ({
    meta: [
      { title: "Reserve a Table — Jaaju Kitchen & Bar" },
      {
        name: "description",
        content: "Reserve your table at Jaaju Kitchen & Bar, Miyapur — Hyderabad's home for Andhra & Telangana cuisine.",
      },
      { property: "og:title", content: "Reserve a Table — Jaaju Kitchen & Bar" },
      { property: "og:description", content: "Book your table at Jaaju." },
    ],
  }),
  component: ReservePage,
});

function ReservePage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setSubmitting(true);
    try {
      await submitReservation({
        data: {
          name: String(fd.get("name") ?? ""),
          phone: String(fd.get("phone") ?? ""),
          date: String(fd.get("date") ?? ""),
          time: String(fd.get("time") ?? ""),
          guests: Number(fd.get("guests") ?? 2),
          notes: String(fd.get("notes") ?? ""),
        },
      });
      form.reset();
      toast.success("Reservation requested", {
        description: "We've received your request and will confirm by phone shortly.",
      });
    } catch {
      toast.error("Couldn't submit your request", {
        description: "Please call 090522 10101 to book your table.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen text-charcoal">
      <div
        aria-hidden
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `url(${reserveBg})`,
          filter: "blur(3px)",
          transform: "scale(1.06)",
        }}
      />
      <div aria-hidden className="fixed inset-0 -z-10 bg-charcoal/45" />
      <Header />
      <main className="pt-20 pb-32">
        <section className="container-page grid md:grid-cols-12 gap-12 lg:gap-20">
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-6">
                Reservations
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-5xl md:text-6xl font-medium leading-tight text-balance mb-8 text-ivory">
                Your table at{" "}
                <span className="font-accent italic">Jaaju</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-ivory/80 leading-relaxed mb-12 max-w-[42ch]">
                We hold tables across the main room and our private dining
                space. For large parties or events, please call us directly.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="space-y-6">
                <Detail label="Hours" value="Open daily · Closes 11:30 pm" />
                <Detail label="Phone" value="090522 10101" />
                <Detail label="Email" value="hello@jaajukitchen.com" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="md:col-span-7">
            <div className="bg-champagne p-8 md:p-12 ring-1 ring-charcoal/10 rounded-3xl shadow-[22px_26px_60px_-12px_rgba(0,0,0,0.5)]">
              <form onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Name" name="name" type="text" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Date" name="date" type="date" required />
                <Field label="Time" name="time" type="time" required />
                <div className="md:col-span-2">
                  <Field label="Guests" name="guests" type="number" min={1} max={20} defaultValue={2} required />
                </div>
                <div className="md:col-span-2">
                  <Label>Notes (optional)</Label>
                  <textarea
                    name="notes"
                    rows={4}
                    placeholder="Allergies, occasion, seating preferences…"
                    className="w-full bg-ivory border-b border-charcoal/20 py-3 px-0 text-sm focus:outline-none focus:border-saffron transition-colors resize-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="mt-10 w-full md:w-auto bg-saffron text-white text-xs uppercase tracking-[0.25em] font-semibold px-10 py-4 hover:bg-charcoal transition-colors disabled:opacity-50"
              >
                {submitting ? "Sending…" : "Request Reservation"}
              </button>
              </form>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[10px] uppercase tracking-[0.25em] text-charcoal/60 font-semibold mb-2">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type,
  required,
  min,
  max,
  defaultValue,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  min?: number;
  max?: number;
  defaultValue?: number | string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        name={name}
        required={required}
        min={min}
        max={max}
        defaultValue={defaultValue}
        className="w-full bg-transparent border-b border-charcoal/20 py-3 text-sm focus:outline-none focus:border-saffron transition-colors"
      />
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.25em] text-ivory/50 mb-1">
        {label}
      </p>
      <p className="text-sm font-medium text-ivory">{value}</p>
    </div>
  );
}