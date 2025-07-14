import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
        images: {
            remotePatterns: [new URL('https://placehold.co/**')],
        },
  //  output: 'export',
    trailingSlash: true, // optional, helps with routing

};

export default nextConfig;
