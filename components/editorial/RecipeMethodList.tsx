/**
 * Numbered method list. Inter step labels (NOT italic), sage-circle bullets,
 * body Inter 18/28.
 */
export type MethodStep = { name?: string; body: string };

export function RecipeMethodList({
  steps,
  heading = "Method",
}: {
  steps: MethodStep[];
  heading?: string;
}) {
  return (
    <section aria-label={heading}>
      <h2 className="text-h2-mid font-semibold text-ink mb-4">{heading}</h2>
      <ol className="space-y-5">
        {steps.map((step, i) => (
          <li key={i} className="grid grid-cols-[36px_1fr] gap-4">
            <span
              aria-hidden
              className="grid place-items-center w-8 h-8 rounded-full bg-sage-50 text-sage-700 font-mono tnum text-[14px] font-semibold border border-sage-100"
            >
              {i + 1}
            </span>
            <div>
              {step.name && (
                <h3 className="text-h3 font-semibold text-ink leading-snug mb-1">{step.name}</h3>
              )}
              <p className="text-body-md text-ink leading-relaxed">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
