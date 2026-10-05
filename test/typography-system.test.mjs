import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const [html, css, tailwind] = await Promise.all([
  readFile(new URL('../index.html', import.meta.url), 'utf8'),
  readFile(new URL('../src/index.css', import.meta.url), 'utf8'),
  readFile(new URL('../tailwind.config.js', import.meta.url), 'utf8'),
]);

test('the site uses the approved Jost and Work Sans typography', () => {
  assert.match(html, /family=Jost:wght@300\.\.600&family=Work\+Sans:wght@400\.\.600/);
  assert.doesNotMatch(html, /Commissioner/);
  assert.match(css, /--font-heading:\s*'Jost'/);
  assert.match(css, /--font-body:\s*'Work Sans'/);
  assert.match(tailwind, /heading:\s*\['Jost'/);
  assert.match(tailwind, /sans:\s*\['Work Sans'/);
});

test('the brand tokens match the supplied logo direction', () => {
  assert.match(css, /--color-charcoal:\s*#1b1f23/i);
  assert.match(css, /--color-signal-blue:\s*#2f6feb/i);
  assert.match(css, /--color-paper:\s*#eceef1/i);
  assert.match(css, /--color-silver:\s*#c9cdd2/i);
});
