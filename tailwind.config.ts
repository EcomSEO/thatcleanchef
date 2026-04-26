import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ThatCleanChef brand tokens — kitchen-warm, NYT-Cooking-adjacent
        sage: "#7A8F6B",             // primary — kitchen herb
        "sage-light": "#A3B395",     // diffused herb, for hover / secondary
        "sage-deep": "#5F7353",
        cream: "#F6F1E8",            // warm linen
        "cream-deep": "#EEE5D1",     // parchment, for section contrast
        paper: "#FBF7EE",            // page background — a little lighter than cream
        terracotta: "#C4663D",       // Le Creuset, kitchen accent
        "terracotta-deep": "#9E4F2C",
        "terracotta-soft": "#E3A782",
        olive: "#4A5530",            // deep cast iron
        "olive-deep": "#333B22",
        charcoal: "#2B2B2B",
        stone: "#6B6762",            // neutral body label color
        // Keep legacy aliases used by trust pages
        forest: "#4A5530",
      },
      fontFamily: {
        serif: ["Fraunces", '"Source Serif 4"', "Georgia", "serif"],
        cookbook: ['"Cormorant Garamond"', "Fraunces", "Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', '"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
        reading: "42rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(74, 85, 48, 0.05), 0 4px 16px rgba(74, 85, 48, 0.05)",
        card: "0 1px 1px rgba(74, 85, 48, 0.03), 0 6px 24px rgba(74, 85, 48, 0.07)",
        plate: "0 2px 3px rgba(196, 102, 61, 0.06), 0 12px 30px rgba(74, 85, 48, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
