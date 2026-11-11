import { getCollection, type CollectionEntry } from 'astro:content';
import { isLang, languages, projectPath, type Alternates, type Lang } from './routes';
import { ui, type UiKey } from './ui';

/** Current language from `Astro.currentLocale`. Fails loudly instead of guessing. */
export function getLang(locale: string | undefined): Lang {
  if (!isLang(locale)) throw new Error(`Unsupported or missing locale: ${String(locale)}`);
  return locale;
}

export const otherLang = (lang: Lang): Lang => (lang === 'es' ? 'en' : 'es');

/** `t('nav.projects')`. Throws on an unknown key: there is no fallback text. */
export function useTranslations(lang: Lang) {
  return (key: UiKey): string => {
    const value = ui[lang][key];
    if (value === undefined) throw new Error(`Missing UI text "${key}" for "${lang}"`);
    return value;
  };
}

// ---------------------------------------------------------------------------
// Dates: stored as `2026-10`, shown per language
// ---------------------------------------------------------------------------

/*
 * Fixed three-letter months instead of Intl: Intl writes September as
 * "sept" / "Sept" while every other month has three letters.
 */
const months: Record<Lang, readonly string[]> = {
  es: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

/** `2026-10` → "oct 2026" (es) / "Oct 2026" (en). */
export function formatYearMonth(value: string, lang: Lang): string {
  const [year, month] = value.split('-');
  const name = months[lang][Number(month) - 1];
  if (!year || !name) throw new Error(`Invalid year-month "${value}": use YYYY-MM`);
  return `${name} ${year}`;
}

/** "oct 2026 – actualidad", "sep 2026 – oct 2026", or a single month. */
export function formatPeriod(period: { start: string; end?: string }, lang: Lang): string {
  const start = formatYearMonth(period.start, lang);
  if (period.end === period.start) return start;
  const end = period.end ? formatYearMonth(period.end, lang) : useTranslations(lang)('date.present');
  return `${start} – ${end}`;
}

// ---------------------------------------------------------------------------
// Projects: translations are paired by file name (`es/x.md` ↔ `en/x.md`)
// ---------------------------------------------------------------------------

export type Project = CollectionEntry<'projects'>;

/** `es/bulk-transport` → `bulk-transport`. */
export const projectKey = (entry: Project) => entry.id.slice(entry.id.indexOf('/') + 1);

/** Published projects of one language, in home-page order (`order`). */
export async function getProjects(lang: Lang): Promise<Project[]> {
  const entries = await getCollection(
    'projects',
    (entry) => entry.id.startsWith(`${lang}/`) && !entry.data.draft,
  );
  return entries.sort(
    (a, b) => a.data.order - b.data.order || a.id.localeCompare(b.id),
  );
}

/** URL of the same project in every language. Fails if a translation is missing. */
export async function getProjectAlternates(entry: Project): Promise<Alternates> {
  const key = projectKey(entry);
  const pairs = await Promise.all(
    languages.map(async (lang) => {
      const [match] = (await getProjects(lang)).filter((p) => projectKey(p) === key);
      if (!match) throw new Error(`Project "${key}" has no published "${lang}" version`);
      return [lang, projectPath(lang, match.data.slug)] as const;
    }),
  );
  return Object.fromEntries(pairs) as Alternates;
}
