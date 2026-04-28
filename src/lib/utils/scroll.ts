export function scrollTo(href: string): void {
  if (href === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  }
}