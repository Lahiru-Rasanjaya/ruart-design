import type { DesignCategory } from './types.ts';
import { cvTemplates } from './cvTemplates.ts';
import { tuteDesigns, postDesigns, logoDesigns, bannerDesigns } from './otherDesigns.ts';

/**
 * ============================================================
 *  DESIGN CATEGORIES  –  the tabs under the main menu
 * ============================================================
 *  • The order here is the order of the tabs.
 *  • A category with no items shows a "Coming soon" message.
 *  • New tab: add a block here and create a list of designs for it
 *    (for example in otherDesigns.ts).
 */
export const designCategories: DesignCategory[] = [
  {
    id: 'cv',
    title: 'CV Designs',
    itemLabel: 'CV',
    aspect: '210 / 297',
    description:
      'Browse the designs, tap a preview to see it larger, then order your favourite on WhatsApp. The CV name, number and price are filled in for you.',
    items: cvTemplates,
  },
  {
    id: 'tute',
    title: 'Tute Designs',
    itemLabel: 'Tute',
    aspect: '210 / 297',
    description: 'Clean, easy-to-read tute designs. Tap a preview to see it larger, then order on WhatsApp.',
    items: tuteDesigns,
  },
  {
    id: 'post',
    title: 'Post Designs',
    itemLabel: 'Post',
    aspect: '1 / 1',
    description: 'Social media post designs for your business or page. Tap a preview, then order on WhatsApp.',
    items: postDesigns,
  },
  {
    id: 'logo',
    title: 'Logo Designs',
    itemLabel: 'Logo',
    aspect: '1 / 1',
    description: 'Simple, memorable logo designs for your business. Tap a preview, then order on WhatsApp.',
    items: logoDesigns,
  },
  {
    id: 'banner',
    title: 'Banner Designs',
    itemLabel: 'Banner',
    aspect: '7 / 3',
    description: 'Wide banner designs for pages, shops and promotions. Tap a preview, then order on WhatsApp.',
    items: bannerDesigns,
  },
];
