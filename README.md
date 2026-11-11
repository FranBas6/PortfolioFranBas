# Portfolio · Francisco José Bas Guil

Personal portfolio of Francisco José Bas Guil, full stack Software Developer (Laravel, Flutter, AI integration). Available in Spanish and English.

> Work in progress: structure in place, final content and design pending.

## Stack

- [Astro](https://astro.build) 7, static output, no UI framework
- Astro content collections (Markdown and YAML, validated with schemas)
- Tailwind CSS 4, design tokens as CSS variables
- Astro's native i18n routing and the official sitemap integration
- Manrope variable font, self-hosted
- Netlify (hosting, root language redirect, Netlify Forms)

No analytics, no cookies, no third-party scripts.

## Getting started

Requires Node 22.23.4 or newer.

```bash
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
- [`docs/design-system.md`](docs/design-system.md): design tokens and components (draft)
- [`docs/fleetx-rules.md`](docs/fleetx-rules.md): what may be published about professional work

## Licence

Code and content © Francisco José Bas Guil. All rights reserved. The Manrope font is licensed under the SIL Open Font License (`public/fonts/OFL.txt`).
