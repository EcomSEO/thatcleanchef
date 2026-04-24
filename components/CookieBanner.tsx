"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "tcc:cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // ignore
    }
  }, []);

  function accept(choice: "accept" | "reject") {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-50 bg-paper border border-olive/20 rounded-sm shadow-card p-4"
    >
      <p className="text-sm text-charcoal/90">
        We use a small number of cookies for analytics and session continuity.
        No advertising cookies. See our{" "}
        <a href="/privacy" className="underline decoration-terracotta/60">
          Privacy Policy
        </a>
        .
      </p>
      <div className="mt-3 flex gap-2 justify-end">
        <button
          onClick={() => accept("reject")}
          className="text-sm px-3 py-2 text-stone hover:text-olive"
        >
          Reject
        </button>
        <button
          onClick={() => accept("accept")}
          className="text-sm px-3 py-2 rounded-sm bg-terracotta text-cream hover:bg-terracotta-deep"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
