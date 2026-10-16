import { designCategories } from '../data/categories';
import type { DesignItem } from '../data/types';
import { assetUrl } from '../utils/assets';
import { buildGeneralOrderLink } from '../utils/whatsapp';

/** The featured design of a category (or its first one) for the hero collage. */
function pick(categoryId: string): { item: DesignItem; label: string } | undefined {
  const cat = designCategories.find((c) => c.id === categoryId);
  const item = cat?.items.find((i) => i.featured) ?? cat?.items[0];
  return cat && item ? { item, label: cat.itemLabel } : undefined;
}

export default function HeroSection() {
  const cv = pick('cv');
  const logo = pick('logo');
  const post = pick('post');
  const banner = pick('banner');

  const showsPlaceholders = [cv, logo, post, banner].some((p) => p?.item.placeholder);

  const frame = 'absolute overflow-hidden rounded-[4px] border border-brand-line bg-white shadow-lift';

  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-brand-grey lg:hidden" aria-hidden="true" />
      <div className="absolute right-0 top-0 hidden h-full w-[42%] bg-brand-grey lg:block" aria-hidden="true" />

      <div className="container-page relative grid items-center gap-8 py-8 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-16">
        <div className="animate-fade-up">
          <p className="section-eyebrow">Graphic design · Sri Lanka</p>
          <h1 className="text-[1.75rem] font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
            Professional Designs That Make You <span className="text-brand-red">Stand Out</span>
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-brand-black/75 sm:text-base">
            Find a design that matches your style and goals. Choose your favourite and order directly through
            WhatsApp.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#services" className="btn-red sm:min-w-[11rem]">
              Explore Designs
            </a>
            <a
              href={buildGeneralOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline sm:min-w-[11rem]"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>

        {/* Collage: CV, Logo, Post and Banner designs */}
        <div className="animate-fade-up [animation-delay:120ms]">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-md lg:max-w-none">
            {cv && (
              <div className={`${frame} left-[3%] top-[5%] z-10 w-[30%] -rotate-3`} style={{ aspectRatio: '210 / 297' }}>
                <img
                  src={assetUrl(cv.item.image)}
                  alt={`${cv.item.name} CV design preview, ${cv.item.id}`}
                  width={420}
                  height={594}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            {logo && (
              <div className={`${frame} left-[37%] top-[11%] z-20 w-[25%]`} style={{ aspectRatio: '1 / 1' }}>
                <img
                  src={assetUrl(logo.item.image)}
                  alt={`${logo.item.name} Logo design preview, ${logo.item.id}`}
                  width={420}
                  height={420}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            {post && (
              <div className={`${frame} right-[3%] top-[4%] z-10 w-[31%] rotate-3`} style={{ aspectRatio: '1 / 1' }}>
                <img
                  src={assetUrl(post.item.image)}
                  alt={`${post.item.name} Post design preview, ${post.item.id}`}
                  width={420}
                  height={420}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
            {banner && (
              <div className={`${frame} bottom-[3%] left-[18%] z-30 w-[64%]`} style={{ aspectRatio: '7 / 3' }}>
                <img
                  src={assetUrl(banner.item.image)}
                  alt={`${banner.item.name} Banner design preview, ${banner.item.id}`}
                  width={840}
                  height={360}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </div>
          {showsPlaceholders && (
            <p className="mt-2 text-center text-[11px] uppercase tracking-[0.14em] text-brand-black/45">
              Sample placeholder previews
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
