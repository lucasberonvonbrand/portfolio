import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';
import { scrollToSection, activeAnchorId } from '../../../utils/scroll-helper';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  scrollToSection = scrollToSection;
  activeAnchorId = activeAnchorId;
  certifications = [
    {
      title: 'Bootcamp - Desarrollo de Software basado en agentes de IA con Kiro',
      platform: 'Código Facilito',
      year: '2026',
      logo: 'assets/kiro.svg',
    },
    {
      title: 'Angular: De cero a experto (v19+)',
      platform: 'Udemy - Fernando Herrera',
      year: '2026',
      logo: 'assets/angular.svg',
    },
    {
      title: 'Testing y Calidad de Software',
      platform: 'TodoCode Academy',
      year: '2026',
      logos: ['assets/junit.svg', 'assets/mockito.png', 'assets/github-actions.svg', 'assets/sonarqube.svg'],
    },
    {
      title: 'Microservicios con Spring Cloud',
      platform: 'TodoCode Academy',
      year: '2025',
      logo: 'assets/springcloud.svg',
    },
    {
      title: 'Seguridad en Java con Spring Security',
      platform: 'TodoCode Academy',
      year: '2025',
      logo: 'assets/springsecurity.svg',
    },
    {
      title: 'APIs en Java con Spring Boot',
      platform: 'TodoCode Academy',
      year: '2024',
      logo: 'assets/springboot.svg',
    },
  ];
}
