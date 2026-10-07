import data from './site-data.json';
import copy from './product-content.json';

/** Product order follows the approved write-ups document. */
const productOrder = ['credanta', 'dpdp-shield', 'vulcan', 'cop-ai', 'cctv-investigation-workbench', 'crucible', 'mukeradb'] as const;
const artwork: Partial<Record<string, string>> = {
  credanta: '/assets/products/network-infrastructure.jpg',
  crucible: '/assets/products/crucible-concept.png',
  mukeradb: '/assets/products/mukeradb-concept.png',
};
export const products = productOrder.map(id => {
  const base = data.products.find(product => product.id === id)!;
  return { id, badge: base.badge, icon: base.icon, image: artwork[id] ?? base.image, ...copy[id] };
});
export const about = {
  ...data.about,
  leadership: data.about.leadership.map(leader => ({
    ...leader,
    image: leader.image === '/assets/saiesh-singh.png' ? '/assets/saiesh-singh-studio.png' : leader.image,
  })),
};
export const contact = data.contact;
export type Product = typeof products[number];

export const chapters = [
  { eyebrow: '01 / Gather', title: 'Bring signals together.', copy: 'Vulcan starts with the information your operation already creates — connected, legible and in view.' },
  { eyebrow: '02 / Resolve', title: 'Understand what belongs together.', copy: 'Entities, events and context find their relationship so teams can spend less time reconciling.' },
  { eyebrow: '03 / Act', title: 'Keep the right work moving.', copy: 'A focused operational view turns evidence into a next step, with the reason still attached.' }
];
