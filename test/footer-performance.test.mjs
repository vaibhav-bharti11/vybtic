import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const activePaths = [
  '../index.html', '../src/App.jsx', '../src/components/Footer.jsx',
  '../src/components/Header.jsx', '../src/components/Hero.jsx',
  '../src/components/AboutSection.jsx', '../src/components/AboutVyntiqPage.jsx',
  '../src/components/ProductsSection.jsx', '../src/components/ProductDetailPage.jsx',
  '../src/components/PartnerSection.jsx', '../src/components/PartnerModal.jsx',
  '../src/components/ContactModal.jsx', '../src/components/BackgroundLayers.jsx',
  '../src/data/aboutData.js', '../src/data/productsData.js', '../src/services/formService.js',
];
const activeSource = (await Promise.all(activePaths.map((path) => readFile(new URL(path, import.meta.url), 'utf8')))).join('\n');
const footer = await readFile(new URL('../src/components/Footer.jsx', import.meta.url), 'utf8');
const siteContent = await readFile(new URL('../src/data/siteContent.js', import.meta.url), 'utf8');

test('active website source contains no prohibited positioning or fake content', () => {
  assert.doesNotMatch(activeSource, /OEM Empanelment|Track Empanelment|WhatsApp|wa\.me|Engineering Milestones|Request Leadership Meeting/i);
  assert.doesNotMatch(activeSource, /contact@vyntiq\.com|partners@vyntiq\.com|security@vyntiq\.com/i);
});

test('footer contains only approved destinations and contact channels', () => {
  for (const label of ['About Vyntiq', 'Products', 'Partners', 'Request a Demo']) assert.match(footer, new RegExp(label));
  for (const key of ['general', 'contact', 'sales']) assert.match(footer, new RegExp(`contactChannels\\.${key}`));
  for (const email of ['info@vyntiq.co.in', 'contact@vyntiq.co.in', 'sales@vyntiq.co.in']) assert.match(siteContent, new RegExp(email.replaceAll('.', '\\.')));
  assert.doesNotMatch(footer, /Twitter|GitHub|Roadmap|Milestone|Privacy Policy|Portal/i);
});

test('the animated background initializes without polling', () => {
  assert.match(activeSource, /UnicornStudio\?\.init/);
  assert.doesNotMatch(activeSource, /setInterval\(/);
});
