// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import noindexHeaders from './integrations/noindex-headers.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://andjelko.dev',
  adapter: vercel(),
  integrations: [noindexHeaders()],
  devToolbar: {
    enabled: false,
  },
});
