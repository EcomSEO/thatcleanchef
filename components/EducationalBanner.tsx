/**
 * <EducationalBanner> — single-line educational disclaimer rendered above
 * the article body on every recipe page. Reinforces the peptide-therapy
 * positioning without blocking reading.
 */
export function EducationalBanner({
  message = "These recipes are educational. They are designed to support people prescribed peptide or GLP-1 therapy by their clinician. Consult your prescriber before changing your nutrition plan.",
}: {
  message?: string;
}) {
  return (
    <div
      className="rounded-md border border-hairline bg-warm-cream/60 px-4 py-2.5 text-[13px] leading-snug text-ink-2"
      role="note"
      aria-label="Educational disclaimer"
    >
      <span className="caps-label !text-rust mr-2">Educational</span>
      {message}
    </div>
  );
}
