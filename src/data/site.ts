export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export const siteConfig = {
  name: 'RUart DESIGN',
  tagline: "Let's Bring Your Designs To Life",
  /** International format WITHOUT "+" or leading 0 (Sri Lanka = 94). Local 0719651951 -> 94719651951 */
  whatsappNumber: '94719651951',
  /** Number as displayed to visitors. */
  whatsappDisplay: '+94 71 965 1951',
  /** Contact email shown in the footer. Leave empty ('') to hide it. */
  email: 'ruartdesignlk@gmail.com',
  currencyLabel: 'LKR',

  /** Logo files live in /public/images. Replace them to update the logo everywhere. */
  logo: 'images/logo.png',
  logoCompact: 'images/logo-header.png',

  /**
   * Add social media links ONLY when you have the real URLs, for example:
   *   { label: 'Facebook', url: 'https://www.facebook.com/your-real-page' }
   * They will appear automatically in the Contact section and footer.
   */
  socialLinks: [
    { label: 'Facebook', url: 'https://www.facebook.com/ruart.design' },
  ] as SocialLink[],
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];
