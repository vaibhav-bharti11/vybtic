import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const source = await readFile(
  new URL('../src/components/ExploreModal.jsx', import.meta.url),
  'utf8',
);

test('ExploreModal routes submissions through the shared form service', () => {
  assert.match(
    source,
    /import\s+\{\s*submitInquiry\s*\}\s+from\s+['"]\.\.\/services\/formService['"]/,
  );
  assert.match(source, /await\s+submitInquiry\(formData\)/);
  assert.doesNotMatch(source, /script\.google\.com\/macros/);
  assert.doesNotMatch(source, /localStorage\.(?:getItem|setItem)/);
});
