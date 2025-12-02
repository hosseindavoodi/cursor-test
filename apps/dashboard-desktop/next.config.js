/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
        },
      ],
    });
    return config;
  },

  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  images: {
    remotePatterns: [{ hostname: "2.189.255.26", port: "8000" }],
  },
  redirects: async () => [
    {
      source: "/dashboard/:path*",
      destination: "/auth",
      missing: [
        {
          type: "cookie",
          key: "refreshToken",
        },
      ],
      permanent: false,
    },
    {
      source: "/",
      destination: "/dashboard/home",
      has: [
        {
          type: "cookie",
          key: "refreshToken",
        },
      ],
      permanent: false,
    },
    {
      source: "/",
      destination: "/auth",
      missing: [
        {
          type: "cookie",
          key: "refreshToken",
        },
      ],
      permanent: false,
    },
  ],

  output: "standalone",
};

export default nextConfig;
