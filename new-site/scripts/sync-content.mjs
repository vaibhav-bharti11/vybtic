import { writeFile, cp, mkdir } from 'node:fs/promises';
import { productsData } from '../../src/data/productsData.js';
import { aboutData } from '../../src/data/aboutData.js';
import { contactChannels } from '../../src/data/siteContent.js';

// Keep the standalone build's content faithful to the original site.
await writeFile(new URL('../src/site-data.json', import.meta.url), JSON.stringify({ products: productsData, about: aboutData, contact: contactChannels }, null, 2) + '\n');
await mkdir(new URL('../public/assets/', import.meta.url), { recursive: true });
await cp(new URL('../../public/assets/', import.meta.url), new URL('../public/assets/', import.meta.url), { recursive: true });
console.log('Copied seven products, company copy, founders, contact channels and original artwork.');
