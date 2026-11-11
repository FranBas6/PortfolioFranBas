// Plain-Node helpers to read the content files without Astro.
// Shared by scripts/check-content.mjs and astro.config.mjs (sitemap alternates).

import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse as parseYaml } from 'yaml';

export const LANGS = ['es', 'en'];

/** Split a Markdown file into its YAML frontmatter (parsed) and body. */
export function readMarkdown(file) {
  const raw = readFileSync(file, 'utf8');
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: raw, frontmatterLines: 0 };
  return {
    data: parseYaml(match[1]) ?? {},
    body: match[2],
    frontmatterLines: match[1].split('\n').length + 2,
  };
}

export function readYaml(file) {
  return parseYaml(readFileSync(file, 'utf8')) ?? {};
}

/** Markdown file ids (file name without extension) in a folder. */
export function listMarkdownIds(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.slice(0, -3))
    .sort();
}

/**
 * Projects grouped by file id: { [id]: { es: {file, data}, en: {file, data} } }.
 * A language is missing from an entry when its file does not exist.
 */
export function loadProjects(root) {
  const base = join(root, 'src/content/projects');
  const projects = {};
  for (const lang of LANGS) {
    for (const id of listMarkdownIds(join(base, lang))) {
      const file = join(base, lang, `${id}.md`);
      projects[id] ??= {};
      projects[id][lang] = { file, data: readMarkdown(file).data };
    }
  }
  return projects;
}
