import { useEffect, useState } from 'react';
import { navLinks, siteConfig } from '../data/site';
import { assetUrl } from '../utils/assets';
import { buildGeneralOrderLink } from '../utils/whatsapp';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(navLinks[0]?.href ?? '#home');

  // Highlights the menu link of the section the visitor is currently viewing.
  useEffect(() => {
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
  }, []);

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
        <a href="#home" className="flex items-center shrink-0" aria-label={`${siteConfig.name} – home`}>
          <img
            src={assetUrl(siteConfig.logoCompact)}
            alt={`${siteConfig.name} logo`}
            width={900}
            height={489}
            className="w-auto h-10 md:h-14"
          />
        </a>

        <nav aria-label="Main navigation" className="items-center hidden gap-8 md:flex">
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
            className="flex items-center justify-center rounded-md h-11 w-11 text-brand-black hover:bg-brand-grey"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
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
          className="bg-white border-t animate-fade-in border-brand-line md:hidden"
        >
          <ul className="py-2 container-page">
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