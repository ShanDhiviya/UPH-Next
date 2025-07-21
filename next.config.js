/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://placehold.co/**')],
  },
  output: 'export',
  //trailingSlash: true, // optional, helps with routing
};

module.exports = nextConfig;
