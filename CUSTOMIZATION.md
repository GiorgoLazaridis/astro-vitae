# Customization Guide

Everything you need to configure your Astro Vitae CV. All changes happen in a single file: `src/data/cv-data.ts`.

---

## Table of Contents

- [Configuration Reference](#configuration-reference)
  - [site](#site)
  - [personal](#personal)
  - [hero](#hero)
  - [about](#about)
  - [experience](#experience)
  - [education](#education)
  - [skills](#skills)
  - [languages](#languages)
  - [projects](#projects)
  - [contact](#contact)
- [Language Modes](#language-modes)
- [Theming](#theming)
- [Showing and Hiding Sections](#showing-and-hiding-sections)
- [Social Platforms](#social-platforms)
- [Profile Photo](#profile-photo)
- [Legal Pages](#legal-pages)
- [Deployment](#deployment)
- [Print and PDF](#print-and-pdf)

---

## Configuration Reference

Open `src/data/cv-data.ts` and edit the `cvData` object. TypeScript provides autocomplete for every field.

### site

```typescript
site: {
  language: 'en',               // Single language mode (see Language Modes below)
  title: 'Jane Doe - Designer',
  description: 'UX Designer based in Berlin.',
  url: 'https://janedoe.com',   // Your deployed URL (used for canonical URLs, OG tags)
  accentColor: '#2563eb',       // Hex color for accent elements
  darkModeDefault: false,       // true = dark mode by default
},
```

| Field | Type | Required | Description |
|---|---|---|---|
| `language` | `'en' \| 'de'` | Yes* | Single language mode. Mutually exclusive with `languages`. |
| `languages` | `['de', 'en']` | Yes* | Bilingual mode. First entry is the default locale. |
| `title` | `string \| Localizable<string>` | Yes | Page title shown in browser tab and search results. |
| `description` | `string \| Localizable<string>` | Yes | Meta description for SEO. |
| `url` | `string` | Yes | Production URL of your site. |
| `accentColor` | `string` | Yes | Hex color code (e.g. `'#2563eb'`). |
| `darkModeDefault` | `boolean` | Yes | Whether dark mode is active by default. |

*Use either `language` (single) or `languages` (bilingual), not both.

### personal

```typescript
personal: {
  name: 'Jane Doe',
  title: 'UX Designer',
  subtitle: 'DesignStudio, Berlin',  // optional
  email: 'jane@example.com',
  phone: '+49 170 1234567',          // optional
  location: 'Berlin, Germany',       // optional
  website: 'janedoe.com',            // optional, displayed without protocol
  photo: '/photo.jpg',               // optional, path relative to public/
  socials: [
    { platform: 'github', url: 'https://github.com/janedoe' },
    { platform: 'linkedin', url: 'https://linkedin.com/in/janedoe' },
  ],
},
```

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Your full name. |
| `title` | `string \| Localizable<string>` | Yes | Job title / professional role. |
| `subtitle` | `string \| Localizable<string>` | No | Company, location, or secondary title. |
| `email` | `string` | Yes | Email address (obfuscated in HTML against scrapers). |
| `phone` | `string` | No | Phone number (obfuscated in HTML). |
| `location` | `string` | No | City, country. |
| `website` | `string` | No | Display URL (shown without `https://`). |
| `photo` | `string` | No | Path to photo in `public/` directory. |
| `socials` | `SocialLink[]` | Yes | Array of social links (can be empty: `[]`). |

### hero

```typescript
hero: {
  greeting: "Hi, I'm",
  tagline: 'Designing human-centered experiences.',
  stats: [                            // optional
    { value: '8+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
  ],
},
```

| Field | Type | Required | Description |
|---|---|---|---|
| `greeting` | `string \| Localizable<string>` | Yes | Text before your name. |
| `tagline` | `string \| Localizable<string>` | Yes | One-liner below your name. |
| `stats` | `HeroStat[]` | No | Key figures displayed as badges. Omit or use `[]` to hide. |

Each stat has:
- `value`: `string` -- the number or short text (e.g. `'10+'`)
- `label`: `string | Localizable<string>` -- description of the value

### about

```typescript
about: {
  heading: 'About Me',
  text: `Your multi-paragraph bio here. HTML is supported: use <strong>bold</strong> for emphasis.

Second paragraph separated by blank line.`,
},
```

| Field | Type | Required | Description |
|---|---|---|---|
| `heading` | `string \| Localizable<string>` | Yes | Section heading. |
| `text` | `string \| Localizable<string>` | Yes | Bio text. Supports inline HTML (`<strong>`, `<em>`, `<a>`). |

### experience

```typescript
experience: [
  {
    period: '2020 -- present',
    title: 'Senior Designer',
    organization: 'DesignStudio GmbH',
    description: 'Lead designer for enterprise clients.',   // optional
    highlights: ['Design systems', 'User research'],        // optional
  },
],
```

| Field | Type | Required | Description |
|---|---|---|---|
| `period` | `string` | Yes | Time range (free text). |
| `title` | `string \| Localizable<string>` | Yes | Job title. |
| `organization` | `string \| Localizable<string>` | Yes | Company name. |
| `description` | `string \| Localizable<string>` | No | Role summary. |
| `highlights` | `Localizable<string>[]` | No | Key achievements as bullet points. |

### education

```typescript
education: [
  {
    period: '2012 -- 2016',
    degree: 'B.A. Interaction Design',
    institution: 'University of Arts Berlin',
    description: 'Focus on digital product design.',  // optional
  },
],
```

| Field | Type | Required | Description |
|---|---|---|---|
| `period` | `string` | Yes | Time range. |
| `degree` | `string \| Localizable<string>` | Yes | Degree or certification name. |
| `institution` | `string \| Localizable<string>` | Yes | School or institution name. |
| `description` | `string \| Localizable<string>` | No | Additional details. |

### skills

```typescript
skills: [
  {
    category: 'Design',
    skills: ['Figma', 'Sketch', 'Adobe XD', 'Prototyping'],
  },
  {
    category: 'Development',
    skills: ['HTML/CSS', 'JavaScript', 'React'],
  },
],
```

| Field | Type | Required | Description |
|---|---|---|---|
| `category` | `string \| Localizable<string>` | Yes | Group heading. |
| `skills` | `string[]` | Yes | List of skills in this category. |

### languages

```typescript
languages: [
  { language: 'English', level: 'Native' },
  { language: 'German', level: 'Fluent (C1)' },
],
```

| Field | Type | Required | Description |
|---|---|---|---|
| `language` | `string` | Yes | Language name. |
| `level` | `string \| Localizable<string>` | Yes | Proficiency level. |

### projects

```typescript
projects: [
  {
    name: 'Portfolio Redesign',
    description: 'Complete redesign of my personal portfolio.',
    url: 'https://example.com',                        // optional
    techStack: ['Astro', 'Tailwind CSS', 'TypeScript'], // optional
  },
],
```

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes | Project name. |
| `description` | `string \| Localizable<string>` | Yes | Short project description. |
| `url` | `string` | No | Link to the project. |
| `techStack` | `string[]` | No | Technologies used. |

### contact

```typescript
contact: {
  heading: 'Get in Touch',
  text: 'Send me an email or give me a call.',
},
```

| Field | Type | Required | Description |
|---|---|---|---|
| `heading` | `string \| Localizable<string>` | Yes | Section heading. |
| `text` | `string \| Localizable<string>` | Yes | Call-to-action text. |

---

## Language Modes

Astro Vitae supports two language modes:

### Single Language

Set `language` in the site config. No language switcher is shown, no `/en/` routes are generated.

```typescript
site: {
  language: 'en',
  title: 'Jane Doe - Designer',
  description: 'UX Designer based in Berlin.',
  // ...
},
```

All `Localizable<string>` fields accept plain strings:

```typescript
title: 'Senior Designer',
```

### Bilingual (EN/DE)

Set `languages` instead of `language`. The first entry becomes the default locale (no URL prefix). The second locale gets a `/en/` or `/de/` prefix.

```typescript
site: {
  languages: ['de', 'en'],  // German = default, English = /en/
  title: { de: 'Jane Doe - Designerin', en: 'Jane Doe - Designer' },
  description: { de: 'UX-Designerin in Berlin.', en: 'UX Designer based in Berlin.' },
  // ...
},
```

All `Localizable<string>` fields must use the localized object format:

```typescript
title: { de: 'Senior Designerin', en: 'Senior Designer' },
greeting: { de: 'Hallo, ich bin', en: "Hi, I'm" },
tagline: { de: 'Menschzentrierte Erlebnisse gestalten.', en: 'Designing human-centered experiences.' },
```

The `Localizable<T>` type is defined as:

```typescript
type Localizable<T> = T | Record<Locale, T>;
```

When bilingual is active:
- A language switcher appears in the navigation
- Alternate `hreflang` tags are generated for SEO
- Pages are generated at both `/` (default locale) and `/en/` (or `/de/`)

---

## Theming

### Accent Color

Set `accentColor` in the site config to any hex color:

```typescript
accentColor: '#2563eb',   // Blue (default)
accentColor: '#059669',   // Emerald
accentColor: '#d97706',   // Amber
accentColor: '#dc2626',   // Red
accentColor: '#7c3aed',   // Violet
```

The accent color is used for links, buttons, section dividers, the scroll progress bar, and decorative elements. A secondary accent is automatically derived by mixing with purple in the oklch color space.

### Dark Mode

Control the default with `darkModeDefault`:

```typescript
darkModeDefault: false,  // Light by default, respects system preference
darkModeDefault: true,   // Dark by default
```

Users can toggle dark mode via the button in the navigation. Their preference is stored in `localStorage`.

### Custom Fonts

The template uses Geist (Regular + Bold) from `public/fonts/`. To use a different font:

1. Place your `.woff2` files in `public/fonts/`
2. Update the `@font-face` declarations in `src/styles/global.css`
3. Update the font preload links in `src/layouts/BaseLayout.astro`

---

## Showing and Hiding Sections

Sections are automatically hidden when their data arrays are empty:

```typescript
// Show experience
experience: [
  { period: '2020 -- present', title: 'Designer', organization: 'Studio' },
],

// Hide experience -- use an empty array
experience: [],
```

This applies to: `experience`, `education`, `skills`, `languages`, `projects`.

The hero stats work the same way -- omit the `stats` field or set it to `[]` to hide the stats badges.

---

## Social Platforms

The template supports 14 social platforms with built-in SVG icons:

| Platform | Key | Example URL |
|---|---|---|
| GitHub | `github` | `https://github.com/username` |
| LinkedIn | `linkedin` | `https://linkedin.com/in/username` |
| X (Twitter) | `x` | `https://x.com/username` |
| Instagram | `instagram` | `https://instagram.com/username` |
| Facebook | `facebook` | `https://facebook.com/username` |
| Threads | `threads` | `https://threads.net/@username` |
| Xing | `xing` | `https://xing.com/profile/username` |
| YouTube | `youtube` | `https://youtube.com/@username` |
| Mastodon | `mastodon` | `https://mastodon.social/@username` |
| Bluesky | `bluesky` | `https://bsky.app/profile/username` |
| Dribbble | `dribbble` | `https://dribbble.com/username` |
| Behance | `behance` | `https://behance.net/username` |
| CodePen | `codepen` | `https://codepen.io/username` |
| Stack Overflow | `stackoverflow` | `https://stackoverflow.com/users/12345` |

Usage:

```typescript
socials: [
  { platform: 'github', url: 'https://github.com/janedoe' },
  { platform: 'linkedin', url: 'https://linkedin.com/in/janedoe' },
  { platform: 'dribbble', url: 'https://dribbble.com/janedoe' },
],
```

To show no social links, use an empty array: `socials: []`.

---

## Profile Photo

1. Add your photo to the `public/` directory (e.g. `public/photo.jpg`)
2. Set the `photo` field in the personal section:

```typescript
personal: {
  // ...
  photo: '/photo.jpg',
},
```

Recommended: square image, at least 200x200px. Supported formats: JPG, PNG, WebP, AVIF.

To hide the photo, remove the `photo` field or leave it as `undefined`.

---

## Legal Pages

The template includes imprint (`impressum.astro`) and privacy policy (`datenschutz.astro`) pages with bilingual content. These follow German legal requirements (DDG, DSGVO/GDPR).

To update the content:

- **Imprint:** Edit `src/pages/impressum.astro` -- replace the example name, address, and contact information
- **Privacy Policy:** Edit `src/pages/datenschutz.astro` -- update the controller information and hosting provider details

Both pages have separate German and English content blocks. If you use single-language mode, only the corresponding language block is rendered.

The bilingual variants at `src/pages/[locale]/impressum.astro` and `src/pages/[locale]/datenschutz.astro` are automatically handled through Astro's i18n routing.

---

## Deployment

Astro Vitae builds to a static `dist/` directory. It runs on any static hosting platform.

```bash
npm run build
```

### Vercel

Zero-config deployment:

1. Push your repo to GitHub
2. Import the project in [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Astro -- no configuration needed
4. Deploy

### Netlify

Zero-config deployment:

1. Push your repo to GitHub
2. Connect the repo in [app.netlify.com](https://app.netlify.com/)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

### GitHub Pages

1. Update `astro.config.ts`:

```typescript
export default defineConfig({
  site: 'https://username.github.io',
  base: '/repo-name',  // omit if using a custom domain
  // ...
});
```

2. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

3. Enable GitHub Pages in your repo settings (Settings > Pages > Source: GitHub Actions).

### Docker (Production)

The included `Dockerfile` creates a production image with Nginx:

```bash
docker build -t astro-vitae .
docker run -p 80:80 astro-vitae
```

The Nginx config (`nginx.conf`) includes security headers, long-term caching for fonts and assets, and proper fallback routing.

### Self-hosted (Nginx)

1. Build: `npm run build`
2. Copy `dist/` to your server
3. Example Nginx config:

```nginx
server {
    listen 80;
    server_name cv.example.com;
    root /var/www/cv;
    index index.html;

    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    location /_astro/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location /fonts/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location / {
        try_files $uri $uri/ $uri.html /404.html;
    }
}
```

Add SSL with Certbot or use a reverse proxy like Traefik.

---

## Print and PDF

The template includes a dedicated print stylesheet (`src/styles/print.css`) that optimizes the layout for paper.

**Two ways to generate a PDF:**

1. **Download PDF button** -- visible in the hero section, triggers the browser print dialog
2. **Keyboard shortcut** -- press `Ctrl+P` (or `Cmd+P` on macOS)

The print layout removes the navigation, scroll buttons, dark mode, and other interactive elements. Colors are adjusted for paper readability.

For best results, use Chrome or Edge and select "Save as PDF" in the print dialog.
