# Astro Vitae — CV/Portfolio Template

## Projekt-Uebersicht
Open-Source Astro Template fuer Lebenslauf/Portfolio. Single-file Config (`cv-data.ts`), statischer Output.
Live-Demo: lazaridis.me (wird auch als persoenlicher CV genutzt)

## Stack
- **Framework:** Astro 5.x (statisch, kein SSR)
- **Styling:** Tailwind CSS v4
- **Sprache:** TypeScript
- **Fonts:** Self-hosted (Geist Regular + Bold, WOFF2)
- **Deployment:** Docker oder statischer Host
- **Node:** >=22

## Architektur
```
src/
  components/    # Astro-Komponenten (Hero, About, Skills, Timeline, Portfolio, Contact, Languages, Nav)
  data/          # cv-data.ts (Single Source of Truth), social-icons.ts
  i18n/          # config.ts, utils.ts (optionale Zweisprachigkeit DE/EN)
  layouts/       # BaseLayout
  lib/           # json-ld.ts (Schema.org Structured Data)
  pages/         # index, impressum, datenschutz, 404, [locale]/*
  styles/        # global.css, tokens.css, animations.css, print.css
public/
  fonts/         # Self-hosted WOFF2
```

## Konventionen
- **Single-file Config:** Alle CV-Daten in `src/data/cv-data.ts` — dort aendern, Rest passt sich an
- **i18n:** Optional, konfiguriert in `astro.config.ts` basierend auf `cv-data.ts`
- **Dark Mode:** System-Praeferenz + manueller Toggle, Accent-Farbe konfigurierbar
- **Print:** Eigenes Print-Stylesheet, PDF-Download-Button
- **Statisch:** Kein Client-JS-Framework, reines Astro + CSS

## Wichtige Befehle
```bash
npm run dev       # Entwicklungsserver
npm run build     # Statischer Build nach dist/
npm run preview   # Build-Vorschau
```

## Open-Source Hinweis
Dieses Repo ist oeffentlich (MIT-Lizenz). Keine persoenlichen Daten committen ausser in cv-data.ts.
Issues und PRs von externen Nutzern sind moeglich.
