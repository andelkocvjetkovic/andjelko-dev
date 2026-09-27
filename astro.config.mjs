// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import noindexHeaders from './integrations/noindex-headers.mjs';
import resumeIndex from './integrations/resume-index.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://andjelko.dev',
  adapter: vercel(),
  integrations: [noindexHeaders(), resumeIndex()],
  devToolbar: {
    enabled: false,
  },
});
