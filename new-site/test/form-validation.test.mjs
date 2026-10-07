import assert from 'node:assert/strict';
import test from 'node:test';
import { validateEmail, validatePhone, validateName, validateOrganization, validateMessage, validateEnquiry } from '../src/form-validation.js';

const ok = (fn, input) => assert.equal(fn(input).error, '', `expected valid: ${JSON.stringify(input)}`);
const bad = (fn, input) => assert.notEqual(fn(input).error, '', `expected invalid: ${JSON.stringify(input)}`);

test('email accepts real addresses and normalises case and spacing', () => {
  for (const e of ['a@b.co', 'first.last@company.com', 'user+tag@sub.domain.co.in', "o'brien@firm.org", 'x_y-z@my-company.io', '  Jalaj@Jenesis.COM  ']) ok(validateEmail, e);
  assert.equal(validateEmail('  Jalaj@Jenesis.COM ').value, 'jalaj@jenesis.com');
});

test('email rejects malformed addresses', () => {
  const longLabel = 'x'.repeat(64);
  for (const e of ['', 'plain', 'a@b', 'a@b.', '@b.com', 'a@.com', 'a@b..com', '.a@b.com', 'a.@b.com', 'a..b@c.com', 'a b@c.com', 'a@b c.com', 'a@@b.com', 'a@b.c', 'a@-b.com', 'a@b-.com', 'a@b.com.', 'a@b_c.com', 'a@b.c0m', `${'x'.repeat(65)}@b.com`, `a@${longLabel}.com`, 'a@b.com\n x', 'a,b@c.com', '<a>@b.com']) bad(validateEmail, e);
});

test('phone is optional and accepts common formats', () => {
  for (const p of ['', '   ', '9876543210', '+91 98765 43210', '+91-98765-43210', '(011) 2345 6789', '+1 (415) 555-0132', '+44 20 7946 0958', '020.7946.0958', '+971501234567']) ok(validatePhone, p);
  assert.equal(validatePhone('+91 98765 43210').value, '+919876543210');
  assert.equal(validatePhone('(011) 2345 6789').value, '01123456789');
});

test('phone rejects letters, bad lengths, misplaced plus and fake numbers', () => {
  for (const p of ['abc', '98765abc10', '123456', '+', '1234567890123456', '9876-543-21x', '98+76543210', '++919876543210', '0000000000', '1111111', '+91 12345 67890', '+91 98765', '(011 2345 6789', '98765 43210 ext 5']) bad(validatePhone, p);
});

test('name allows international names and rejects digits and symbols', () => {
  for (const n of ['Al', 'Atul Jain', "Mary-Jane O'Neil", 'José Ñúñez', 'Dr. A. P. J. Kalam', 'Zoë  Brontë', '陈大文', 'राहुल शर्मा']) ok(validateName, n);
  for (const n of ['', 'A', 'John3', '12345', 'Bob<script>', 'a@b', '---', '. .', 'x'.repeat(81)]) bad(validateName, n);
});

test('organization allows normal company names and rejects markup', () => {
  for (const o of ['IBM', 'Jenesis Global', 'L&T Technology Services', 'A.B.C. (India) Pvt. Ltd.', '3M India', 'Tata Consultancy Services, Ltd']) ok(validateOrganization, o);
  for (const o of ['', 'X', '<b>Acme</b>', '!!!', '-Acme', 'a'.repeat(101)]) bad(validateOrganization, o);
});

test('message needs real content within limits', () => {
  ok(validateMessage, 'We would like a demo of Vulcan.');
  for (const m of ['', '   ', 'short', '1234567890', 'x'.repeat(2001)]) bad(validateMessage, m);
  assert.equal(validateMessage('  hello there friend \r\n').value, 'hello there friend');
});

test('validateEnquiry returns cleaned values and per-field errors', () => {
  const opts = { enquiryTypes: ['General Business Enquiry', 'Request a Demo & Technical Pilot'], products: ['Vulcan'] };
  const good = validateEnquiry({ name: ' Atul  Jain ', organization: 'Vyntiq', email: 'Atul@Vyntiq.com', phone: '', enquiryType: 'General Business Enquiry', selectedProduct: '', message: 'Please share a demo.' }, opts);
  assert.equal(good.valid, true);
  assert.equal(good.values.name, 'Atul Jain');
  assert.equal(good.values.email, 'atul@vyntiq.com');
  const worse = validateEnquiry({ name: '1', organization: '', email: 'nope', phone: 'abc', enquiryType: 'Hacked', selectedProduct: 'Nope', message: '' }, opts);
  assert.deepEqual(Object.keys(worse.errors).sort(), ['email', 'enquiryType', 'message', 'name', 'organization', 'phone', 'selectedProduct']);
});
