# Google Sheets enquiries

The redesigned contact and partnership forms submit to a sheet-bound Apps Script web app. Receipt is shown only when the response confirms `result: success`. Failed submissions retain the form and offer an email fallback.

## Spreadsheet columns

Create the following nine columns in row 1:

1. Timestamp
2. Full Name / Contact Person
3. Work Email
4. Phone Number
5. Organization / Company
6. Solution / Track Interest
7. Enquiry Category / Scale
8. Notes & Project Scope
9. Submitted Date & Time

## Apps Script deployment

From the enquiry spreadsheet, open Extensions > Apps Script. Copy [Code.gs](scripts/google-sheets/Code.gs) into the editor and save. The script is restricted to its bound spreadsheet with `@OnlyCurrentDoc`, validates required fields and writes plain text to prevent submitted values from becoming spreadsheet formulas.

Deploy as a Web app, execute as Me, and allow Anyone to submit. The spreadsheet itself remains private. Copy the web app URL ending in `/exec`.

Set `VITE_GOOGLE_SHEETS_URL` in the repository root `.env.local` and in the hosting platform's build environment. Restart the development server after changing it and rebuild production. The root and new-site Vite commands both load environment variables from the repository root.

## Verification

Submit a clearly labelled test enquiry from both `/contact` and `/partners`, confirm receipt in the website, and verify the rows in the sheet. A successful opaque `no-cors` request alone is not proof that Google accepted a row. The website uses a readable response and never treats a rejected request as success.

Run `npm test` for field mapping and error handling coverage, and `npm run build` for the production build. Local browser backups retain up to 100 entries under `vyntiq_inquiries` and `vyntiq_partner_inquiries`; these backups are independent of confirmed delivery to Google Sheets.
