import { useEffect, useRef } from 'react';
import type { CVTemplate } from '../data/types';
import { assetUrl } from '../utils/assets';
import { buildOrderLink, formatPrice } from '../utils/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';

interface Props {
  cv: CVTemplate | null;
  onClose: () => void;
}

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function CVPreviewModal({ cv, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!cv) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;
      const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, [cv, onClose]);

  if (!cv) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-black/70 p-3 animate-fade-in"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
        className="relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-3xl flex-col overflow-y-auto rounded-lg bg-white shadow-lift md:grid md:grid-cols-[1fr_1fr] md:overflow-hidden"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close preview"
          className="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-brand-black shadow-card hover:bg-brand-grey"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="flex items-center justify-center bg-brand-grey p-4 md:max-h-[calc(100dvh-1.5rem)]">
          <img
            src={assetUrl(cv.image)}
            alt={`${cv.name} CV design preview, ${cv.id}`}
            width={420}
            height={594}
            className="h-auto max-h-[46dvh] w-auto max-w-full border border-brand-line bg-white object-contain shadow-card md:max-h-[calc(100dvh-4.5rem)]"
          />
        </div>

        <div className="flex flex-col gap-2 p-5 md:overflow-y-auto md:p-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-red">{cv.id}</p>
          <h2 id="cv-modal-title" className="text-xl font-extrabold tracking-tight sm:text-2xl">
            {cv.name}
          </h2>
          <p className="text-lg font-bold">{formatPrice(cv.price)}</p>
          <p className="text-sm leading-relaxed text-brand-black/75">{cv.description}</p>
          {cv.placeholder && (
            <p className="rounded-md bg-brand-grey px-3 py-2 text-xs text-brand-black/65">
              This is a sample placeholder preview.
            </p>
          )}
          <a
            href={buildOrderLink(cv)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red mt-3 w-full"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Order This CV on WhatsApp
          </a>
          <p className="text-center text-xs text-brand-black/55">
            Opens WhatsApp with your message ready to send.
          </p>
        </div>
      </div>
    </div>
  );
}
