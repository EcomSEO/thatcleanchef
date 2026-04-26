import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { OrganizationJsonLd } from "@/components/schema/OrganizationJsonLd";
import { Atmosphere } from "@/components/editorial/Atmosphere";
import { SITE } from "@/lib/content/site";
import { robotsMeta } from "@/lib/seo";
import { LOCALES } from "@/lib/i18n/locales";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: robotsMeta(),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* hreflang declarations for the twelve cookbook editions. The
            single-locale build serves the same canonical URL for every
            locale today; this exposes the alternates so search engines
            and the locale switcher have something to point at. */}
        <link rel="alternate" hrefLang="x-default" href={SITE.url} />
        {LOCALES.map((l) => (
          <link
            key={l.code}
            rel="alternate"
            hrefLang={l.hreflang}
            href={`${SITE.url}/${l.code === "en" ? "" : l.code}`}
          />
        ))}
      </head>
      <body>
        <OrganizationJsonLd />
        <Atmosphere />
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
