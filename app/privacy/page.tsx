import type { Metadata } from "next";
import { TrustPageTemplate } from "@/components/templates/TrustPageTemplate";
import { PolicyRenderer } from "@/components/PolicyRenderer";
import { PRIVACY_POLICY } from "@/lib/content/privacy-policy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "What we collect, why we collect it, how long we keep it, and the rights you have under the GDPR.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <TrustPageTemplate title="Privacy Policy">
      <PolicyRenderer doc={PRIVACY_POLICY} />
    </TrustPageTemplate>
  );
}
