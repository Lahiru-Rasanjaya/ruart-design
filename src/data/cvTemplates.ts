import type { CVTemplate } from './types.ts';

/**
 * ============================================================
 *  CV TEMPLATES  –  edit THIS file to manage the whole gallery
 * ============================================================
 *  • Add a design    -> copy one block, give it a new unique id, image, name and price.
 *  • Remove a design -> delete its block.
 *  • Change a price  -> edit the `price` number (LKR).
 *  • Use your own image -> put the file in /public/images/cv/ and set `image`,
 *    then remove `placeholder: true`.
 *
 *  The WhatsApp message for each card is generated automatically from these values.
 *
 *  NOTE: The images below are PLACEHOLDER mockups and the prices are PLACEHOLDER
 *  prices. Replace them with your real designs and real prices.
 */
export const cvTemplates: CVTemplate[] = [
  {
    id: 'CV-001',
    name: 'Modern Professional',
    price: 1000,
    image: 'images/cv/cv-001.svg',
    category: 'Professional',
    description:
      'A structured two-column layout with a dark sidebar for contact details and skills, and a clear main column for your profile and experience.',
    featured: true,
    placeholder: true,
  },
  {
    id: 'CV-002',
    name: 'Minimal Elegant',
    price: 800,
    image: 'images/cv/cv-002.svg',
    category: 'Minimal',
    description:
      'A light, centred layout with generous spacing and fine detail. Calm and easy to read, ideal for a clean first impression.',
    featured: true,
    placeholder: true,
  },
  {
    id: 'CV-003',
    name: 'Creative Resume',
    price: 1500,
    image: 'images/cv/cv-003.svg',
    category: 'Creative',
    description:
      'A bold header with a photo area and skill bars. A confident choice for creative and design-focused roles.',
    featured: true,
    placeholder: true,
  },
  {
    id: 'CV-004',
    name: 'Executive Style',
    price: 1800,
    image: 'images/cv/cv-004.svg',
    category: 'Professional',
    description:
      'A strong header band with clear section rules. Built for experienced professionals with a longer work history.',
    placeholder: true,
  },
  {
    id: 'CV-005',
    name: 'Clean Sidebar',
    price: 1200,
    image: 'images/cv/cv-005.svg',
    category: 'Modern',
    description:
      'A soft grey sidebar with a timeline for your experience, giving a modern and organised look.',
    placeholder: true,
  },
  {
    id: 'CV-006',
    name: 'Simple Classic',
    price: 700,
    image: 'images/cv/cv-006.svg',
    category: 'Minimal',
    description:
      'A traditional label-and-content layout with no distractions. Works well for formal applications.',
    placeholder: true,
  },
  {
    id: 'CV-007',
    name: 'Bold Portfolio',
    price: 1600,
    image: 'images/cv/cv-007.svg',
    category: 'Creative',
    description:
      'A large red header block with a round photo area and highlight cards, made to stand out.',
    placeholder: true,
  },
  {
    id: 'CV-008',
    name: 'Fresh Graduate',
    price: 900,
    image: 'images/cv/cv-008.svg',
    category: 'Modern',
    description:
      'A friendly layout with a skills column and room for education and first experience. Great for new graduates.',
    placeholder: true,
  },
];
