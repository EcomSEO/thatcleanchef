import { SITE } from "@/lib/content/site";

/**
 * MedicalWebPage JSON-LD for nutrition-claim articles + recipe pages with
 * RD review. `lastReviewed` + `medicalAudience` per schema.org spec.
 */
export function MedicalWebPageJsonLd({
  path,
  headline,
  description,
  lastReviewed,
  reviewerName = "Lena Marsh, RDN, MS",
}: {
  path: string;
  headline: string;
  description: string;
  lastReviewed: string;
  reviewerName?: string;
}) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    url: `${SITE.url}${path}`,
    headline,
    description,
    lastReviewed,
    medicalAudience: {
      "@type": "MedicalAudience",
      audienceType: "Patient",
    },
    reviewedBy: {
      "@type": "Person",
      name: reviewerName,
      jobTitle: "Registered Dietitian Nutritionist",
    },
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}
