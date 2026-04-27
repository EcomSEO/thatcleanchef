/**
 * A small italic serif note that sits in the right margin of a body column.
 * Cookbook-page convention: chef's aside, "if you're scaling for two...",
 * "this is also good with...". On mobile it falls inline as a left-rule
 * blockquote. Use sparingly — three or four per chapter, not every paragraph.
 */
export function MarginNote({
  children,
  side = "right",
  label,
}: {
  children: React.ReactNode;
  side?: "left" | "right";
  label?: string;
}) {
  return (
    <aside
      className={`margin-note md:absolute md:w-56 ${
        side === "right" ? "md:right-[-15rem]" : "md:left-[-15rem]"
      } md:top-1 my-6 md:my-0 pl-4 md:pl-0 border-l-2 md:border-l-0 border-terracotta/40`}
    >
      {label && (
        <div className="caps-label !tracking-[0.22em] text-terracotta mb-1.5">
          {label}
        </div>
      )}
      <div className="font-serif italic text-charcoal/75 text-[14.5px] leading-snug">
        {children}
      </div>
    </aside>
  );
}
