import { useMemo, useState } from 'react';
import { cvTemplates } from '../data/cvTemplates';
import type { CVTemplate } from '../data/types';
import CVCard from './CVCard';

const ALL = 'All Designs';

interface Props {
  onPreview: (cv: CVTemplate) => void;
}

export default function CVGallery({ onPreview }: Props) {
  const [category, setCategory] = useState<string>(ALL);
  const [query, setQuery] = useState('');

  // Filter buttons are built from the categories used in the data file.
  const categories = useMemo(() => [ALL, ...Array.from(new Set(cvTemplates.map((t) => t.category)))], []);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return cvTemplates.filter((t) => {
      const inCategory = category === ALL || t.category === category;
      const matches = !q || t.name.toLowerCase().includes(q) || t.id.toLowerCase().includes(q);
      return inCategory && matches;
    });
  }, [category, query]);

  return (
    <section id="cv-designs" className="bg-white py-12 sm:py-16" aria-labelledby="cv-designs-title">
      <div className="container-page">
        <div className="mb-6 max-w-2xl sm:mb-8">
          <p className="section-eyebrow">Template gallery</p>
          <h2 id="cv-designs-title" className="section-title">
            CV Designs
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-brand-black/70">
            Browse the designs, tap a preview to see it larger, then order your favourite on WhatsApp. The CV
            name, number and price are filled in for you.
          </p>
        </div>

        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter CV designs by category">
            {categories.map((c) => {
              const active = c === category;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
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
            <label htmlFor="cv-search" className="sr-only">
              Search CV designs by name or number
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
              id="cv-search"
              type="search"
              inputMode="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name or CV number"
              className="h-11 w-full rounded-md border border-brand-line bg-white pl-9 pr-3 text-base placeholder:text-brand-black/40 focus:border-brand-black focus:outline-none sm:text-sm"
            />
          </div>
        </div>

        {visible.length > 0 ? (
          <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {visible.map((cv) => (
              <li key={cv.id} className="min-w-0">
                <CVCard cv={cv} onPreview={onPreview} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-lg border border-dashed border-brand-line bg-brand-grey px-4 py-10 text-center">
            <p className="font-semibold">No designs match your search.</p>
            <button
              type="button"
              onClick={() => {
                setCategory(ALL);
                setQuery('');
              }}
              className="btn-outline mt-4 !min-h-[40px]"
            >
              Show all designs
            </button>
          </div>
        )}

        <p className="mt-6 text-xs text-brand-black/55" aria-live="polite">
          Showing {visible.length} of {cvTemplates.length} designs
        </p>
      </div>
    </section>
  );
}
