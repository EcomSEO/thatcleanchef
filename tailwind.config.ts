import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ThatCleanChef brand tokens — kitchen herb + warm cream + terracotta
        sage: "#7A8F6B",        // primary — kitchen herb
        cream: "#F6F1E8",       // accent — warm, linen
        terracotta: "#C4663D",  // highlight — kitchen pottery
        olive: "#4A5530",       // deep
        charcoal: "#2B2B2B",
        forest: "#4A5530",
      },
      fontFamily: {
        serif: ["Fraunces", '"Source Serif 4"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
