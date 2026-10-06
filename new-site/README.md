# Vyntiq — Signal Architecture

Fresh standalone website build for the Vyntiq redesign. The existing application is outside this project and is not imported by the build.

## Run

```bash
npm install
npm run dev
npm run build
```

## Experience notes

- The hero uses a clean nebula backdrop with no decorative paths, nodes, or canvas. GSAP drives a slow camera-like zoom and copy fade with native scroll.
- On desktop, the approach story pins for three chapters, crossfading photographic environments while the chapter copy advances with scroll. The chapter buttons navigate the same scroll sequence.
- Mobile keeps all chapters in a flowing layout with scroll reveals, avoiding a pinned panel taller than the screen.
- Images use scroll-linked depth and zoom; product rows and company/contact text reveal in coordinated sequences.
- `Motion off` restores a static reading layout and exposes every chapter. OS reduced-motion preferences select that layout automatically.
- The existing `scene.ts` is no longer imported or shipped. No WebGL renderer is needed for this experience.
- The GSAP distribution entry includes CSSPlugin, which is required for DOM transforms. Its type declaration reuses the official package types.

## Interaction map

The header links jump to the product directory, approach story, company statement and contact action. Product rows open dedicated detail routes. The story rail can be changed with its three buttons. The final action uses a real `mailto:` link so the fallback never pretends to submit a form.

## Routes

The clean build now serves `/products`, `/products/:product`, `/about`, `/partners`, and `/contact` through the same standalone entry. Product detail pages use the original product records and clearly identified proposed copy and keep the enquiry path explicit.

## Original-site content migration

The original site's active product, company, founder and contact records are copied into `src/site-data.json`. All original artwork and portraits are bundled in `public/assets`. Run `npm run sync:content` from this directory to refresh the snapshot after editing the original records; `npm test` verifies source fidelity and asset bytes.

All seven product routes render available descriptions, problems, features, differentiators, audiences, use cases, benefits, deployment and status. Credanta, Crucible and MukeraDB use a separate proposed-copy layer in `src/product-drafts.json`; descriptions, audiences and capabilities are product concepts for business review, with availability and scope explicitly unconfirmed. The original snapshot remains intact. Crucible and MukeraDB use generated investigation and infrastructure illustrations rather than the company logo. The transparent company emblem appears alongside the wordmark in the shared header and footer. Credanta and Vulcan use infrastructure photography in the presentation, replacing the original artwork that depicted contract and airport workflows.

The home and About pages include Atul Jain and Saiesh Singh's portraits and full biographies. About also covers the company overview, principles, purpose, mission, vision, specializations and industries. The partnership and enquiry pages retain the original enquiry fields and contact channels. Enquiry forms send the original nine-column payload to Google Sheets and confirm receipt only after the endpoint returns success. Failed submissions keep the entered details and offer an email fallback. The root Vite configuration now builds this redesigned application into the root dist directory.

Product image zooms, section reveals and founder entrances use the same reduced-motion-aware GSAP context as the homepage.

## Logo-based identity

The shared theme uses charcoal (#1B1F23), brushed silver (#C9CDD2), paper (#ECEEF1) and signal blue (#2F6FEB), following the supplied Vyntiq proposal. Jost headings and Work Sans body text replace the earlier condensed/orange presentation. Lighter blue is used for readable text accents; saturated blue is reserved for actions. Photographic colour and cinematic scroll behavior remain.

## Continuous scroll film

The homepage uses 432 extracted WebP frames from NASA/STScI’s “A Flight Into the Bubble Nebula” (https://svs.gsfc.nasa.gov/30782/). The source is a scientific/artistic 3D visualization of the same nebula as the previous still image. Seconds 1–28 are sampled at 16 fps into desktop (1280px) and mobile (768px) variants. GSAP maps the complete document scroll range, including the pinned story, to frames 0–431. Canvas stays behind foreground sections through the footer. Playback has no time clock or audio; reversing scroll reverses the flight. Motion off / OS reduced motion fixes frame zero. Decoded images are bounded to 28 desktop / 20 mobile, with four parallel requests and nearby-frame prefetch; unloaded frames use the nearest decoded frame. Attribution and acknowledgments are available in the footer and bundled credits.json. Original download and inspection samples remain under workspace tmp/bubble-video.
