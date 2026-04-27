import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, isLocale, HREFLANG, type Locale } from "@/lib/content/i18n";
import { t } from "@/lib/content/translations";
import { LocalizedStaticTemplate } from "@/components/templates/LocalizedStaticTemplate";
import { SITE } from "@/lib/content/site";

const NON_EN = LOCALES.filter((l) => l !== "en");
const TITLES: Record<Locale, string> = {
  en: "Cookie policy",
  de: "Cookie-Richtlinie",
  fr: "Politique de cookies",
  it: "Informativa sui cookie",
  es: "Política de cookies",
  nl: "Cookiebeleid",
  pl: "Polityka cookies",
  sv: "Cookiepolicy",
  pt: "Política de cookies",
  ro: "Politica de cookies",
  cs: "Zásady cookies",
  no: "Cookie-retningslinjer",
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
  const url = `${SITE.url}/${locale}/cookies`;
  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[HREFLANG[l]] = l === "en" ? `${SITE.url}/cookies` : `${SITE.url}/${l}/cookies`;
  }
  languages["x-default"] = `${SITE.url}/cookies`;
  return {
    title: `${TITLES[locale]} — ${SITE.name}`,
    alternates: { canonical: url, languages },
  };
}

export default async function LocalizedCookiesPage({
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
      englishHref="/cookies"
      eyebrow={TITLES[locale]}
      title={TITLES[locale]}
      intro={t(locale).translationNoticeBody}
    />
  );
}
