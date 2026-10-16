import { useMemo, useState } from 'react';
import { designCategories } from '../data/categories';
import type { DesignCategory, DesignItem } from '../data/types';
import { isWideAspect } from '../utils/aspect';
import { categoryHref } from '../utils/route';
import { buildCategoryEnquiryLink } from '../utils/whatsapp';
import CVCard from './CVCard';
import WhatsAppIcon from './WhatsAppIcon';

const ALL = 'All Designs';

interface Props {
  category: DesignCategory;
  onPreview: (item: DesignItem, label: string) => void;
}

/** One page per service: CV Designs, Tute Designs, Post Designs, Logo Designs ... */
export default function CategoryPage({ category, onPreview }: Props) {
  const [filter, setFilter] = useState<string>(ALL);
  const [query, setQuery] = useState('');
  const hasItems = category.items.length > 0;
  // Wide pictures (banners) get bigger cards so the design stays readable.
  const gridClass = isWideAspect(category.aspect)
    ? 'grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6'
    : 'grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6';

  // Filter buttons are built from the sub-categories used in the data file.
  const subCategories = useMemo(
    () => [ALL, ...Array.from(new Set(category.items.map((t) => t.category)))],
    [category],
  );

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return category.items.filter((t) => {
      const inCategory = filter === ALL || t.category === filter;
      const matches = !q || t.name.toLowerCase().includes(q) || t.id.toLowerCase().includes(q);
      return inCategory && matches;
    });
  }, [category, filter, query]);

  return (
    <section id="designs" aria-labelledby="designs-title">
      {/* Second navigation: switch between the services */}
      <div className="sticky top-14 z-30 border-b border-brand-line bg-white/95 backdrop-blur md:top-[72px]">
        <div className="container-page">
          <nav
            aria-label="Design categories"
            className="flex gap-2 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {designCategories.map((c) => {
              const active = c.id === category.id;
              return (
                <a
                  key={c.id}
                  href={categoryHref(c.id)}
                  aria-current={active ? 'page' : undefined}
                  className={`inline-flex min-h-[40px] shrink-0 items-center whitespace-nowrap rounded-full border px-4 text-sm font-semibold transition-colors ${
                    active
                      ? 'border-brand-red bg-brand-red text-white'
                      : 'border-brand-line bg-white text-brand-black hover:border-brand-red hover:text-brand-red'
                  }`}
                >
                  {c.title}
                  {c.items.length === 0 && (
                    <span
                      className={`ml-2 text-[9px] font-bold uppercase tracking-wider ${
                        active ? 'text-white/80' : 'text-brand-black/45'
                      }`}
                    >
                      Soon
                    </span>
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="container-page py-8 sm:py-12">
        <a
          href="#services"
          className="mb-5 inline-flex min-h-[40px] items-center gap-1 text-sm font-semibold text-brand-black/70 hover:text-brand-red"
        >
          <span aria-hidden="true">←</span> All services
        </a>

        <div className="mb-6 max-w-2xl sm:mb-8">
          <p className="section-eyebrow">Design gallery</p>
          <h1 id="designs-title" className="section-title">
            {category.title}
          </h1>
          <p className="mt-2 text-[15px] leading-relaxed text-brand-black/70">{category.description}</p>
        </div>

        {hasItems ? (
          <>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2" role="group" aria-label={`Filter ${category.title}`}>
                {subCategories.map((c) => {
                  const active = c === filter;
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setFilter(c)}
                      aria-pressed={active}
                      className={`min-h-[40px] rounded-full border px-4 text-[13px] font-medium transition-colors ${
                        active
                          ? 'border-brand-black bg-brand-black text-white'
                          : 'border-brand-line bg-white text-brand-black hover:border-brand-black'
                      }`}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>

              <div className="relative w-full sm:w-64">
                <label htmlFor="design-search" className="sr-only">
                  Search designs by name or number
                </label>
                <svg
                  viewBox="0 0 24 24"
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-black/45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-3.5-3.5" />
                </svg>
                <input
                  id="design-search"
                  type="search"
                  inputMode="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search name or number"
                  className="h-11 w-full rounded-md border border-brand-line bg-white pl-9 pr-3 text-base placeholder:text-brand-black/40 focus:border-brand-black focus:outline-none sm:text-sm"
                />
              </div>
            </div>

            {visible.length > 0 ? (
              <ul className={gridClass}>
                {visible.map((item) => (
                  <li key={item.id} className="min-w-0">
                    <CVCard
                      cv={item}
                      label={category.itemLabel}
                      aspect={category.aspect}
                      onPreview={(it) => onPreview(it, category.itemLabel)}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="rounded-lg border border-dashed border-brand-line bg-brand-grey px-4 py-10 text-center">
                <p className="font-semibold">No designs match your search.</p>
                <button
                  type="button"
                  onClick={() => {
                    setFilter(ALL);
                    setQuery('');
                  }}
                  className="btn-outline mt-4 !min-h-[40px]"
                >
                  Show all designs
                </button>
              </div>
            )}

            <p className="mt-6 text-xs text-brand-black/55" aria-live="polite">
              Showing {visible.length} of {category.items.length} designs
            </p>
          </>
        ) : (
          <div className="rounded-lg border border-dashed border-brand-line bg-brand-grey px-4 py-10 text-center">
            <p className="font-semibold">{category.title} are coming soon.</p>
            <p className="mx-auto mt-1 max-w-md text-sm text-brand-black/65">
              New designs will be added here. You can message RUart DESIGN on WhatsApp to ask about{' '}
              {category.title.toLowerCase()}.
            </p>
            <a
              href={buildCategoryEnquiryLink(category.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red mt-4"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Ask on WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
