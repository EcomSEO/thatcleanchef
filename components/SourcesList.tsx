export function SourcesList({
  sources,
}: {
  sources: Array<{ label: string; url: string }>;
}) {
  if (!sources || sources.length === 0) return null;
  return (
    <section className="mt-12 pt-8 border-t border-olive/15">
      <div className="flex items-center gap-2 mb-4">
        <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
        <span className="caps-label text-olive">Sources &amp; technique</span>
      </div>
      <h2 className="font-serif text-xl text-olive mb-4">
        Where the technique comes from
      </h2>
      <ol className="list-decimal pl-5 space-y-2 text-sm text-charcoal/85">
        {sources.map((s, i) => (
          <li key={i}>
            <a
              href={s.url}
              rel="noopener"
              target="_blank"
              className="text-olive hover:text-terracotta underline decoration-terracotta/60 underline-offset-2"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
