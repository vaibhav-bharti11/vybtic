import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { productsData } from '../../src/data/productsData.js';
import { aboutData } from '../../src/data/aboutData.js';
import { contactChannels } from '../../src/data/siteContent.js';

test('the cinematic build retains every original product, founder and company record', async () => {
  const migrated = JSON.parse(await readFile(new URL('../src/site-data.json', import.meta.url), 'utf8'));
  assert.deepEqual(migrated, { products: productsData, about: aboutData, contact: contactChannels });
  const paths = new Set([...productsData.map(product => product.image), ...aboutData.leadership.map(leader => leader.image)]);
  for (const image of paths) {
    const source = await readFile(new URL(`../../public${image}`, import.meta.url));
    const copy = await readFile(new URL(`../public${image}`, import.meta.url));
    assert.deepEqual(copy, source, `Artwork mismatch: ${image}`);
  }
});
