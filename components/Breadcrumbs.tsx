import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-stone">
      <ol className="flex flex-wrap items-center gap-2">
        {crumbs.map((c, i) => (
          <li key={i} className="flex items-center gap-2">
            {c.href ? (
              <Link href={c.href} className="hover:text-terracotta">
                {c.label}
              </Link>
            ) : (
              <span className="text-olive">{c.label}</span>
            )}
            {i < crumbs.length - 1 && (
              <span aria-hidden className="text-olive/30">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
