import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import test from 'node:test';

test('the extracted film has a contiguous complete sequence at both resolutions', async () => {
  const manifest = JSON.parse(await readFile(new URL('../src/bubble-sequence.json', import.meta.url), 'utf8'));
  assert.equal(manifest.frameCount, manifest.fps * manifest.durationSeconds);
  for (const variant of ['desktop', 'mobile']) {
    const directory = new URL(`../public/assets/bubble-sequence/${variant}/`, import.meta.url);
    const frames = (await readdir(directory)).filter(name => name.endsWith('.webp')).sort();
    assert.equal(frames.length, manifest.frameCount);
    for (let index = 0; index < frames.length; index++) {
      assert.equal(frames[index], `frame-${String(index + 1).padStart(4, '0')}.webp`);
      const bytes = await readFile(new URL(frames[index], directory));
      assert.equal(bytes.subarray(0, 4).toString(), 'RIFF');
      assert.equal(bytes.subarray(8, 12).toString(), 'WEBP');
    }
  }
});
