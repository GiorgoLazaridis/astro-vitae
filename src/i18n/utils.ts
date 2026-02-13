import type { Locale } from './config';
import { defaultLocale } from './config';
import { ui, type UIKey } from './ui';

export function resolve<T>(value: T | Record<Locale, T>, locale: Locale): T {
  if (value !== null && value !== undefined && typeof value === 'object' && !Array.isArray(value)) {
    const record = value as Record<string, unknown>;
    if ('en' in record || 'de' in record) {
      const localized = value as Record<Locale, T>;
      return localized[locale] ?? localized[Object.keys(localized)[0] as Locale];
    }
  }
  return value as T;
}

export function getLangFromUrl(url: URL): Locale {
  const path = url.pathname;
  if (path === '/de' || path === '/de/' || path.startsWith('/de/')) {
    return 'de';
  }
  return defaultLocale;
}

export function useTranslations(lang: Locale) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLocale][key];
  };
}
