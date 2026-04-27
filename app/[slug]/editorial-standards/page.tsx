import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, isLocale, HREFLANG, type Locale } from "@/lib/content/i18n";
import { t } from "@/lib/content/translations";
import { LocalizedStaticTemplate } from "@/components/templates/LocalizedStaticTemplate";
import { SITE } from "@/lib/content/site";

const NON_EN = LOCALES.filter((l) => l !== "en");
const TITLES: Record<Locale, string> = {
  en: "Editorial standards",
  de: "Redaktionelle Standards",
  fr: "Normes éditoriales",
  it: "Standard editoriali",
  es: "Estándares editoriales",
  nl: "Redactionele standaarden",
  pl: "Standardy redakcyjne",
  sv: "Redaktionella standarder",
  pt: "Normas editoriais",
  ro: "Standarde editoriale",
  cs: "Redakční standardy",
  no: "Redaksjonelle standarder",
};

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
  const url = `${SITE.url}/${locale}/editorial-standards`;
  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[HREFLANG[l]] = l === "en" ? `${SITE.url}/editorial-standards` : `${SITE.url}/${l}/editorial-standards`;
  }
  languages["x-default"] = `${SITE.url}/editorial-standards`;
  return {
    title: `${TITLES[locale]} — ${SITE.name}`,
    description: t(locale).trustTestedDek,
    alternates: { canonical: url, languages },
  };
}

export default async function LocalizedEditorialStandardsPage({
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
      englishHref="/editorial-standards"
      eyebrow={strings.sectionTrust}
      title={TITLES[locale]}
      intro={strings.trustTestedDek}
    />
  );
}
