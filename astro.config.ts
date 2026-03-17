import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { cvData } from './src/data/cv-data';
import { isBilingual, defaultLocale, locales } from './src/i18n/config';

export default defineConfig({
  site: cvData.site.url || 'https://example.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('404') && !page.includes('/danke') && !page.includes('/en/thanks'),
    }),
  ],
  vite: {
    plugins: [tailwindcss() as any],
  },
  i18n: {
    defaultLocale,
    locales,
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
