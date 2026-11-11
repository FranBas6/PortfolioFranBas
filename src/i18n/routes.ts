/**
 * Route equivalences between languages.
 *
 * Every public URL is built here, so pages, the language switcher, hreflang
 * tags and the sitemap all agree. Keep this file free of `astro:*` imports:
 * it is also loaded by `astro.config.mjs`.
 */

export const languages = ['es', 'en'] as const;
export type Lang = (typeof languages)[number];

/** Language that `x-default` points to. */
export const xDefaultLang: Lang = 'en';

/** Translated path segments. */
export const segments = {
  projects: { es: 'proyectos', en: 'projects' },
  privacy: { es: 'privacidad', en: 'privacy' },
} as const satisfies Record<string, Record<Lang, string>>;

/** Ids of the home-page sections, used as anchors (`/es/#proyectos`). */
export const sections = {
  projects: { es: 'proyectos', en: 'projects' },
  experience: { es: 'experiencia', en: 'experience' },
  skills: { es: 'habilidades', en: 'skills' },
  contact: { es: 'contacto', en: 'contact' },
} as const satisfies Record<string, Record<Lang, string>>;

export type Section = keyof typeof sections;

export const isLang = (value: unknown): value is Lang =>
  typeof value === 'string' && (languages as readonly string[]).includes(value);

export const homePath = (lang: Lang) => `/${lang}/`;

/** Absolute link to a home section, so it also works from project pages. */
export const sectionPath = (lang: Lang, section: Section) =>
  `${homePath(lang)}#${sections[section][lang]}`;

export const projectPath = (lang: Lang, slug: string) =>
  `/${lang}/${segments.projects[lang]}/${slug}/`;

export const privacyPath = (lang: Lang) => `/${lang}/${segments.privacy[lang]}/`;

/** Alternate URLs of one page, keyed by language. */
export type Alternates = Record<Lang, string>;

export const staticAlternates = {
  home: { es: homePath('es'), en: homePath('en') },
  privacy: { es: privacyPath('es'), en: privacyPath('en') },
} satisfies Record<string, Alternates>;
