import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const [app, nav, hero, background, html] = await Promise.all([
  readFile(new URL('../src/App.jsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/ui/navbar-1.jsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/Hero.jsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/BackgroundLayers.jsx', import.meta.url), 'utf8'),
  readFile(new URL('../index.html', import.meta.url), 'utf8'),
]);

test('the navigation uses the approved four destinations and full logo', () => {
  for (const label of ['About Vyntiq', 'Products', 'Partners', 'Request a Demo']) assert.match(nav, new RegExp(label));
  assert.doesNotMatch(nav, /Founders & Leadership|OEM & Partners/);
  assert.match(nav, /logo-full\.png/);
  assert.doesNotMatch(nav, />\s*VYNTIQ\s*</);
});

test('the hero is one focused message with no local calls to action or metric bar', () => {
  assert.match(hero, /AI-first technology company/);
  assert.doesNotMatch(hero, /Sovereign AI Suite|Explore Sovereign Solutions|OEM & Hardware Empanelment|100% Air-Gapped Compute/);
  assert.doesNotMatch(hero, /onPartnerClick|onContactClick/);
});

test('Products navigation can restore home before scrolling', () => {
  assert.match(app, /handleNavigateToProducts/);
  assert.match(app, /setCurrentView\('home'\)/);
  assert.match(app, /getElementById\('products'\)/);
});

test('the background has no Unicorn Studio runtime and supports safe fallbacks', () => {
  assert.doesNotMatch(html + background, /UnicornStudio|unicornstudio\.js|data-us-project/);
  assert.match(background, /externalLinks\.heroVideo/);
  assert.match(background, /prefers-reduced-motion/);
  assert.match(background, /<video/);
});
