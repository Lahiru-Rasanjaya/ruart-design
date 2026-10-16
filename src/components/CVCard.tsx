import type { DesignItem } from '../data/types';
import { assetUrl } from '../utils/assets';
import { buildOrderLink, formatPrice } from '../utils/whatsapp';

interface Props {
  cv: DesignItem;
  /** "CV", "Tute", "Post" or "Logo". */
  label?: string;
  /** Preview shape: "210 / 297" (A4 portrait, default) or "1 / 1" (square). */
  aspect?: string;
  onPreview: (cv: DesignItem) => void;
}

export default function CVCard({ cv, label = 'CV', aspect = '210 / 297', onPreview }: Props) {
  const [aw, ah] = aspect.split('/').map((n) => Number(n.trim()));
  const imgHeight = Math.round((420 * ah) / aw);

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-brand-line bg-white shadow-card transition-shadow duration-200 hover:shadow-lift">
      <button
        type="button"
        onClick={() => onPreview(cv)}
        aria-label={`Preview ${cv.name}, ${cv.id}`}
        className="relative block w-full bg-brand-grey p-2 sm:p-3"
      >
        <img
          src={assetUrl(cv.image)}
          alt={`${cv.name} ${label} design preview, ${cv.id}`}
          width={420}
          height={imgHeight}
          loading="lazy"
          decoding="async"
          style={{ aspectRatio: aspect }}
          className="mx-auto block w-full border border-brand-line bg-white object-contain transition-transform duration-300 group-hover:scale-[1.02]"
        />
        {cv.placeholder && (
          <span className="absolute left-3 top-3 rounded-sm bg-brand-black/85 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white sm:left-4 sm:top-4">
            Sample
          </span>
        )}
        <span className="pointer-events-none absolute bottom-3 right-3 hidden rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-medium text-brand-black opacity-0 shadow-card transition-opacity duration-200 group-hover:opacity-100 sm:block">
          View larger
        </span>
      </button>

      <div className="flex flex-1 flex-col gap-1 p-3 sm:p-4">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-red">{cv.id}</p>
        <h3 className="text-sm font-bold leading-snug sm:text-base">{cv.name}</h3>
        <p className="text-sm font-semibold text-brand-black/80">{formatPrice(cv.price)}</p>
        <a
          href={buildOrderLink(cv, label)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Order ${cv.name} (${cv.id}) on WhatsApp`}
          className="btn-red mt-3 w-full !px-3 text-[13px] sm:text-sm"
          data-cv-id={cv.id}
        >
          Order This {label}
        </a>
      </div>
    </article>
  );
}
