import { signal } from '@angular/core';

export const activeAnchorId = signal<string>('');
export const isModalOpen = signal<boolean>(false);

function getElementTop(element: HTMLElement): number {
  let top = 0;
  let el: HTMLElement | null = element;
  while (el) {
    top += el.offsetTop;
    el = el.offsetParent as HTMLElement;
  }
  return top;
}

export function scrollToSection(sectionId: string, event?: Event): void {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  activeAnchorId.set(sectionId);

  const container = document.getElementById(sectionId);
  if (container) {
    const targetElement = (container.querySelector('h2') || container) as HTMLElement;
    const headerOffset = 12;
    const absoluteTop = getElementTop(targetElement);
    const offsetPosition = Math.max(0, absoluteTop - headerOffset);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    window.history.pushState(null, '', `#${sectionId}`);
  }
}
