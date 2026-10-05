import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { productsData } from '../src/data/productsData.js';
import { aboutData } from '../src/data/aboutData.js';

const expectedProducts = [
  'Credanta — Certificate Lifecycle Management',
  'DPDP Shield',
  'CopAI',
  'Crucible',
  'Vulcan',
  'CCTV Investigation Workbench',
  'MukeraDB',
];

test('the catalogue contains exactly the seven client-approved products', () => {
  assert.deepEqual(productsData.map(({ name }) => name), expectedProducts);
});

test('missing product copy is disclosed instead of invented', () => {
  for (const id of ['credanta', 'crucible', 'mukeradb']) {
    const product = productsData.find((item) => item.id === id);
    assert.equal(product.description, 'Product overview pending approved copy.');
    assert.deepEqual(product.features, []);
  }
});

test('Vulcan status mirrors the brochure', () => {
  const vulcan = productsData.find((item) => item.id === 'vulcan');
  assert.match(vulcan.status, /Decision core in service/);
  assert.match(vulcan.status, /console prototype/);
  assert.match(vulcan.status, /in development/);
  assert.doesNotMatch(vulcan.description, /guarantee|production-ready|industry-leading/i);
});

test('About, mission, vision and leadership use supplied client copy', () => {
  assert.match(aboutData.company.overview, /^Vyntiq is an AI-first technology company/);
  assert.match(aboutData.visionMission.vision.statement, /^To build technology that is intelligent, trusted and impactful/);
  assert.match(aboutData.visionMission.mission.statement, /^Our focus is on creating technology products and solutions/);
  assert.deepEqual(aboutData.leadership.map(({ role }) => role), [
    'Co-Founder & Director',
    'Co-Founder & Director',
  ]);
  assert.equal('milestones' in aboutData, false);
});

test('removed catalogue and positioning terms are absent from active data', async () => {
  const source = await readFile(new URL('../src/data/productsData.js', import.meta.url), 'utf8');
  assert.doesNotMatch(source, /HRMS|Upcoming Vyntiq Technology Solutions|Contract Lifecycle Management|OEM Empanelment/i);
});

test('the legacy About renderer tolerates the approved data shape without milestones', async () => {
  const source = await readFile(new URL('../src/components/AboutVyntiqPage.jsx', import.meta.url), 'utf8');
  assert.match(source, /\(aboutData\.milestones \|\| \[\]\)\.map/);
});

test('the active homepage removes noisy and unapproved sections', async () => {
  const app = await readFile(new URL('../src/App.jsx', import.meta.url), 'utf8');
  for (const removed of ['BentoGrid', 'TestimonialsMarquee', 'ForensicsTelemetry', 'ComparisonSection', 'WhatsAppCTA']) {
    assert.doesNotMatch(app, new RegExp(removed));
  }
});

test('product details explicitly support products with no approved features', async () => {
  const detail = await readFile(new URL('../src/components/ProductDetailPage.jsx', import.meta.url), 'utf8');
  assert.match(detail, /product\.features\.length/);
  assert.match(detail, /Product overview pending approved copy/);
});
