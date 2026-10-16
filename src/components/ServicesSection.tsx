import { designCategories } from '../data/categories';
import { assetUrl } from '../utils/assets';
import { isWideAspect } from '../utils/aspect';
import { categoryHref } from '../utils/route';

/**
 * The home page list of services. It is built from src/data/categories.ts,
 * so a new category added there gets its own card and its own page automatically.
 */
export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-12 sm:py-16" aria-labelledby="services-title">
      <div className="container-page">
        <div className="mb-6 max-w-2xl sm:mb-8">
          <p className="section-eyebrow">What we design</p>
          <h2 id="services-title" className="section-title">
            Our Services
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-brand-black/70">
            Choose a service to browse its designs, then order your favourite directly on WhatsApp.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5">
          {designCategories.map((c) => {
            const count = c.items.length;
            const wide = isWideAspect(c.aspect);
            const previews = c.items.slice(0, wide ? 2 : 3);
            const hasSamples = c.items.some((i) => i.placeholder);
            return (
              <li key={c.id} className="min-w-0">
                <a
                  href={categoryHref(c.id)}
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-brand-line bg-white shadow-card transition-shadow duration-200 hover:shadow-lift"
                >
                  <div
                    className={`relative flex h-28 justify-center overflow-hidden bg-brand-grey sm:h-40 ${
                      wide ? 'flex-col items-center gap-1.5 p-2' : 'items-end gap-1.5 px-3 pt-3 sm:gap-2'
                    }`}
                  >
                    {previews.length > 0 ? (
                      previews.map((p) => (
                        <img
                          key={p.id}
                          src={assetUrl(p.image)}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className={
                            wide
                              ? 'aspect-[7/3] w-[70%] border border-brand-line bg-white object-cover shadow-card sm:w-[78%]'
                              : 'h-full w-auto max-w-[32%] border border-brand-line bg-white object-cover object-top shadow-card transition-transform duration-300 group-hover:-translate-y-1'
                          }
                        />
                      ))
                    ) : (
                      <span className="self-center text-xs font-semibold uppercase tracking-[0.14em] text-brand-black/40">
                        Coming soon
                      </span>
                    )}
                    {hasSamples && (
                      <span className="absolute left-2 top-2 rounded-sm bg-brand-black/85 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white">
                        Sample
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col gap-1 p-3 sm:p-4">
                    <h3 className="text-sm font-bold leading-snug sm:text-base">{c.title}</h3>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-red">
                      {count > 0 ? `${count} ${count === 1 ? 'design' : 'designs'}` : 'Coming soon'}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold text-brand-black group-hover:text-brand-red">
                      {count > 0 ? 'View designs' : 'Learn more'} <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
