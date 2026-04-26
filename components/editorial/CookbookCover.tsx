import { HerbMark } from "./HerbMark";

/**
 * The home-page primitive. Replaces the magazine "hero" — meant to feel
 * like the front board of a cloth-bound cookbook. No photography, no
 * subnav, no chips. Just title + subtitle + hand-drawn mark + a faint
 * embossed border. The eye should land here and immediately understand
 * the medium: this is a printed cookbook, not a magazine.
 */
export function CookbookCover({
  title,
  subtitle,
  edition,
  byline,
}: {
  title: string;
  subtitle: string;
  edition?: string;
  byline?: string;
}) {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-6 pt-16 md:pt-24 pb-20 md:pb-28">
        <div
          className="cookbook-cover relative mx-auto max-w-3xl text-center px-8 py-20 md:py-24"
          style={{
            // Faint embossed double-rule border, like a cloth-bound spine plate.
            boxShadow:
              "inset 0 0 0 1px rgba(74, 85, 48, 0.20), inset 0 0 0 6px rgba(251, 247, 238, 1), inset 0 0 0 7px rgba(74, 85, 48, 0.12)",
          }}
        >
          {edition && (
            <div className="caps-label !tracking-[0.32em] text-stone mb-10">
              {edition}
            </div>
          )}

          <h1 className="cookbook-title font-serif italic text-olive leading-[0.96] text-[3.2rem] sm:text-6xl md:text-[5.5rem]">
            {title}
          </h1>

          <div className="my-10 flex items-center justify-center gap-5 text-terracotta/70">
            <span aria-hidden className="block h-px w-16 bg-current opacity-50" />
            <HerbMark kind="rosemary" size={36} />
            <span aria-hidden className="block h-px w-16 bg-current opacity-50" />
          </div>

          <p className="cookbook-subtitle font-serif italic text-charcoal/80 text-xl md:text-2xl leading-snug max-w-xl mx-auto">
            {subtitle}
          </p>

          {byline && (
            <div className="mt-12 caps-label !tracking-[0.28em] text-stone">
              {byline}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
