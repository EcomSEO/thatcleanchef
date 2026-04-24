"use client";

import { FormEvent, useState } from "react";

export function EmailCapture({
  headline = "The Clean Chef Starter Kit.",
  subhead = "A 14-day anti-inflammatory meal plan PDF — grocery list by section, macros totaled per day, Sunday prep sequence. Free.",
  variant = "inline",
}: {
  headline?: string;
  subhead?: string;
  variant?: "inline" | "end-of-article";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    // Beehiiv wiring lands with launch checklist §8. Pre-launch: local-only confirmation.
    await new Promise((r) => setTimeout(r, 400));
    setStatus("ok");
  }

  const wrapper =
    variant === "end-of-article"
      ? "my-12 p-8 rounded-sm bg-terracotta/10 border border-terracotta/25 text-center"
      : "my-12 p-8 rounded-sm bg-paper border border-olive/10 text-center";

  return (
    <section id="email-capture" className={wrapper}>
      <h2 className="font-serif text-2xl text-olive mb-2">{headline}</h2>
      <p className="text-charcoal/80 max-w-xl mx-auto">{subhead}</p>
      {status === "ok" ? (
        <p className="mt-6 text-olive">
          Thanks &mdash; check your inbox for the Starter Kit.
        </p>
      ) : (
        <form
          onSubmit={onSubmit}
          className="mt-6 flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto"
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
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
            className="kitchen-submit rounded-sm bg-terracotta px-6 py-3 text-cream hover:bg-terracotta-deep disabled:opacity-50 font-medium"
          >
            {status === "loading" ? "Sending…" : "Send me the Starter Kit"}
          </button>
        </form>
      )}
      <p className="mt-4 text-xs text-stone max-w-md mx-auto">
        By subscribing, you agree to our{" "}
        <a href="/privacy" className="underline decoration-terracotta/60">
          Privacy Policy
        </a>
        . One calm email a week. Unsubscribe anytime.
      </p>
    </section>
  );
}
