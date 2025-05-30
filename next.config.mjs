/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'images.ctfassets.net',
            port: '',
            pathname: '/**',
        },
        {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/**',
        },
        ],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
