// Forbidden-term matching (plan, section 8, check 5).
//
// - Case-insensitive.
// - Whole words only. Word boundaries are built with \p{L} and \p{N} and the
//   `u` flag instead of \b, because \b treats accented letters, ñ, å, ø and æ
//   as non-word characters and would match a short term inside a longer word.
// - A term ending in "-" is a prefix: "AB-" matches "AB-1234".
// - Results carry only the line number, never the matched term.

const LETTER_OR_DIGIT = '[\\p{L}\\p{N}]';

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Terms from the list file: one per line, `#` starts a comment line. */
export function parseTermList(text) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line !== '' && !line.startsWith('#'));
}

/** RegExp for one term, following the rules above. */
export function buildTermRegExp(term) {
  const isPrefix = term.endsWith('-');
  const body = escapeRegExp(term);
  const before = `(?<!${LETTER_OR_DIGIT})`;
  const after = isPrefix ? '' : `(?!${LETTER_OR_DIGIT})`;
  return new RegExp(`${before}${body}${after}`, 'iu');
}

/**
 * 1-based line numbers of `text` where any term matches (one entry per line,
 * however many terms match on it).
 */
export function findMatchingLines(text, regExps) {
  const lines = [];
  text.split(/\r?\n/).forEach((line, index) => {
    if (regExps.some((re) => re.test(line))) lines.push(index + 1);
  });
  return lines;
}
