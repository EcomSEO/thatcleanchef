"use client";

import { useEffect, useState } from "react";

/**
 * Sticky right-rail TOC w/ IntersectionObserver scroll-spy. Sage active highlight.
 */
export function TableOfContents({
  items,
}: {
  items: Array<{ id: string; label: string }>;
}) {
  const [active, setActive] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    if (!items.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className="text-body-sm">
      <div className="caps-label mb-3">On this page</div>
      <ul className="space-y-2 border-l border-hairline">
        {items.map((it) => {
          const isActive = active === it.id;
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                className={`block pl-3 -ml-px border-l-2 ${
                  isActive
                    ? "border-sage text-sage-700 font-semibold"
                    : "border-transparent text-ink-2 hover:text-ink"
                }`}
              >
                {it.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
