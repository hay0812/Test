//astro.config.mjs
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
// If you're using a custom domain, set it here and use base '/'.
// Otherwise set GHP_USER/GHP_REPO and use the GitHub Pages defaults.
const CUSTOM_DOMAIN = 'backup-status.heyete.net';
export default defineConfig({
  site: `https://${CUSTOM_DOMAIN}`,
  base: '/',
  adapter: cloudflare({
    output: 'static',
    platformProxy: {
      enabled: true,
    },
  }),
  security: {
    csp: {
      scriptDirective: {
        resources: [
          "'self'",
        ],
      },
      styleDirective: {
        resources: ["'self'"],
      },
      directives: [
        "default-src 'none'",
        "base-uri 'none'",
        "object-src 'none'",
        "img-src 'self'",
        "connect-src 'none'",
        "form-action 'none'",
        "upgrade-insecure-requests",
        "font-src 'none'",
        "frame-src 'none'",
        "require-trusted-types-for 'script'",
      ],
    },
  },
});
