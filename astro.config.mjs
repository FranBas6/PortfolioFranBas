// @ts-check
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { loadProjects } from './scripts/lib/content-files.mjs';
import {
  languages,
  projectPath,
  staticAlternates,
  thanksPath,
  xDefaultLang,
} from './src/i18n/routes.ts';

const SITE = 'https://franbasguil.netlify.app';
const root = fileURLToPath(new URL('.', import.meta.url));

/**
 * Translated pages do not share a path (proyectos/x ↔ projects/y), so the
 * sitemap integration cannot pair them by itself. Build the groups of
 * alternate URLs from the same sources the pages use.
 */
function alternateGroups() {
  const { thanks: _notIndexed, ...indexed } = staticAlternates;
  const groups = Object.values(indexed);
  for (const project of Object.values(loadProjects(root))) {
    if (!project.es || !project.en) continue; // check-content reports it
    if (project.es.data.draft || project.en.data.draft) continue;
    groups.push({
      es: projectPath('es', project.es.data.slug),
      en: projectPath('en', project.en.data.slug),
    });
  }
  /** @type {Map<string, { url: string, lang: string }[]>} */
  const byUrl = new Map();
  for (const group of groups) {
    const links = [
      ...languages.map((lang) => ({ lang, url: SITE + group[lang] })),
      { lang: 'x-default', url: SITE + group[xDefaultLang] },
    ];
    for (const lang of languages) byUrl.set(SITE + group[lang], links);
  }
  return byUrl;
}

const alternates = alternateGroups();

export default defineConfig({
  site: SITE,
  output: 'static',
  // Astro 7 defaults to 'jsx', which drops the space between an inline element
  // and the text next to it ("Idiomas:Español"). Keep the classic behaviour.
  compressHTML: true,
  // No inline <style> or <script>: everything is an external, hashed file, so
  // netlify.toml can send a strict Content-Security-Policy without 'unsafe-inline'.
  build: {
    inlineStylesheets: 'never',
  },
  trailingSlash: 'always',
  i18n: {
    locales: [...languages],
    defaultLocale: xDefaultLang,
    routing: {
      // Both languages live under a prefix; `/` is handled by netlify.toml.
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // Not indexed: the root fallback, the 404 and the thank-you pages.
      filter: (page) =>
        page !== `${SITE}/` &&
        !page.startsWith(`${SITE}/404`) &&
        !languages.some((lang) => page === SITE + thanksPath(lang)),
      serialize(item) {
        const links = alternates.get(item.url);
        return links ? { ...item, links } : item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    // Small scripts would otherwise be inlined into the HTML (see CSP above).
    build: { assetsInlineLimit: 0 },
  },
});
