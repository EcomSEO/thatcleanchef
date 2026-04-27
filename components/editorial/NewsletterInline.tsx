import { EmailCapture } from "../EmailCapture";

/**
 * Clean white inline newsletter with sage border.
 */
export function NewsletterInline({
  heading = "Get a tested recipe + a nutritional note in your inbox each Sunday.",
  blurb = "One recipe a week, photographed on the same Tuesday it tested. Reviewed by an RD. No promotions, no pop-ups, no tracking.",
}: {
  heading?: string;
  blurb?: string;
}) {
  return (
    <section className="mt-14 border border-sage-100 bg-surface rounded-md px-6 py-8 md:px-8">
      <div className="grid md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-7">
          <span className="reviewed-pill mb-3"><span className="reviewed-pill__dot" />Sunday dispatch</span>
          <h3 className="mt-3 text-h2-mid font-semibold text-ink leading-tight">
            {heading}
          </h3>
          <p className="mt-2 text-body-md text-ink-2 leading-snug">
            {blurb}
          </p>
        </div>
        <div className="md:col-span-5">
          <EmailCapture variant="end-of-article" />
        </div>
      </div>
    </section>
  );
}
