import { Injectable, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentTheme = signal<ThemeMode>('dark');
  activeTheme = signal<'light' | 'dark'>('dark');

  private mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  constructor() {
    const savedTheme = localStorage.getItem('portfolio-theme') as ThemeMode | null;

    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      this.setTheme(savedTheme);
    } else {
      // Detección automática según la configuración del sistema del usuario (PC/Teléfono)
      const systemPrefersDark = this.mediaQuery.matches;
      const initialMode: ThemeMode = systemPrefersDark ? 'dark' : 'light';
      this.setTheme(initialMode);
    }
  }

  setTheme(mode: ThemeMode): void {
    this.currentTheme.set(mode);
    this.activeTheme.set(mode);
    localStorage.setItem('portfolio-theme', mode);
    document.documentElement.setAttribute('data-theme', mode);
  }
}
