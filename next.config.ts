import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* peelmanorhouse.com.au sits behind a Cloudflare JS challenge - hotlinking
   * fails server-side (Next's image optimizer included), so no remotePatterns
   * here. Real photos need to come from an authorized local export, not the
   * live site. */
};

export default nextConfig;
