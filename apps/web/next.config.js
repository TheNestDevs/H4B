const withPWA = require("next-pwa")({
    dest: "public",
});

/** @type {import("next").NextConfig} */
const nextConfig = withPWA({
    swcMinify: true,
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
});

module.exports = nextConfig;