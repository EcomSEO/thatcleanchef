import { AffiliateLabel } from "./AffiliateLabel";
import { AffiliateLink } from "./AffiliateLink";
import { getAffiliate } from "@/lib/affiliate/registry";
import type { LocaleCode } from "@/lib/i18n/locales";

/**
 * AffiliateProduct — the registry-aware wrapper used in MDX and recipe
 * templates. Reads `lib/affiliate/registry.ts` so the third-party →
 * owned-shop swap is a config change, not a content rewrite.
 *
 * Renders <AffiliateLabel> (EU-compliant per-locale) immediately adjacent
 * to the link, and the link itself uses `rel="sponsored nofollow"` via
 * <AffiliateLink>.
 *
 * Usage:
 *   <AffiliateProduct productKey="lodge-12-cast-iron" locale="en" />
 *
 * The displayed text is the brand + product name from the registry. Pass
 * `as="block"` for a card-style render on hub or methodology pages.
 */
export function AffiliateProduct({
  productKey,
  locale = "en",
  as = "inline",
  showWhy = true,
  className = "",
}: {
  productKey: string;
  locale?: LocaleCode;
  as?: "inline" | "block";
  showWhy?: boolean;
  className?: string;
}) {
  const link = getAffiliate(productKey);

  if (as === "block") {
    return (
      <div
        className={`p-4 border border-olive/15 rounded-sm bg-paper ${className}`}
      >
        <div className="flex items-center gap-2 mb-2">
          <AffiliateLabel locale={locale} />
          <span className="caps-label text-stone">{link.label}</span>
        </div>
        <AffiliateLink
          href={link.url}
          className="font-serif text-[1.05rem] text-olive hover:text-terracotta"
        >
          {link.brand} — {link.productName}
        </AffiliateLink>
        {showWhy && link.why && (
          <p className="mt-2 text-[14px] text-charcoal/75 leading-relaxed">
            {link.why}
          </p>
        )}
      </div>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <AffiliateLabel locale={locale} />
      <AffiliateLink href={link.url} className="text-olive underline decoration-terracotta/40 hover:decoration-terracotta">
        {link.brand} {link.productName}
      </AffiliateLink>
    </span>
  );
}
