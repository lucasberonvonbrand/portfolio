import { Location, CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, OnDestroy, ViewChild, ElementRef, HostListener, signal, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService, Project } from '../../services/projects.service';
import { ThemeService, ThemeMode } from '../../services/theme.service';
import { isModalOpen, scrollToSection, activeAnchorId } from '../../utils/scroll-helper';

export interface DisplayGalleryImage {
  url: string;
  caption: string;
  originalIndex: number;
}

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  scrollToSection = scrollToSection;
  activeAnchorId = activeAnchorId;
  @ViewChild('carouselTrack') carouselTrack!: ElementRef<HTMLDivElement>;
  @ViewChild('thumbTrack') thumbTrack!: ElementRef<HTMLDivElement>;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private location = inject(Location);
  private platformId = inject(PLATFORM_ID);
  projectsService = inject(ProjectsService);
  themeService = inject(ThemeService);

  showScrollTop = signal(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.showScrollTop.set(window.scrollY > 150);
    }
  }

  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

  project: Project | undefined;
  selectedGallery: { url: string; caption: string }[] | null = null;
  currentImageIndex: number = 0;

  displayImages: DisplayGalleryImage[] = [];
  activeDisplayIndex: number = 1;

  goBack(): void {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/'], { fragment: 'proyectos' });
    }
  }

  setTheme(mode: ThemeMode): void {
    this.themeService.setTheme(mode);
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.project = this.projectsService.getProjectById(id);
        if (!this.project) {
          this.router.navigate(['/']);
        } else {
          this.setupDisplayImages();
        }
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnDestroy(): void {
    isModalOpen.set(false);
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('modal-open');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
  }

  private setupDisplayImages(): void {
    if (!this.project?.galleryImages || this.project.galleryImages.length === 0) {
      this.displayImages = [];
      return;
    }

    const orig = this.project.galleryImages;
    const count = orig.length;

    if (count === 1) {
      this.displayImages = [{ ...orig[0], originalIndex: 0 }];
      this.activeDisplayIndex = 0;
      return;
    }

    // Clona la última al principio y la primera al final para visión 360 infinita
    const lastClone: DisplayGalleryImage = { ...orig[count - 1], originalIndex: count - 1 };
    const firstClone: DisplayGalleryImage = { ...orig[0], originalIndex: 0 };
    const realItems: DisplayGalleryImage[] = orig.map((img, i) => ({ ...img, originalIndex: i }));

    this.displayImages = [lastClone, ...realItems, firstClone];
    this.activeDisplayIndex = 1;

    setTimeout(() => {
      this.jumpToDisplayIndex(1);
    }, 120);
  }

  get currentOriginalIndex(): number {
    if (this.displayImages.length === 0) return 0;
    const current = this.displayImages[this.activeDisplayIndex];
    return current ? current.originalIndex : 0;
  }

  getTechIcon(tech: string): string | null {
    return this.projectsService.getTechIcon(tech);
  }

  formatDescription(description: string): string {
    if (!description) return '';
    const keywords = [
      'Spring Boot 3',
      'Spring Boot',
      'Angular 19',
      'Angular',
      'React',
      'Vite',
      'TypeScript',
      'Hono (Node.js)',
      'Node.js',
      'MongoDB Atlas',
      'MongoDB',
      'Better Auth',
      'HeroUI',
      'Docker Compose',
      'Docker',
      'MySQL 8.0',
      'MySQL',
      'Render',
      'Aiven',
      'Weka',
      'Google Gemini',
      'Google Antigravity',
      'Postman',
      'IntelliJ IDEA',
      'IntelliJ',
      'GitHub Actions',
      'GitHub',
      'Git',
      'Feature-Sliced Design',
      'Arquitectura en Capas',
      'CI/CD'
    ];

    let formatted = description;
    for (const kw of keywords) {
      const regex = new RegExp(kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      formatted = formatted.replace(regex, `<span class="tech-highlight">${kw}</span>`);
    }

    return formatted;
  }

  scrollToDisplayIndex(displayIndex: number): void {
    if (this.displayImages.length === 0) return;
    const total = this.displayImages.length;
    this.activeDisplayIndex = displayIndex;

    if (this.carouselTrack && this.carouselTrack.nativeElement) {
      const track = this.carouselTrack.nativeElement;
      const cards = track.querySelectorAll('.carousel-card');
      const targetCard = cards[displayIndex] as HTMLElement;
      if (targetCard) {
        const trackWidth = track.clientWidth;
        const cardLeft = targetCard.offsetLeft;
        const cardWidth = targetCard.clientWidth;
        const scrollPos = cardLeft - (trackWidth / 2) + (cardWidth / 2);

        track.scrollTo({
          left: scrollPos,
          behavior: 'smooth',
        });
      }
    }

    // Salto transparente para loop infinito sin cortes
    if (displayIndex === 0) {
      setTimeout(() => {
        this.jumpToDisplayIndex(total - 2);
      }, 350);
    } else if (displayIndex === total - 1) {
      setTimeout(() => {
        this.jumpToDisplayIndex(1);
      }, 350);
    }
  }

  private jumpToDisplayIndex(displayIndex: number): void {
    this.activeDisplayIndex = displayIndex;
    if (this.carouselTrack && this.carouselTrack.nativeElement) {
      const track = this.carouselTrack.nativeElement;
      const cards = track.querySelectorAll('.carousel-card');
      const targetCard = cards[displayIndex] as HTMLElement;
      if (targetCard) {
        const trackWidth = track.clientWidth;
        const cardLeft = targetCard.offsetLeft;
        const cardWidth = targetCard.clientWidth;
        const scrollPos = cardLeft - (trackWidth / 2) + (cardWidth / 2);

        track.scrollLeft = scrollPos;
      }
    }
  }

  onCarouselWheel(event: WheelEvent): void {
    if (this.carouselTrack && this.carouselTrack.nativeElement) {
      event.preventDefault();
      event.stopPropagation();
      this.carouselTrack.nativeElement.scrollLeft += event.deltaY * 1.5;
    }
  }

  scrollCarousel(direction: 'left' | 'right'): void {
    if (this.displayImages.length === 0) return;
    const nextIndex =
      direction === 'left' ? this.activeDisplayIndex - 1 : this.activeDisplayIndex + 1;
    this.scrollToDisplayIndex(nextIndex);
  }

  scrollToOriginalIndex(origIndex: number): void {
    const targetDisplayIndex = this.displayImages.length > 1 ? origIndex + 1 : origIndex;
    this.scrollToDisplayIndex(targetDisplayIndex);
  }

  openGallery(images: { url: string; caption: string }[], index: number = 0): void {
    this.selectedGallery = images;
    this.currentImageIndex = index;
    isModalOpen.set(true);
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.add('modal-open');
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    }
    this.scrollToActiveThumb();
  }

  closeGallery(): void {
    const lastViewedIndex = this.currentImageIndex;
    this.selectedGallery = null;
    isModalOpen.set(false);
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('modal-open');
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    this.scrollToOriginalIndex(lastViewedIndex);
  }

  preventWheelScroll(event: WheelEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (event.deltaY > 0) {
      this.nextImage();
    } else if (event.deltaY < 0) {
      this.prevImage();
    }
  }

  nextImage(): void {
    if (this.selectedGallery) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.selectedGallery.length;
      this.scrollToActiveThumb();
    }
  }

  prevImage(): void {
    if (this.selectedGallery) {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.selectedGallery.length) % this.selectedGallery.length;
      this.scrollToActiveThumb();
    }
  }

  selectImage(index: number): void {
    this.currentImageIndex = index;
    this.scrollToActiveThumb();
  }

  private scrollToActiveThumb(): void {
    setTimeout(() => {
      if (this.thumbTrack && this.thumbTrack.nativeElement) {
        const activeThumb = this.thumbTrack.nativeElement.querySelector('.thumb-item.active');
        if (activeThumb) {
          activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      }
    }, 50);
  }
}
