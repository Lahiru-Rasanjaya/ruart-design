import { siteConfig } from '../data/site';
import { assetUrl } from '../utils/assets';

const steps = [
  { n: '1', title: 'Browse', text: 'Look through the CV designs and open any preview.' },
  { n: '2', title: 'Choose', text: 'Pick the design that suits your style and career.' },
  { n: '3', title: 'Order on WhatsApp', text: 'Tap the order button. Your message is ready to send.' },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-12 sm:py-16" aria-labelledby="about-title">
      <div className="container-page grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <p className="section-eyebrow">About RUart DESIGN</p>
          <h2 id="about-title" className="section-title">
            Creative Designs. Professional Results.
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-brand-black/75 sm:text-base">
            RUart DESIGN creates clean, attractive and professional graphic designs to help individuals and
            businesses present themselves with confidence.
          </p>
          <p className="mt-3 border-l-2 border-brand-red pl-3 text-sm font-semibold">{siteConfig.tagline}</p>

          <ol className="mt-6 grid gap-3 sm:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="rounded-lg border border-brand-line p-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-red text-xs font-bold text-white">
                  {s.n}
                </span>
                <h3 className="mt-3 text-sm font-bold">{s.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-brand-black/65">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex items-center justify-center rounded-lg border border-brand-line bg-brand-grey p-8 sm:p-12">
          <img
            src={assetUrl(siteConfig.logo)}
            alt={`${siteConfig.name} logo – ${siteConfig.tagline}`}
            width={1000}
            height={619}
            loading="lazy"
            className="h-auto w-full max-w-[16rem] sm:max-w-xs"
          />
        </div>
      </div>
    </section>
  );
}
