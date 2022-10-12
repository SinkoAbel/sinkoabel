/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    basePath: "/sinkoabel",
    assetPrefix: "/sinkoabel",
    images: {
        loader: 'akamai',
        path: '/',
    }
}

module.exports = nextConfig
