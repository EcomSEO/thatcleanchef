/**
 * Renders a structured policy document (privacy, terms, cookies,
 * affiliate disclosure). Accepts the simple `{ heading, body[] }` shape
 * used in lib/content/{privacy-policy,terms,cookie-policy,
 * affiliate-disclosure}.ts and emits standard prose.
 *
 * Body strings support a tiny subset of markdown:
 *   **bold** → <strong>
 * No other inline syntax is supported on purpose — all link/list
 * structure is expressed in the content schema.
 */

import { ReactNode } from "react";

export type PolicySection = {
  heading: string;
  body: readonly string[];
};

export type PolicyDoc = {
  lastUpdated: string;
  intro: readonly string[];
  sections: readonly PolicySection[];
};

function renderBoldSegments(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="text-forest">{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
}

export function PolicyRenderer({ doc }: { doc: PolicyDoc }) {
  return (
    <div className="space-y-6">
      <p className="text-label-sm text-ink-3">Last updated: {doc.lastUpdated}.</p>
      {doc.intro.map((p, i) => (
        <p key={`intro-${i}`}>{renderBoldSegments(p)}</p>
      ))}
      {doc.sections.map((section, si) => (
        <section key={`section-${si}`} className="space-y-3">
          <h2>{section.heading}</h2>
          {section.body.map((p, pi) => (
            <p key={`body-${si}-${pi}`}>{renderBoldSegments(p)}</p>
          ))}
        </section>
      ))}
    </div>
  );
}
