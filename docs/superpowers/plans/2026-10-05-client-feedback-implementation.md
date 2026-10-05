# Vyntiq Client Feedback Revision Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Correct the existing Vyntiq website to match the approved client feedback while preserving its dark visual structure and repositioning Vyntiq as an AI-first product company.

**Architecture:** Keep the current React/Vite single-page application and its view-state navigation. Centralize approved brand/contact constants, replace the product and About data with client-approved content, simplify the existing components in place, and extract pure validation functions so forms can be tested without a browser. Remove expensive and unapproved sections from the render path rather than rebuilding the application.

**Tech Stack:** React 18, Vite 5, Tailwind CSS 3, Node.js built-in test runner, existing Iconify/Lucide icons.

**Spec:** `docs/superpowers/specs/2026-10-05-client-feedback-design.md`

## Global Constraints

- Preserve the existing dark composition, responsive structure, rounded panels, and restrained glass effects; this is not a full redesign.
- Use Jost for headings/navigation and Work Sans for body/form text.
- Use logo charcoal `#1B1F23`, signal blue `#2F6FEB`, paper `#ECEEF1`, and brushed silver `#C9CDD2`.
- Primary navigation is exactly `About Vyntiq`, `Products`, `Partners`, and `Request a Demo`.
- Product catalogue is exactly Credanta, DPDP Shield, CopAI, Crucible, Vulcan, CCTV Investigation Workbench, and MukeraDB.
- Do not invent product claims, testimonials, certifications, milestones, customers, performance results, or partnerships.
- Remove OEM empanelment, WhatsApp, fake testimonials, pre-2026 milestones, and resource-heavy Unicorn Studio runtime behavior.
- Use only `info@vyntiq.co.in`, `contact@vyntiq.co.in`, and `sales@vyntiq.co.in` for Vyntiq contact addresses.
- Do not add a dependency unless the existing toolchain cannot satisfy a requirement.
- Preserve unrelated user files and untracked work.

## Review Focus

- Navigation from the About or product-detail view to `Products` must first return home, then scroll after the section exists; Task 3 adds a source contract and Task 7 verifies the behavior in-browser.
- Missing product copy must render a restrained pending-copy state without crashing product details or inventing list items; Tasks 2 and 4 add data and rendering tests.
- Empty/optional phone input must be accepted, alphabetic phone input rejected, and international formatting normalized safely; Task 6 adds unit tests.
- A missing LinkedIn URL or hero video must render no broken external link/video request and must preserve a usable fallback; Tasks 3 and 6 add source tests and Task 7 performs runtime inspection.
- Reduced-motion and mobile users must receive a static background, accessible menu, usable modals, and aligned leader cards; Tasks 3, 5, and 7 cover source and visual verification.

---

## File Structure

### Create

- `src/data/siteContent.js` — approved palette, contact details, navigation labels, and optional external URLs.
- `src/utils/validation.js` — pure email and phone validation helpers.
- `src/components/LinkedInCTA.jsx` — optional LinkedIn floating action that renders only with a verified URL.
- `test/content-contract.test.mjs` — product, About, and prohibited-copy contracts.
- `test/navigation-hero.test.mjs` — navigation, logo, hero, and background contracts.
- `test/forms-and-partners.test.mjs` — validation and partner/contact contracts.
- `test/footer-performance.test.mjs` — footer, external-link, email, and runtime dependency contracts.

### Modify

- `package.json` — add the Node test command.
- `index.html` — load Jost/Work Sans; update metadata; remove Unicorn Studio.
- `tailwind.config.js` — expose the two-font system and brand colors.
- `src/index.css` — apply typography, palette, focus, and reduced-motion rules.
- `src/App.jsx` — simplify the homepage render path and coordinate navigation.
- `src/components/Header.jsx` — pass the Products and Request Demo actions.
- `src/components/ui/navbar-1.jsx` — approved logo lockup and navigation.
- `src/components/Hero.jsx` — one-message hero with no local CTAs or metrics.
- `src/components/BackgroundLayers.jsx` — native optional video/static fallback.
- `src/data/productsData.js` — exact seven-product catalogue.
- `src/components/ProductsSection.jsx` — concise seven-card product display.
- `src/components/ProductDetailPage.jsx` — tolerate pending copy and remove blanket sovereign framing.
- `src/data/aboutData.js` — approved company, mission, vision, leadership, and sector copy.
- `src/components/AboutSection.jsx` — concise homepage About/leadership preview.
- `src/components/AboutVyntiqPage.jsx` — approved About content and aligned leader cards.
- `src/components/PartnerSection.jsx` — product-company partnership invitation.
- `src/components/PartnerModal.jsx` — concise partner enquiry form.
- `src/components/ContactModal.jsx` — concise demo/contact form and approved contact details.
- `src/services/formService.js` — partner inquiry submission semantics.
- `src/components/Footer.jsx` — minimal working footer.
- `test/typography-system.test.mjs` — replace Commissioner expectations with approved fonts.

### Remove from active render path

- `src/components/BentoGrid.jsx`
- `src/components/TestimonialsMarquee.jsx`
- `src/components/ForensicsTelemetry.jsx`
- `src/components/ComparisonSection.jsx`
- `src/components/WhatsAppCTA.jsx`

The files may remain on disk during this revision, but `App.jsx` must no longer import or render them. The global tests ensure their prohibited content is not reachable from active components.

---

### Task 1: Test Harness and Brand Foundation

**Files:**
- Modify: `package.json`
- Modify: `index.html`
- Modify: `tailwind.config.js`
- Modify: `src/index.css`
- Create: `src/data/siteContent.js`
- Modify: `test/typography-system.test.mjs`

**Interfaces:**
- Consumes: none.
- Produces: `brand`, `contactChannels`, `navigationLabels`, and `externalLinks` named exports from `src/data/siteContent.js`.

- [ ] **Step 1: Replace the typography test with a failing approved-brand contract**

```js
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const [html, css, tailwind] = await Promise.all([
  readFile(new URL('../index.html', import.meta.url), 'utf8'),
  readFile(new URL('../src/index.css', import.meta.url), 'utf8'),
  readFile(new URL('../tailwind.config.js', import.meta.url), 'utf8'),
]);

test('the site uses the approved Jost and Work Sans typography', () => {
  assert.match(html, /family=Jost:wght@300\.\.600&family=Work\+Sans:wght@400\.\.600/);
  assert.doesNotMatch(html, /Commissioner/);
  assert.match(css, /--font-heading:\s*'Jost'/);
  assert.match(css, /--font-body:\s*'Work Sans'/);
  assert.match(tailwind, /heading:\s*\['Jost'/);
  assert.match(tailwind, /sans:\s*\['Work Sans'/);
});

test('the brand tokens match the supplied logo direction', () => {
  assert.match(css, /--color-charcoal:\s*#1b1f23/i);
  assert.match(css, /--color-signal-blue:\s*#2f6feb/i);
  assert.match(css, /--color-paper:\s*#eceef1/i);
  assert.match(css, /--color-silver:\s*#c9cdd2/i);
});
```

- [ ] **Step 2: Run the test and verify it fails on Commissioner**

Run: `npm test -- test/typography-system.test.mjs`  
Expected: FAIL because Jost, Work Sans, and the brand tokens are not configured.

- [ ] **Step 3: Add the test command and approved shared content constants**

Add to `package.json` scripts:

```json
"test": "node --test test/*.test.mjs"
```

Create `src/data/siteContent.js`:

```js
export const brand = {
  charcoal: '#1B1F23',
  signalBlue: '#2F6FEB',
  paper: '#ECEEF1',
  silver: '#C9CDD2',
};

export const navigationLabels = [
  'About Vyntiq',
  'Products',
  'Partners',
  'Request a Demo',
];

export const contactChannels = {
  general: 'info@vyntiq.co.in',
  contact: 'contact@vyntiq.co.in',
  sales: 'sales@vyntiq.co.in',
};

export const externalLinks = {
  linkedin: '',
  heroVideo: import.meta.env.VITE_HERO_VIDEO_URL?.trim() || '',
};
```

- [ ] **Step 4: Implement the font and palette foundation**

Update `index.html` to load both approved families and use product-company metadata:

```html
<title>Vyntiq — Intelligent Technology Products</title>
<meta name="description" content="Vyntiq is an AI-first technology company building intelligent, trusted products and solutions for enterprises, governments and institutions.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@300..600&family=Work+Sans:wght@400..600&display=swap" rel="stylesheet">
```

Set Tailwind font families and colors:

```js
extend: {
  fontFamily: {
    heading: ['Jost', 'Segoe UI', 'system-ui', 'sans-serif'],
    sans: ['Work Sans', 'Segoe UI', 'system-ui', 'sans-serif'],
  },
  colors: {
    brand: {
      charcoal: '#1B1F23',
      blue: '#2F6FEB',
      paper: '#ECEEF1',
      silver: '#C9CDD2',
    },
  },
},
```

Replace the root typography tokens in `src/index.css`:

```css
:root {
  --font-heading: 'Jost', 'Segoe UI', system-ui, sans-serif;
  --font-body: 'Work Sans', 'Segoe UI', system-ui, sans-serif;
  --color-charcoal: #1b1f23;
  --color-signal-blue: #2f6feb;
  --color-paper: #eceef1;
  --color-silver: #c9cdd2;
}

html,
body {
  font-family: var(--font-body);
}

h1,
h2,
h3,
h4,
h5,
h6,
nav {
  font-family: var(--font-heading);
}

:focus-visible {
  outline: 2px solid var(--color-signal-blue);
  outline-offset: 3px;
}
```

- [ ] **Step 5: Run the typography test and build**

Run: `npm test -- test/typography-system.test.mjs`  
Expected: PASS.  
Run: `npm run build`  
Expected: PASS.

- [ ] **Step 6: Commit the brand foundation**

```bash
git add package.json index.html tailwind.config.js src/index.css src/data/siteContent.js test/typography-system.test.mjs
git commit -m "feat: align Vyntiq brand typography and palette"
```

---

### Task 2: Approved Content and Product Catalogue

**Files:**
- Modify: `src/data/productsData.js`
- Modify: `src/data/aboutData.js`
- Create: `test/content-contract.test.mjs`

**Interfaces:**
- Consumes: none.
- Produces: `productsData` with stable `id`, `name`, `tagline`, `description`, `features`, `deploymentModel`, and `status` fields; `aboutData` with `company`, `principles`, `visionMission`, `leadership`, and `industryCapabilities` fields.

- [ ] **Step 1: Write the failing content contract**

```js
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
```

- [ ] **Step 2: Run the content test and verify the old eight-product data fails**

Run: `npm test -- test/content-contract.test.mjs`  
Expected: FAIL on product names, milestones, and client-approved copy.

- [ ] **Step 3: Replace the product catalogue with exact, honest entries**

Use these content rules in `productsData.js`:

```js
const pendingCopy = {
  description: 'Product overview pending approved copy.',
  features: [],
  differentiators: [],
  targetCustomers: [],
  useCases: [],
  benefits: [],
  deploymentModel: 'Deployment details pending approved copy.',
  status: 'Product information awaiting client approval.',
};

export const productsData = [
  {
    id: 'credanta',
    name: 'Credanta — Certificate Lifecycle Management',
    tagline: 'Certificate lifecycle management',
    badge: 'Enterprise Product',
    icon: 'solar:document-text-bold-duotone',
    image: '/assets/products/clm.jpg',
    ...pendingCopy,
  },
  {
    id: 'dpdp-shield',
    name: 'DPDP Shield',
    tagline: 'Privacy operations and DPDP compliance',
    badge: 'Privacy Technology',
    icon: 'solar:shield-check-bold-duotone',
    image: '/assets/products/dpdp-shield.jpg',
    description: 'A privacy operations platform designed to help organizations manage consent, data-principal requests, sensitive-data discovery and compliance evidence.',
    features: ['Consent and request workflows', 'Sensitive-data discovery and classification', 'Auditable compliance records'],
    differentiators: [], targetCustomers: [], useCases: [], benefits: [],
    deploymentModel: 'Deployment options are confirmed during product discovery.',
    status: 'Available for product discussions.',
  },
  {
    id: 'cop-ai',
    name: 'CopAI',
    tagline: 'Operational intelligence for public-safety teams',
    badge: 'Applied AI',
    icon: 'solar:shield-user-bold-duotone',
    image: '/assets/products/cop-ai.jpg',
    description: 'An intelligent assistant for public-safety workflows, designed to help teams organize operational information and respond with greater clarity.',
    features: ['Operational information support', 'Incident workflow assistance', 'Controlled deployment options'],
    differentiators: [], targetCustomers: [], useCases: [], benefits: [],
    deploymentModel: 'Deployment is tailored to operational and security requirements.',
    status: 'Available for product discussions.',
  },
  {
    id: 'crucible',
    name: 'Crucible',
    tagline: 'Product details will be published after client approval',
    badge: 'Vyntiq Product',
    icon: 'solar:layers-bold-duotone',
    image: '/assets/products/upcoming-solutions.jpg',
    ...pendingCopy,
  },
  {
    id: 'vulcan',
    name: 'Vulcan',
    tagline: 'One console over every monitoring tool you already run',
    badge: 'Network Operations',
    icon: 'solar:monitor-smartphone-bold-duotone',
    image: '/assets/products/video-analytics.jpg',
    description: 'An indigenous operations layer that reads existing monitoring tools, resolves their signals into one canonical picture and prioritizes what needs attention.',
    features: ['Canonical device and entity resolution', 'Confirmed, deduplicated and grouped alarms', 'Read-only integration with existing monitoring tools'],
    differentiators: ['Deterministic and logged decision pipeline', 'Offline and air-gapped deployment options'],
    targetCustomers: ['Defense and government networks', 'Telecom and broadband operations', 'Critical infrastructure operators'],
    useCases: ['Unified network operations', 'Alarm reduction and incident grouping', 'Multi-source monitoring consolidation'],
    benefits: ['A single operational view across existing tools', 'Transparent reasons for held or escalated alarms'],
    deploymentModel: 'Offline bundle using read-only service accounts, with no required external license, update or model endpoint.',
    status: 'Decision core in service; multi-source console prototype; additional adapters, calibrated model, operator assistant and high availability in development.',
  },
  {
    id: 'cctv-investigation-workbench',
    name: 'CCTV Investigation Workbench',
    tagline: 'Search and organize evidence across CCTV footage',
    badge: 'Video Intelligence',
    icon: 'solar:videocamera-record-bold-duotone',
    image: '/assets/products/video-forensics.jpg',
    description: 'A video-investigation workspace for searching recorded CCTV footage and organizing relevant evidence across multiple camera sources.',
    features: ['Multi-camera search workflows', 'Attribute-based investigation support', 'Evidence review and export controls'],
    differentiators: [], targetCustomers: [], useCases: [], benefits: [],
    deploymentModel: 'Deployment is tailored to the organization and its video infrastructure.',
    status: 'Available for product discussions.',
  },
  {
    id: 'mukeradb',
    name: 'MukeraDB',
    tagline: 'Product details will be published after client approval',
    badge: 'Data Technology',
    icon: 'solar:database-bold-duotone',
    image: '/assets/products/hrms.jpg',
    ...pendingCopy,
  },
];
```

- [ ] **Step 4: Replace About data with the approved copy and simplified sectors**

Replace `aboutData.js` with this focused structure:

```js
export const aboutData = {
  company: {
    name: 'Vyntiq',
    legalName: 'Vyntiq Technologies Private Limited',
    motto: 'Vision · Intelligence · Quality',
    overview: 'Vyntiq is an AI-first technology company building intelligent, high-quality products and solutions that solve real-world problems and create lasting impact.',
    detail: 'We believe the next generation of technology will not simply automate tasks — it will make systems more intelligent, adaptive and effective. At Vyntiq, we bring together AI, data, software engineering and deep technology to build products that are intelligent by design and practical by purpose.',
  },
  principles: [
    { title: 'Vision', description: 'Identify meaningful problems and see where technology can make a lasting difference.' },
    { title: 'Intelligence', description: 'Build smarter, adaptive products grounded in practical purpose.' },
    { title: 'Quality', description: 'Earn trust through efficacy, reliability, security and enduring value.' },
  ],
  visionMission: {
    vision: {
      title: 'Our Vision',
      statement: 'To build technology that is intelligent, trusted and impactful — creating lasting value for the organizations and communities we serve.',
      detail: "We bring the vision to identify meaningful problems, the intelligence to build smarter solutions, and the commitment to quality required to earn lasting trust. We don't build technology simply because it is possible. We build it because it can make a difference.",
    },
    mission: {
      title: 'Our Mission',
      statement: 'Our focus is on creating technology products and solutions that organizations can trust — for their efficacy, reliability, security and quality. We are on a mission to become a trusted technology partner and OEM, building products that deliver meaningful value long after they are deployed.',
      detail: 'We are intentionally not limited to a particular industry or geography. Our technology can serve governments, enterprises and institutions across domains where intelligent solutions can address meaningful challenges. Our journey begins in India, with a global ambition.',
    },
  },
  leadership: [
    {
      name: 'Atul Jain',
      role: 'Co-Founder & Director',
      subtitle: 'Enterprise Technology & AI Transformation Leader',
      image: '/assets/atul-jain.png',
      bio: 'Technology and transformation leader with 15+ years of experience across enterprise technology, software engineering, quality engineering, SaaS platforms and large-scale digital transformation across Airtel Digital, Ultimate Kronos Group (UKG), and Sopra Steria. Has led complex enterprise technology initiatives spanning architectural planning through production operations. At Vyntiq, he drives technology strategy, product strategy and business execution, translating complex business challenges into scalable, dependable technology products and enterprise solutions.',
    },
    {
      name: 'Saiesh Singh',
      role: 'Co-Founder & Director',
      subtitle: 'AI Architecture, Computer Vision & Cybersecurity Leader',
      image: '/assets/saiesh-singh.png',
      bio: 'AI and technology leader with expertise across artificial intelligence, data science, cybersecurity, computer vision and intelligent systems. Has advised law enforcement and public safety organizations on video intelligence systems, turning demanding operational requirements into reliable, air-gapped software architectures. At Vyntiq, he drives AI strategy, product architecture and innovation, translating complex technology opportunities into scalable products and solutions for enterprises, government and institutions.',
    },
  ],
  industryCapabilities: [
    { sector: 'Enterprises & Institutions', badge: 'Enterprise', desc: 'Intelligent products for privacy operations, certificate lifecycle management, data systems and business-critical workflows.' },
    { sector: 'Government & Public Safety', badge: 'Public Sector', desc: 'Applied AI and video-investigation products for organizations managing complex operational information.' },
    { sector: 'Telecom & Critical Infrastructure', badge: 'Operations', desc: 'Vulcan unifies monitoring signals and helps operations teams focus on meaningful incidents.' },
    { sector: 'Cross-Sector Product Innovation', badge: 'Technology', desc: 'AI, data and software products designed around meaningful problems rather than a single industry or geography.' },
  ],
};
```

- [ ] **Step 5: Run content tests**

Run: `npm test -- test/content-contract.test.mjs`  
Expected: PASS.

- [ ] **Step 6: Commit approved content data**

```bash
git add src/data/productsData.js src/data/aboutData.js test/content-contract.test.mjs
git commit -m "feat: replace site content with approved product positioning"
```

---

### Task 3: Navigation, Logo, Hero, and Lightweight Background

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/components/Header.jsx`
- Modify: `src/components/ui/navbar-1.jsx`
- Modify: `src/components/Hero.jsx`
- Modify: `src/components/BackgroundLayers.jsx`
- Modify: `index.html`
- Create: `test/navigation-hero.test.mjs`

**Interfaces:**
- Consumes: `navigationLabels`, `externalLinks` from `siteContent.js`; App callbacks `onAboutClick`, `onProductsClick`, `onPartnerClick`, `onRequestDemo`.
- Produces: stable navbar behavior across `home`, `about`, and `product-detail` views; optional native hero video with static fallback.

- [ ] **Step 1: Write the failing navigation and hero source contract**

```js
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const [app, nav, hero, background, html] = await Promise.all([
  readFile(new URL('../src/App.jsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/ui/navbar-1.jsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/Hero.jsx', import.meta.url), 'utf8'),
  readFile(new URL('../src/components/BackgroundLayers.jsx', import.meta.url), 'utf8'),
  readFile(new URL('../index.html', import.meta.url), 'utf8'),
]);

test('the navigation uses the approved four destinations and full logo', () => {
  for (const label of ['About Vyntiq', 'Products', 'Partners', 'Request a Demo']) assert.match(nav, new RegExp(label));
  assert.doesNotMatch(nav, /Founders & Leadership|OEM & Partners/);
  assert.match(nav, /logo-full\.png/);
  assert.doesNotMatch(nav, />\s*VYNTIQ\s*</);
});

test('the hero is one focused message with no local calls to action or metric bar', () => {
  assert.match(hero, /AI-first technology company/);
  assert.doesNotMatch(hero, /Sovereign AI Suite|Explore Sovereign Solutions|OEM & Hardware Empanelment|100% Air-Gapped Compute/);
  assert.doesNotMatch(hero, /onPartnerClick|onContactClick/);
});

test('Products navigation can restore home before scrolling', () => {
  assert.match(app, /handleNavigateToProducts/);
  assert.match(app, /setCurrentView\('home'\)/);
  assert.match(app, /getElementById\('products'\)/);
});

test('the background has no Unicorn Studio runtime and supports safe fallbacks', () => {
  assert.doesNotMatch(html + background, /UnicornStudio|unicornstudio\.js|data-us-project/);
  assert.match(background, /externalLinks\.heroVideo/);
  assert.match(background, /prefers-reduced-motion/);
  assert.match(background, /<video/);
});
```

- [ ] **Step 2: Run the contract and verify it fails on the old navigation and hero**

Run: `npm test -- test/navigation-hero.test.mjs`  
Expected: FAIL on every legacy label and Unicorn Studio reference.

- [ ] **Step 3: Implement cross-view Products navigation in App**

Add:

```js
const handleNavigateToProducts = () => {
  setSelectedProduct(null);
  setCurrentView('home');
  window.setTimeout(() => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  }, 60);
};
```

Pass `onProductsClick={handleNavigateToProducts}` and `onRequestDemo={() => handleRequestDemo('')}` through `Header` into `Navbar1`.

- [ ] **Step 4: Rewrite the navbar around the full lockup**

Render `/assets/logo-full.png` with `alt="Vyntiq — Vision. Intelligence. Quality."` and an uncropped `object-contain` class. Use three standard navigation buttons and one signal-blue request-demo button. Mobile uses the same labels and closes before invoking callbacks. Keep the current sticky rounded navigation shell.

- [ ] **Step 5: Reduce Hero to the approved message**

Use this content and retain the existing hero dimensions/alignment:

```jsx
<h1>Intelligent technology, built to make a difference.</h1>
<p>
  Vyntiq is an AI-first technology company building intelligent, high-quality
  products and solutions that solve real-world problems and create lasting impact.
</p>
```

Do not render hero-local buttons, badges, metrics, or technology pills.

- [ ] **Step 6: Replace the background runtime with an optional native video**

Remove the Unicorn script from `index.html`. Implement:

```jsx
import React, { useEffect, useState } from 'react';
import { externalLinks } from '../data/siteContent';

export default function BackgroundLayers() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  const showVideo = externalLinks.heroVideo && !reduceMotion;

  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#1B1F23]">
      {showVideo && (
        <video className="h-full w-full object-cover opacity-25" autoPlay muted loop playsInline preload="metadata">
          <source src={externalLinks.heroVideo} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_10%,rgba(47,111,235,0.15),transparent_42%),linear-gradient(to_bottom,rgba(27,31,35,0.2),#090a0b_85%)]" />
    </div>
  );
}
```

- [ ] **Step 7: Run tests and build**

Run: `npm test -- test/navigation-hero.test.mjs`  
Expected: PASS.  
Run: `npm run build`  
Expected: PASS.

- [ ] **Step 8: Commit navigation and hero work**

```bash
git add src/App.jsx src/components/Header.jsx src/components/ui/navbar-1.jsx src/components/Hero.jsx src/components/BackgroundLayers.jsx index.html test/navigation-hero.test.mjs
git commit -m "feat: simplify Vyntiq navigation and hero"
```

---

### Task 4: Homepage and Product Experience

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/components/ProductsSection.jsx`
- Modify: `src/components/ProductDetailPage.jsx`
- Modify: `test/content-contract.test.mjs`

**Interfaces:**
- Consumes: `productsData`; `onSelectProduct(product)`; `onRequestDemo(productName)`.
- Produces: concise seven-product grid and resilient detail rendering for full or pending product copy.

- [ ] **Step 1: Extend the failing content test for active homepage sections and pending details**

```js
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
```

- [ ] **Step 2: Run the test and verify App still imports the old sections**

Run: `npm test -- test/content-contract.test.mjs`  
Expected: FAIL on active imports and missing pending-copy branch.

- [ ] **Step 3: Simplify the App homepage render path**

Add a named handler before rendering:

```js
const handleSelectProduct = (product) => {
  setSelectedProduct(product);
  setCurrentView('product-detail');
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
```

Render in this order:

```jsx
<Hero />
<ProductsSection onSelectProduct={handleSelectProduct} onRequestDemo={handleRequestDemo} />
<AboutSection onKnowMoreClick={() => handleNavigateToAbout(null)} onMeetLeadershipClick={() => handleNavigateToAbout('leadership')} />
<PartnerSection onPartnerClick={() => setIsPartnerOpen(true)} onContactClick={() => handleOpenContact('Partnership Enquiry')} />
```

Remove imports and renders for BentoGrid, TestimonialsMarquee, ForensicsTelemetry, ComparisonSection, and WhatsAppCTA.

- [ ] **Step 4: Simplify ProductsSection**

- Remove category filters because all seven approved products should be visible together.
- Heading: `Products built around meaningful problems.`
- Supporting copy: `Vyntiq brings together AI, data, software engineering and deep technology to create products that are intelligent by design and practical by purpose.`
- Each card shows name, tagline, description, and up to three capabilities.
- For empty features, render `Approved product details will be added once supplied.`
- Primary card action is `Explore product`; secondary action is `Request a demo` only for products with approved descriptions.
- Preserve the existing three-column desktop grid and card styling.

- [ ] **Step 5: Make ProductDetailPage data-driven and honest**

Add:

```jsx
const hasApprovedOverview = product.description !== 'Product overview pending approved copy.';
const hasFeatures = product.features.length > 0;
```

When false, render one concise pending-copy panel and the general `Contact Vyntiq` action. Hide empty features, benefits, use cases, and target-customer sections rather than showing blank cards. Replace blanket `Sovereign Suite`, `100% Air-Gapped`, and OEM labels with the product's own badge, deployment model, and status.

- [ ] **Step 6: Run content tests and build**

Run: `npm test -- test/content-contract.test.mjs`  
Expected: PASS.  
Run: `npm run build`  
Expected: PASS.

- [ ] **Step 7: Commit homepage and product experience**

```bash
git add src/App.jsx src/components/ProductsSection.jsx src/components/ProductDetailPage.jsx test/content-contract.test.mjs
git commit -m "feat: focus homepage on approved Vyntiq products"
```

---

### Task 5: About, Mission, Vision, and Aligned Leadership

**Files:**
- Modify: `src/components/AboutSection.jsx`
- Modify: `src/components/AboutVyntiqPage.jsx`
- Modify: `test/content-contract.test.mjs`

**Interfaces:**
- Consumes: `aboutData.company`, `aboutData.principles`, `aboutData.visionMission`, `aboutData.leadership`, `aboutData.industryCapabilities`.
- Produces: concise homepage company preview and full About view with stable anchors `what-is-vyntiq`, `mission`, `vision`, and `leadership`.

- [ ] **Step 1: Add failing About rendering contracts**

```js
test('About page contains client anchors and no fabricated history or card footer actions', async () => {
  const about = await readFile(new URL('../src/components/AboutVyntiqPage.jsx', import.meta.url), 'utf8');
  for (const id of ['what-is-vyntiq', 'mission', 'vision', 'leadership']) assert.match(about, new RegExp(`id=["']${id}["']`));
  assert.doesNotMatch(about, /Engineering Milestones|Roadmap|Request Leadership Meeting|Vyntiq Technologies<\/span>/);
});

test('leadership cards share one alignment layout and use meaningful image alt text', async () => {
  const about = await readFile(new URL('../src/components/AboutVyntiqPage.jsx', import.meta.url), 'utf8');
  assert.match(about, /grid-rows-\[auto_auto_1fr\]/);
  assert.match(about, /alt=\{`Portrait of \$\{leader\.name\}`\}/);
});
```

- [ ] **Step 2: Run the content contract and verify the roadmap/footer failures**

Run: `npm test -- test/content-contract.test.mjs`  
Expected: FAIL on roadmap, card actions, and missing anchors.

- [ ] **Step 3: Rewrite the homepage About preview**

Keep one company statement, the `Vision. Intelligence. Quality.` principles, and a compact two-card leadership preview. Use identical image wrappers and biography line clamping. Remove the `Engineered for absolute sovereignty` headline and technology-stat tiles.

- [ ] **Step 4: Rewrite the full About page around client-approved sections**

Render:

1. `What is Vyntiq` with the supplied two-paragraph overview.
2. `Our Mission` with the supplied two-paragraph mission.
3. `Our Vision` plus the three principles and supplied follow-up paragraph.
4. `Leadership` with two cards.
5. `Where our products create value` using `industryCapabilities`.
6. A single `Contact Vyntiq` action.

Use this leadership structure for both cards:

```jsx
<article className="grid h-full grid-rows-[auto_auto_1fr] rounded-3xl ...">
  <div className="flex items-start gap-5">
    <div className="h-28 w-28 shrink-0 overflow-hidden rounded-2xl ...">
      <img src={leader.image} alt={`Portrait of ${leader.name}`} className="h-full w-full object-cover" />
    </div>
    <div>...</div>
  </div>
  <div className="my-6 h-px bg-white/10" />
  <p className="text-sm leading-7 text-neutral-300">{leader.bio}</p>
</article>
```

Do not render focus-area grids, philosophy footers, card actions, or company-name footers.

- [ ] **Step 5: Run tests and build**

Run: `npm test -- test/content-contract.test.mjs`  
Expected: PASS.  
Run: `npm run build`  
Expected: PASS.

- [ ] **Step 6: Commit About and leadership changes**

```bash
git add src/components/AboutSection.jsx src/components/AboutVyntiqPage.jsx test/content-contract.test.mjs
git commit -m "feat: align Vyntiq story and leadership with client copy"
```

---

### Task 6: Partners, Forms, Contact Channels, and LinkedIn

**Files:**
- Create: `src/utils/validation.js`
- Create: `src/components/LinkedInCTA.jsx`
- Modify: `src/components/PartnerSection.jsx`
- Modify: `src/components/PartnerModal.jsx`
- Modify: `src/components/ContactModal.jsx`
- Modify: `src/services/formService.js`
- Modify: `src/App.jsx`
- Create: `test/forms-and-partners.test.mjs`

**Interfaces:**
- Consumes: `contactChannels`, `externalLinks`; `validateBusinessEmail(value)`, `validatePhone(value)`.
- Produces: `submitPartnerInquiry(formData)` returning `{ success, submission }`; concise partner and demo forms.

- [ ] **Step 1: Write failing validation and partner-language tests**

```js
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { validateBusinessEmail, validatePhone } from '../src/utils/validation.js';

test('business email validation rejects malformed and numeric-only addresses', () => {
  for (const value of ['', '123@123', '123@example.com', 'name@localhost', 'name@domain.1']) {
    assert.equal(validateBusinessEmail(value), false, value);
  }
  for (const value of ['person@company.com', 'sales@vyntiq.co.in']) {
    assert.equal(validateBusinessEmail(value), true, value);
  }
});

test('optional phone validation accepts international formatting and rejects letters', () => {
  for (const value of ['', '+91 98765 43210', '(011) 4567-8901']) assert.equal(validatePhone(value), true, value);
  for (const value of ['phone123', '+91-ABC-1234', '123']) assert.equal(validatePhone(value), false, value);
});

test('active partner and contact components contain no empanelment or WhatsApp flow', async () => {
  const sources = await Promise.all([
    '../src/components/PartnerSection.jsx',
    '../src/components/PartnerModal.jsx',
    '../src/components/ContactModal.jsx',
    '../src/services/formService.js',
    '../src/App.jsx',
  ].map((path) => readFile(new URL(path, import.meta.url), 'utf8')));
  const joined = sources.join('\n');
  assert.doesNotMatch(joined, /OEM Empanelment|Apply for Empanelment|Track Empanelment|WhatsApp|wa\.me|submitOemApplication|OEM_EMPANELMENT/i);
  assert.match(joined, /submitPartnerInquiry/);
});
```

- [ ] **Step 2: Run the test and verify the missing validation module fails**

Run: `npm test -- test/forms-and-partners.test.mjs`  
Expected: FAIL because `validation.js` does not exist.

- [ ] **Step 3: Implement pure validation helpers**

```js
export function validateBusinessEmail(value) {
  const email = value.trim();
  const match = /^([^@]+)@([a-z0-9-]+(?:\.[a-z0-9-]+)*)\.([a-z]{2,})$/i.exec(email);
  if (!match) return false;
  const [, localPart] = match;
  return /[a-z]/i.test(localPart) && !/\.\./.test(email);
}

export function validatePhone(value) {
  const phone = value.trim();
  if (!phone) return true;
  if (!/^\+?[0-9()\s-]+$/.test(phone)) return false;
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
}
```

- [ ] **Step 4: Replace OEM form submission semantics**

Replace `submitOemApplication` with:

```js
export async function submitPartnerInquiry(formData) {
  const submission = {
    ...formData,
    type: 'PARTNER_INQUIRY',
    timestamp: new Date().toISOString(),
    submittedAt: new Date().toLocaleString(),
  };

  try {
    const existing = JSON.parse(localStorage.getItem('vyntiq_partner_inquiries') || '[]');
    existing.unshift(submission);
    localStorage.setItem('vyntiq_partner_inquiries', JSON.stringify(existing));
  } catch (error) {
    console.warn('Partner inquiry local save error:', error);
  }

  await syncToSheets({
    fullName: formData.contactName || '',
    email: formData.email || '',
    phone: formData.phone || '',
    organization: formData.organization || '',
    solutionInterest: formData.partnershipInterest || 'Partnership enquiry',
    deploymentModel: 'Partner inquiry',
    notes: formData.message || '',
    submittedAt: submission.submittedAt,
  });

  return { success: true, submission };
}
```

Extract the existing webhook fetch into this internal helper so both inquiry functions remain DRY:

```js
async function syncToSheets(payload) {
  if (!DEFAULT_SHEETS_WEBHOOK || DEFAULT_SHEETS_WEBHOOK.includes('REPLACE_WITH_YOUR')) return;
  try {
    await fetch(DEFAULT_SHEETS_WEBHOOK, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.warn('Google Sheets sync error:', error);
  }
}
```

- [ ] **Step 5: Rewrite PartnerSection and PartnerModal**

PartnerSection message:

```jsx
<h2>Build and deliver with Vyntiq.</h2>
<p>
  Vyntiq builds the products. We work with system integrators, implementation
  partners and direct customers to put those products to work in real environments.
</p>
```

PartnerModal fields are exactly: organization, contact name, business email, optional phone, partnership interest, message. Interest options are `System integration`, `Implementation partnership`, `Channel or go-to-market`, and `Direct customer enquiry`. Submit through `submitPartnerInquiry` and show a simple thank-you state without IDs or tracking.

- [ ] **Step 6: Simplify ContactModal and apply validation**

Fields are name, organization, business email, optional phone, product, and message. Use `validateBusinessEmail` and `validatePhone` before `submitInquiry`. Show `Enter a valid business email.` and `Enter a valid phone number.` inline. Replace all contact details with mail links to `contactChannels.contact` and `contactChannels.sales`. Remove 24-hour guarantees, NDA cards, WhatsApp, technical-desk labels, and unsupported addresses.

- [ ] **Step 7: Add an optional LinkedIn action with a safe missing-URL state**

```jsx
import React from 'react';
import { Icon } from '@iconify/react';
import { externalLinks } from '../data/siteContent';

export default function LinkedInCTA() {
  if (!externalLinks.linkedin) return null;
  return (
    <a href={externalLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Follow Vyntiq on LinkedIn" className="fixed bottom-6 right-6 ...">
      <Icon icon="mdi:linkedin" width="26" height="26" />
    </a>
  );
}
```

Render `<LinkedInCTA />` in App. With the current empty verified URL, it must produce no link or broken destination.

- [ ] **Step 8: Run form tests and build**

Run: `npm test -- test/forms-and-partners.test.mjs`  
Expected: PASS.  
Run: `npm run build`  
Expected: PASS.

- [ ] **Step 9: Commit forms and partnership changes**

```bash
git add src/utils/validation.js src/components/LinkedInCTA.jsx src/components/PartnerSection.jsx src/components/PartnerModal.jsx src/components/ContactModal.jsx src/services/formService.js src/App.jsx test/forms-and-partners.test.mjs
git commit -m "feat: replace empanelment flow with partner and demo enquiries"
```

---

### Task 7: Minimal Footer, Global Copy Audit, and Responsive QA

**Files:**
- Modify: `src/components/Footer.jsx`
- Modify: `src/index.css`
- Create: `test/footer-performance.test.mjs`
- Modify: any active component identified by the audit.

**Interfaces:**
- Consumes: `contactChannels`, `externalLinks`, App navigation callbacks.
- Produces: minimal footer and globally clean rendered copy.

- [ ] **Step 1: Write the failing footer and runtime audit**

```js
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const activePaths = [
  '../index.html', '../src/App.jsx', '../src/components/Footer.jsx',
  '../src/components/Header.jsx', '../src/components/Hero.jsx',
  '../src/components/AboutSection.jsx', '../src/components/AboutVyntiqPage.jsx',
  '../src/components/ProductsSection.jsx', '../src/components/ProductDetailPage.jsx',
  '../src/components/PartnerSection.jsx', '../src/components/PartnerModal.jsx',
  '../src/components/ContactModal.jsx', '../src/components/BackgroundLayers.jsx',
  '../src/data/aboutData.js', '../src/data/productsData.js', '../src/services/formService.js',
];
const activeSource = (await Promise.all(activePaths.map((path) => readFile(new URL(path, import.meta.url), 'utf8')))).join('\n');
const footer = await readFile(new URL('../src/components/Footer.jsx', import.meta.url), 'utf8');
const siteContent = await readFile(new URL('../src/data/siteContent.js', import.meta.url), 'utf8');

test('active website source contains no prohibited positioning or fake content', () => {
  assert.doesNotMatch(activeSource, /OEM Empanelment|Track Empanelment|WhatsApp|wa\.me|Engineering Milestones|Request Leadership Meeting/i);
  assert.doesNotMatch(activeSource, /contact@vyntiq\.com|partners@vyntiq\.com|security@vyntiq\.com/i);
});

test('footer contains only approved destinations and contact channels', () => {
  for (const label of ['About Vyntiq', 'Products', 'Partners', 'Request a Demo']) assert.match(footer, new RegExp(label));
  for (const key of ['general', 'contact', 'sales']) assert.match(footer, new RegExp(`contactChannels\\.${key}`));
  for (const email of ['info@vyntiq.co.in', 'contact@vyntiq.co.in', 'sales@vyntiq.co.in']) assert.match(siteContent, new RegExp(email.replaceAll('.', '\\.')));
  assert.doesNotMatch(footer, /Twitter|GitHub|Roadmap|Milestone|Privacy Policy|Portal/i);
});

test('the external animation runtime is not shipped', () => {
  assert.doesNotMatch(activeSource, /UnicornStudio|unicornstudio\.js|setInterval\(/);
});
```

- [ ] **Step 2: Run the audit and verify the existing footer fails**

Run: `npm test -- test/footer-performance.test.mjs`  
Expected: FAIL on legacy footer links and contact addresses.

- [ ] **Step 3: Implement the minimal footer**

Keep the existing rounded outer panel but reduce it to two rows:

- Full Vyntiq lockup and one company sentence.
- Four working navigation buttons.
- Three `mailto:` links using approved email addresses.
- Conditional LinkedIn link only when `externalLinks.linkedin` is non-empty.
- Copyright line for Vyntiq Technologies Private Limited.

Wire footer buttons through callbacks rather than dead `#about` links so they work from every view.

- [ ] **Step 4: Run the global prohibited-copy audit and correct active leftovers**

Run:

```powershell
rg -n -i "OEM Empanelment|Track Empanelment|WhatsApp|wa\.me|Engineering Milestones|Request Leadership Meeting|contact@vyntiq\.com|partners@vyntiq\.com|security@vyntiq\.com" index.html src/App.jsx src/components/Header.jsx src/components/ui/navbar-1.jsx src/components/Hero.jsx src/components/AboutSection.jsx src/components/AboutVyntiqPage.jsx src/components/ProductsSection.jsx src/components/ProductDetailPage.jsx src/components/PartnerSection.jsx src/components/PartnerModal.jsx src/components/ContactModal.jsx src/components/Footer.jsx src/components/BackgroundLayers.jsx src/data/aboutData.js src/data/productsData.js src/services/formService.js
```

Expected: no matches. Fix any active match with the exact approved terminology from the spec.

- [ ] **Step 5: Run the entire automated suite and production build**

Run: `npm test`  
Expected: all tests pass.  
Run: `npm run build`  
Expected: Vite production build succeeds without missing imports.

- [ ] **Step 6: Start the preview and visually inspect desktop**

Run: `npm run dev -- --host 127.0.0.1 --port 4173`  
Inspect at 1280×720:

- Full logo is uncropped.
- Four navbar destinations are visible and functional.
- Hero contains only the message.
- All seven products render.
- Pending product cards disclose missing approved copy cleanly.
- Founder cards align and show the complete approved bios.
- Partner and demo forms open, validate, and close.
- Footer is minimal and contains no broken links.

- [ ] **Step 7: Inspect mobile and reduced-motion behavior**

Inspect at 390×844 and with reduced motion emulation:

- Mobile menu exposes all four destinations.
- No horizontal overflow.
- Product cards and leader cards stack cleanly.
- Modals remain scrollable and submit controls are reachable.
- Background remains static and readable.

- [ ] **Step 8: Verify console and network health**

- Reload home, About, one complete product, one pending-copy product, partner modal, and demo modal.
- Confirm no console errors.
- Confirm no request to `unicornstudio.js`, `wa.me`, or an empty video URL.
- Confirm no continuous high-frequency polling timer.

- [ ] **Step 9: Commit footer and QA corrections**

```bash
git add src/components/Footer.jsx src/index.css test/footer-performance.test.mjs src/App.jsx src/components src/data src/services
git commit -m "fix: complete client feedback copy and responsive audit"
```

---

### Task 8: Final Verification, GitHub Push, and Antideploy Check

**Files:**
- Modify only files required by final verification failures.

**Interfaces:**
- Consumes: completed Tasks 1–7.
- Produces: tested `main` branch pushed to the existing GitHub repository and verified Antideploy production site.

- [ ] **Step 1: Run clean final verification**

Run:

```powershell
npm test
npm run build
git diff --check
git status --short --branch
```

Expected: all tests pass, build succeeds, no whitespace errors, and only known user-owned untracked files remain.

- [ ] **Step 2: Inspect the complete branch diff**

Run:

```powershell
git diff origin/main...HEAD --stat
git diff origin/main...HEAD -- src index.html package.json tailwind.config.js test docs/superpowers
```

Expected: changes remain within the approved website/spec/plan/test scope; no unrelated user files are staged.

- [ ] **Step 3: Push the existing main branch**

Run: `git push origin main`  
Expected: GitHub accepts the commits and `main` matches `origin/main`.

- [ ] **Step 4: Verify Antideploy**

Open `https://vyntic.antideploy.app` after the configured automatic deployment completes. Verify the production page visibly contains the new hero, navigation, seven-product catalogue, approved About copy, aligned leadership cards, partner wording, minimal footer, and no WhatsApp control.

- [ ] **Step 5: Run production smoke checks**

- Open About from the production navbar.
- Return to Products from About and confirm scrolling works.
- Open a product with approved detail and one pending-copy product.
- Submit only invalid sample values locally in the form UI; confirm `123@123` and `phoneABC` are rejected without sending.
- Confirm the production console has no application errors.

- [ ] **Step 6: Record completion evidence**

Report:

- Git commit range pushed.
- `npm test` result count.
- `npm run build` result.
- Production URL.
- Missing client inputs still required: product catalogue, hero video, and official LinkedIn URL.
