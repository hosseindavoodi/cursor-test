/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {},
        },
      ],
    });
    return config;
  },

  images: {
    remotePatterns: [
      {
        hostname: "flagcdn.com",
        pathname: "/w20/**",
      },
      {
        hostname: "2.189.255.26",
      },
    ],
  },

  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  reactStrictMode: false,

  redirects: async () => [
    {
      source: "/account/:path*",
      destination: "/",
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
