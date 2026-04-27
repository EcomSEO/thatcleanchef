"use client";

import { openCookiePrefs } from "./CookieConsent";

/**
 * Footer/legal-row link that re-opens the cookie consent panel. Required
 * by GDPR/TTDSG: users must be able to withdraw or change consent as
 * easily as they granted it.
 */
export function CookiePreferencesLink({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={openCookiePrefs}
      className={`text-ink hover:text-sage-700 transition ${className}`}
      aria-label="Cookie preferences"
    >
      Cookie preferences
    </button>
  );
}
