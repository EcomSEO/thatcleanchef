/**
 * Impressum text per § 5 TMG / § 18 Abs. 2 MStV.
 * Operator-specific values are placeholders so the operator can fill
 * them in without code changes — DO NOT remove the brackets.
 *
 * Email follows the SITE.email convention from `lib/content/site.ts`
 * (hello@thatcleanchef.com), but Impressum-specific contact can be
 * substituted with kontakt@thatcleanchef.com once the operator confirms.
 */

export const IMPRESSUM = {
  operator: "[Operator Name]",
  address: "[Address — Straße, Hausnummer, PLZ, Ort]",
  email: "hello@thatcleanchef.com",
  phone: "[Telefonnummer optional]",
  responsiblePerson: "[Verantwortliche Person nach § 18 Abs. 2 MStV]",
  registry: "[Handelsregister, falls eingetragen]",
  vatId: "[USt-IdNr. gemäß § 27a UStG, falls vorhanden]",
} as const;
