# Portfolio · Francisco José Bas Guil

Personal portfolio of Francisco José Bas Guil, full stack Software Developer (Laravel, Flutter, AI integration). Available in Spanish and English.

**Live:** [franbasguil.netlify.app](https://franbasguil.netlify.app)

## Highlights

- Bilingual (es / en) with translated URLs, `hreflang` pairs and a sitemap that links each page to its translation.
- Content separated from code: every text lives in schema-validated Markdown and YAML; adding a project is two files.
- Screenshot gallery with a desktop / mobile and dark / light switch built with radio buttons and `:has()`, no JavaScript.
- Almost no JavaScript: only the mobile menu, the copy-email button and the form's sending state, all as progressive enhancement, plus the visit statistics script.
- Strict Content-Security-Policy with no `'unsafe-inline'`.
- Accessible (WCAG AA): keyboard navigation, visible focus, reduced motion, 44 px touch targets.
- Lighthouse (mobile): 100 in performance, accessibility, best practices and SEO.
- Content checks before every build: translation parity, image paths, text lengths and a private list of terms that must never be published (also checked on every push by a git hook).

## Stack

- [Astro](https://astro.build) 7, static output, no UI framework
- Astro content collections (Markdown and YAML, validated with schemas)
- Tailwind CSS 4, design tokens as CSS variables
- Astro's native i18n routing and the official sitemap integration
- Manrope variable font, self-hosted
- Netlify (hosting, root language redirect, Netlify Forms)
- [GoatCounter](https://www.goatcounter.com) for visit statistics

No cookies. Visit statistics are cookieless and anonymous; the GoatCounter script is served from the site itself, so the Content-Security-Policy only allows its endpoint in `connect-src`.

## Getting started

Requires Node 22.23.4 or newer; the project pins Node 24 in `.nvmrc`.

```bash
nvm use
npm install
npm run dev
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run build` | Content checks, then the static build in `dist/` |
| `npm run preview` | Serves the build locally |
| `npm run check:content` | Content checks only |
| `npm test` | Tests for the content checker |

## Editing content

All text lives in `src/content/` and `src/i18n/ui.ts`. Adding a project means adding two Markdown files with the same name, one per language, plus their images. See [`docs/content-guide.md`](docs/content-guide.md).

## Documentation

- [`docs/plan.md`](docs/plan.md): project plan
- [`docs/content-guide.md`](docs/content-guide.md): content model and how to add a project
- [`docs/design-system.md`](docs/design-system.md): design tokens, components and states
- [`docs/fleetx-rules.md`](docs/fleetx-rules.md): what may be published about professional work

## Licence

Code and content © Francisco José Bas Guil. All rights reserved. The Manrope font is licensed under the SIL Open Font License (`public/fonts/OFL.txt`).
