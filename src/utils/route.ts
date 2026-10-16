import { useEffect, useState } from 'react';

/**
 * A tiny hash router. It works on any static host (GitHub Pages, Netlify, cPanel ...)
 * because the page never has to be found on the server:
 *   https://yoursite/            -> home page
 *   https://yoursite/#/cv        -> CV Designs page
 *   https://yoursite/#/logo      -> Logo Designs page
 * Links such as #about or #contact stay normal scroll links on the home page.
 */
export type Route = { name: 'home'; anchor: string } | { name: 'category'; id: string };

export function parseHash(hash: string): Route {
  const m = /^#\/([a-z0-9-]+)\/?$/i.exec(hash);
  if (m) return { name: 'category', id: m[1].toLowerCase() };
  return { name: 'home', anchor: hash.replace(/^#\/?/, '') };
}

export function categoryHref(id: string): string {
  return `#/${id}`;
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));

  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}
