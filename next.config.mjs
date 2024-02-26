/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['@acme/ui'],
      },
};

export default nextConfig;
