import { siteConfig } from '../data/site';
import { assetUrl } from '../utils/assets';
import { buildContactLink } from '../utils/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';
import { FacebookIcon, MailIcon } from './SocialIcons';

export default function ContactSection() {
  const iconBtn =
    'flex h-11 w-11 items-center justify-center rounded-full border border-brand-line text-brand-black transition-colors hover:border-brand-red hover:bg-brand-red hover:text-white';
  const facebook = siteConfig.socialLinks.find((s) => s.label.toLowerCase() === 'facebook');

  return (
    <section id="contact" className="bg-brand-grey py-12 sm:py-16" aria-labelledby="contact-title">
      <div className="container-page">
        <div className="mx-auto flex max-w-2xl flex-col items-center rounded-lg border border-brand-line bg-white px-5 py-8 text-center shadow-card sm:px-10 sm:py-10">
          <img
            src={assetUrl(siteConfig.logo)}
            alt={`${siteConfig.name} logo`}
            width={1000}
            height={619}
            loading="lazy"
            className="h-auto w-44 sm:w-52"
          />
          <p className="section-eyebrow mt-6">Contact</p>
          <h2 id="contact-title" className="section-title">
            Let's talk on WhatsApp
          </h2>
          <p className="mt-2 max-w-md text-[15px] leading-relaxed text-brand-black/70">
            Have a question or want to order a design? Send a message and RUart DESIGN will get back to you.
          </p>

          <a
            href={buildContactLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red mt-6 w-full sm:w-auto sm:min-w-[14rem]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chat on WhatsApp
          </a>
          <p className="mt-3 text-sm font-medium text-brand-black/70">{siteConfig.whatsappDisplay}</p>

          {(siteConfig.email || facebook) && (
            <ul className="mt-5 flex items-center justify-center gap-3" aria-label="More ways to contact RUart DESIGN">
              {siteConfig.email && (
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    aria-label={`Email ${siteConfig.email}`}
                    title={siteConfig.email}
                    className={iconBtn}
                  >
                    <MailIcon className="h-5 w-5" />
                  </a>
                </li>
              )}
              {facebook && (
                <li>
                  <a
                    href={facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="RUart DESIGN on Facebook"
                    title="Facebook"
                    className={iconBtn}
                  >
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
