import { authoritiesFor } from "@/lib/compliance/authorities";
import type { LocaleCode } from "@/lib/i18n/locales";

/**
 * Footer block listing the country's food-safety + data protection
 * authorities, signalling regulatory awareness. Locale defaults to "en"
 * since ThatCleanChef has no [locale]/ routing — once i18n is
 * scaffolded, pass the active request locale.
 */
export function RegulatoryAuthoritiesStrip({ locale = "en" }: { locale?: LocaleCode }) {
  const items = authoritiesFor(locale);
  return (
    <div className="py-6 border-t border-hairline">
      <h3 className="caps-label mb-2">Regulatory authorities</h3>
      <ul className="flex flex-wrap gap-x-4 gap-y-1 text-label-sm text-ink-2">
        {items.map((a) => (
          <li key={a.url}>
            <a
              href={a.url}
              target="_blank"
              rel="noopener"
              className="hover:text-sage-700 underline-offset-2 hover:underline"
            >
              {a.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
