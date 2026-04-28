/**
 * National food-safety authorities + data protection authorities per
 * locale, used by the Footer's "Regulatory authorities" strip.
 *
 * For ThatCleanChef (clean-eating recipes) we list
 * the food-safety agency (not the medicines agency) plus the national
 * DPA, ported verbatim from the larderlab April 2026 EU compliance
 * audit.
 *
 * Locale codes follow `LocaleCode` from `lib/i18n/locales.ts`.
 * Locales without a dedicated entry (ja, zh, ar) fall back to `en`.
 */

import type { LocaleCode } from "@/lib/i18n/locales";

export type Authority = { name: string; url: string };

export const AUTHORITIES_BY_LOCALE: Partial<Record<LocaleCode, Authority[]>> = {
  en: [{ name: "Food safety: contact your national food agency", url: "https://www.efsa.europa.eu/" }],
  de: [
    { name: "BVL (food safety)", url: "https://www.bvl.bund.de" },
    { name: "BfDI (data protection)", url: "https://www.bfdi.bund.de" },
  ],
  fr: [
    { name: "ANSES (sécurité sanitaire)", url: "https://www.anses.fr" },
    { name: "DGCCRF (consommation)", url: "https://www.economie.gouv.fr/dgccrf" },
    { name: "CNIL (données personnelles)", url: "https://www.cnil.fr" },
  ],
  it: [
    { name: "Ministero della Salute", url: "https://www.salute.gov.it" },
    { name: "Garante (privacy)", url: "https://www.garanteprivacy.it" },
  ],
  es: [
    { name: "AESAN (seguridad alimentaria)", url: "https://www.aesan.gob.es" },
    { name: "AEPD (protección de datos)", url: "https://www.aepd.es" },
  ],
  nl: [
    { name: "NVWA (voedselveiligheid)", url: "https://www.nvwa.nl" },
    { name: "AP (gegevensbescherming)", url: "https://www.autoriteitpersoonsgegevens.nl" },
  ],
  pl: [
    { name: "GIS (Inspekcja Sanitarna)", url: "https://www.gov.pl/web/gis" },
    { name: "UODO (ochrona danych)", url: "https://www.uodo.gov.pl" },
  ],
  sv: [
    { name: "Livsmedelsverket", url: "https://www.livsmedelsverket.se" },
    { name: "IMY (dataskydd)", url: "https://www.imy.se" },
  ],
  pt: [
    { name: "ASAE (segurança alimentar)", url: "https://www.asae.gov.pt" },
    { name: "CNPD (proteção de dados)", url: "https://www.cnpd.pt" },
  ],
};

/** Resolve authorities for a given locale, falling back to en. */
export function authoritiesFor(locale: LocaleCode): Authority[] {
  return AUTHORITIES_BY_LOCALE[locale] ?? AUTHORITIES_BY_LOCALE.en!;
}
