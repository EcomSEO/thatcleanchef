"use client";

import { useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";
import { LOCALES, LOCALE_LABELS, type Locale, isLocale } from "@/lib/content/i18n";

/**
 * LocaleSwitcher — native select dropdown that swaps the URL's locale
 * prefix while preserving the rest of the path. Used in the header.
 *
 * URL strategy:
 *   /                           — canonical EN
 *   /<recipe-slug>              — canonical EN recipe
 *   /<locale>/                  — localized home (e.g. /de)
 *   /<locale>/<recipe-slug>     — localized recipe
 *   /<locale>/guides/<hub>      — localized hub
 *   ...etc
 *
 * Switching from EN to DE on /cottage-cheese-flatbread routes to
 * /de/cottage-cheese-flatbread. Switching back to EN strips the prefix.
 */
export function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname() ?? "/";

  const currentLocale: Locale = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return "en";
    if (isLocale(segments[0])) return segments[0] as Locale;
    return "en";
  }, [pathname]);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const next = e.target.value as Locale;
    if (next === currentLocale) return;
    const segments = pathname.split("/").filter(Boolean);
    // Strip any existing locale prefix.
    const rest = segments.length > 0 && isLocale(segments[0]) ? segments.slice(1) : segments;
    const tail = rest.length > 0 ? `/${rest.join("/")}` : "";
    const target = next === "en" ? tail || "/" : `/${next}${tail}`;
    router.push(target);
  }

  return (
    <label className="inline-flex items-center gap-1.5 text-[12.5px]">
      <span className="sr-only">Language</span>
      <select
        aria-label="Language"
        value={currentLocale}
        onChange={handleChange}
        className="appearance-none bg-transparent border border-olive/15 rounded-sm px-2 py-1 text-[12.5px] text-charcoal/85 hover:border-terracotta/40 focus:outline-none focus:border-terracotta cursor-pointer tnum"
      >
        {LOCALES.map((l) => (
          <option key={l} value={l}>
            {LOCALE_LABELS[l].native}
          </option>
        ))}
      </select>
    </label>
  );
}
