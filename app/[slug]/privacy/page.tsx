import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, isLocale, HREFLANG, type Locale } from "@/lib/content/i18n";
import { t } from "@/lib/content/translations";
import { LocalizedStaticTemplate } from "@/components/templates/LocalizedStaticTemplate";
import { SITE } from "@/lib/content/site";

const NON_EN = LOCALES.filter((l) => l !== "en");
const TITLES: Record<Locale, string> = {
  en: "Privacy policy",
  de: "Datenschutz",
  fr: "Politique de confidentialité",
  it: "Informativa sulla privacy",
  es: "Política de privacidad",
  nl: "Privacybeleid",
  pl: "Polityka prywatności",
  sv: "Integritetspolicy",
  pt: "Política de privacidade",
  ro: "Politica de confidențialitate",
  cs: "Zásady ochrany osobních údajů",
  no: "Personvernerklæring",
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
  const url = `${SITE.url}/${locale}/privacy`;
  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[HREFLANG[l]] = l === "en" ? `${SITE.url}/privacy` : `${SITE.url}/${l}/privacy`;
  }
  languages["x-default"] = `${SITE.url}/privacy`;
  return {
    title: `${TITLES[locale]} — ${SITE.name}`,
    alternates: { canonical: url, languages },
  };
}

export default async function LocalizedPrivacyPage({
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
      englishHref="/privacy"
      eyebrow={TITLES[locale]}
      title={TITLES[locale]}
      intro={t(locale).translationNoticeBody}
    />
  );
}
