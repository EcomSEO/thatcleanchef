/**
 * <EducationalBanner> — single-line editorial note rendered above the article
 * body on every recipe page. Reinforces the time-honest, RD-reviewed
 * methodology without blocking the recipe.
 */
export function EducationalBanner({
  message = "Every recipe on this site is tested at least three times in our kitchen and reviewed by a registered dietitian before publication. Times include the dishes; nutrition is USDA-cited.",
}: {
  message?: string;
}) {
  return (
    <div
      className="rounded-md border border-hairline bg-warm-cream/60 px-4 py-2.5 text-[13px] leading-snug text-ink-2"
      role="note"
      aria-label="Editorial note"
    >
      <span className="caps-label !text-rust mr-2">Editorial</span>
      {message}
    </div>
  );
}
