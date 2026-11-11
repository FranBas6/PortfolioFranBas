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

const intlLocale: Record<Lang, string> = { es: 'es', en: 'en-GB' };

/** `2026-10` → "oct 2026" (es) / "Oct 2026" (en). */
export function formatYearMonth(value: string, lang: Lang): string {
  const [year, month] = value.split('-').map(Number);
  return new Intl.DateTimeFormat(intlLocale[lang], {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(Date.UTC(year, month - 1, 1));
}

/** "oct 2026 – actualidad", "sep 2026 – oct 2026", or a single month. */
export function formatPeriod(period: { start: string; end?: string }, lang: Lang): string {
  const start = formatYearMonth(period.start, lang);
  if (period.end === period.start) return start;
  const end = period.end ? formatYearMonth(period.end, lang) : useTranslations(lang)('date.present');
  return `${start} – ${end}`;
}

/** `2026-01` → "01/2026", the format used in the CV for the experience. */
export const formatNumericYearMonth = (value: string) => value.split('-').reverse().join('/');

// ---------------------------------------------------------------------------
// Projects: translations are paired by file name (`es/x.md` ↔ `en/x.md`)
// ---------------------------------------------------------------------------

export type Project = CollectionEntry<'projects'>;

/** `es/bulk-transport` → `bulk-transport`. */
export const projectKey = (entry: Project) => entry.id.slice(entry.id.indexOf('/') + 1);

const kindOrder = { company: 0, personal: 1 } as const;

/** Published projects of one language, in home-page order (company first, then `order`). */
export async function getProjects(lang: Lang): Promise<Project[]> {
  const entries = await getCollection(
    'projects',
    (entry) => entry.id.startsWith(`${lang}/`) && !entry.data.draft,
  );
  return entries.sort(
    (a, b) =>
      kindOrder[a.data.kind] - kindOrder[b.data.kind] ||
      a.data.order - b.data.order ||
      a.id.localeCompare(b.id),
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
