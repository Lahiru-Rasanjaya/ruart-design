import { useEffect, useState } from 'react';
import { navLinks, siteConfig } from '../data/site';
import { assetUrl } from '../utils/assets';
import { buildGeneralOrderLink } from '../utils/whatsapp';

interface Props {
  /** true while a service page (CV, Logo ...) is open instead of the home page. */
  onCategoryPage?: boolean;
}

export default function Navbar({ onCategoryPage = false }: Props) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(navLinks[0]?.href ?? '#home');

  // Highlights the menu link of the section the visitor is currently viewing.
  useEffect(() => {
    // On a service page, "Services" is the active menu item.
    if (onCategoryPage) {
      setActive('#services');
      return;
    }
    const ids = navLinks.map((l) => l.href.slice(1));
    const update = () => {
      const y = window.scrollY + 120;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      if (atBottom) current = ids[ids.length - 1];
      setActive(`#${current}`);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [onCategoryPage]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-line bg-white/95 backdrop-blur">
      <div className="container-page flex h-14 items-center justify-between md:h-[72px]">
        <a href="#home" className="flex shrink-0 items-center" aria-label={`${siteConfig.name} – home`}>
          <img
            src={assetUrl(siteConfig.logoCompact)}
            alt={`${siteConfig.name} logo`}
            width={900}
            height={489}
            className="h-10 w-auto md:h-14"
          />
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? 'true' : undefined}
              className={`text-sm font-medium transition-colors hover:text-brand-red ${
                active === link.href ? 'text-brand-red' : 'text-brand-black/80'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={buildGeneralOrderLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red !min-h-[38px] !px-4"
          >
            Order Now
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={buildGeneralOrderLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red !min-h-[38px] !px-3.5 !text-xs"
          >
            Order Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-md text-brand-black hover:bg-brand-grey"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="animate-fade-in border-t border-brand-line bg-white md:hidden"
        >
          <ul className="container-page py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === link.href ? 'true' : undefined}
                  className={`flex min-h-[48px] items-center border-b border-brand-line/70 text-base font-medium last:border-b-0 hover:text-brand-red ${
                    active === link.href ? 'text-brand-red' : ''
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
