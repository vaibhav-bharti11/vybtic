import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { about, contact, chapters } from './content';
import { header, footer, productRows, founders, partnerSection, renderRoute } from './pages';
import './styles.css';
import { createScrollSequence } from './scroll-sequence';
import { submitEnquiry } from './form-service.js';

try { gsap.registerPlugin(ScrollTrigger); } catch (error) { console.error('Animation layer unavailable', error); }

const productMarkup = productRows();
const chapterImages = [
  { src: '/assets/products/network-infrastructure.jpg', alt: 'Server infrastructure bringing operational signals together' },
  { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85', alt: 'Detailed circuitry connecting components inside an operational system' },
  { src: '/assets/products/video-forensics.jpg', alt: 'Video investigation environment supporting operational decisions' },
];
const storyPhotos = `<figure class="story-photos">${chapterImages.map((image, index) => `<img class="story-photo" src="${image.src}" alt="${image.alt}" loading="lazy" data-story-photo="${index}">`).join('')}</figure>`;
const chapterMarkup = chapters.map((c, i) => `<article class="chapter ${i === 0 ? 'is-active' : ''}" data-chapter="${i}"><span class="chapter-eyebrow">${c.eyebrow}</span><h3>${c.title}</h3><p>${c.copy}</p><img class="chapter-media" src="${chapterImages[i].src}" alt="${chapterImages[i].alt}" loading="lazy"></article>`).join('');

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${header(true)}
  <main id="main">
    <section class="hero" id="top"><div class="hero-copy"><p class="kicker hero-kicker"><span class="gloss">${about.company.motto}</span></p><h1>Intelligent technology,<br><em>built to make a difference.</em></h1><div class="hero-actions"><a class="button button-primary" href="#products">Explore the system <span>↗</span></a><a class="text-link" href="#approach">See how it works <span>↓</span></a></div></div><div class="hero-backdrop" aria-hidden="true"></div><div class="hero-shade" aria-hidden="true"></div><button class="motion-toggle" type="button" aria-pressed="true">Motion on</button><a class="scene-scroll-cue" href="#approach">Scroll to explore <span aria-hidden="true">↓</span></a></section>
    <section class="story" id="approach"><div class="story-landscapes" aria-hidden="true"><div class="story-landscape landscape-gather"></div><div class="story-landscape landscape-resolve"></div><div class="story-landscape landscape-act"></div></div><div class="story-intro"><p class="kicker">A clearer way through</p><h2>Every operation has a signal. We help you hear it.</h2><p>Complexity is not a badge of honour. It is a design problem. Our products connect the evidence, context and action that already exist inside your organisation.</p>${storyPhotos}</div><div class="story-stage"><div class="stage-rail"><span>VULCAN / OPERATIONS INTELLIGENCE</span><span class="stage-progress">01 — 03</span></div><div class="chapters">${chapterMarkup}</div><div class="chapter-progress" aria-hidden="true"><span></span></div><div class="chapter-dots" aria-label="Story chapters"><button class="is-active" aria-label="Show chapter 1"></button><button aria-label="Show chapter 2"></button><button aria-label="Show chapter 3"></button></div></div></section>
    <section class="media-feature" aria-label="Vyntiq in the field"><div class="media-image"><img src="/assets/products/network-infrastructure.jpg" alt="Server infrastructure with blue status lights" loading="lazy"><span class="media-caption">FIELD NOTE / 02 — SIGNALS IN MOTION</span></div><div class="media-video"><img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85" alt="Detailed circuitry inside an operational system" loading="lazy"><div class="video-overlay"><span>OPERATIONS / LIVE</span><strong>Make the invisible<br>legible.</strong></div></div></section>
    <section class="products" id="products"><div class="section-heading"><div><p class="kicker">The system</p><h2>Products built<br>to <em>make a difference.</em></h2></div><p>Intelligent, high-quality products and solutions for real-world problems.</p></div><div class="product-list">${productMarkup}</div></section>
    <section class="company" id="company"><div><p class="kicker">About Vyntiq</p><h2>Intelligent by design.<br><em>Practical by purpose.</em></h2></div><div class="company-copy"><p>${about.company.overview}</p><a class="text-link" href="/about">About Vyntiq <span>↗</span></a></div></section>
    <section class="principles content-section">${about.principles.map(item => `<article><h2>${item.title}</h2><p>${item.description}</p></article>`).join('')}</section>
    ${founders()}
    ${partnerSection()}
    <section class="contact" id="contact"><div class="contact-mark">v.</div><div><p class="kicker">The next clear step</p><h2>Tell us what is<br><em>hard to see.</em></h2><p class="contact-copy">Bring us the messy version. We will help you find the signal.</p><a class="button button-light" href="/contact">Start a conversation <span>↗</span></a></div></section>
  </main>
  ${footer()}`;

const route = location.pathname.replace(/\/$/, '') || '/';
if (route !== '/') {
  const page = renderRoute(route);
  document.title = page.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', page.copy);
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `${header()}<main id="main" class="inner-page">${page.html}</main>${footer()}`;
}

const sequenceCanvas = route === '/' ? document.createElement('canvas') : undefined;
if (sequenceCanvas) {
  document.body.classList.add('has-scroll-film');
  const background = document.createElement('div');
  background.className = 'scroll-film';
  background.setAttribute('aria-hidden', 'true');
  background.append(sequenceCanvas);
  document.body.prepend(background);
  document.querySelector('.site-footer')?.insertAdjacentHTML('beforeend', '<details class="film-credit"><summary>Background film credits</summary><p><a href="https://svs.gsfc.nasa.gov/30782/" target="_blank" rel="noopener noreferrer">A Flight Into the Bubble Nebula</a> · NASA, ESA, and F. Summers, G. Bacon, Z. Levay, and L. Frattare (Viz 3D Team, STScI). Acknowledgment: T. Rector/University of Alaska Anchorage, H. Schweiker/WIYN and NOAO/AURA/NSF, NASA, ESA, and the Hubble Heritage Team (STScI/AURA).</p></details>');
}
const scrollFilm = sequenceCanvas ? createScrollSequence(sequenceCanvas) : undefined;

 document.querySelector<HTMLFormElement>('.enquiry-form')?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const form = event.currentTarget as HTMLFormElement;
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const partnership = form.dataset.partnership === 'true';
  const type = String(values.get('enquiryType') || 'General Business Enquiry');
  const product = String(values.get('selectedProduct') || '');
  const recipient = partnership ? contact.contact : type.startsWith('Request') ? contact.sales : contact.general;
  const subject = `${type}${product ? ` — ${product}` : ''}`;
  const message = `Name: ${values.get('name')}\nOrganization: ${values.get('organization')}\nEmail: ${values.get('email')}\nPhone: ${values.get('phone') || 'Not provided'}\nProduct: ${product || 'Not specified'}\n\n${values.get('message')}`;
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const status = form.querySelector<HTMLElement>('.form-note')!;
  const fallback = form.querySelector<HTMLAnchorElement>('.enquiry-email-fallback')!;
  fallback.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  fallback.hidden = true;
  button.disabled = true;
  button.textContent = 'Sending…';
  status.textContent = 'Sending your enquiry…';
  const fields = Object.fromEntries(Array.from(values.entries(), ([key, value]) => [key, String(value)]));
  try {
    const storageKey = partnership ? 'vyntiq_partner_inquiries' : 'vyntiq_inquiries';
    const existing = JSON.parse(localStorage.getItem(storageKey) || '[]');
    localStorage.setItem(storageKey, JSON.stringify([{ ...fields, timestamp: new Date().toISOString() }, ...(Array.isArray(existing) ? existing : [])].slice(0, 100)));
  } catch { /* Browser storage may be unavailable; submission can still proceed. */ }
  try {
    await submitEnquiry(fields, import.meta.env.VITE_GOOGLE_SHEETS_URL || '', partnership);
    status.textContent = 'Thank you. Your enquiry has been received.';
    form.reset();
  } catch (error) {
    console.warn('Enquiry delivery could not be confirmed:', error);
    status.textContent = 'We could not confirm your enquiry. Please send it by email using the link below.';
    fallback.hidden = false;
  } finally {
    button.disabled = false;
    button.innerHTML = 'Send enquiry <span>↗</span>';
  }
});

const motionToggle = document.querySelector<HTMLButtonElement>('.motion-toggle');
const desktopMotion = window.matchMedia('(min-width: 821px)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let motionEnabled = !reducedMotion.matches;
let animationContext: ReturnType<typeof gsap.context> | undefined;
let storyTrigger: ScrollTrigger | undefined;
const chapterElements = gsap.utils.toArray<HTMLElement>('.chapter');
const chapterButtons = gsap.utils.toArray<HTMLButtonElement>('.chapter-dots button');

function setChapter(index: number) {
  chapterElements.forEach((el, i) => {
    el.classList.toggle('is-active', i === index);
    el.setAttribute('aria-hidden', String(motionEnabled && desktopMotion.matches && i !== index));
  });
  chapterButtons.forEach((el, i) => {
    el.classList.toggle('is-active', i === index);
    el.setAttribute('aria-pressed', String(i === index));
  });
  document.querySelectorAll<HTMLElement>('.story-photo').forEach((photo, i) => photo.setAttribute('aria-hidden', String(i !== index)));
  const progress = document.querySelector('.stage-progress');
  if (progress) progress.textContent = `0${index + 1} — 03`;
}

function configureMotion() {
  animationContext?.revert();
  storyTrigger = undefined;
  document.body.classList.toggle('motion-enabled', motionEnabled);
  motionToggle?.setAttribute('aria-pressed', String(motionEnabled));
  if (motionToggle) motionToggle.textContent = motionEnabled ? 'Motion on' : 'Motion off';
  setChapter(0);
  scrollFilm?.setEnabled(motionEnabled);
  if (!motionEnabled) return;

  animationContext = gsap.context(() => {
    if (document.querySelector('.hero')) {
      const hero = gsap.timeline({ scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: .8 }, defaults: { ease: 'none' } });
      hero.to('.hero-copy', { y: -100, opacity: 0 }, 0)
        .to('.scene-scroll-cue', { opacity: 0 }, 0);
    }
    if (document.querySelector('.story') && desktopMotion.matches) {
      gsap.set(chapterElements.slice(1), { autoAlpha: 0, y: 65 });
      gsap.set('.story-photo:not(:first-child)', { autoAlpha: 0, scale: 1.08 });
      if (!scrollFilm) gsap.set('.story-landscape:not(:first-child)', { autoAlpha: 0, scale: 1.12 });
      const story = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: { trigger: '.story', start: 'top top', end: () => `+=${window.innerHeight * 2.7}`, pin: true, scrub: .7, invalidateOnRefresh: true,
          onUpdate: (self) => setChapter(self.progress < .32 ? 0 : self.progress < .65 ? 1 : 2) }
      });
      story.to('.story-photo:first-child', { scale: 1.08, duration: 3 }, 0);
      if (!scrollFilm) story.to('.landscape-gather', { scale: 1.12, duration: 3 }, 0);
      for (let i = 1; i < chapterElements.length; i++) {
        const at = i - .18;
        story.to(chapterElements[i - 1], { autoAlpha: 0, y: -55, duration: .3 }, at)
          .to(chapterElements[i], { autoAlpha: 1, y: 0, duration: .35 }, at + .15);
        story.to(`.story-photo:nth-child(${i})`, { autoAlpha: 0, duration: .45 }, at)
          .to(`.story-photo:nth-child(${i + 1})`, { autoAlpha: 1, scale: 1, duration: .65 }, at);
        if (!scrollFilm) story.to(`.story-landscape:nth-child(${i + 1})`, { autoAlpha: 1, scale: 1, duration: .65 }, at);
      }
      story.to('.chapter-progress span', { scaleX: 1, duration: 3 }, 0);
      storyTrigger = story.scrollTrigger;
    }
    if (!desktopMotion.matches) {
      chapterElements.forEach((chapter) => gsap.from(chapter, { y: 40, opacity: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: chapter, start: 'top 90%', toggleActions: 'play none none reverse' } }));
    }
    gsap.utils.toArray<HTMLElement>('.about-intro-copy, .about-direction-copy article, .about-principles article, .section-heading, .company > div, .contact > div, .founder-copy, .detail-copy, .principles article, .enquiry-section > div').forEach((element) => {
      if (!element.children.length) return;
      gsap.from(Array.from(element.children), { y: 55, opacity: 0, stagger: .12, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 88%', toggleActions: 'play none none reverse' } });
    });
    gsap.utils.toArray<HTMLElement>('.media-image, .media-video, .about-image').forEach((element, i) => {
      gsap.fromTo(element.querySelector('img'), { scale: 1.18, yPercent: -6 }, { scale: 1, yPercent: 6, ease: 'none', scrollTrigger: { trigger: element, start: 'top bottom', end: 'bottom top', scrub: .8 } });
      gsap.from(element, { y: i ? 100 : 50, opacity: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 90%', toggleActions: 'play none none reverse' } });
    });
    gsap.utils.toArray<HTMLElement>('.founder-portrait').forEach((portrait) => {
      gsap.from(portrait, { y: 60, opacity: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: portrait, start: 'top 90%', toggleActions: 'play none none reverse' } });
    });
    if (document.querySelector('.about-hero')) {
      gsap.to('.about-hero-image img', { scale: 1.12, yPercent: 5, ease: 'none', scrollTrigger: { trigger: '.about-hero', start: 'top top', end: 'bottom top', scrub: .8 } });
    }
    if (document.querySelector('.product-hero')) {
      gsap.to('.product-hero-art img', { scale: 1.16, yPercent: 6, ease: 'none', scrollTrigger: { trigger: '.product-hero', start: 'top top', end: 'bottom top', scrub: .8 } });
    }
    gsap.utils.toArray<HTMLElement>('.product-row').forEach((row) => {
      gsap.from(Array.from(row.children), { y: 30, opacity: 0, stagger: .045, duration: .75, ease: 'power3.out', scrollTrigger: { trigger: row, start: 'top 94%', toggleActions: 'play none none reverse' } });
    });
    if (scrollFilm) {
      const playhead = { frame: 0 };
      gsap.to(playhead, { frame: scrollFilm.frameCount - 1, ease: 'none', onUpdate: () => scrollFilm.setFrame(playhead.frame), scrollTrigger: { trigger: document.documentElement, start: 0, end: 'max', scrub: .3, invalidateOnRefresh: true } });
    }
    if (document.querySelector('.contact-mark')) gsap.from('.contact-mark', { y: 80, rotation: -8, ease: 'none', scrollTrigger: { trigger: '.contact', start: 'top bottom', end: 'bottom bottom', scrub: 1 } });
  });
}

chapterButtons.forEach((button, index) => button.addEventListener('click', () => {
  if (storyTrigger && motionEnabled) {
    const target = storyTrigger.start + (storyTrigger.end - storyTrigger.start) * (index / 3 + .1);
    window.scrollTo({ top: target, behavior: 'smooth' });
  } else chapterElements[index]?.scrollIntoView({ behavior: 'auto', block: 'center' });
}));
motionToggle?.addEventListener('click', () => { motionEnabled = !motionEnabled; configureMotion(); });
desktopMotion.addEventListener('change', configureMotion);
reducedMotion.addEventListener('change', () => { motionEnabled = !reducedMotion.matches; configureMotion(); });
configureMotion();
document.fonts.ready.then(() => ScrollTrigger.refresh());
document.querySelectorAll('img').forEach((image) => image.addEventListener('load', () => ScrollTrigger.refresh(), { once: true }));
window.addEventListener('pagehide', (event) => { animationContext?.revert(); if (!event.persisted) scrollFilm?.dispose(); });
window.addEventListener('pageshow', (event) => { if (event.persisted) configureMotion(); });

const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
menuToggle?.setAttribute('aria-expanded', 'false');
menuToggle?.addEventListener('click', () => {
  const open = document.querySelector('nav')?.classList.toggle('is-open') ?? false;
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? 'Close' : 'Menu';
});
document.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => {
  document.querySelector('nav')?.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  if (menuToggle) menuToggle.textContent = 'Menu';
}));
