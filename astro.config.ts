import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { cvData } from './src/data/cv-data';

const site = cvData.site as unknown as Record<string, unknown>;
const isBilingual = 'languages' in site && Array.isArray(site.languages);
const defaultLocale = isBilingual
  ? (site.languages as string[])[0]
  : ((site.language as string) || 'en');
const locales = isBilingual
  ? (site.languages as string[])
  : [defaultLocale];

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
