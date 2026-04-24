export function RankNumeral({ n, tone = "terracotta" }: { n: number; tone?: "terracotta" | "sage" | "olive" }) {
  const display = n.toString().padStart(2, "0");
  const toneClass =
    tone === "sage" ? "!text-sage" : tone === "olive" ? "!text-olive" : "";
  return <span className={`rank-numeral tnum ${toneClass}`}>{display}</span>;
}
