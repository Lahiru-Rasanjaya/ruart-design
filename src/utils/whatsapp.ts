import { siteConfig } from '../data/site.ts';
import type { DesignItem } from '../data/types.ts';

type OrderItem = Pick<DesignItem, 'id' | 'name' | 'price'>;

/** "LKR 1,000" – locale fixed so the output is identical on every device. */
export function formatPrice(price: number): string {
  return `${siteConfig.currencyLabel} ${price.toLocaleString('en-US')}`;
}

/**
 * The pre-filled message for one specific design.
 * `label` is the kind of design: "CV" (default), "Tute", "Post" or "Logo".
 */
export function buildOrderMessage(item: OrderItem, label = 'CV'): string {
  return [
    `Hello RUart DESIGN! I would like to order the following ${label} design.`,
    '',
    `${label} Name: ${item.name}`,
    `${label} Number: ${item.id}`,
    `Price: ${formatPrice(item.price)}`,
    '',
    'Please provide more details about the ordering process.',
  ].join('\n');
}

/** https://wa.me/94719651951?text=<URL-encoded message> */
export function buildOrderLink(item: OrderItem, label = 'CV'): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(buildOrderMessage(item, label))}`;
}

/** Plain chat link with no pre-filled text: https://wa.me/94719651951 */
export function buildContactLink(): string {
  return `https://wa.me/${siteConfig.whatsappNumber}`;
}

/** General enquiry (used by "Order Now" / "Order Your CV" when no template is chosen yet). */
export function buildGeneralOrderLink(): string {
  const text = 'Hello RUart DESIGN! I would like to place a design order. Could you please share the details?';
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

/** Enquiry for a category that has no designs yet, e.g. "Logo Designs". */
export function buildCategoryEnquiryLink(title: string): string {
  const text = `Hello RUart DESIGN! I would like to ask about ${title}. Could you please share the details?`;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
