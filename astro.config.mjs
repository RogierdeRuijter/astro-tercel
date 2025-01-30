// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';
import redirects from './redirects.json' assert { type: 'json' };

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  redirects,
});
