/** true for wide pictures such as banners (width clearly bigger than height), e.g. "7 / 3". */
export function isWideAspect(aspect: string): boolean {
  const [w, h] = aspect.split('/').map((n) => Number(n.trim()));
  return w / h > 1.5;
}
