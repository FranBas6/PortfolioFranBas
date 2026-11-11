#!/usr/bin/env node
// Content checks (plan, section 8). Runs before every build (npm prebuild).
//
//   1. Parity: every project exists in both languages with the same fields.
//   2. Non-translatable fields are identical in both languages.
//   3. Images: every project has a cover and every image path exists.
//   4. Lengths: warns about texts over their limit (scripts/content-limits.mjs).
//   5. Forbidden terms from .private/forbidden-terms.txt: reports file and
//      line only, never the term. Skipped with a warning if the list is
//      missing (e.g. on Netlify), unless --strict is passed.
//
// Usage:
//   node scripts/check-content.mjs                 errors fail, warnings print
//   node scripts/check-content.mjs --strict        the term list is required
//   node scripts/check-content.mjs --strict --ref <name> --commits <sha>...
//                                                  also scan the pushed branch or
//                                                  tag names (--ref, repeatable) and
//                                                  the messages of those commits
//                                                  not yet on a remote

import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { LIMITS } from './content-limits.mjs';
import { LANGS, loadProjects, readMarkdown, readYaml } from './lib/content-files.mjs';
import { buildTermRegExp, findMatchingLines, parseTermList } from './lib/forbidden.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT = join(ROOT, 'src/content');
// FORBIDDEN_TERMS_FILE lets tests point at an invented list.
const TERMS_FILE = process.env.FORBIDDEN_TERMS_FILE ?? join(ROOT, '.private/forbidden-terms.txt');

const args = process.argv.slice(2);
const strict = args.includes('--strict');
/** Values after `flag` up to the next `--option`. */
const valuesOf = (flag) => {
  const start = args.indexOf(flag);
  if (start === -1) return [];
  const rest = args.slice(start + 1);
  const end = rest.findIndex((arg) => arg.startsWith('--'));
  return end === -1 ? rest : rest.slice(0, end);
};
const commitShas = valuesOf('--commits');
const refNames = args.flatMap((arg, i) => (arg === '--ref' && args[i + 1] ? [args[i + 1]] : []));

const errors = [];
const warnings = [];
const rel = (file) => relative(ROOT, file);
const error = (where, message) => errors.push(`${where}: ${message}`);
const warn = (where, message) => warnings.push(`${where}: ${message}`);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Every key path of a value: `cover.alt`, `whatIDid.3`, ... */
function keyPaths(value, prefix = '') {
  if (Array.isArray(value)) {
    return value.flatMap((item, i) => keyPaths(item, `${prefix}${i}.`));
  }
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, child]) => [
      `${prefix}${key}`,
      ...keyPaths(child, `${prefix}${key}.`),
    ]);
  }
  return [];
}

function compareStructure(where, a, b) {
  const pathsA = new Set(keyPaths(a));
  const pathsB = new Set(keyPaths(b));
  const onlyA = [...pathsA].filter((p) => !pathsB.has(p));
  const onlyB = [...pathsB].filter((p) => !pathsA.has(p));
  if (onlyA.length) error(where, `fields only in "${LANGS[0]}": ${onlyA.join(', ')}`);
  if (onlyB.length) error(where, `fields only in "${LANGS[1]}": ${onlyB.join(', ')}`);
}

const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);

function compareFields(where, a, b, pick) {
  for (const [name, getter] of Object.entries(pick)) {
    if (!same(getter(a), getter(b))) error(where, `"${name}" must be identical in both languages`);
  }
}

const length = (text) => [...String(text ?? '')].length;

function checkLength(where, text, limitKey) {
  if (text === undefined || text === null) return;
  const { min, max, label } = LIMITS[limitKey];
  const n = length(text);
  if (max !== undefined && n > max) warn(where, `${label} has ${n} characters (max ${max})`);
  if (min !== undefined && n < min) warn(where, `${label} has ${n} characters (min ${min})`);
}

// ---------------------------------------------------------------------------
// 1–4. Projects
// ---------------------------------------------------------------------------

const projects = loadProjects(ROOT);

const projectPick = {
  order: (d) => d.order,
  draft: (d) => d.draft,
  period: (d) => d.period,
  platforms: (d) => d.platforms,
  stack: (d) => d.stack,
  links: (d) => d.links,
  uiNote: (d) => d.uiNote,
  'metrics[].value': (d) => d.metrics?.map((m) => m.value),
  'cover.src': (d) => d.cover?.src,
  'gallery[].src': (d) => d.gallery?.map((g) => g.src),
  'gallery[].type': (d) => d.gallery?.map((g) => g.type),
};

const slugsByLang = Object.fromEntries(LANGS.map((lang) => [lang, new Map()]));

for (const [id, byLang] of Object.entries(projects)) {
  const missing = LANGS.filter((lang) => !byLang[lang]);
  if (missing.length) {
    error(`projects/${id}`, `missing in: ${missing.join(', ')}`);
  } else {
    const [a, b] = LANGS.map((lang) => byLang[lang].data);
    compareStructure(`projects/${id}`, a, b);
    compareFields(`projects/${id}`, a, b, projectPick);
  }

  for (const lang of LANGS) {
    if (!byLang[lang]) continue;
    const { file, data } = byLang[lang];
    const where = rel(file);

    // Slugs must be unique per language (they are the URL).
    if (data.slug) {
      const other = slugsByLang[lang].get(data.slug);
      if (other) error(where, `slug "${data.slug}" is also used by ${other}`);
      slugsByLang[lang].set(data.slug, where);
    }

    // 3. Images.
    const images = [];
    if (!data.cover?.src) error(where, 'every project needs a `cover`');
    else images.push(data.cover.src);
    for (const shot of data.gallery ?? []) if (shot?.src) images.push(shot.src);
    for (const src of images) {
      if (!existsSync(resolve(dirname(file), src))) error(where, `image not found: ${src}`);
    }

    // 4. Lengths.
    checkLength(where, data.title, 'projectTitle');
    checkLength(where, data.summary, 'summary');
    checkLength(where, data.whatItIs, 'whatItIs');
    (data.whatIDid ?? []).forEach((point) => checkLength(where, point, 'whatIDidItem'));
    checkLength(where, data.whyItMatters, 'whyItMatters');
    // The page falls back to `summary` when there is no SEO description.
    checkLength(where, data.seo?.description ?? data.summary, 'seoDescription');
  }
}

if (Object.keys(projects).length === 0) error('src/content/projects', 'no projects found');

// ---------------------------------------------------------------------------
// 1–4. Per-language YAML and legal pages
// ---------------------------------------------------------------------------

const yamlCollections = {
  site: {
    email: (d) => d.email,
    links: (d) => d.links,
    'highlights count': (d) => d.highlights?.length,
  },
  experience: {
    'jobs[].period': (d) => d.jobs?.map((j) => j.period),
    'jobs[].stack': (d) => d.jobs?.map((j) => j.stack),
    'education[].years': (d) => d.education?.map((e) => e.years),
  },
};

const yamlData = {};
for (const [collection, pick] of Object.entries(yamlCollections)) {
  yamlData[collection] = {};
  for (const lang of LANGS) {
    const file = join(CONTENT, collection, `${lang}.yaml`);
    if (!existsSync(file)) error(`${collection}/${lang}.yaml`, 'missing');
    else yamlData[collection][lang] = readYaml(file);
  }
  const [a, b] = LANGS.map((lang) => yamlData[collection][lang]);
  if (a && b) {
    compareStructure(collection, a, b);
    compareFields(collection, a, b, pick);
  }
}

for (const lang of LANGS) {
  const where = `site/${lang}.yaml`;
  const site = yamlData.site[lang];
  if (site) {
    checkLength(where, site.tagline, 'tagline');
    checkLength(where, site.seo?.description, 'seoDescription');
    if (site.cv && !existsSync(join(ROOT, 'public', site.cv))) error(where, `CV not found: ${site.cv}`);
    if (site.og?.image && !existsSync(join(ROOT, 'public', site.og.image))) {
      warn(where, `share image not found yet: ${site.og.image} (designed in phase 3)`);
    }
  }
  for (const job of yamlData.experience[lang]?.jobs ?? []) {
    checkLength(`experience/${lang}.yaml`, job.summary, 'jobSummary');
    for (const item of job.highlights ?? []) {
      const shown = item.title ? `${item.title}: ${item.text}` : item.text;
      checkLength(`experience/${lang}.yaml`, shown, 'jobHighlight');
    }
  }

  const legal = join(CONTENT, 'legal', lang, 'privacy.md');
  if (!existsSync(legal)) error(`legal/${lang}/privacy.md`, 'missing');
  else checkLength(rel(legal), readMarkdown(legal).data.seo?.description, 'seoDescription');
}

// ---------------------------------------------------------------------------
// 5. Forbidden terms
// ---------------------------------------------------------------------------

const BINARY = /\.(pdf|png|jpe?g|webp|avif|gif|ico|woff2?|ttf|otf|zip)$/i;
const SCAN_ROOTS = [
  'src',
  'docs',
  'scripts',
  'public',
  '.githooks',
  'CLAUDE.md',
  'README.md',
  'package.json',
  'astro.config.mjs',
  'netlify.toml',
  'tsconfig.json',
  '.gitignore',
];

function walk(path) {
  if (!existsSync(path)) return [];
  if (statSync(path).isFile()) return [path];
  return readdirSync(path).flatMap((name) => walk(join(path, name)));
}

/** Files that would be published: git's view when available, else the roots above. */
function filesToScan() {
  try {
    const out = execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard', '-z'], {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    });
    const files = out.split('\0').filter(Boolean);
    if (files.length) return files.map((f) => join(ROOT, f));
  } catch {
    // Not a git repository yet.
  }
  return SCAN_ROOTS.flatMap((root) => walk(join(ROOT, root)));
}

/**
 * Messages of commits not yet on any remote. With explicit SHAs (pre-push)
 * a git failure is an error; otherwise HEAD is used when it exists.
 */
function unpushedCommitMessages(shas) {
  const explicit = shas.length > 0;
  try {
    const out = execFileSync(
      'git',
      ['log', '--format=%h%x1f%B%x1e', ...(explicit ? shas : ['HEAD']), '--not', '--remotes'],
      { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
    );
    return out
      .split('\x1e')
      .map((chunk) => chunk.trim())
      .filter(Boolean)
      .map((chunk) => {
        const [sha, message] = chunk.split('\x1f');
        return { sha, message };
      });
  } catch {
    if (explicit) error('commit messages', 'could not read them with git log');
    return []; // No repository or no commits yet.
  }
}

let termsChecked = false;
if (!existsSync(TERMS_FILE)) {
  const message = `${rel(TERMS_FILE)} not found: forbidden-term check SKIPPED`;
  if (strict) error('forbidden terms', `${message}. It must run before pushing.`);
  else warn('forbidden terms', message);
} else {
  const regExps = parseTermList(readFileSync(TERMS_FILE, 'utf8')).map(buildTermRegExp);
  for (const file of filesToScan()) {
    const path = rel(file);
    if (path.startsWith('.private/')) continue;
    if (findMatchingLines(path, regExps).length) error(path, 'forbidden term in the file path');
    if (BINARY.test(file) || !existsSync(file)) continue;
    for (const line of findMatchingLines(readFileSync(file, 'utf8'), regExps)) {
      error(`${path}:${line}`, 'forbidden term');
    }
  }
  // Branch and tag names are public while they exist on the remote. The name
  // itself is not printed: it may contain the term.
  refNames.forEach((name, i) => {
    if (findMatchingLines(name, regExps).length) {
      error(`pushed ref ${i + 1} of ${refNames.length}`, 'forbidden term in the branch or tag name');
    }
  });
  for (const { sha, message } of unpushedCommitMessages(commitShas)) {
    for (const line of findMatchingLines(message, regExps)) {
      error(`commit ${sha}, message line ${line}`, 'forbidden term');
    }
  }
  termsChecked = true;
}

// ---------------------------------------------------------------------------
// Placeholder content still present (informative; phase 2 removes it all)
// ---------------------------------------------------------------------------

const placeholderFiles = walk(CONTENT).filter((file) =>
  /\[(PRUEBA|PLACEHOLDER)\]/.test(readFileSync(file, 'utf8')),
);

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------

for (const w of warnings) console.warn(`⚠  ${w}`);
for (const e of errors) console.error(`✖  ${e}`);
if (placeholderFiles.length) {
  console.log(`ℹ  ${placeholderFiles.length} content file(s) still contain placeholder text.`);
}
console.log(
  `${errors.length ? '✖' : '✔'} check-content: ${errors.length} error(s), ${warnings.length} warning(s)` +
    (termsChecked ? ', forbidden terms checked.' : ', forbidden terms NOT checked.'),
);
process.exit(errors.length ? 1 : 0);
