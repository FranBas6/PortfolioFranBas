import { readFileSync } from 'node:fs';
import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { parse as parseYaml } from 'yaml';

/*
 * Schemas for every piece of content (plan, section 8).
 *
 * Structural rules make the build fail: missing fields, wrong counts,
 * fields a company project may not have, unknown stack ids. Text lengths
 * only warn, so they live in scripts/content-limits.mjs and are checked by
 * scripts/check-content.mjs.
 */

// ---------------------------------------------------------------------------
// Shared pieces
// ---------------------------------------------------------------------------

const SKILLS_FILE = 'src/content/skills/skills.yaml';

/** Every technology id declared in skills.yaml. `stack` may only use these. */
const skillIds = (() => {
  const groups = parseYaml(readFileSync(SKILLS_FILE, 'utf8')) as {
    items: { id: string }[];
  }[];
  const ids = groups.flatMap((group) => group.items.map((item) => item.id));
  if (ids.length === 0) throw new Error(`${SKILLS_FILE} declares no technologies`);
  return ids as [string, ...string[]];
})();

const skillId = z.enum(skillIds);

/** `2026-10`: stored like this, formatted per language when shown. */
const yearMonth = z
  .string()
  .regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'Use the format YYYY-MM, e.g. 2026-10');

/** No `end` means "present". */
const period = z
  .object({ start: yearMonth, end: yearMonth.optional() })
  .refine((p) => !p.end || p.end >= p.start, {
    message: 'period.end must not be before period.start',
    path: ['end'],
  });

const text = z.string().trim().min(1);

const seo = z
  .object({ title: text.optional(), description: text.optional() })
  .optional();

/** Entry ids come from the file path (`es/bulk-transport`), never from `slug`. */
const idFromPath = ({ entry }: { entry: string }) => entry.replace(/\.(md|ya?ml)$/, '');

// ---------------------------------------------------------------------------
// Projects: src/content/projects/<lang>/<id>.md
// ---------------------------------------------------------------------------

const projects = defineCollection({
  loader: glob({
    pattern: '{es,en}/*.md',
    base: './src/content/projects',
    // By default a frontmatter `slug` would replace the entry id and break the
    // pairing of translations by file name.
    generateId: idFromPath,
  }),
  schema: ({ image }) =>
    z
      .object({
        slug: z
          .string()
          .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'slug: lowercase words joined by hyphens'),
        kind: z.enum(['company', 'personal']),
        company: text.optional(),
        order: z.number().int().positive(),
        draft: z.boolean().default(false),
        title: text,
        summary: text,
        period,
        role: text,
        platforms: z.array(z.enum(['web', 'mobile', 'ai'])).min(1),
        stack: z.array(skillId).min(1),
        whatItIs: text,
        whatIDid: z.array(text).min(4).max(6),
        whyItMatters: text,
        metrics: z.array(z.object({ value: text, label: text })).optional(),
        cover: z.object({ src: image(), alt: text }),
        links: z.object({ demo: z.url(), repo: z.url() }).optional(),
        gallery: z
          .array(
            z.object({ src: image(), alt: text, type: z.enum(['mobile', 'desktop']) }),
          )
          .optional(),
        howIWork: z.array(text).length(3).optional(),
        uiNote: z.boolean().optional(),
        seo,
      })
      .superRefine((project, ctx) => {
        const fail = (path: string, message: string) =>
          ctx.addIssue({ code: 'custom', path: [path], message });

        if (project.kind === 'company') {
          if (!project.company) fail('company', 'A company project needs `company`');
          // Company code is private: no links, no screenshots, no personal extras.
          for (const field of ['links', 'gallery', 'howIWork', 'uiNote'] as const) {
            if (project[field] !== undefined) {
              fail(field, `A company project may not have \`${field}\``);
            }
          }
        } else {
          if (project.company !== undefined) {
            fail('company', 'Only company projects have `company`');
          }
          if (!project.links) fail('links', 'A personal project needs demo and repo links');
          if (!project.howIWork) fail('howIWork', 'A personal project needs `howIWork`');
        }
      }),
});

// ---------------------------------------------------------------------------
// One YAML file per language: site, experience, more-fleetx
// ---------------------------------------------------------------------------

const perLanguageYaml = (folder: string) =>
  glob({ pattern: '{es,en}.yaml', base: `./src/content/${folder}`, generateId: idFromPath });

const site = defineCollection({
  loader: perLanguageYaml('site'),
  schema: z.object({
    name: text,
    role: text,
    tagline: text,
    highlights: z.array(text).length(3),
    email: z.email(),
    links: z.object({ github: z.url(), linkedin: z.url() }),
    languages: text,
    cv: z.string().regex(/^\/cv\/[a-z0-9-]+\.pdf$/, 'cv: a path under /cv/'),
    seo: z.object({ title: text, description: text }),
    og: z.object({
      image: z.string().regex(/^\/og\/[a-z0-9-]+\.(png|jpg)$/, 'og.image: a path under /og/'),
      alt: text,
    }),
  }),
});

const experience = defineCollection({
  loader: perLanguageYaml('experience'),
  schema: z.object({
    jobs: z
      .array(
        z.object({
          title: text,
          company: text,
          location: text,
          period,
          summary: text,
          bullets: z.array(text).max(3).default([]),
        }),
      )
      .min(1),
    education: z
      .array(
        z.object({
          title: text,
          school: text,
          location: text.optional(),
          years: z.object({ start: z.number().int(), end: z.number().int() }),
        }),
      )
      .min(1),
  }),
});

const moreFleetx = defineCollection({
  loader: perLanguageYaml('more-fleetx'),
  schema: z.object({
    mentions: z
      .array(z.object({ title: text, period, text, stack: z.array(skillId).min(1) }))
      .length(2),
    lines: z.array(z.object({ title: text, text })).length(6),
  }),
});

// ---------------------------------------------------------------------------
// Shared skills and legal pages
// ---------------------------------------------------------------------------

const skills = defineCollection({
  loader: file(SKILLS_FILE),
  schema: z.object({
    order: z.number().int().positive(),
    items: z.array(z.object({ id: z.string(), name: text })).min(1),
  }),
});

const legal = defineCollection({
  loader: glob({ pattern: '{es,en}/*.md', base: './src/content/legal', generateId: idFromPath }),
  schema: z.object({
    title: text,
    updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'updated: YYYY-MM-DD'),
    seo: z.object({ title: text.optional(), description: text }),
  }),
});

export const collections = {
  projects,
  site,
  experience,
  'more-fleetx': moreFleetx,
  skills,
  legal,
};
