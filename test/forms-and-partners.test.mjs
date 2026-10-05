import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { validateBusinessEmail, validatePhone } from '../src/utils/validation.js';

test('business email validation rejects malformed numeric and local-only addresses', () => {
  for (const email of ['', '123@123', '123@example.com', 'name@localhost', 'name@domain.1']) {
    assert.equal(validateBusinessEmail(email), false, email);
  }
  assert.equal(validateBusinessEmail('person@company.com'), true);
  assert.equal(validateBusinessEmail('sales@vyntiq.co.in'), true);
});

test('phone validation is optional but rejects alphabetic and implausibly short values', () => {
  for (const phone of ['', '+91 98765 43210', '(011) 4123-4567']) {
    assert.equal(validatePhone(phone), true, phone);
  }
  assert.equal(validatePhone('call-me'), false);
  assert.equal(validatePhone('123'), false);
});

test('active partner and contact paths use partnership language without WhatsApp or empanelment', async () => {
  const files = await Promise.all([
    '../src/components/PartnerSection.jsx',
    '../src/components/PartnerModal.jsx',
    '../src/components/ContactModal.jsx',
    '../src/services/formService.js',
  ].map((path) => readFile(new URL(path, import.meta.url), 'utf8')));
  const source = files.join('\n');

  assert.match(source, /submitPartnerInquiry/);
  assert.doesNotMatch(source, /OEM Empanelment|OEM_EMPANELMENT|submitOemApplication|WhatsApp|wa\.me/i);
});
