// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const site = process.env.SITE_URL ?? 'https://alexmollard.github.io';
const base = process.env.BASE_PATH ?? '/AlexMollard';

// https://astro.build/config
export default defineConfig({
	site,
	base,
  vite: {
    plugins: [tailwindcss()]
  }
});