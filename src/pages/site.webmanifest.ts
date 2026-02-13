import type { APIRoute } from 'astro';
import { cvData } from '../data/cv-data';
import { resolve } from '../i18n/utils';
import { defaultLocale } from '../i18n/config';

export const GET: APIRoute = () => {
  const lang = defaultLocale;
  const title = resolve(cvData.site.title, lang);
  const name = cvData.personal.name;
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

  const manifest = {
    name: title,
    short_name: initials,
    description: resolve(cvData.site.description, lang),
    start_url: '/',
    display: 'standalone',
    background_color: '#fafaf9',
    theme_color: cvData.site.accentColor,
    icons: [
      { src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' },
  });
};
