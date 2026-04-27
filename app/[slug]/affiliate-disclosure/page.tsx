import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, isLocale, HREFLANG, type Locale } from "@/lib/content/i18n";
import { t } from "@/lib/content/translations";
import { LocalizedStaticTemplate } from "@/components/templates/LocalizedStaticTemplate";
import { SITE } from "@/lib/content/site";

const NON_EN = LOCALES.filter((l) => l !== "en");
const TITLES: Record<Locale, string> = {
  en: "Affiliate disclosure",
  de: "Affiliate-Hinweis",
  fr: "Divulgation d'affiliation",
  it: "Informativa di affiliazione",
  es: "Divulgación de afiliados",
  nl: "Affiliate-verklaring",
  pl: "Informacja o linkach afiliacyjnych",
  sv: "Information om partnerlänkar",
  pt: "Divulgação de afiliados",
  ro: "Dezvăluire afiliați",
  cs: "Informace o affiliate odkazech",
  no: "Affiliate-erklæring",
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
  const url = `${SITE.url}/${locale}/affiliate-disclosure`;
  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[HREFLANG[l]] = l === "en" ? `${SITE.url}/affiliate-disclosure` : `${SITE.url}/${l}/affiliate-disclosure`;
  }
  languages["x-default"] = `${SITE.url}/affiliate-disclosure`;
  return {
    title: `${TITLES[locale]} — ${SITE.name}`,
    alternates: { canonical: url, languages },
  };
}

export default async function LocalizedAffiliateDisclosurePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: localeSlug } = await params;
  if (!isLocale(localeSlug) || localeSlug === "en") notFound();
  const locale = localeSlug as Locale;
  return (
    <LocalizedStaticTemplate
      locale={locale}
      englishHref="/affiliate-disclosure"
      eyebrow={TITLES[locale]}
      title={TITLES[locale]}
      intro={t(locale).translationNoticeBody}
    />
  );
}
