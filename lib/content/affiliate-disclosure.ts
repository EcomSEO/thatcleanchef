/**
 * English Affiliate Disclosure content for ThatCleanChef.
 *
 * No DTC food / cookware / supplement affiliate program is currently
 * live. The disclosure framework is shipped so that any future
 * relationship is labelled per the EU compliance audit:
 * country-appropriate label pill (Werbung / Publicité / Pubblicità
 * / Sponsored), sit immediately adjacent to the commercial link.
 *
 * Per-locale label translations live in components/AffiliateLabel.tsx.
 */

export const AFFILIATE_DISCLOSURE_LAST_UPDATED = "April 27, 2026";

export const AFFILIATE_DISCLOSURE = {
  lastUpdated: AFFILIATE_DISCLOSURE_LAST_UPDATED,
  intro: [
    "ThatCleanChef may have affiliate relationships with cookware brands, kitchen-tool retailers, and dietitian-vetted food / supplement vendors (note: **no such relationships are currently active** as of the date below). This disclosure explains how affiliate links are labelled when they exist, how recommendations are made, and your rights as a reader.",
  ],
  sections: [
    {
      heading: "1. What an affiliate link is",
      body: [
        "An affiliate link is a tracked URL. If you click it and buy from the merchant, the merchant pays ThatCleanChef a small commission — at no extra cost to you. Affiliate commissions help fund recipe testing, dietitian review, and original photography.",
      ],
    },
    {
      heading: "2. How disclosure looks",
      body: [
        "Per the April 2026 EU compliance audit, every affiliate link on ThatCleanChef carries a **country-appropriate label pill** rendered in the local language. The labels we use are:",
        "**English** — Sponsored",
        "**German** — Werbung",
        "**French** — Publicité",
        "**Italian** — Pubblicità",
        "**Spanish** — Publicidad",
        "**Dutch** — Advertentie",
        "**Polish** — Reklama",
        "**Swedish** — Annons",
        "**Portuguese** — Publicidade",
        "**Japanese** — 広告",
        "**Chinese** — 广告",
        "**Arabic** — إعلان",
        "The label sits directly adjacent to (or wraps) the affiliate link. A repeat disclosure appears at the top of any recipe / round-up that contains affiliate links, before the product list.",
      ],
    },
    {
      heading: "3. How recommendations are made",
      body: [
        "Editorial independence is non-negotiable.",
        "We recommend on the merits — nutrition density, ingredient quality, durability of cookware, peptide-therapy appropriateness — not on commission rate.",
        "We never accept payment for placement.",
        "We never raise a product's ranking because its affiliate program pays better.",
        "When we have to choose between two genuinely-tied products and only one has an affiliate program, we say so in the post and link the non-affiliate one too.",
      ],
    },
    {
      heading: "4. Programs we may use",
      body: [
        "When affiliate relationships exist, they are typically with:",
        "Amazon Associates (cookware, kitchen tools).",
        "ShareASale, Impact, Awin (cookware and dietitian-vetted food brands).",
        "Direct relationships with selected vendors, disclosed per post.",
        "ThatCleanChef does **not** participate in peptide-vendor or GLP-1-vendor affiliate programs. Zero. Ever. Editorial standards forbid it because the audience is patient-adjacent and the products are prescription-only in most jurisdictions.",
      ],
    },
    {
      heading: "5. Your rights",
      body: [
        "Affiliate links never compromise your privacy. The merchant sees only that the click came from ThatCleanChef, not who you are. We do not receive your name, address, or payment information.",
        "You can use the site without ever clicking an affiliate link. Recipes are free. The Nutrition Ledger is free. Editorial review is free.",
      ],
    },
    {
      heading: "6. Contact",
      body: [
        "Affiliate or sponsorship questions: **hello@thatcleanchef.com**.",
      ],
    },
  ],
} as const;
