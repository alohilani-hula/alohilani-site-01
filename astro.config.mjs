import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alohilani-hula.com',
  integrations: [sitemap()],
});