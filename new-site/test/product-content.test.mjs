import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const copy = JSON.parse(await readFile(new URL('../src/product-content.json', import.meta.url), 'utf8'));
const content = await readFile(new URL('../src/content.ts', import.meta.url), 'utf8');
const pages = await readFile(new URL('../src/pages.ts', import.meta.url), 'utf8');
const order = ['credanta', 'dpdp-shield', 'vulcan', 'cop-ai', 'cctv-investigation-workbench', 'crucible', 'mukeradb'];

test('products are listed in the approved write-up order', () => {
  assert.deepEqual(Object.keys(copy), order);
  const declared = content.match(/productOrder = \[([^\]]+)\]/)[1].match(/'([^']+)'/g).map(item => item.slice(1, -1));
  assert.deepEqual(declared, order);
});

test('every product has the same sections in the same shape', () => {
  for (const [id, product] of Object.entries(copy)) {
    assert.deepEqual(Object.keys(product), ['name', 'tagline', 'problem', 'solution', 'why', 'useCases', 'benefits'], id);
    assert.ok(product.problem.headline && product.problem.points.length >= 4, `${id} problem`);
    assert.ok(product.solution.headline && product.solution.summary && product.solution.flow.length >= 5, `${id} solution`);
    assert.ok(product.why.length >= 4 && product.why.every(item => item.title && item.text), `${id} why`);
    assert.ok(product.useCases.length >= 5, `${id} use cases`);
    assert.ok(product.benefits.headline && product.benefits.points.length >= 5, `${id} benefits`);
  }
});

test('product pages never disclose product status', () => {
  assert.doesNotMatch(pages, /Product status|Product concept|Concept illustration|Proposed capabilities/);
  assert.doesNotMatch(JSON.stringify(copy), /envisioned|awaiting|concept|in development|prototype/i);
});
