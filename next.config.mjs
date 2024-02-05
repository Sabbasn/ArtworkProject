import { url } from "inspector";

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "./dist", // Changes the build output directory to `./dist/`.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "th.bing.com",
      }
    ],
  },
};

export default nextConfig;
