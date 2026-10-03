# Google Sheets Webhook Integration for Vyntiq

The Vyntiq platform includes automatic dual-layer syncing for all form inquiries (Demo requests, Tender inquiries, and OEM Empanelment applications).

---

## 30-Second Google Sheets Setup Guide

### 1. Create Your Google Sheet
1. Open a new Google Sheet at **[sheets.new](https://sheets.new)**
2. In **Row 1**, set up the following header columns:
   - **Column A:** `Timestamp`
   - **Column B:** `Full Name / Contact Person`
   - **Column C:** `Work Email`
   - **Column D:** `Phone Number`
   - **Column E:** `Organization / Company`
   - **Column F:** `Solution / Track Interest`
   - **Column G:** `Enquiry Category / Scale`
   - **Column H:** `Notes & Project Scope`
   - **Column I:** `Submitted Date & Time`

---

### 2. Add Google Apps Script
1. In your Google Sheet, click on **Extensions** > **Apps Script**.
2. Replace all code in the editor with this script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.fullName || '',
      data.email || '',
      data.phone || '',
      data.organization || '',
      data.solutionInterest || '',
      data.deploymentModel || '',
      data.notes || '',
      data.submittedAt || ''
    ]);

    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

### 3. Deploy Web App
1. Click **Deploy** (top right) > **New deployment**
2. Select type: **Web app** (gear icon)
3. Set **Execute as:** `Me`
4. Set **Who has access:** `Anyone` *(Crucial so the website can submit without login prompt)*
5. Click **Deploy** and copy your **Web app URL** (`https://script.google.com/macros/s/.../exec`)

---

### 4. Connect to Vyntiq Website
Add your Web App URL in your `.env` file or configure it through [`src/services/formService.js`](src/services/formService.js):

In `.env`:
```env
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

*(Note: All submissions are also automatically backed up locally in browser storage under `vyntiq_inquiries` and `vyntiq_oem_applications` as a resilient fail-safe).*
