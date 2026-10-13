/** One CV design shown in the gallery. */
export interface CVTemplate {
  /** Unique CV number shown to customers and sent to WhatsApp, e.g. "CV-001". */
  id: string;
  /** Short template name, e.g. "Modern Professional". */
  name: string;
  /** Price in Sri Lankan Rupees (LKR). Every template can have its own price. */
  price: number;
  /** Image path inside the /public folder, e.g. "images/cv/cv-001.jpg". */
  image: string;
  /** Any text. Filter buttons are generated automatically from the categories you use. */
  category: string;
  /** Short description shown in the large preview. */
  description: string;
  /** Featured designs are used for the hero preview. */
  featured?: boolean;
  /**
   * true  = the image is a placeholder mockup (shows a "Sample" tag).
   * Set to false (or delete the line) once you replace the image with your own design.
   */
  placeholder?: boolean;
}

/** A design service. Only "active" services show a link; others show "Coming Soon". */
export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'coming-soon';
  /** Section id to scroll to when the service is active, e.g. "#cv-designs". */
  href?: string;
}
