/** Resolves a /public file (e.g. "images/cv/cv-001.svg") so it also works when the site is hosted in a sub-folder. */
export function assetUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}
