import { cvTemplates } from '../data/cvTemplates';
import { assetUrl } from '../utils/assets';
import { buildGeneralOrderLink } from '../utils/whatsapp';

export default function HeroSection() {
  // Hero uses featured designs first, then fills up from the rest of the list.
  const featured = cvTemplates.filter((t) => t.featured);
  const rest = cvTemplates.filter((t) => !t.featured);
  const previews = [...featured, ...rest].slice(0, 3);
  const showsPlaceholders = previews.some((p) => p.placeholder);

  // left card, centre card, right card
  const [left, centre, right] = previews;

  const frame =
    'absolute overflow-hidden rounded-[4px] border border-brand-line bg-white shadow-lift aspect-[210/297]';

  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-brand-grey lg:hidden" aria-hidden="true" />
      <div className="absolute right-0 top-0 hidden h-full w-[42%] bg-brand-grey lg:block" aria-hidden="true" />

      <div className="container-page relative grid items-center gap-8 py-8 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-16">
        <div className="animate-fade-up">
          <p className="section-eyebrow">Graphic design · Sri Lanka</p>
          <h1 className="text-[1.75rem] font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
            Professional CV Designs That Make You <span className="text-brand-red">Stand Out</span>
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-brand-black/75 sm:text-base">
            Find a CV design that matches your style and career goals. Choose your favourite template and order
            directly through WhatsApp.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#cv-designs" className="btn-red sm:min-w-[11rem]">
              Explore CV Designs
            </a>
            <a
              href={buildGeneralOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline sm:min-w-[11rem]"
            >
              Order Your CV
            </a>
          </div>
        </div>

        {left && centre && right && (
          <div className="animate-fade-up [animation-delay:120ms]">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-md lg:max-w-none">
              <div className={`${frame} left-[2%] top-[12%] w-[35%] -rotate-6`}>
                <img
                  src={assetUrl(left.image)}
                  alt={`${left.name} CV design preview, ${left.id}`}
                  width={420}
                  height={594}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className={`${frame} right-[2%] top-[12%] w-[35%] rotate-6`}>
                <img
                  src={assetUrl(right.image)}
                  alt={`${right.name} CV design preview, ${right.id}`}
                  width={420}
                  height={594}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className={`${frame} left-1/2 top-0 z-10 w-[41%] -translate-x-1/2`}>
                <img
                  src={assetUrl(centre.image)}
                  alt={`${centre.name} CV design preview, ${centre.id}`}
                  width={420}
                  height={594}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            {showsPlaceholders && (
              <p className="mt-2 text-center text-[11px] uppercase tracking-[0.14em] text-brand-black/45">
                Sample placeholder previews
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
