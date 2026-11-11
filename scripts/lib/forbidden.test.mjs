// Tests for forbidden-term matching. Every term here is invented: never use
// a term from the real list in tests, examples or comments.
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { buildTermRegExp, findMatchingLines, parseTermList } from './forbidden.mjs';

const matches = (term, text) => buildTermRegExp(term).test(text);

describe('parseTermList', () => {
  it('skips blank lines and # comments and trims spaces', () => {
    assert.deepEqual(parseTermList('# comment\n\n  Zorblat  \nQux-\r\n#other\n'), [
      'Zorblat',
      'Qux-',
    ]);
  });
});

describe('buildTermRegExp', () => {
  it('ignores case', () => {
    assert.ok(matches('zorblat', 'Built by ZORBLAT last year'));
  });

  it('matches a term with accents as a whole word', () => {
    assert.ok(matches('Peñón', 'Ruta hasta el peñón, sin paradas'));
    assert.ok(matches('Peñón', 'PEÑÓN'));
  });

  it('does not match a short term inside a longer word', () => {
    assert.ok(!matches('ana', 'una banana madura'));
    assert.ok(!matches('ana', 'Anaconda'));
    assert.ok(matches('ana', 'Ana, la de soporte'));
  });

  it('treats accented letters, ñ, å, ø and æ as part of a word', () => {
    // With \b, "lag" would match inside each of these.
    assert.ok(!matches('lag', 'lagø'));
    assert.ok(!matches('lag', 'ålag'));
    assert.ok(!matches('lag', 'lagæ'));
    assert.ok(!matches('lag', 'lagñ'));
    assert.ok(!matches('lag', 'élag'));
    assert.ok(matches('lag', 'un lag notable'));
  });

  it('treats digits as part of a word', () => {
    assert.ok(!matches('qux', 'qux2'));
    assert.ok(!matches('qux', '9qux'));
  });

  it('matches a term ending in "-" as a prefix', () => {
    assert.ok(matches('QZ-', 'see QZ-1234 for details'));
    assert.ok(matches('QZ-', 'qz-77'));
    assert.ok(!matches('QZ-', 'AQZ-12'));
    assert.ok(!matches('QZ-', 'QZ 12'));
  });

  it('matches multi-word terms and escapes regex characters', () => {
    assert.ok(matches('Blue Fjord', 'the blue fjord team'));
    assert.ok(matches('a.b', 'version a.b here'));
    assert.ok(!matches('a.b', 'version axb here'));
  });
});

describe('findMatchingLines', () => {
  it('returns 1-based line numbers, once per line', () => {
    const regExps = ['zorblat', 'QZ-'].map(buildTermRegExp);
    const text = 'first line\nzorblat and QZ-9\nnothing\nZorblat again';
    assert.deepEqual(findMatchingLines(text, regExps), [2, 4]);
  });
});
