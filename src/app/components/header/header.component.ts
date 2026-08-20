import { Component, inject, OnInit, OnDestroy, signal, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ThemeService, ThemeMode } from '../../services/theme.service';

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
  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initIntersectionObserver();
    }
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private initIntersectionObserver(): void {
    const sectionIds = ['sobre-mi', 'tecnologias', 'proyectos', 'education', 'contacto'];

    setTimeout(() => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);

      if (sections.length === 0) return;

      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.activeSection.set(entry.target.id);
            }
          });
        },
        {
          rootMargin: '-20% 0px -50% 0px',
          threshold: 0,
        }
      );

      sections.forEach((section) => this.observer?.observe(section));
    }, 400);
  }

  setTheme(mode: ThemeMode): void {
    this.themeService.setTheme(mode);
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    this.activeSection.set(sectionId);
    const currentUrl = this.router.url.split('#')[0];

    if (currentUrl !== '/' && currentUrl !== '') {
      this.router.navigate(['/'], { fragment: sectionId });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80; // Holgura exacta para el header pegajoso
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        window.history.pushState(null, '', `#${sectionId}`);
      }
    }
  }
}
