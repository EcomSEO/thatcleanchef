import { SITE } from "@/lib/content/site";
import { JsonLd } from "./JsonLd";

/**
 * Organization + WebSite JSON-LD on the home page.
 *
 * `sameAs` is intentionally empty per the 2026-04-29 master-orchestration
 * operator-isolation lock: "No sister-site links anywhere — and especially
 * no `-ecom-seo.vercel.app` URLs." Schema.org `sameAs` is the same exposure
 * surface as a footer link as far as Google's link graph is concerned.
 *
 * Per the schema-library spec: "`sameAs` stays empty until you have public
 * social profiles. Do NOT invent fake profiles for E-E-A-T padding."
 */
export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${SITE.url}#org`,
            name: SITE.name,
            url: SITE.url,
            logo: `${SITE.url}/logo.png`,
            description: SITE.description,
            sameAs: [],
          },
          {
            "@type": "WebSite",
            "@id": `${SITE.url}#site`,
            url: SITE.url,
            name: SITE.name,
            publisher: { "@id": `${SITE.url}#org` },
            potentialAction: {
              "@type": "SearchAction",
              target: `${SITE.url}/?q={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          },
        ],
      }}
    />
  );
}
