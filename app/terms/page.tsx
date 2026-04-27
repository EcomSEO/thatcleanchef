import type { Metadata } from "next";
import { TrustPageTemplate } from "@/components/templates/TrustPageTemplate";
import { PolicyRenderer } from "@/components/PolicyRenderer";
import { TERMS } from "@/lib/content/terms";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: "The terms that govern your use of ThatCleanChef.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <TrustPageTemplate title="Terms of Service">
      <PolicyRenderer doc={TERMS} />
    </TrustPageTemplate>
  );
}
