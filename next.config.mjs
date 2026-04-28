/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
    ],
  },
  /**
   * 301 redirects for the peptide hub slugs that were live during the
   * b5ee768 → reverted positioning window. Each old slug maps to the
   * closest surviving recipe-site hub so inbound links and cached SERP
   * results don't 404. Also redirect the deprecated /medications/* tree
   * to /guides/diet-specific (the closest surviving hub).
   */
  async redirects() {
    return [
      // Peptide hub slugs → recipe-site hubs
      { source: "/guides/glp1-friendly", destination: "/guides/meal-types", permanent: true },
      { source: "/guides/muscle-preservation", destination: "/guides/protein-forward", permanent: true },
      { source: "/guides/anti-inflammatory-recovery", destination: "/guides/diet-specific", permanent: true },
      { source: "/guides/bone-tendon-health", destination: "/guides/technique", permanent: true },
      { source: "/guides/cycle-nutrition", destination: "/guides/seasonal-menus", permanent: true },

      // Deprecated medications tree → diet-specific hub
      { source: "/medications", destination: "/guides/diet-specific", permanent: true },
      { source: "/medications/:brand", destination: "/guides/diet-specific", permanent: true },

      // Deprecated peptide-themed listicle slug → recipe index
      { source: "/natural-mounjaro-recipes", destination: "/recipes", permanent: true },
    ];
  },
};

export default nextConfig;
