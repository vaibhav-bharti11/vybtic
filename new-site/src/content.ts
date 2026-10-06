import data from './site-data.json';
import drafts from './product-drafts.json';
export const products = data.products.map(product => {
  const draft = (drafts as Record<string, Partial<typeof data.products[number]>>)[product.id];
  return { ...product, ...draft, copyStatus: draft ? 'proposed' : 'source' };
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
