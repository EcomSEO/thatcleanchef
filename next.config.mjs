/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
      },
    ],
  },
  /**
   * 301 redirects for hub slugs retired in the b5ee768 peptide-therapy
   * repositioning. Each old slug maps to the closest surviving hub so
   * inbound links and cached SERP results don't 404.
   */
  async redirects() {
    return [
      {
        source: "/guides/diet-specific",
        destination: "/guides/glp1-friendly",
        permanent: true,
      },
      {
        source: "/guides/meal-types",
        destination: "/guides/glp1-friendly",
        permanent: true,
      },
      {
        source: "/guides/protein-forward",
        destination: "/guides/muscle-preservation",
        permanent: true,
      },
      {
        source: "/guides/technique",
        destination: "/guides/cycle-nutrition",
        permanent: true,
      },
      {
        source: "/guides/seasonal",
        destination: "/guides/cycle-nutrition",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
