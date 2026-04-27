import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, isLocale, HREFLANG, type Locale } from "@/lib/content/i18n";
import { t } from "@/lib/content/translations";
import { LocalizedStaticTemplate } from "@/components/templates/LocalizedStaticTemplate";
import { SITE } from "@/lib/content/site";

const NON_EN = LOCALES.filter((l) => l !== "en");

export function generateStaticParams() {
  return NON_EN.map((locale) => ({ slug: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug: localeSlug } = await params;
  if (!isLocale(localeSlug) || localeSlug === "en") return {};
  const locale = localeSlug as Locale;
  const strings = t(locale);
  const url = `${SITE.url}/${locale}/about`;
  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[HREFLANG[l]] = l === "en" ? `${SITE.url}/about` : `${SITE.url}/${l}/about`;
  }
  languages["x-default"] = `${SITE.url}/about`;
  return {
    title: `${strings.navAbout} — ${SITE.name}`,
    description: strings.heroDek,
    alternates: { canonical: url, languages },
  };
}

export default async function LocalizedAboutPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: localeSlug } = await params;
  if (!isLocale(localeSlug) || localeSlug === "en") notFound();
  const locale = localeSlug as Locale;
  const strings = t(locale);
  return (
    <LocalizedStaticTemplate
      locale={locale}
      englishHref="/about"
      eyebrow={strings.navAbout}
      title={strings.navAbout}
      intro={strings.heroDek}
    />
  );
}
