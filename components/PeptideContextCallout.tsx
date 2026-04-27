import type { PeptideContext } from "@/lib/content/posts";

/**
 * <PeptideContextCallout> — small olive-on-mint pill block above the
 * ingredient list of every recipe page. Reframes the recipe inside the
 * peptide-therapy context without rewriting the recipe itself.
 *
 * Compliance: educational only. Always reminds the reader to consult
 * their prescriber. Never makes therapeutic claims.
 */
export type PeptideContextProps = {
  context: PeptideContext;
  /**
   * Optional override for the body line. If omitted, the default copy
   * for the chosen context is used. Use this to inject recipe-specific
   * numbers like protein grams.
   */
  note?: string;
  /** Optional small icon/illustration URL. */
  imageUrl?: string;
  /** Per-serving protein grams — used by the muscle-preservation default. */
  proteinG?: number;
};

const DEFAULT_HEADLINES: Record<PeptideContext, string> = {
  "glp1-friendly": "GLP-1 friendly",
  "muscle-preservation": "Muscle preservation",
  "anti-inflammatory": "Anti-inflammatory recovery",
  "bone-tendon": "Bone & tendon support",
  "cycle-nutrition": "Cycle-window nutrition",
};

function defaultNote(ctx: PeptideContext, proteinG?: number): string {
  switch (ctx) {
    case "glp1-friendly":
      return "Small-volume, high-nutrient. Comfortable on a GLP-1 day when appetite is reduced.";
    case "muscle-preservation":
      return `${proteinG ? `${proteinG}g` : "30g+"} protein per serving. Important during GLP-1 dose escalation when caloric intake drops.`;
    case "anti-inflammatory":
      return "Anti-inflammatory ingredients (turmeric, ginger, omega-3 fats). Supports tendon-and-joint recovery during BPC-157 / TB-500 protocols.";
    case "bone-tendon":
      return "Collagen-supporting (bone broth, gelatin, vitamin C) — pairs with peptide therapy for connective tissue.";
    case "cycle-nutrition":
      return "Designed for pre-cycle priming and post-cycle recovery windows.";
  }
}

export function PeptideContextCallout({
  context,
  note,
  imageUrl,
  proteinG,
}: PeptideContextProps) {
  const headline = DEFAULT_HEADLINES[context];
  const body = note ?? defaultNote(context, proteinG);

  return (
    <aside
      className="my-6 rounded-md border border-sage-100 bg-sage-50/60 px-4 py-4 text-olive"
      role="note"
      aria-label={`Peptide-therapy context: ${headline}`}
      data-peptide-context={context}
    >
      <div className="flex items-start gap-3">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt=""
            aria-hidden
            className="mt-0.5 h-7 w-7 flex-none rounded-full bg-warm-cream object-cover"
          />
        ) : (
          <span
            aria-hidden
            className="mt-1 inline-block h-2.5 w-2.5 flex-none rounded-full bg-sage-700"
          />
        )}
        <div className="min-w-0">
          <div className="caps-label text-sage-700">Peptide-therapy context</div>
          <p className="mt-1 text-body-md font-semibold text-ink leading-snug">
            {headline}
          </p>
          <p className="mt-1 text-body-sm text-ink-2 leading-relaxed">{body}</p>
          <p className="mt-2 text-[12px] text-ink-3">
            Educational only. Consult your prescriber.
          </p>
        </div>
      </div>
    </aside>
  );
}
