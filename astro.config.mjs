// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
    icon({
      include: {
        lucide: ['mail', 'github', 'linkedin', 'map-pin'],
      },
    }),
  ],
  adapter: vercel(),
  devToolbar: {
    enabled: false,
  },
});
