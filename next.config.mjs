/** @type {import('next').NextConfig} */
const nextConfig = {
    // Usado pelo Dockerfile; a Vercel ignora esta opção no deploy dela.
    output: 'standalone',
    typescript: {
        ignoreBuildErrors: true,
    },
};
export default nextConfig;
