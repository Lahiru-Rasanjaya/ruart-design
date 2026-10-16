/** One design (a CV, a logo, a post, a tute ...) shown in the gallery. */
export interface DesignItem {
  /** Unique number shown to customers and sent to WhatsApp, e.g. "CV-001", "LG-001". */
  id: string;
  /** Short design name, e.g. "Modern Professional". */
  name: string;
  /** Price in Sri Lankan Rupees (LKR). Every design can have its own price. */
  price: number;
  /** Image path inside the /public folder, e.g. "images/cv/cv-001.jpg". */
  image: string;
  /** Sub-category inside its tab. Filter buttons are generated automatically from the values you use. */
  category: string;
  /** Short description shown in the large preview. */
  description: string;
  /** Featured designs are used for the hero preview (CV designs only). */
  featured?: boolean;
  /**
   * true  = the image is a placeholder mockup (shows a "Sample" tag).
   * Set to false (or delete the line) once you replace the image with your own design.
   */
  placeholder?: boolean;
}

/** Kept so older code that imports CVTemplate keeps working. */
export type CVTemplate = DesignItem;

/** One tab of the design gallery: CV Designs, Tute Designs, Post Designs, Logo Designs ... */
export interface DesignCategory {
  /** Short unique id, e.g. "cv". */
  id: string;
  /** Tab title, e.g. "CV Designs". */
  title: string;
  /** Word used on buttons and WhatsApp messages, e.g. "CV" gives "Order This CV". */
  itemLabel: string;
  /** Short text shown under the tab bar. */
  description: string;
  /** Shape of the preview image on the cards: "210 / 297" (A4 portrait) or "1 / 1" (square). */
  aspect: string;
  /** The designs in this tab. An empty list shows a "Coming soon" message. */
  items: DesignItem[];
}

/** A design service. Only "active" services show a link; others show "Coming Soon". */
export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'coming-soon';
  /** Section id to scroll to when the service is active, e.g. "#designs". */
  href?: string;
}
