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
    <section id="contact" className="py-12 bg-brand-grey sm:py-16" aria-labelledby="contact-title">
      <div className="container-page">
        <div className="flex flex-col items-center max-w-2xl px-5 py-8 mx-auto text-center bg-white border rounded-lg border-brand-line shadow-card sm:px-10 sm:py-10">
          <img
            src={assetUrl(siteConfig.logo)}
            alt={`${siteConfig.name} logo`}
            width={1000}
            height={619}
            loading="lazy"
            className="h-auto w-44 sm:w-52"
          />
          <p className="mt-6 section-eyebrow">Contact</p>
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
            <WhatsAppIcon className="w-5 h-5" />
            Chat on WhatsApp
          </a>
          <p className="mt-3 text-sm font-medium text-brand-black/70">{siteConfig.whatsappDisplay}</p>

          {(siteConfig.email || facebook) && (
            <ul className="flex items-center justify-center gap-3 mt-5" aria-label="More ways to contact RUart DESIGN">
              {siteConfig.email && (
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    aria-label={`Email ${siteConfig.email}`}
                    title={siteConfig.email}
                    className={iconBtn}
                  >
                    <MailIcon className="w-5 h-5" />
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
                    <FacebookIcon className="w-5 h-5" />
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