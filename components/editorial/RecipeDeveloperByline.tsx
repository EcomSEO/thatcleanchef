import { LastTestedLine } from "./LastTestedLine";
import { DietitianReviewedBadge } from "./DietitianReviewedBadge";

/**
 * Recipe developer byline — round 56px developer avatar + name + credentials
 * + DietitianReviewedBadge + tested date + "Independent test kitchen · No
 * brand sponsorships" disclosure. Clean medical-info block.
 */
export function RecipeDeveloperByline({
  name = "The ThatCleanChef Kitchen",
  role = "Recipe developer",
  credentials = "12 years home + restaurant kitchens",
  reviewer = { name: "Lena Marsh", credentials: "RDN, MS" },
  lastTested,
  className = "",
}: {
  name?: string;
  role?: string;
  credentials?: string;
  reviewer?: { name: string; credentials: string };
  lastTested?: string;
  className?: string;
}) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <aside
      className={`flex items-start gap-4 border-y border-hairline py-5 ${className}`}
      aria-label="About the recipe developer"
    >
      <div
        aria-hidden
        className="shrink-0 grid place-items-center w-14 h-14 rounded-full bg-sage-50 text-sage-700 font-serif font-semibold text-lg border border-sage-100"
      >
        {initials || "TC"}
      </div>
      <div className="min-w-0 space-y-2">
        <div className="flex flex-wrap items-baseline gap-x-2">
          <span className="text-body-md font-semibold text-ink">{name}</span>
          <span className="caps-label !text-ink-2">{role}</span>
        </div>
        <div className="text-body-sm text-ink-2 leading-snug">
          {credentials}
        </div>
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <DietitianReviewedBadge name={reviewer.name} credentials={reviewer.credentials} />
          {lastTested && <LastTestedLine date={lastTested} />}
        </div>
        <div className="text-label-sm text-ink-3">
          Independent test kitchen · No brand sponsorships.
        </div>
      </div>
    </aside>
  );
}
