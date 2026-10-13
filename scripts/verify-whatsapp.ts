// Run with: npm test
// Checks that every CV template produces its own correct WhatsApp order link.
import { cvTemplates } from '../src/data/cvTemplates.ts';
import { siteConfig } from '../src/data/site.ts';
import { buildContactLink, buildOrderLink, buildOrderMessage } from '../src/utils/whatsapp.ts';

let failures = 0;
const check = (ok: boolean, label: string) => {
  if (!ok) failures++;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}`);
};

check(siteConfig.whatsappNumber === '94719651951', 'WhatsApp number is 94719651951 (local 0719651951 + country code 94)');
check(buildContactLink() === 'https://wa.me/94719651951', 'Contact link is https://wa.me/94719651951');

const ids = new Set<string>();
const links = new Set<string>();

for (const cv of cvTemplates) {
  const link = buildOrderLink(cv);
  const prefix = 'https://wa.me/94719651951?text=';
  const decoded = link.startsWith(prefix) ? decodeURIComponent(link.slice(prefix.length)) : '';
  const expected =
    'Hello RUart DESIGN! I would like to order the following CV design.\n\n' +
    `CV Name: ${cv.name}\n` +
    `CV Number: ${cv.id}\n` +
    `Price: LKR ${cv.price.toLocaleString('en-US')}\n\n` +
    'Please provide more details about the ordering process.';

  check(link.startsWith(prefix), `${cv.id} link uses the wa.me URL pattern`);
  check(decoded === expected, `${cv.id} message contains its own name, number and price`);
  check(buildOrderMessage(cv) === expected, `${cv.id} message builder matches the required format`);
  check(!/[\n ]/.test(link), `${cv.id} link is fully URL-encoded (no raw spaces or line breaks)`);

  ids.add(cv.id);
  links.add(link);
}

check(ids.size === cvTemplates.length, 'All CV numbers are unique');
check(links.size === cvTemplates.length, 'Every card produces a different WhatsApp link');

const cv1 = cvTemplates.find((c) => c.id === 'CV-001');
if (cv1) console.log('\nSample message for CV-001:\n' + '-'.repeat(40) + '\n' + buildOrderMessage(cv1) + '\n' + '-'.repeat(40));

if (failures > 0) {
  console.error(`\n${failures} check(s) failed.`);
  process.exit(1);
}
console.log('\nAll WhatsApp checks passed.');
