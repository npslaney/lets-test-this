/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@moneydevkit/lightning-js'],
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Externalize lightning-js and its platform-specific packages
      const externals = Array.isArray(config.externals) ? config.externals : [config.externals];
      config.externals = [
        ...externals,
        ({ request }, callback) => {
          if (request === '@moneydevkit/lightning-js' || request?.startsWith('@moneydevkit/lightning-js-')) {
            return callback(null, 'commonjs ' + request);
          }
          callback();
        }
      ];
    }
    return config;
  }
};

export default nextConfig;
