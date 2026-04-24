import { ReactNode } from "react";

type Variant = "note" | "key-takeaway" | "warning" | "source";

const variantClass: Record<Variant, string> = {
  note: "border-sage bg-sage/8",
  "key-takeaway": "border-olive bg-cream-deep/50",
  warning: "border-terracotta bg-terracotta/8",
  source: "border-olive/20 bg-paper",
};

const variantLabel: Record<Variant, string> = {
  note: "Chef's note",
  "key-takeaway": "Key takeaway",
  warning: "Watch out",
  source: "Source",
};

export function Callout({
  variant = "note",
  title,
  children,
}: {
  variant?: Variant;
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside
      className={`border-l-4 rounded-r px-5 py-4 my-6 ${variantClass[variant]}`}
    >
      <p className="caps-label text-olive mb-1">
        {title ?? variantLabel[variant]}
      </p>
      <div className="text-charcoal/90 text-[15px] leading-relaxed">
        {children}
      </div>
    </aside>
  );
}
