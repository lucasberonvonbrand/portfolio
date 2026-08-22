import { Component, inject, OnInit, OnDestroy, signal, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ThemeService, ThemeMode } from '../../services/theme.service';
import { scrollToSection } from '../../utils/scroll-helper';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  themeService = inject(ThemeService);

  activeSection = signal<string>('sobre-mi');
  private scrollListener: (() => void) | null = null;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollListener();
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId) && this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  private initScrollListener(): void {
    const sectionIds = ['sobre-mi', 'tecnologias', 'proyectos', 'formacion-academica', 'cursos', 'links', 'contacto'];

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY;

      // Si está en la parte superior (primeros 180px), 'sobre-mi' es siempre la sección activa
      if (scrollPosition < 180) {
        this.activeSection.set('sobre-mi');
        return;
      }

      // Si llegó al fondo de la página, 'contacto' es la sección activa
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        this.activeSection.set('contacto');
        return;
      }

      // Encontrar la sección visible debajo del header (85px offset)
      let currentSection = 'sobre-mi';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 85) {
            currentSection = id;
          }
        }
      }

      this.activeSection.set(currentSection);
    };

    this.scrollListener = updateActiveSection;
    window.addEventListener('scroll', this.scrollListener, { passive: true });

    // Ejecutar verificación inicial
    setTimeout(() => {
      updateActiveSection();
    }, 100);
  }

  setTheme(mode: ThemeMode): void {
    this.themeService.setTheme(mode);
  }

  scrollToSection(sectionId: string, event: Event): void {
    scrollToSection(sectionId, event);
  }
}
