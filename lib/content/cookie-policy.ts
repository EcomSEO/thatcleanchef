/**
 * English Cookie Policy content for ThatCleanChef.
 *
 * The cookies-table reflects what this repo actually loads:
 * - Vercel hosting cookies (necessary, session continuity).
 * - Local-storage consent record (necessary).
 * - Vercel Analytics / Speed Insights (analytics, only with consent).
 * - Beehiiv embed cookies (newsletter audience measurement, only with
 *   consent and only when the embed is rendered).
 *
 * Per-locale expansion deferred until [locale]/ routing lands.
 */

export const COOKIE_POLICY_LAST_UPDATED = "April 27, 2026";

export type CookieRow = {
  name: string;
  provider: string;
  category: "necessary" | "analytics" | "marketing";
  purpose: string;
  duration: string;
};

export const COOKIES_TABLE: CookieRow[] = [
  {
    name: "tcc:cookie-consent",
    provider: "thatcleanchef.com",
    category: "necessary",
    purpose: "Records your consent choice (accept all / reject all / customized) and the timestamp.",
    duration: "13 months (browser localStorage)",
  },
  {
    name: "__vercel_*",
    provider: "Vercel",
    category: "necessary",
    purpose: "Edge routing and session continuity for the hosting layer.",
    duration: "Session",
  },
  {
    name: "_va, va_session",
    provider: "Vercel Analytics",
    category: "analytics",
    purpose: "Anonymous page-view counts. Only loaded if you accept Analytics.",
    duration: "Up to 24 hours",
  },
  {
    name: "bh_*",
    provider: "Beehiiv",
    category: "marketing",
    purpose: "Newsletter referral attribution and audience measurement. Only loaded on pages that embed the Beehiiv form, and only if you accept Audience measurement.",
    duration: "Up to 12 months",
  },
];

export const COOKIE_POLICY = {
  lastUpdated: COOKIE_POLICY_LAST_UPDATED,
  intro: [
    "This Cookie Policy explains what cookies and similar technologies ThatCleanChef uses on thatcleanchef.com, why we use them, and how to manage them. It complements the Privacy Policy and the cookie consent banner.",
  ],
  sections: [
    {
      heading: "1. What cookies are",
      body: [
        "Cookies are small text files placed on your device when you visit a website. We also use comparable browser storage (localStorage) for the consent record. “Cookies” in this policy refers to both.",
      ],
    },
    {
      heading: "2. Categories we use",
      body: [
        "**Necessary** — required for the site to function and to remember your consent choice. Cannot be turned off.",
        "**Analytics** — anonymous page-view counts so we know which recipes are useful. Only loaded with your consent.",
        "**Audience measurement** — newsletter referral attribution. Only loaded on pages that embed the newsletter form, and only with your consent.",
        "We do **not** use third-party advertising cookies. We do **not** sell or share data with advertising networks.",
      ],
    },
    {
      heading: "3. Cookies in use",
      body: [
        "See the table below. Names and durations may evolve; we update this page when they do.",
      ],
    },
    {
      heading: "4. Managing cookies",
      body: [
        "You can change your choice at any time by clicking **Cookie preferences** in the footer. You can also delete cookies via your browser settings (Chrome: Settings → Privacy → Cookies; Safari: Preferences → Privacy; Firefox: Preferences → Privacy & Security).",
        "Rejecting analytics and audience-measurement cookies does not affect your access to recipes or any feature of the site.",
      ],
    },
    {
      heading: "5. Third-party processors",
      body: [
        "**Vercel** — hosting and edge analytics (US, SCCs in place).",
        "**Beehiiv** — newsletter delivery (US, SCCs in place; data shared only on pages where the embed is rendered and only with your consent).",
        "Each operates under its own privacy policy.",
      ],
    },
    {
      heading: "6. Changes",
      body: [
        "We may update this Cookie Policy when we add, remove, or change cookies. Material changes will be highlighted with a new “Last updated” date.",
      ],
    },
    {
      heading: "7. Contact",
      body: [
        "Questions: **privacy@thatcleanchef.com**.",
      ],
    },
  ],
} as const;
