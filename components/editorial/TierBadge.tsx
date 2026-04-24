type Tier =
  | "Our pick"
  | "Chef's pick"
  | "The base"
  | "Skip"
  | "Best for X"
  | "Editor's pick"
  | string;

function classFor(tier: string): string {
  const t = tier.toLowerCase();
  if (t.includes("skip") || t.includes("avoid")) return "tier-badge tier-badge--skip";
  if (t.includes("base") || t.includes("staple")) return "tier-badge tier-badge--sage";
  if (t.includes("pick") || t.includes("pot") || t.includes("counter")) return "tier-badge tier-badge--terracotta";
  return "tier-badge";
}

export function TierBadge({ tier }: { tier: Tier }) {
  return <span className={classFor(tier)}>{tier}</span>;
}
