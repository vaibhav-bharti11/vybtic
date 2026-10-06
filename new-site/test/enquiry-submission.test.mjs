import assert from 'node:assert/strict';
import test from 'node:test';
import { submitEnquiry } from '../src/form-service.js';

const endpoint = 'https://script.google.com/macros/s/test/exec';
const enquiry = { name: 'Test Person', email: 'test@example.com', organization: 'Test Company', selectedProduct: 'Vulcan', enquiryType: 'Request a Demo', message: 'Test enquiry' };

test('business enquiries reach Sheets with the existing column mapping', async () => {
  let sent;
  await submitEnquiry(enquiry, endpoint, false, async (url, options) => {
    sent = { url, options, payload: JSON.parse(options.body) };
    return { ok: true, json: async () => ({ result: 'success' }) };
  });
  assert.equal(sent.url, endpoint);
  assert.equal(sent.options.method, 'POST');
  assert.equal(sent.options.headers['Content-Type'], 'text/plain;charset=utf-8');
  assert.equal(sent.payload.fullName, enquiry.name);
  assert.equal(sent.payload.solutionInterest, 'Vulcan');
  assert.equal(sent.payload.deploymentModel, 'Request a Demo');
  assert.equal(sent.payload.notes, enquiry.message);
  assert.ok(!Number.isNaN(Date.parse(sent.payload.submittedAt)));
});

test('partnership enquiries preserve their partnership area', async () => {
  await submitEnquiry({ ...enquiry, enquiryType: 'Technology integration' }, endpoint, true, async (_, options) => {
    const payload = JSON.parse(options.body);
    assert.equal(payload.solutionInterest, 'Technology integration');
    assert.equal(payload.deploymentModel, 'Partnership enquiry');
    return { ok: true, json: async () => ({ result: 'success' }) };
  });
});

test('missing configuration, server rejection and network failure never report success', async () => {
  await assert.rejects(submitEnquiry(enquiry, ''), /configured/);
  await assert.rejects(submitEnquiry(enquiry, endpoint, false, async () => ({ ok: false, status: 404 })), /404/);
  await assert.rejects(submitEnquiry(enquiry, endpoint, false, async () => ({ ok: true, json: async () => ({ result: 'error' }) })), /confirm/);
  await assert.rejects(submitEnquiry(enquiry, endpoint, false, async () => { throw new Error('Network unavailable'); }), /Network unavailable/);
});
