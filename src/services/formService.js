/**
 * Vyntiq Enterprise Form & Google Sheets Submission Service
 * Handles dual-storage: local resilient cache + Google Sheets webhook sync
 */

const DEFAULT_SHEETS_WEBHOOK = import.meta.env.VITE_GOOGLE_SHEETS_URL || "";

/**
 * Submit general business or product demo enquiry
 */
export async function submitInquiry(formData) {
  const submission = {
    ...formData,
    type: 'BUSINESS_INQUIRY',
    timestamp: new Date().toISOString(),
    submittedAt: new Date().toLocaleString()
  };

  // 1. Resilient Local Storage Persistence
  try {
    const existing = JSON.parse(localStorage.getItem('vyntiq_inquiries') || '[]');
    existing.unshift(submission);
    localStorage.setItem('vyntiq_inquiries', JSON.stringify(existing));
  } catch (err) {
    console.warn('LocalStorage save error:', err);
  }

  // 2. Google Sheets Webhook Sync
  if (DEFAULT_SHEETS_WEBHOOK && !DEFAULT_SHEETS_WEBHOOK.includes('REPLACE_WITH_YOUR')) {
    try {
      await fetch(DEFAULT_SHEETS_WEBHOOK, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name || '',
          email: formData.email || '',
          phone: formData.phone || '',
          organization: formData.organization || '',
          solutionInterest: formData.selectedProduct || '',
          deploymentModel: formData.enquiryType || 'General Business Enquiry',
          notes: formData.message || '',
          submittedAt: submission.submittedAt
        })
      });
    } catch (err) {
      console.warn('Google Sheets sync error:', err);
    }
  }

  return { success: true, submission };
}

/**
 * Submit OEM & Partner Empanelment Application
 */
export async function submitOemApplication(formData) {
  const refId = `VYNTIQ-OEM-${Math.floor(1000 + Math.random() * 9000)}`;
  const submission = {
    ...formData,
    refId,
    type: 'OEM_EMPANELMENT',
    statusStage: 1,
    timestamp: new Date().toISOString(),
    submittedAt: new Date().toLocaleString()
  };

  // 1. Resilient Local Storage Persistence
  try {
    const existing = JSON.parse(localStorage.getItem('vyntiq_oem_applications') || '[]');
    existing.unshift(submission);
    localStorage.setItem('vyntiq_oem_applications', JSON.stringify(existing));
  } catch (err) {
    console.warn('LocalStorage save error:', err);
  }

  // 2. Google Sheets Webhook Sync
  if (DEFAULT_SHEETS_WEBHOOK && !DEFAULT_SHEETS_WEBHOOK.includes('REPLACE_WITH_YOUR')) {
    try {
      await fetch(DEFAULT_SHEETS_WEBHOOK, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.contactPerson || '',
          email: formData.workEmail || '',
          phone: formData.phone || '',
          organization: formData.companyName || '',
          solutionInterest: `OEM: ${formData.partnerTrack || ''} (${formData.hardwareArch || ''})`,
          deploymentModel: `Scale: ${formData.deviceVolume || ''} | Ref: ${refId}`,
          notes: `NDA: ${formData.ndaRequired ? 'Yes' : 'No'} | Details: ${formData.partnershipNotes || ''}`,
          submittedAt: submission.submittedAt
        })
      });
    } catch (err) {
      console.warn('Google Sheets OEM sync error:', err);
    }
  }

  return { success: true, refId, submission };
}
