import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, isLocale, HREFLANG, type Locale } from "@/lib/content/i18n";
import { t } from "@/lib/content/translations";
import { LocalizedStaticTemplate } from "@/components/templates/LocalizedStaticTemplate";
import { SITE } from "@/lib/content/site";

const NON_EN = LOCALES.filter((l) => l !== "en");
const TITLES: Record<Locale, string> = {
  en: "Terms of use",
  de: "Nutzungsbedingungen",
  fr: "Conditions d'utilisation",
  it: "Termini di utilizzo",
  es: "Términos de uso",
  nl: "Gebruiksvoorwaarden",
  pl: "Warunki użytkowania",
  sv: "Användarvillkor",
  pt: "Termos de utilização",
  ro: "Termeni de utilizare",
  cs: "Podmínky použití",
  no: "Bruksvilkår",
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
  const url = `${SITE.url}/${locale}/terms`;
  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[HREFLANG[l]] = l === "en" ? `${SITE.url}/terms` : `${SITE.url}/${l}/terms`;
  }
  languages["x-default"] = `${SITE.url}/terms`;
  return {
    title: `${TITLES[locale]} — ${SITE.name}`,
    alternates: { canonical: url, languages },
  };
}

export default async function LocalizedTermsPage({
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
      englishHref="/terms"
      eyebrow={TITLES[locale]}
      title={TITLES[locale]}
      intro={t(locale).translationNoticeBody}
    />
  );
}
