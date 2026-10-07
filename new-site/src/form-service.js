import { validateEnquiry } from './form-validation.js';

/** @param {Record<string, string>} values */
export async function submitEnquiry(values, endpoint, partnership = false, send = fetch) {
  if (!endpoint || !/^https:\/\/script\.google\.com\/macros\/s\/[^/]+\/exec$/.test(endpoint)) {
    throw new Error('Google Sheets is not configured.');
  }
  const checked = validateEnquiry(values);
  if (!checked.valid) throw new Error(`Invalid enquiry: ${Object.keys(checked.errors).join(', ')}.`);
  values = checked.values;
  const response = await send(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({
      fullName: values.name || '',
      email: values.email || '',
      phone: values.phone || '',
      organization: values.organization || '',
      solutionInterest: partnership ? values.enquiryType : values.selectedProduct || '',
      deploymentModel: partnership ? 'Partnership enquiry' : values.enquiryType || 'General Business Enquiry',
      notes: values.message || '',
      submittedAt: new Date().toISOString(),
    }),
    signal: AbortSignal.timeout(60000),
  });
  if (!response.ok) throw new Error(`Google Sheets returned HTTP ${response.status}.`);
  const result = await response.json();
  if (result.result !== 'success') throw new Error('Google Sheets did not confirm the enquiry.');
}
