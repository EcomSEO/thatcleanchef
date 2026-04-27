import Link from "next/link";
import { SITE } from "@/lib/content/site";

export type Crumb = { label: string; href?: string };

/**
 * Clean breadcrumb. Inline JSON-LD BreadcrumbList for SEO. Sage-700 link
 * color, › separator.
 */
export function BreadcrumbNav({ crumbs }: { crumbs: Crumb[] }) {
  if (!crumbs?.length) return null;

  const items = crumbs
    .filter((c) => c.label)
    .map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${SITE.url}${c.href.startsWith("/") ? c.href : `/${c.href}`}` } : {}),
    }));

  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <nav aria-label="Breadcrumb" className="text-body-sm text-ink-2">
        <ol className="flex flex-wrap items-baseline gap-x-1.5 gap-y-1">
          {crumbs.map((c, i) => {
            const last = i === crumbs.length - 1;
            return (
              <li key={`${c.label}-${i}`} className="inline-flex items-baseline gap-1.5">
                {c.href && !last ? (
                  <Link href={c.href} className="text-sage-700 hover:underline">
                    {c.label}
                  </Link>
                ) : (
                  <span className={last ? "text-ink" : "text-sage-700"}>{c.label}</span>
                )}
                {!last && <span aria-hidden className="text-ink-3">›</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
