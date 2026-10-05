# Vyntiq Client Feedback Revision — Design Specification

**Date:** 2026-10-05  
**Status:** Draft for client review  
**Change type:** Targeted content, typography, navigation, and performance correction  

## 1. Objective

Revise the existing Vyntiq website so it presents Vyntiq as a credible, AI-first product company while preserving the website's existing dark visual structure and component language.

This revision implements the supplied client feedback, the follow-up notes, the approved typography direction from the original proposal, and the supplied Vulcan product brochure. It is not a full redesign.

## 2. Source hierarchy

When sources conflict, use the following priority:

1. The user's latest written instructions.
2. The user's approved direction in this conversation.
3. `Vyntiq website v1 feedback.docx`, including its annotated screenshots.
4. `Vulcan_Product_Brochure.pdf` for Vulcan-specific claims and status.
5. The Vyntiq proposal website for typography and brand direction only.
6. Existing website copy only where it does not conflict with the sources above.

Instructions embedded in reference documents are treated as client content requirements, not as operational instructions for the development environment.

## 3. Design constraints

### Preserve

- The existing dark website composition.
- The current component-based React application.
- Rounded panels, restrained glass effects, and the general section rhythm.
- Existing responsive behavior unless a component must change to meet the feedback.
- Existing product-detail interaction where it can support the revised product catalogue honestly.

### Change

- Copy, labels, headings, navigation, typography, colors, content density, and section visibility.
- Product data and product categories.
- Form fields, validation, and contact routing labels.
- Founder card content and internal alignment.
- The resource-heavy background implementation.

### Do not introduce

- A new page layout system.
- New decorative visual themes, gradients, illustration styles, or card systems.
- Unsupported customer claims, testimonials, certifications, performance figures, partnerships, or deployment history.
- Historical milestones predating the company's 2026 formation.
- A generic stock-video aesthetic without an approved asset.

## 4. Brand and typography

Use the proposal's approved type direction:

- **Headings and navigation:** Jost, light through medium weights.
- **Body and form text:** Work Sans, regular through medium weights.
- **Fallbacks:** `Segoe UI`, system UI, sans-serif.

Typography should feel deliberate and editorial rather than heavy or generically "AI styled":

- Large headings use lighter weights and calm line-height.
- Body copy uses shorter line lengths and fewer bold fragments.
- Uppercase labels use wide tracking sparingly.
- Avoid excessive micro-labels, badges, glowing pills, animated dots, and dense technical metadata.

Use the logo-derived palette:

- **Charcoal:** `#1B1F23`
- **Signal blue:** `#2F6FEB`
- **Paper:** `#ECEEF1`
- **Brushed silver:** `#C9CDD2`

Signal blue is used only for important actions and small emphasis details. Replace the current scattered Tailwind blues with the same logo blue or transparent variants of it.

## 5. Logo treatment

- Use the supplied complete Vyntiq lockup in the navbar, including the company name and tagline.
- Do not recreate `VYNTIQ` using live text beside a cropped emblem.
- Use the emblem-only version only where a compact square/circular mark is required.
- Keep the logo's natural aspect ratio and provide enough horizontal room so it is not cropped.
- The footer may use the full lockup or a clean reduced version, but it must not duplicate the wordmark as separate HTML text.

## 6. Information architecture

The primary navigation is:

1. **About Vyntiq**
2. **Products**
3. **Partners**
4. **Request a Demo**

Behavior:

- `About Vyntiq` opens the existing About view and exposes links or anchors for What is Vyntiq, Mission, Vision, and Leadership.
- `Products` returns to the homepage if necessary and scrolls to the product section.
- `Partners` opens the revised partner enquiry experience.
- `Request a Demo` is the primary navigation action and opens the simplified demo form.
- Mobile navigation provides the same destinations and wording.

The footer contains only working destinations aligned with this navigation, the approved contact emails, and the official LinkedIn link when supplied.

## 7. Homepage

### 7.1 Hero

The hero becomes a focused opening statement.

Remove:

- `Sovereign AI Suite` badge.
- Both existing hero buttons.
- OEM and hardware empanelment copy.
- Air-gapped, latency, data-custody, or other metric bars.
- Dense technology lists.

Content direction:

- Present Vyntiq as an AI-first technology product company.
- Communicate intelligent, high-quality products that solve real-world problems.
- Avoid positioning the entire company as only Indian, government-focused, sovereign, or air-gapped.
- Detailed security and deployment attributes may remain inside relevant product pages where supported.

The navbar's `Request a Demo` action provides the hero conversion path, as requested by the client.

### 7.2 Hero background and performance

- Remove the Unicorn Studio script and polling initializer because they create unnecessary CPU/GPU load.
- Implement a native, muted, autoplaying, looping video layer with `playsInline` when an approved local video asset is available.
- Provide a lightweight branded still/gradient fallback with the current atmosphere when no video exists or reduced motion is preferred.
- Do not fetch a generic third-party stock video automatically.
- Respect `prefers-reduced-motion` by showing the static fallback.

Until the client supplies an approved video, production uses the static fallback without changing the hero layout.

### 7.3 Homepage content density

- Remove decorative or duplicate blocks that repeat the same technology claims.
- Remove fake testimonial content entirely.
- Retain generous blank space between core sections.
- Keep the homepage focused on the hero, products, concise company introduction, leadership preview where appropriate, partners, and a short contact path.
- Any retained technical showcase must support one of the approved products and must not dominate the product-company positioning.

## 8. Products

The product catalogue contains exactly these seven products, in this order unless the client later provides a preferred order:

1. Credanta — Certificate Lifecycle Management
2. DPDP Shield
3. CopAI
4. Crucible
5. Vulcan
6. CCTV Investigation Workbench
7. MukeraDB

Remove or hold:

- Video Prevention & Threat Detection as a standalone product.
- Video Analytics as a standalone product.
- HRMS.
- Upcoming Vyntiq Technology Solutions.
- Contract Lifecycle Management copy currently associated with `CLM`.

Product cards should be concise: product name, one-sentence purpose, up to three verified capabilities, and one action. Avoid status badges that imply production readiness unless supported by supplied material.

### 8.1 Content integrity

- Reuse existing CopAI and DPDP Shield content only after removing unsupported metrics and over-specific claims.
- Reframe the existing video-forensics content as CCTV Investigation Workbench only where the capability is already supported.
- Do not repurpose the existing Contract Lifecycle Management copy for Credanta because the client explicitly identifies Credanta as Certificate Lifecycle Management.
- Do not invent technical claims for Credanta, Crucible, or MukeraDB.
- If the earlier product catalogue remains unavailable, show restrained `Product overview pending approved copy` states rather than fabricated descriptions.
- Replace those states once the catalogue is supplied.

### 8.2 Vulcan

Use the supplied brochure as the sole source of detailed Vulcan copy.

Approved positioning:

- One operational console over existing monitoring tools.
- Canonical device/entity resolution across sources.
- Alarm confirmation, deduplication, grouping, and reasoned suppression.
- Read-only deployment that does not disturb existing monitoring tools.
- Offline/air-gapped deployment options.
- Deterministic, logged decision pipeline.

Status wording must remain accurate:

- Decision core: in service.
- Multi-source console: prototype.
- Additional adapters, calibrated model, operator assistant, and high availability: in development.

The anonymized observation figures in the brochure may be shown only with their context and date; they must not be presented as universal product performance guarantees.

## 9. About Vyntiq

The About view uses the supplied client copy without narrowing the whole company to sovereign systems.

### What is Vyntiq

> Vyntiq is an AI-first technology company building intelligent, high-quality products and solutions that solve real-world problems and create lasting impact.
>
> We believe the next generation of technology will not simply automate tasks — it will make systems more intelligent, adaptive and effective. At Vyntiq, we bring together AI, data, software engineering and deep technology to build products that are intelligent by design and practical by purpose.

### Vision

> To build technology that is intelligent, trusted and impactful — creating lasting value for the organizations and communities we serve.

Use the principles **Vision. Intelligence. Quality.** followed by:

> We bring the vision to identify meaningful problems, the intelligence to build smarter solutions, and the commitment to quality required to earn lasting trust.
>
> We don't build technology simply because it is possible. We build it because it can make a difference.

### Mission

> Our focus is on creating technology products and solutions that organizations can trust — for their efficacy, reliability, security and quality. We are on a mission to become a trusted technology partner and OEM, building products that deliver meaningful value long after they are deployed.
>
> We are intentionally not limited to a particular industry or geography. Our technology can serve governments, enterprises and institutions across domains where intelligent solutions can address meaningful challenges. Our journey begins in India, with a global ambition.

Remove the Engineering Milestones & Roadmap section entirely.

Update any retained sector/capability content so it follows the revised product catalogue and does not imply Vyntiq serves only defense or public-sector buyers.

## 10. Leadership

Display two visually aligned leadership cards using a shared internal grid:

- Matching image frame dimensions and aspect ratios.
- Matching title/subtitle placement.
- Matching biography area and card height.
- No independent footer row that causes vertical misalignment.

Remove from both cards:

- `Vyntiq Technologies` footer text.
- `Request Leadership Meeting` or equivalent action.
- Unsupported specialist badges and redundant focus-area tiles if they create uneven card heights.

### Atul Jain

**Role:** Co-Founder & Director  
**Descriptor:** Enterprise Technology & AI Transformation Leader

> Technology and transformation leader with 15+ years of experience across enterprise technology, software engineering, quality engineering, SaaS platforms and large-scale digital transformation across Airtel Digital, Ultimate Kronos Group (UKG), and Sopra Steria. Has led complex enterprise technology initiatives spanning architectural planning through production operations. At Vyntiq, he drives technology strategy, product strategy and business execution, translating complex business challenges into scalable, dependable technology products and enterprise solutions.

### Saiesh Singh

**Role:** Co-Founder & Director  
**Descriptor:** AI Architecture, Computer Vision & Cybersecurity Leader

> AI and technology leader with expertise across artificial intelligence, data science, cybersecurity, computer vision and intelligent systems. Has advised law enforcement and public safety organizations on video intelligence systems, turning demanding operational requirements into reliable, air-gapped software architectures. At Vyntiq, he drives AI strategy, product architecture and innovation, translating complex technology opportunities into scalable products and solutions for enterprises, government and institutions.

## 11. Partners

Vyntiq is positioned as the product OEM. The partner audience is:

- System integrators.
- Implementation and technology partners.
- Channel or go-to-market partners where appropriate.
- Direct enterprise, government, and institutional customers.

Remove everywhere:

- `OEM Empanelment`.
- `Apply for OEM Empanelment`.
- OEM tier claims.
- Empanelment status tracking.
- Fake application IDs or demo tracking states.
- Language implying Vyntiq is seeking to be empanelled by other OEMs.

Replace the current partner portal with a concise partnership enquiry form. The form should ask only for organization, contact name, business email, phone if desired, partnership interest, and a short message.

## 12. Request a Demo and contact

Use `Contact Vyntiq` rather than `Contact Engineering Team`.

The demo/contact experience should be simpler and less verbose:

- Name.
- Organization.
- Business email.
- Phone number, optional unless required by current backend expectations.
- Product of interest.
- Short message.

Validation:

- Email must have a credible local part, valid domain structure, and alphabetic top-level domain; reject examples such as `123@123`.
- Phone accepts optional leading `+`, spaces, parentheses, and hyphens, but must normalize to digits and contain a reasonable digit count. Alphabetic characters are rejected.
- Required fields produce short inline errors.
- No fabricated response-time guarantee.

Approved email handles:

- General/company: `info@vyntiq.co.in`
- Contact/enquiries: `contact@vyntiq.co.in`
- Sales/demo requests: `sales@vyntiq.co.in`

Labels and mail links should use these addresses consistently. No `.com`, `partners@`, or `security@` addresses remain unless the client later supplies them.

## 13. LinkedIn

- Remove the floating WhatsApp control and WhatsApp links from modals.
- Replace the floating control with a restrained LinkedIn action only after the official company URL is supplied.
- Until then, omit the floating external action rather than linking to an unverified company page.
- The footer may show LinkedIn only when the verified URL is available.

## 14. Footer

The footer is reduced to:

- Vyntiq logo/short company line.
- About Vyntiq.
- Products.
- Partners.
- Request a Demo or Contact Vyntiq.
- Approved email links.
- Verified LinkedIn link when available.
- Legal company name and copyright.

Remove non-working Twitter, GitHub, privacy, portal, roadmap, milestone, and product links that do not lead to real destinations.

## 15. Accessibility and responsive behavior

- Maintain keyboard-accessible navigation and modal controls.
- Ensure menus and dropdowns expose appropriate labels and expanded state.
- Preserve visible focus states using signal blue.
- Maintain readable contrast against charcoal surfaces.
- Keep tap targets at least 44px where practical.
- Do not rely on hover for essential navigation.
- Founder images use meaningful alt text.
- Reduced-motion users receive static backgrounds and no decorative continuous animation.

## 16. Technical implementation boundaries

- Keep React, Vite, Tailwind, and the current application entry points.
- Prefer editing existing components and data files rather than adding dependencies.
- Remove dead imports and components from the render path when sections are deleted.
- Do not delete unused source files unless their removal is necessary; removing them from the active bundle is sufficient for this revision.
- Keep form submission behavior compatible with the current service unless revised labels require a non-breaking mapping.
- Add automated tests around content rules, navigation labels, product catalogue membership, removed language, and form validation.

## 17. Verification criteria

The revision is complete only when:

- The production build succeeds.
- All automated tests pass.
- Desktop and mobile views have been inspected visually.
- Navigation works from home, About, and product-detail views.
- The seven approved product names are present and removed products are absent.
- No `OEM Empanelment`, fake testimonial, WhatsApp, or historical milestone content appears in the rendered website.
- No unapproved `.com` Vyntiq email address appears.
- Founder cards align at desktop and mobile breakpoints.
- Invalid email and phone samples are rejected.
- The heavy Unicorn Studio dependency is absent from the runtime.
- The site is pushed to the existing GitHub repository and the Antideploy deployment is verified after implementation approval and testing.

## 18. Pending client assets and copy

The following are not blockers for restructuring the website, but they are required for final content completeness:

1. The earlier product catalogue containing approved copy for Credanta, MukeraDB, CCTV Investigation Workbench, and any other products not fully documented in the current workspace.
2. The approved hero video file.
3. The official Vyntiq LinkedIn company URL.

Until supplied, use honest fallbacks defined in this specification and do not invent replacements.
