import { createServerFn } from "@tanstack/react-start";
import process from "node:process";
import { z } from "zod";

// Reservation request handler. Runs server-only — the email/secret reads are
// tree-shaken from the client bundle.
//
// To actually deliver booking requests to the restaurant, set these env vars
// in .env (never commit secrets):
//   RESEND_API_KEY        — Resend API key (https://resend.com)
//   RESERVATION_EMAIL_TO  — inbox that should receive booking requests
//   RESERVATION_EMAIL_FROM — optional verified sender; defaults to Resend's
//                            shared onboarding@resend.dev (testing only)
//
// Without those set, the request is still validated and logged server-side
// and the visitor gets a success response — so the form works in dev, and
// "goes live" the moment the key + inbox are added. This is an on-site
// request system; it is independent of Google's reservation inventory.

const reservationSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(5, "Phone is required").max(30),
  date: z.string().trim().min(1, "Date is required"),
  time: z.string().trim().min(1, "Time is required"),
  guests: z.coerce.number().int().min(1).max(20),
  notes: z.string().trim().max(1000).optional().default(""),
});

export const submitReservation = createServerFn({ method: "POST" })
  .inputValidator(reservationSchema)
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.RESERVATION_EMAIL_TO;
    const from =
      process.env.RESERVATION_EMAIL_FROM ??
      "Jaaju Reservations <onboarding@resend.dev>";

    const summary = [
      "New table reservation request",
      "",
      `Name:   ${data.name}`,
      `Phone:  ${data.phone}`,
      `Date:   ${data.date}`,
      `Time:   ${data.time}`,
      `Guests: ${data.guests}`,
      `Notes:  ${data.notes || "—"}`,
    ].join("\n");

    // Always record it server-side so nothing is lost if email is unconfigured.
    console.log("[reservation]\n" + summary);

    if (!apiKey || !to) {
      return { ok: true, emailed: false };
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `New reservation — ${data.name} · ${data.date} ${data.time} · ${data.guests} guests`,
        text: summary,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[reservation] email send failed", res.status, detail);
      throw new Error("Could not submit reservation. Please call us to book.");
    }

    return { ok: true, emailed: true };
  });
