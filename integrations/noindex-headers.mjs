import { readFile, writeFile } from 'node:fs/promises';

/**
 * Adds `X-Robots-Tag: noindex, nofollow` to every response on Vercel,
 * including files that can't carry a meta tag (the resume PDF, images).
 * Runs after the Vercel adapter has written its Build Output config.
 */
export default function noindexHeaders() {
  return {
    name: 'noindex-headers',
    hooks: {
      'astro:build:done': async ({ logger }) => {
        const configUrl = new URL('../.vercel/output/config.json', import.meta.url);
        let config;
        try {
          config = JSON.parse(await readFile(configUrl, 'utf8'));
        } catch {
          logger.warn('No Vercel build output found, skipping noindex header.');
          return;
        }
        const route = { src: '^/.*$', headers: { 'X-Robots-Tag': 'noindex, nofollow' }, continue: true };
        config.routes = [route, ...(config.routes ?? []).filter((r) => r.headers?.['X-Robots-Tag'] === undefined)];
        await writeFile(configUrl, JSON.stringify(config, null, '\t'));
        logger.info('Added X-Robots-Tag: noindex to all routes.');
      },
    },
  };
}
