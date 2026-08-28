import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      { source: '/conocenos', destination: '/about-us' },
      { source: '/proyectos', destination: '/projects' },
      { source: '/lasolana', destination: '/projects/la-solana' },
      { source: '/la-solana', destination: '/projects/la-solana' },
      { source: '/plaza-espana', destination: '/projects/plaza-espana' },
      { source: '/rua-pexegueiro', destination: '/projects/rua-pexegueiro' },
      { source: '/aviso-legal', destination: '/legal-notice' },
      { source: '/politica-de-cookies', destination: '/cookie-policy' },
      { source: '/politica-de-privacidad', destination: '/privacy-policy' },
    ];
  },
};

export default nextConfig;
