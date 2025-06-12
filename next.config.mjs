import path from 'path';
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    distDir: process.env.NODE_ENV === 'production' ? '.next-prod' : '.next',
    typescript: {
        ignoreBuildErrors: true,
    },
    experimental: {
        outputFileTracingRoot: path.resolve(process.cwd(), '../../'),
    },
};
export default nextConfig;
