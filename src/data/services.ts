import type { ServiceCategory } from './types.ts';

/**
 * ============================================================
 *  SERVICES  –  edit THIS file to add or activate a service
 * ============================================================
 *  • New service: add a block. Keep status 'coming-soon' until its content is ready.
 *  • Activate: set status to 'active' and set `href` to the section it should open.
 *  The "Our Services" section updates automatically.
 */
export const services: ServiceCategory[] = [
  {
    id: 'cv-design',
    title: 'CV Designs',
    description: 'Professional CV and resume templates. Choose one and order on WhatsApp.',
    status: 'active',
    href: '#designs',
  },
  {
    id: 'social-media',
    title: 'Social Media Posts',
    description: 'Clean, on-brand post designs for your business pages.',
    status: 'coming-soon',
  },
  {
    id: 'flyers-posters',
    title: 'Flyers and Posters',
    description: 'Eye-catching print and digital flyers and posters.',
    status: 'coming-soon',
  },
  {
    id: 'logo-design',
    title: 'Logo Design',
    description: 'A simple, memorable logo for your business.',
    status: 'coming-soon',
  },
  {
    id: 'business-cards',
    title: 'Business Cards',
    description: 'Professional business card designs ready for print.',
    status: 'coming-soon',
  },
];
