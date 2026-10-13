import { services } from '../data/services';

export default function ServicesSection() {
  return (
    <section id="services" className="bg-brand-grey py-12 sm:py-16" aria-labelledby="services-title">
      <div className="container-page">
        <div className="mb-6 max-w-2xl sm:mb-8">
          <p className="section-eyebrow">What we design</p>
          <h2 id="services-title" className="section-title">
            Our Services
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-brand-black/70">
            CV design is available now. More design services will be added over time.
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {services.map((s) => {
            const active = s.status === 'active';
            const body = (
              <>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-bold">{s.title}</h3>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                      active ? 'bg-brand-red text-white' : 'bg-brand-grey text-brand-black/60'
                    }`}
                  >
                    {active ? 'Available' : 'Coming Soon'}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-brand-black/70">{s.description}</p>
                {active && s.href && (
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-red">
                    View designs <span aria-hidden="true">→</span>
                  </span>
                )}
              </>
            );

            return (
              <li key={s.id}>
                {active && s.href ? (
                  <a
                    href={s.href}
                    className="block h-full rounded-lg border border-brand-red/40 bg-white p-4 shadow-card transition-shadow hover:shadow-lift sm:p-5"
                  >
                    {body}
                  </a>
                ) : (
                  <div className="h-full rounded-lg border border-brand-line bg-white/70 p-4 sm:p-5">{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
