/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['cdn.prod.website-files.com', 'images.unsplash.com', "media.gettyimages.com"],
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 60,
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    experimental: {
        scrollRestoration: true,
    },
    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,
};

export default nextConfig;
