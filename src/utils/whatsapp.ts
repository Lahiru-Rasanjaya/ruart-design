import { siteConfig } from '../data/site.ts';
import type { CVTemplate } from '../data/types.ts';

/** "LKR 1,000" – locale fixed so the output is identical on every device. */
export function formatPrice(price: number): string {
  return `${siteConfig.currencyLabel} ${price.toLocaleString('en-US')}`;
}

/** The pre-filled message for one specific CV template. */
export function buildOrderMessage(cv: Pick<CVTemplate, 'id' | 'name' | 'price'>): string {
  return [
    'Hello RUart DESIGN! I would like to order the following CV design.',
    '',
    `CV Name: ${cv.name}`,
    `CV Number: ${cv.id}`,
    `Price: ${formatPrice(cv.price)}`,
    '',
    'Please provide more details about the ordering process.',
  ].join('\n');
}

/** https://wa.me/94719651951?text=<URL-encoded message> */
export function buildOrderLink(cv: Pick<CVTemplate, 'id' | 'name' | 'price'>): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(buildOrderMessage(cv))}`;
}

/** Plain chat link with no pre-filled text: https://wa.me/94719651951 */
export function buildContactLink(): string {
  return `https://wa.me/${siteConfig.whatsappNumber}`;
}

/** General enquiry (used by "Order Now" / "Order Your CV" when no template is chosen yet). */
export function buildGeneralOrderLink(): string {
  const text = 'Hello RUart DESIGN! I would like to order a CV design. Could you please share the details?';
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
