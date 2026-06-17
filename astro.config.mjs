//astro.config.mjs
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
export default defineConfig({
adapter: cloudflare({
    output: 'static',
    site: "https://backup-status.heyete.net",
    platformProxy: {
      enabled: true,
    },
  }),
});
