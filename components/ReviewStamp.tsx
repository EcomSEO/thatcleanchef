export function ReviewStamp({
  updatedAt,
  readingTime,
  author = "The ThatCleanChef Kitchen",
}: {
  updatedAt: string;
  readingTime: number;
  author?: string;
}) {
  const formatted = new Date(updatedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <p className="text-[13px] text-stone tracking-wide">
      By {author} &middot;{" "}
      <span className="tnum font-mono">Updated {formatted}</span> &middot;{" "}
      <span className="tnum font-mono">{readingTime} min read</span>
    </p>
  );
}
