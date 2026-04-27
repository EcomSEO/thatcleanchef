import type { Metadata } from "next";
import { TrustPageTemplate } from "@/components/templates/TrustPageTemplate";
import { PolicyRenderer } from "@/components/PolicyRenderer";
import { AFFILIATE_DISCLOSURE } from "@/lib/content/affiliate-disclosure";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Affiliate Disclosure",
  description:
    "How affiliate links work on ThatCleanChef, how disclosure looks, and what that means for you.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  return (
    <TrustPageTemplate title="Affiliate Disclosure">
      <PolicyRenderer doc={AFFILIATE_DISCLOSURE} />
    </TrustPageTemplate>
  );
}
