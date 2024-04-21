// next.config.js

const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  output: 'export',
  basePath: '', // Set basePath to an empty string
  images: {
    unoptimized: true, // Disable Image Optimization
  },
};

module.exports = nextConfig;
