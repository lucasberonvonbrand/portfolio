import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { ThemeService } from '../../services/theme.service';
import { scrollToSection, activeAnchorId } from '../../utils/scroll-helper';

@Component({
  selector: 'app-academic-education',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './academic-education.component.html',
  styleUrls: ['./academic-education.component.scss'],
})
export class AcademicEducationComponent {
  scrollToSection = scrollToSection;
  activeAnchorId = activeAnchorId;
  themeService = inject(ThemeService);

  academicEducation = [
    {
      id: 'unlam',
      degree: 'Licenciatura en Gestión de Tecnología',
      institution: 'Universidad Nacional de La Matanza (UNLaM)',
      startDate: '2023',
      endDate: '2025',
      logoLight: 'assets/unlam.webp',
      logoDark: 'assets/unlam-dark-theme.png',
    },
    {
      id: 'unlz',
      degree: 'Tecnicatura en Programación',
      institution: 'Universidad Nacional de Lomas de Zamora (UNLZ)',
      startDate: '2020',
      endDate: '2022',
      logoLight: 'assets/unlz.png',
      logoDark: 'assets/unlz-tema-oscuro.png',
    },
  ];

  getLogo(edu: any): string {
    if (this.themeService.activeTheme() === 'dark' && edu.logoDark) {
      return edu.logoDark;
    }
    return edu.logoLight;
  }
}
