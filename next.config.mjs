/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@moneydevkit/lightning-js'],
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Externalize lightning-js so it's loaded from node_modules at runtime
      config.externals = config.externals || [];
      config.externals.push('@moneydevkit/lightning-js');
    }
    return config;
  }
};

export default nextConfig;
