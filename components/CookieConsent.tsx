"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

/**
 * GDPR / TTDSG / ePrivacy-compliant cookie consent banner.
 *
 * Audit requirements (April 2026):
 * - Accept all + Reject all rendered with equal prominence.
 * - Granular categories (necessary always-on, analytics, marketing).
 * - 13-month re-prompt cadence (TTDSG §25 + EDPB guidance).
 * - Re-openable via the `open-cookie-prefs` custom event so a footer
 *   "Cookie preferences" link can summon the panel.
 * - Versioned consent — bumping CONSENT_VERSION invalidates prior
 *   choices and re-prompts.
 *
 * English-only copy: ThatCleanChef has no `[locale]/` segment yet, so
 * translations are deferred until i18n routing is scaffolded.
 */

const STORAGE_KEY = "tcc:cookie-consent";
export const CONSENT_VERSION = 1;
const THIRTEEN_MONTHS_MS = 13 * 30 * 24 * 60 * 60 * 1000;
const OPEN_PREFS_EVENT = "open-cookie-prefs";

export type CookieConsentValue = {
  ts: number;
  version: number;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

function readConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieConsentValue;
    if (parsed.version !== CONSENT_VERSION) return null;
    if (typeof parsed.ts !== "number") return null;
    if (Date.now() - parsed.ts > THIRTEEN_MONTHS_MS) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeConsent(c: CookieConsentValue) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
  } catch {
    // ignore quota / disabled storage
  }
}

/**
 * Public hook returning the current consent state (or null if not yet given).
 * Reactive to consent changes via storage events and the open-prefs event.
 */
export function useCookieConsent(): CookieConsentValue | null {
  const [state, setState] = useState<CookieConsentValue | null>(null);

  useEffect(() => {
    setState(readConsent());
    const onChange = () => setState(readConsent());
    window.addEventListener("storage", onChange);
    window.addEventListener(OPEN_PREFS_EVENT, onChange);
    return () => {
      window.removeEventListener("storage", onChange);
      window.removeEventListener(OPEN_PREFS_EVENT, onChange);
    };
  }, []);

  return state;
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    setVisible(readConsent() === null);
    const onOpen = () => {
      setShowCustomize(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_PREFS_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_PREFS_EVENT, onOpen);
  }, []);

  const persist = useCallback((next: CookieConsentValue) => {
    writeConsent(next);
    window.dispatchEvent(new Event("storage"));
    setVisible(false);
    setShowCustomize(false);
  }, []);

  const acceptAll = () =>
    persist({ ts: Date.now(), version: CONSENT_VERSION, necessary: true, analytics: true, marketing: true });
  const rejectAll = () =>
    persist({ ts: Date.now(), version: CONSENT_VERSION, necessary: true, analytics: false, marketing: false });
  const saveCustom = () =>
    persist({ ts: Date.now(), version: CONSENT_VERSION, necessary: true, analytics, marketing });

  if (!visible) return null;

  // Equal-prominence styling — primary and secondary use the same size,
  // padding, and font weight. The audit requires Reject to be visually
  // equivalent to Accept; only color distinguishes them.
  const buttonBase =
    "min-h-[44px] px-4 py-2 rounded-sm text-sm font-semibold cursor-pointer transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-700 focus-visible:ring-offset-2";
  const primary = `${buttonBase} bg-terracotta text-cream hover:bg-terracotta-deep`;
  const secondary = `${buttonBase} bg-paper text-forest border border-forest hover:bg-sage-50`;
  const tertiary = `${buttonBase} bg-paper text-charcoal/80 border border-charcoal/30 hover:bg-charcoal/5`;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-hairline bg-paper shadow-2xl"
    >
      <div className="mx-auto max-w-7xl px-6 py-5">
        {!showCustomize ? (
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="md:max-w-[60%]">
              <h2 className="font-serif text-lg text-forest">
                We use cookies
              </h2>
              <p className="mt-2 text-sm text-charcoal/85 leading-relaxed">
                ThatCleanChef uses cookies for session continuity, anonymous
                analytics, and (with consent) audience measurement. You can
                accept all, reject all, or pick categories. Your choice is
                remembered for 13 months.{" "}
                <Link href="/cookies" className="underline text-forest">
                  Read the cookie policy
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
              <button type="button" onClick={rejectAll} className={secondary}>
                Reject all
              </button>
              <button type="button" onClick={() => setShowCustomize(true)} className={tertiary}>
                Customize
              </button>
              <button type="button" onClick={acceptAll} className={primary}>
                Accept all
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="font-serif text-lg text-forest">
              Cookie categories
            </h2>
            <p className="mt-2 text-sm text-charcoal/85">
              Necessary cookies always run. Pick the others.
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <input type="checkbox" checked readOnly aria-label="Necessary cookies" className="mt-1 accent-forest" />
                <span>
                  <strong className="text-forest">Necessary</strong>
                  <span className="block text-charcoal/75">
                    Session continuity and remembering your consent choice. Cannot be turned off.
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <input
                  id="cc-analytics"
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-1 accent-forest"
                />
                <label htmlFor="cc-analytics">
                  <strong className="text-forest">Analytics</strong>
                  <span className="block text-charcoal/75">
                    Anonymized page-view counts so we know which recipes are useful.
                  </span>
                </label>
              </li>
              <li className="flex items-start gap-3">
                <input
                  id="cc-marketing"
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="mt-1 accent-forest"
                />
                <label htmlFor="cc-marketing">
                  <strong className="text-forest">Audience measurement</strong>
                  <span className="block text-charcoal/75">
                    Newsletter referral attribution and aggregate audience reports.
                  </span>
                </label>
              </li>
            </ul>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
              <button type="button" onClick={rejectAll} className={secondary}>
                Reject all
              </button>
              <button type="button" onClick={saveCustom} className={tertiary}>
                Save choices
              </button>
              <button type="button" onClick={acceptAll} className={primary}>
                Accept all
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/** Convenience helper for callers that want to open the prefs panel. */
export function openCookiePrefs() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(OPEN_PREFS_EVENT));
  }
}
