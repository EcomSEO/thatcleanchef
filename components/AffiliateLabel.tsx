import type { LocaleCode } from "@/lib/i18n/locales";

/**
 * 12-country affiliate disclosure label, rendered as a small pill that
 * should sit immediately adjacent to (or wrap) a commercial link.
 *
 * Per the EU compliance audit, the label MUST be in the local language —
 * English fallbacks are not acceptable in DE/FR/IT/ES/NL/PL/SE/PT.
 *
 * ThatCleanChef currently has NO active DTC food / cookware affiliates
 * per editorial standards. The component is shipped so that future
 * Pepvise / cookware program integrations have the audit-mandated
 * label ready.
 */

export const AFFILIATE_LABEL_BY_LOCALE: Record<LocaleCode, string> = {
  en: "Sponsored",
  de: "Werbung",
  fr: "Publicité",
  it: "Pubblicità",
  es: "Publicidad",
  nl: "Advertentie",
  pl: "Reklama",
  sv: "Annons",
  pt: "Publicidade",
  ro: "Publicitate",
  cs: "Reklama",
  no: "Annonse",
};

export function AffiliateLabel({ locale = "en" }: { locale?: LocaleCode }) {
  const label = AFFILIATE_LABEL_BY_LOCALE[locale] ?? AFFILIATE_LABEL_BY_LOCALE.en;
  return (
    <span
      className="inline-flex items-center align-middle rounded-sm bg-amber-100 text-amber-900 border border-amber-300 px-1.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide"
      aria-label={label}
      data-affiliate-label
    >
      {label}
    </span>
  );
}
