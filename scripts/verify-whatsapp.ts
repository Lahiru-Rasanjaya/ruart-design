// Run with: npm test
// Checks that every design in every category produces its own correct WhatsApp order link.
import { designCategories } from '../src/data/categories.ts';
import { siteConfig } from '../src/data/site.ts';
import {
  buildCategoryEnquiryLink,
  buildContactLink,
  buildOrderLink,
  buildOrderMessage,
} from '../src/utils/whatsapp.ts';

let failures = 0;
const check = (ok: boolean, label: string) => {
  if (!ok) failures++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}`);
};

const prefix = 'https://wa.me/94719651951?text=';

check(siteConfig.whatsappNumber === '94719651951', 'WhatsApp number is 94719651951 (local 0719651951 + country code 94)');
check(buildContactLink() === 'https://wa.me/94719651951', 'Contact link is https://wa.me/94719651951');
check(designCategories.length >= 5, 'CV, Tute, Post, Logo and Banner categories exist');

const ids = new Set<string>();
const links = new Set<string>();
let total = 0;

for (const cat of designCategories) {
  const enquiry = buildCategoryEnquiryLink(cat.title);
  check(enquiry.startsWith(prefix), `${cat.title}: enquiry link uses the wa.me pattern`);

  for (const item of cat.items) {
    total++;
    const link = buildOrderLink(item, cat.itemLabel);
    const decoded = link.startsWith(prefix) ? decodeURIComponent(link.slice(prefix.length)) : '';
    const expected =
      `Hello RUart DESIGN! I would like to order the following ${cat.itemLabel} design.\n\n` +
      `${cat.itemLabel} Name: ${item.name}\n` +
      `${cat.itemLabel} Number: ${item.id}\n` +
      `Price: LKR ${item.price.toLocaleString('en-US')}\n\n` +
      'Please provide more details about the ordering process.';

    check(link.startsWith(prefix), `${item.id} link uses the wa.me URL pattern`);
    check(decoded === expected, `${item.id} message contains its own name, number and price`);
    check(!/[\n ]/.test(link), `${item.id} link is fully URL-encoded (no raw spaces or line breaks)`);
    ids.add(item.id);
    links.add(link);
  }
}

check(ids.size === total, 'All design numbers are unique across every category');
check(links.size === total, 'Every card produces a different WhatsApp link');

// Sample for a category that has no designs yet, to show the message format for Tute / Post / Logo.
const sample = buildOrderMessage({ id: 'LG-001', name: 'Sample Logo', price: 3000 }, 'Logo');
check(sample.includes('Logo Name: Sample Logo') && sample.includes('Logo Number: LG-001') && sample.includes('LKR 3,000'), 'Logo message format is correct');

const cv1 = designCategories[0].items[0];
if (cv1) console.log('\nSample message for ' + cv1.id + ':\n' + '-'.repeat(40) + '\n' + buildOrderMessage(cv1) + '\n' + '-'.repeat(40));

if (failures > 0) {
  console.error(`\n${failures} check(s) failed.`);
  process.exit(1);
}
console.log('\nAll WhatsApp checks passed.');
