import { siteConfig } from '../data/site';
import { assetUrl } from '../utils/assets';
import { buildContactLink } from '../utils/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';
import { FacebookIcon, MailIcon } from './SocialIcons';

export default function Footer() {
  const year = new Date().getFullYear();
  const iconBtn =
    'flex h-11 w-11 items-center justify-center rounded-full border border-brand-line text-brand-black transition-colors hover:border-brand-red hover:bg-brand-red hover:text-white';

  return (
    <footer className="pt-8 pb-20 bg-white border-t border-brand-line sm:pb-10">
      <div className="flex flex-col items-center text-center container-page">
        <img
          src={assetUrl(siteConfig.logo)}
          alt={`${siteConfig.name} logo`}
          width={1000}
          height={619}
          loading="lazy"
          className="w-32 h-auto sm:w-40"
        />

        <ul className="flex items-center gap-3 pt-4" aria-label="Contact RUart DESIGN">
          <li>
            <a
              href={buildContactLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${siteConfig.whatsappDisplay}`}
              title={`WhatsApp ${siteConfig.whatsappDisplay}`}
              className={iconBtn}
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
          </li>
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
          {siteConfig.socialLinks
            .filter((s) => s.label.toLowerCase() === 'facebook')
            .map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="RUart DESIGN on Facebook"
                  title="Facebook"
                  className={iconBtn}
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
              </li>
            ))}
        </ul>

        <p className="w-full pt-4 mt-6 text-xs border-t border-brand-line text-brand-black/55">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
