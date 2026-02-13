import { cvData } from '../data/cv-data';

export type Locale = 'en' | 'de';

const site = cvData.site as unknown as Record<string, unknown>;

export const isBilingual =
  'languages' in site && Array.isArray(site.languages) && (site.languages as string[]).length >= 2;

export const defaultLocale: Locale = isBilingual
  ? ((site.languages as Locale[])[0])
  : ((site.language as Locale) ?? 'en');

export const locales: Locale[] = isBilingual
  ? (site.languages as Locale[])
  : [defaultLocale];

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  de: 'DE',
};

export function getStaticLocalePaths() {
  return locales
    .filter((l) => l !== defaultLocale)
    .map((l) => ({ params: { locale: l } }));
}
