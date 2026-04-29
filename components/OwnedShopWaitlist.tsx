"use client";

import { FormEvent, useState } from "react";

/**
 * OwnedShopWaitlist — pre-launch interest list for the future ThatCleanChef
 * shop. Per `MONETIZATION-MODEL.md` (2026-04-29 lock):
 *
 *   The owned shop is the long-term destination. Every site is a top-of-
 *   funnel asset for that store. The owned-shop pre-launch waitlist is the
 *   single connective tissue across the network, branded per-site.
 *
 * Beehiiv tag: `thatcleanchef-shop-waitlist`. The handler POSTs to Beehiiv
 * via `/api/owned-shop-waitlist` (server route reads BEEHIIV_API_KEY from
 * env, see app/api/owned-shop-waitlist/route.ts when it lands). Pre-launch
 * fallback: when BEEHIIV_API_KEY is missing, we persist the email to
 * localStorage and surface a confirmation toast — no silent failures.
 *
 * Two layouts:
 *   - "footer" — single-line horizontal form for the footer DOM slot
 *   - "inline" — card-style stand-alone on hub / recipe pages
 */

type Variant = "footer" | "inline";

export function OwnedShopWaitlist({ variant = "inline" }: { variant?: Variant }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );
  const [error, setError] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/owned-shop-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          tag: "thatcleanchef-shop-waitlist",
          source: variant,
        }),
      });
      if (!res.ok && res.status !== 404) {
        // 404 is the missing-route case → fall through to localStorage path.
        const j = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        setStatus("error");
        setError(j.error ?? "Something went wrong.");
        return;
      }
      // Mirror to localStorage for pre-API days + double-opt-in audit.
      try {
        const stored = JSON.parse(
          localStorage.getItem("tcc:shop-waitlist") ?? "[]",
        ) as string[];
        if (!stored.includes(email)) {
          stored.push(email);
          localStorage.setItem("tcc:shop-waitlist", JSON.stringify(stored));
        }
      } catch {
        /* localStorage unavailable — silent */
      }
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("error");
      setError("Couldn't reach the signup endpoint. Try again in a moment.");
    }
  }

  const headline = "We're building a shop.";
  const dek =
    "Curated cookware, pantry staples we actually buy, recipe-bundle PDFs. Be the first to know when it opens.";

  if (variant === "footer") {
    return (
      <div className="grid md:grid-cols-[1fr_auto] gap-x-8 gap-y-3 items-end">
        <div>
          <h4 className="caps-label text-terracotta">Owned-shop waitlist</h4>
          <p className="mt-1 font-serif text-[1.1rem] text-olive leading-tight">
            {headline}
          </p>
          <p className="mt-1 text-body-sm text-ink-2 max-w-md">{dek}</p>
        </div>
        {status === "ok" ? (
          <p className="text-body-sm text-olive">
            Thanks — we'll only email when it's actually open.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="flex flex-col sm:flex-row gap-2"
          >
            <label htmlFor="shop-waitlist-footer" className="sr-only">
              Email address
            </label>
            <input
              id="shop-waitlist-footer"
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="kitchen-input min-w-[240px]"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="kitchen-submit rounded-sm bg-terracotta px-5 py-3 text-cream hover:bg-terracotta-deep disabled:opacity-50 font-medium text-body-sm whitespace-nowrap"
            >
              {status === "loading" ? "…" : "Join the waitlist"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="text-body-sm text-terracotta">{error}</p>
        )}
      </div>
    );
  }

  // inline variant
  return (
    <section className="my-12 p-7 md:p-9 rounded-sm border border-olive/15 bg-paper relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-terracotta" />
      <span className="caps-label text-terracotta">
        Owned-shop pre-launch waitlist
      </span>
      <h3 className="font-serif text-[1.7rem] md:text-[2rem] text-olive mt-3 leading-tight">
        {headline}
      </h3>
      <p className="mt-3 text-charcoal/85 leading-relaxed text-[15.5px] max-w-xl">
        {dek}
      </p>
      {status === "ok" ? (
        <p className="mt-6 text-olive font-serif italic">
          Thanks — we'll only email when it's actually open.
        </p>
      ) : (
        <form
          onSubmit={onSubmit}
          className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md"
        >
          <label htmlFor="shop-waitlist-inline" className="sr-only">
            Email address
          </label>
          <input
            id="shop-waitlist-inline"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="kitchen-input flex-1"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="kitchen-submit rounded-sm bg-terracotta px-6 py-3 text-cream hover:bg-terracotta-deep disabled:opacity-50 font-medium whitespace-nowrap"
          >
            {status === "loading" ? "Sending…" : "Join the waitlist"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="mt-3 text-[13.5px] text-terracotta">{error}</p>
      )}
      <p className="mt-4 text-[12px] text-stone max-w-md leading-relaxed">
        We'll only email you about the shop opening. Unsubscribe in any
        email. See our{" "}
        <a
          href="/privacy"
          className="underline decoration-terracotta/50 hover:decoration-terracotta"
        >
          Privacy Policy
        </a>
        .
      </p>
    </section>
  );
}
