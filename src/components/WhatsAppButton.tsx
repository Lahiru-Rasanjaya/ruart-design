import { buildContactLink } from '../utils/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';

/** Small floating contact button. Sits in the corner and is kept compact so it never covers content. */
export default function WhatsAppButton() {
  return (
    <a
      href={buildContactLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with RUart DESIGN on WhatsApp"
      className="fixed bottom-3 right-3 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-brand-black text-white shadow-lift ring-2 ring-white transition-colors hover:bg-brand-red sm:bottom-5 sm:right-5"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
