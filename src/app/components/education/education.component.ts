import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  private router = inject(Router);
  themeService = inject(ThemeService);

  academicEducation = [
    {
      id: 'unlam',
      degree: 'Licenciatura en Gestión de Tecnología',
      institution: 'Universidad Nacional de La Matanza (UNLaM)',
      startDate: '2023',
      endDate: '2025',
      logoLight: 'assets/unlam.webp',
      logoDark: 'assets/unlam-dark-theme.png'
    },
    {
      id: 'unlz',
      degree: 'Tecnicatura en Programación',
      institution: 'Universidad Nacional de Lomas de Zamora (UNLZ)',
      startDate: '2020',
      endDate: '2022',
      logoLight: 'assets/unlz.png',
      logoDark: 'assets/unlz-tema-oscuro.png'
    }
  ];

  certifications = [
    {
      title: 'Bootcamp - Desarrollo de Software basado en agentes de IA con Kiro',
      platform: 'Código Facilito',
      year: '2026',
      logo: 'assets/kiro.svg'
    },
    {
      title: 'Angular: De cero a experto (v19+)',
      platform: 'Udemy - Fernando Herrera',
      year: '2026',
      logo: 'assets/angular.svg'
    },
    {
      title: 'Testing y Calidad de Software',
      platform: 'TodoCode Academy',
      year: '2026',
      logos: ['assets/junit.svg', 'assets/mockito.png', 'assets/github-actions.svg', 'assets/sonarqube.svg']
    },
    {
      title: 'Microservicios con Spring Cloud',
      platform: 'TodoCode Academy',
      year: '2025',
      logo: 'assets/springcloud.svg'
    },
    {
      title: 'Seguridad en Java con Spring Security',
      platform: 'TodoCode Academy',
      year: '2025',
      logo: 'assets/springsecurity.svg'
    },
    {
      title: 'APIs en Java con Spring Boot',
      platform: 'TodoCode Academy',
      year: '2024',
      logo: 'assets/springboot.svg'
    }
  ];

  navigateToEducation(id: string) {
    this.router.navigate(['/education', id]);
  }

  getLogo(edu: any): string {
    if (this.themeService.activeTheme() === 'dark' && edu.logoDark) {
      return edu.logoDark;
    }
    return edu.logoLight;
  }
}
