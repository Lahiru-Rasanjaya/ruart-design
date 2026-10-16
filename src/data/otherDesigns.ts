import type { DesignItem } from './types.ts';

/**
 * ============================================================
 *  TUTE / POST / LOGO DESIGNS  –  edit THIS file
 * ============================================================
 *  The designs below are PLACEHOLDER mockups with PLACEHOLDER prices.
 *  They show a "Sample" tag on the website. Replace them with your own work:
 *
 *    1. Put your image in the matching folder:
 *         Tute -> public/images/tute/     Post -> public/images/post/
 *         Logo -> public/images/logo/     Banner -> public/images/banner/
 *    2. Change `image` to your file name, for example 'images/logo/logo-001.jpg'
 *    3. Change `name`, `price`, `description`
 *    4. DELETE the line `placeholder: true`  (the "Sample" tag then disappears)
 *
 *  To add one more design, copy a block and give it a NEW unique id (TU-004, PO-004, LG-004, BN-004 ...).
 *  To remove a design, delete its block.
 *
 *  Recommended image sizes (so nothing gets cropped or stretched):
 *    Tute  -> 840 x 1188 px  (A4 portrait)
 *    Post  -> 1080 x 1080 px (square)
 *    Logo  -> 1000 x 1000 px (square, white or transparent background)
 *    Banner -> 1680 x 720 px (wide, 7:3)
 *  JPG, PNG or WebP. Keep each file under about 200 KB so the site stays fast on mobile.
 */

export const tuteDesigns: DesignItem[] = [
  {
    id: 'TU-001',
    name: 'Bold Cover Page',
    price: 500,
    image: 'images/tute/tute-001.svg',
    category: 'Cover Page',
    description: 'A strong red header with space for the subject, class and teacher details.',
    placeholder: true,
  },
  {
    id: 'TU-002',
    name: 'Ruled Notes Page',
    price: 400,
    image: 'images/tute/tute-002.svg',
    category: 'Notes Page',
    description: 'A clean ruled page with a margin line and a highlighted key-points box.',
    placeholder: true,
  },
  {
    id: 'TU-003',
    name: 'Question Worksheet',
    price: 450,
    image: 'images/tute/tute-003.svg',
    category: 'Notes Page',
    description: 'A worksheet layout with name and date boxes and numbered answer areas.',
    placeholder: true,
  },
];

export const postDesigns: DesignItem[] = [
  {
    id: 'PO-001',
    name: 'Promo Square',
    price: 600,
    image: 'images/post/post-001.svg',
    category: 'Promotion',
    description: 'A split red and white promotion post with a bold headline and a button area.',
    placeholder: true,
  },
  {
    id: 'PO-002',
    name: 'Announcement Frame',
    price: 600,
    image: 'images/post/post-002.svg',
    category: 'Announcement',
    description: 'A framed post with a red banner, made for news, openings and notices.',
    placeholder: true,
  },
  {
    id: 'PO-003',
    name: 'Dark Quote Post',
    price: 500,
    image: 'images/post/post-003.svg',
    category: 'Announcement',
    description: 'A dark, high-contrast post for quotes and short messages.',
    placeholder: true,
  },
];

export const logoDesigns: DesignItem[] = [
  {
    id: 'LG-001',
    name: 'Monogram Circle',
    price: 3000,
    image: 'images/logo/logo-001.svg',
    category: 'Minimal',
    description: 'A simple circular monogram mark with a clean wordmark area.',
    placeholder: true,
  },
  {
    id: 'LG-002',
    name: 'Overlap Squares',
    price: 3500,
    image: 'images/logo/logo-002.svg',
    category: 'Creative',
    description: 'Two overlapping squares forming a modern geometric mark.',
    placeholder: true,
  },
  {
    id: 'LG-003',
    name: 'Badge Mark',
    price: 3500,
    image: 'images/logo/logo-003.svg',
    category: 'Creative',
    description: 'A rounded badge mark with a bold centred symbol.',
    placeholder: true,
  },
];

export const bannerDesigns: DesignItem[] = [
  {
    id: 'BN-001',
    name: 'Red Split Banner',
    price: 1500,
    image: 'images/banner/banner-001.svg',
    category: 'Promotion',
    description: 'A wide banner with a bold red panel, headline area and a call-to-action button.',
    placeholder: true,
  },
  {
    id: 'BN-002',
    name: 'Dark Highlight Banner',
    price: 1500,
    image: 'images/banner/banner-002.svg',
    category: 'Promotion',
    description: 'A dark, high-contrast banner with a red accent and a round highlight graphic.',
    placeholder: true,
  },
  {
    id: 'BN-003',
    name: 'Stripe Cover Banner',
    price: 1200,
    image: 'images/banner/banner-003.svg',
    category: 'Social Cover',
    description: 'A clean banner with a diagonal red stripe, good for page covers and headers.',
    placeholder: true,
  },
];
