/**
 * "Last tested April 26, 2026" — 14px ink-2 caption.
 */
export function LastTestedLine({
  date,
  className = "",
}: {
  date: string;
  className?: string;
}) {
  const display = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <span className={`inline-flex items-center gap-1.5 text-body-sm text-ink-2 ${className}`}>
      <span className="caps-label !text-ink-2">Last tested</span>
      <time dateTime={date}>{display}</time>
    </span>
  );
}
