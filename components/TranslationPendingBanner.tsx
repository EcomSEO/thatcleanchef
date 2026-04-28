import Link from "next/link";
import { type Locale, LOCALE_LABELS } from "@/lib/content/i18n";
import { t } from "@/lib/content/translations";

/**
 * Banner shown above non-English recipe bodies and editorial pages. The
 * site chrome, recipe titles, and pillar metadata are localized in twelve
 * languages, but the recipe instructions, FAQ answers, and source lists
 * remain in English by deliberate editorial decision — machine-translated
 * machine-translated cooking instructions are easy to introduce errors into.
 *
 * The banner names the local language so the reader understands what is
 * translated and what is not, and links to the canonical English page.
 */
export function TranslationPendingBanner({
  locale,
  englishHref,
}: {
  locale: Locale;
  englishHref: string;
}) {
  if (locale === "en") return null;
  const strings = t(locale);
  const native = LOCALE_LABELS[locale].native;
  return (
    <aside
      role="note"
      aria-label={strings.translationNoticeTitle}
      className="border border-amber-200 bg-amber-50/70 rounded-sm px-4 py-3 my-6 text-[13.5px] text-amber-900 leading-relaxed"
    >
      <p>
        <span className="font-semibold uppercase tracking-wide text-[11.5px] text-amber-700 mr-2">
          {native}
        </span>
        {strings.translationNoticeBody}
      </p>
      <p className="mt-2">
        <Link href={englishHref} className="underline decoration-amber-500/60 hover:decoration-amber-900">
          {strings.labelSeeRecipe} ({LOCALE_LABELS.en.native})
        </Link>
      </p>
    </aside>
  );
}
