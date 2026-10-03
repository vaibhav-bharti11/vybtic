import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const [html, css, tailwind, hero, bentoGrid] = await Promise.all([
  readFile(new URL('../index.html', import.meta.url), 'utf8'),
  readFile(new URL('../src/index.css', import.meta.url), 'utf8'),
  readFile(new URL('../tailwind.config.js', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/Hero.jsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/BentoGrid.jsx', import.meta.url), 'utf8'),
]);

test('the site uses one premium Commissioner typography system', () => {
  assert.match(html, /family=Commissioner/);
  assert.doesNotMatch(html, /Instrument\+Serif|Outfit|Plus\+Jakarta\+Sans|family=Inter/);
  assert.doesNotMatch(html, /style="font-family:/);
  assert.match(tailwind, /sans:\s*\['Commissioner'/);
  assert.match(css, /--font-brand:\s*'Commissioner'/);
  assert.match(css, /font-optical-sizing:\s*auto/);
  assert.match(css, /text-wrap:\s*balance/);
  assert.doesNotMatch(bentoGrid, /family:\s*['\"]Inter['\"]/);
  assert.match(bentoGrid, /family:\s*['\"]Commissioner['\"]/);
});

test('the hero uses solid typographic emphasis instead of AI-generic display effects', () => {
  assert.doesNotMatch(hero, /font-serif|bg-clip-text|text-transparent/);
  assert.match(hero, /text-blue-200/);
});
