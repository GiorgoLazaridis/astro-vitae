import { cvData } from '../data/cv-data';
import { resolve } from '../i18n/utils';
import type { Locale } from '../i18n/config';

export function buildPersonJsonLd(lang: Locale) {
  const personalTitle = resolve(cvData.personal.title, lang);
  const siteDescription = resolve(cvData.site.description, lang);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${cvData.site.url}/#person`,
    mainEntityOfPage: {
      "@type": "ProfilePage",
      "@id": `${cvData.site.url}/`,
      dateModified: new Date().toISOString().split('T')[0],
    },
    name: cvData.personal.name,
    jobTitle: personalTitle,
    description: siteDescription,
    email: cvData.personal.email,
    telephone: cvData.personal.phone,
    url: cvData.site.url,
    ...(cvData.personal.photo ? { image: `${cvData.site.url}${cvData.personal.photo}` } : {}),
    address: cvData.personal.location ? {
      "@type": "PostalAddress",
      addressLocality: cvData.personal.location,
    } : undefined,
    worksFor: cvData.experience.length > 0 ? {
      "@type": "Organization",
      name: resolve(cvData.experience[0].organization, lang),
    } : undefined,
    alumniOf: cvData.education.length > 0 ? {
      "@type": "EducationalOrganization",
      name: resolve(cvData.education[0].institution, lang),
    } : undefined,
    hasCredential: cvData.education.length > 0 ? {
      "@type": "EducationalOccupationalCredential",
      name: resolve(cvData.education[0].degree, lang),
      credentialCategory: "Degree",
    } : undefined,
    knowsLanguage: cvData.languages.map(l => l.language),
    knowsAbout: cvData.skills.flatMap(cat => [...cat.skills]),
    sameAs: cvData.personal.socials.map(s => s.url),
  };
}

export function buildWebSiteJsonLd(lang: Locale) {
  const personalTitle = resolve(cvData.personal.title, lang);

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${cvData.site.url}/#website`,
    url: `${cvData.site.url}/`,
    name: cvData.personal.name,
    description: `Portfolio and online resume of ${cvData.personal.name}, ${personalTitle}.`,
    inLanguage: lang,
    publisher: { "@id": `${cvData.site.url}/#person` },
  };
}

export function resolveExperienceEntries(lang: Locale) {
  return cvData.experience.map(e => ({
    period: e.period,
    title: resolve(e.title, lang),
    organization: resolve(e.organization, lang),
    description: e.description ? resolve(e.description, lang) : undefined,
    highlights: e.highlights ? e.highlights.map(h => resolve(h, lang)) : undefined,
  }));
}

export function resolveEducationEntries(lang: Locale) {
  return cvData.education.map(e => ({
    period: e.period,
    title: resolve(e.degree, lang),
    organization: resolve(e.institution, lang),
    description: e.description ? resolve(e.description, lang) : undefined,
  }));
}
