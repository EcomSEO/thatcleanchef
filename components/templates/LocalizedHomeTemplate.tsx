import Link from "next/link";
import { LOCALES, type Locale, LOCALE_LABELS } from "@/lib/content/i18n";
import { t } from "@/lib/content/translations";
import {
  localizedHubName,
  localizedHubShortName,
  localizedHubOneLiner,
  localizedMealPlanTitle,
  localizedMealPlanDescription,
} from "@/lib/content/translations-data";
import { hubs } from "@/lib/content/hubs";
import { mealPlans } from "@/lib/content/meal-plans";
import { posts } from "@/lib/content/posts";
import { Eyebrow } from "@/components/editorial/Eyebrow";
import { KitchenRule, DotRule } from "@/components/editorial/DotRule";

/**
 * Localized homepage template — used by the /[locale] dynamic route when the
 * URL segment matches a non-English locale (e.g. /de, /fr). The English
 * canonical home is at / via app/page.tsx and uses the original chrome.
 *
 * Recipe BODIES are deliberately NOT translated — only chrome/metadata.
 */
export function LocalizedHomeTemplate({ locale }: { locale: Locale }) {
  const strings = t(locale);

  return (
    <main>
      {/* Hero — Stitch design: terracotta full-bleed CTA block.
          Locale switcher pinned top-right; eyebrow + serif italic headline
          + cream dek + two cream/transparent buttons. Matches
          localized_homepage_german_2.png exactly. */}
      <section className="relative bg-terracotta text-cream overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_30%,rgba(247,242,233,0.08)_0%,transparent_60%)]"
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-10 pb-16 md:pt-12 md:pb-24">
          <div className="flex items-center justify-between gap-3 mb-10">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-cream/85">
              {strings.heroEyebrow}
            </span>
            <div className="[&_*]:!text-cream [&_a:hover]:!text-cream/70">
              <LocaleSwitcher current={locale} />
            </div>
          </div>
          <h1 className="font-serif italic text-cream text-[2.6rem] md:text-[3.8rem] leading-[1.02] max-w-3xl tracking-[-0.01em]">
            {strings.heroH1}
          </h1>
          <p className="mt-7 font-serif italic text-xl md:text-2xl text-cream/85 max-w-2xl leading-[1.45]">
            {strings.heroDek}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#pillars"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cream text-charcoal rounded-full hover:bg-cream-deep transition text-[14px] font-medium"
            >
              {strings.ctaBrowseRecipes}
            </a>
            <a
              href="#meal-plans"
              className="inline-flex items-center gap-2 px-6 py-3 border border-cream/35 text-cream rounded-full hover:bg-cream/10 transition text-[14px]"
            >
              {strings.ctaSeeMealPlans}
            </a>
          </div>
        </div>
      </section>

      {/* Translation notice */}
      <section className="border-b border-olive/10 bg-paper">
        <div className="mx-auto max-w-3xl px-6 py-8">
          <Eyebrow tone="stone">{strings.translationNoticeTitle}</Eyebrow>
          <p className="mt-3 text-[14.5px] text-charcoal/80 leading-relaxed">
            {strings.translationNoticeBody}
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section id="pillars" className="border-b border-olive/10">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <Eyebrow tone="sage">{strings.sectionPillars}</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl text-olive mt-3 mb-10 leading-tight">
            {strings.sectionPillars}
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-olive/10">
            {hubs.map((h, i) => {
              const recipeCount = posts.filter((p) => p.hub === h.slug).length;
              return (
                <li
                  key={h.slug}
                  className="border-b border-olive/10 sm:border-r lg:border-r"
                >
                  <Link
                    href={`/${locale}/guides/${h.slug}`}
                    className="card-lift group block p-7 hover:bg-cream-deep/40 transition"
                  >
                    <span className="rank-numeral">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-serif text-[1.4rem] text-olive leading-tight mt-3 group-hover:text-terracotta transition">
                      {localizedHubName(h.slug, locale, h.name)}
                    </h3>
                    <p className="caps-label text-stone mt-1">
                      {localizedHubShortName(h.slug, locale, h.shortName)}
                    </p>
                    <p className="mt-4 text-[14.5px] text-charcoal/80 leading-relaxed line-clamp-4">
                      {localizedHubOneLiner(h.slug, locale, h.oneLiner)}
                    </p>
                    <p className="mt-4 caps-label text-stone tnum">
                      {recipeCount} {recipeCount === 1 ? "recipe" : "recipes"}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Meal plans */}
      <section id="meal-plans" className="border-b border-olive/10">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <Eyebrow tone="sage">{strings.sectionMealPlans}</Eyebrow>
          <h2 className="font-serif text-3xl md:text-4xl text-olive mt-3 mb-3 leading-tight">
            {strings.mealPlansHeading}
          </h2>
          <p className="text-charcoal/80 max-w-xl leading-relaxed mb-10">
            {strings.mealPlansDek}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {mealPlans.map((p) => (
              <Link
                key={p.slug}
                href={`/${locale}/meal-plans/${p.slug}`}
                className="card-lift group block p-7 bg-paper border border-olive/15 rounded-sm hover:border-terracotta/50"
              >
                <span className="caps-label text-terracotta">{p.durationLabel}</span>
                <h3 className="font-serif text-2xl text-olive leading-tight mt-3 group-hover:text-terracotta transition">
                  {localizedMealPlanTitle(p.slug, locale, p.title)}
                </h3>
                <p className="mt-3 text-[15px] text-charcoal/80 leading-relaxed line-clamp-3">
                  {localizedMealPlanDescription(p.slug, locale, p.description)}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-terracotta group-hover:text-olive text-sm font-medium">
                  {strings.labelGetThePdf} &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-olive/10 bg-cream-deep/30">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <Eyebrow tone="stone">{strings.sectionTrust}</Eyebrow>
          <div className="mt-6 grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-serif text-xl text-olive">{strings.trustTested}</h3>
              <p className="mt-2 text-[14.5px] text-charcoal/80 leading-relaxed">
                {strings.trustTestedDek}
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-olive">{strings.trustReviewed}</h3>
              <p className="mt-2 text-[14.5px] text-charcoal/80 leading-relaxed">
                {strings.trustReviewedDek}
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl text-olive">{strings.trustCited}</h3>
              <p className="mt-2 text-[14.5px] text-charcoal/80 leading-relaxed">
                {strings.trustCitedDek}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <DotRule drawIn />
      </section>
    </main>
  );
}

function LocaleSwitcher({ current }: { current: Locale }) {
  return (
    <div className="flex items-center gap-1.5 text-[12.5px]">
      <span className="caps-label text-stone">{LOCALE_LABELS[current].native}</span>
      <span className="text-olive/30">|</span>
      <Link
        href="/"
        className="text-stone hover:text-terracotta underline decoration-stone/30 hover:decoration-terracotta"
      >
        EN
      </Link>
      {LOCALES.filter((l) => l !== "en" && l !== current).map((l) => (
        <Link
          key={l}
          href={`/${l}`}
          className="text-stone hover:text-terracotta underline decoration-stone/30 hover:decoration-terracotta"
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
