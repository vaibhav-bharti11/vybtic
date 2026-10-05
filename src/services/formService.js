const SHEETS_WEBHOOK = import.meta.env.VITE_GOOGLE_SHEETS_URL || '';

function persist(key, submission) {
  try {
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    localStorage.setItem(key, JSON.stringify([submission, ...existing]));
  } catch (error) {
    console.warn('Local form storage unavailable:', error);
  }
}

async function syncToSheets(payload) {
  if (!SHEETS_WEBHOOK || SHEETS_WEBHOOK.includes('REPLACE_WITH_YOUR')) return;

  try {
    await fetch(SHEETS_WEBHOOK, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.warn('Google Sheets sync unavailable:', error);
  }
}

function withSubmissionMetadata(formData, type) {
  const submittedAt = new Date().toLocaleString();
  return {
    ...formData,
    type,
    timestamp: new Date().toISOString(),
    submittedAt,
  };
}

export async function submitInquiry(formData) {
  const submission = withSubmissionMetadata(formData, 'BUSINESS_INQUIRY');
  persist('vyntiq_inquiries', submission);
  await syncToSheets({
    fullName: formData.name || '',
    email: formData.email || '',
    phone: formData.phone || '',
    organization: formData.organization || '',
    solutionInterest: formData.selectedProduct || '',
    deploymentModel: formData.enquiryType || 'General Business Enquiry',
    notes: formData.message || '',
    submittedAt: submission.submittedAt,
  });
  return { success: true, submission };
}

export async function submitPartnerInquiry(formData) {
  const submission = withSubmissionMetadata(formData, 'PARTNER_INQUIRY');
  persist('vyntiq_partner_inquiries', submission);
  await syncToSheets({
    fullName: formData.name || '',
    email: formData.email || '',
    phone: formData.phone || '',
    organization: formData.organization || '',
    solutionInterest: formData.partnershipType || 'Technology partnership',
    deploymentModel: 'Partnership enquiry',
    notes: formData.message || '',
    submittedAt: submission.submittedAt,
  });
  return { success: true, submission };
}
