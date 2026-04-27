import type { Metadata } from "next";
import { TrustPageTemplate } from "@/components/templates/TrustPageTemplate";
import { PolicyRenderer } from "@/components/PolicyRenderer";
import { COOKIE_POLICY, COOKIES_TABLE } from "@/lib/content/cookie-policy";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cookie Policy",
  description:
    "What cookies ThatCleanChef uses, why we use them, and how to manage your choice.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <TrustPageTemplate title="Cookie Policy">
      <PolicyRenderer doc={COOKIE_POLICY} />

      <section className="mt-10 not-prose">
        <h2>Cookies in use — full table</h2>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left border-b border-hairline">
                <th className="py-2 pr-3 font-semibold text-forest">Cookie</th>
                <th className="py-2 pr-3 font-semibold text-forest">Provider</th>
                <th className="py-2 pr-3 font-semibold text-forest">Category</th>
                <th className="py-2 pr-3 font-semibold text-forest">Purpose</th>
                <th className="py-2 pr-3 font-semibold text-forest">Duration</th>
              </tr>
            </thead>
            <tbody>
              {COOKIES_TABLE.map((row) => (
                <tr key={row.name} className="border-b border-hairline/60 align-top">
                  <td className="py-2 pr-3 font-mono text-xs">{row.name}</td>
                  <td className="py-2 pr-3">{row.provider}</td>
                  <td className="py-2 pr-3 capitalize">{row.category}</td>
                  <td className="py-2 pr-3">{row.purpose}</td>
                  <td className="py-2 pr-3">{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </TrustPageTemplate>
  );
}
