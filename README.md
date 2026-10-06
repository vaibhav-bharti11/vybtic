# Vyntiq

The redesigned website in `new-site/` is the default application. Root commands build this site, including the cinematic background, product routes, updated About page and enquiry forms.

## Run and deploy

```sh
npm ci
npm run dev
npm test
npm run build
```

Publish `dist/` from the repository root. The build command is `npm run build`; no custom base directory is required. Configure your host to serve `index.html` for application routes such as `/about` and `/products/vulcan`.

The verified public enquiry endpoint is configured in `.env.production`. For local development, copy `.env.example` to `.env.local` and use that endpoint. Hosting platforms may override `VITE_GOOGLE_SHEETS_URL`; remove stale overrides or update them to match `.env.production`. Local environment files are excluded from Git. The deployed endpoint is a public URL, not a credential.

Contact and partnership forms submit the existing nine-column payload to Google Sheets. They display success only after the endpoint confirms `result: success`; network errors and rejected submissions retain the entered details and offer an email fallback. See `GOOGLE_SHEETS_SETUP.md` for deployment instructions.

The previous React source remains as the migration reference for original company and product records. It is not the deployed application. `new-site/scripts/sync-content.mjs` refreshes those records when needed.
