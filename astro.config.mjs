// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const site = process.env.SITE_URL ?? 'https://alexmollard.dev';

// https://astro.build/config
export default defineConfig({
	site,
  vite: {
    plugins: [tailwindcss()]
  }
});