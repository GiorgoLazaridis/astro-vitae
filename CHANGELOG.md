# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- 2026-10-28: Apply reviewed Dependabot updates for Astro 6.1.1, Sitemap
  3.7.2 and a consistent Tailwind/Vite 4.2.2 dependency tree (#9, #10, #14, #15).
- 2026-10-28: Update CI checkout/setup-node and Dependabot automation actions
  (#16–#19). GitHub Script 9 retains the existing context/client usage;
  Fetch Metadata 3 runs on the supported hosted runner. No deployment changes.

## [1.1.0] - 2026-03-17

### Changed

- Upgraded to Astro 6.0 (from 5.x) with Vite 7
- Upgraded Tailwind CSS to 4.2
- Extracted legal page content into shared components (DRY)
- Timeline uses semantic `<ol>`/`<li>` instead of `div[role=list]`
- Deduplicated locale logic between `astro.config.ts` and `i18n/config.ts`
- Moved `@astrojs/check` to devDependencies
- Added production service to `docker-compose.yml`

### Fixed

- nginx: security headers now inherited in `/_astro/` and `/fonts/` location blocks
- Accessibility: added `forced-colors` fallback for gradient text (Windows High Contrast)
- Fixed incorrect `tel:` href on accessibility pages (Schlichtungsstelle)
- Added `is:inline` to JSON-LD script tags (suppresses Astro check hints)
- Removed misleading `dateModified` from JSON-LD (was set to build time)

### Security

- Fixed 2 high-severity vulnerabilities in transitive dependencies (rollup, svgo)

## [1.0.0] - 2026-02-10

### Added

- Single-file CV configuration via `cv-data.ts`
- Dark mode with configurable accent color
- Print-optimized layout with PDF download
- Optional bilingual support (EN/DE)
- Schema.org JSON-LD structured data
- WCAG 2.2 AA accessibility compliance
- Docker development environment
- GDPR-compliant design (self-hosted fonts, no external requests)
