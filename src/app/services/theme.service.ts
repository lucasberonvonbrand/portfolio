import { Injectable, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark' | 'system';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentTheme = signal<ThemeMode>('system');
  activeTheme = signal<'light' | 'dark'>('dark');

  private mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  constructor() {
    const savedTheme = (localStorage.getItem('portfolio-theme') as ThemeMode) || 'system';
    this.setTheme(savedTheme);

    // Escuchar cambios del sistema operativo cuando está en modo 'system'
    this.mediaQuery.addEventListener('change', () => {
      if (this.currentTheme() === 'system') {
        this.applyTheme('system');
      }
    });
  }

  setTheme(mode: ThemeMode): void {
    this.currentTheme.set(mode);
    localStorage.setItem('portfolio-theme', mode);
    this.applyTheme(mode);
  }

  private applyTheme(mode: ThemeMode): void {
    let resolvedTheme: 'light' | 'dark' = 'dark';

    if (mode === 'system') {
      resolvedTheme = this.mediaQuery.matches ? 'dark' : 'light';
    } else {
      resolvedTheme = mode;
    }

    this.activeTheme.set(resolvedTheme);
    document.documentElement.setAttribute('data-theme', resolvedTheme);
  }
}
