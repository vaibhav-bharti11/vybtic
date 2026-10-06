import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('missing-copy products have separate concept copy and dedicated artwork', async () => {
  const drafts = JSON.parse(await readFile(new URL('../src/product-drafts.json', import.meta.url), 'utf8'));
  assert.deepEqual(Object.keys(drafts).sort(), ['credanta', 'crucible', 'mukeradb']);
  for (const draft of Object.values(drafts)) {
    assert.match(draft.description, /envisioned/);
    assert.match(draft.status, /Product concept/);
    assert.ok(draft.features.length > 0);
    assert.doesNotMatch(draft.image, /logo/);
    assert.ok((await readFile(new URL(`../public${draft.image}`, import.meta.url))).length > 0);
  }
  const source = await readFile(new URL('../src/pages.ts', import.meta.url), 'utf8');
  assert.match(source, /logo-transparent\.png/);
  assert.doesNotMatch(source, /logo-emblem|brand-art/);
});
