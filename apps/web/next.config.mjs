import transpileModules from "next-transpile-modules";

const withTM = transpileModules(["ui"]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
  },
};

export default withTM(nextConfig);
