// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.SITE_URL ?? 'https://alexmollard.dev';

// https://astro.build/config
export default defineConfig({
	site,
	output: 'static',
	redirects: { '/projects/bigant-in-house-tools/': '/projects/bigant-diagnostics/' },
	integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});