import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  themeService = inject(ThemeService);

  academicEducation = [
    {
      degree: 'Licenciatura en Gestión de Tecnología',
      institution: 'UNLaM',
      period: '2023 – 2025',
      logoLight: 'assets/unlam.webp',
      logoDark: 'assets/unlam-dark-theme.png',
      description: 'Perfil integral que fusiona el desarrollo de software con la visión estratégica de negocio. Profundicé en Arquitectura de Software, aplicando patrones de diseño como MVC y Microservicios. Adquirí sólidas habilidades en Ingeniería de Software y Análisis Funcional para la gestión de proyectos ágiles (Scrum). Esto abarca el relevamiento y documentación de alcance (épicas), creación de Visual Story Mapping, gestión de Product Backlog con estimación en Story Points, Release Planning, redacción de criterios de aceptación en formato BDD y diseño de planes de prueba. Me especialicé en el modelado y diseño de bases de datos relacionales, desde el concepto hasta el modelo físico, y en la implementación de consultas SQL complejas. En Inteligencia de Negocios, abarqué el diseño de Data Warehouses (esquemas de estrella y copo de nieve), el uso de Power BI para visualización y la aplicación de algoritmos de minería de datos (árboles de decisión, clustering, Naive Bayes). Complementé mi perfil con gestión de calidad (normas ISO) y modelado de procesos de negocio (BPM).'
    },
    {
      degree: 'Tecnicatura en Programación',
      institution: 'UNLZ',
      period: '2020 – 2022',
      logoLight: 'assets/unlz.png',
      logoDark: 'assets/unlz.png',
      description: 'Formación técnica con una base sólida en lógica y algoritmos. Profundicé en programación con lenguajes como Java, C# y Python. Adquirí experiencia en el desarrollo de aplicaciones web, utilizando PHP para el backend y frameworks como Bootstrap para el diseño de interfaces. El plan de estudios cubrió también áreas clave como Seguridad Informática y el relevamiento de requisitos de software.'
    }
  ];

  certifications = [
    {
      title: 'Bootcamp - Desarrollo de Software basado en agentes de IA con Kiro',
      platform: 'Código Facilito',
      year: '2026'
    },
    {
      title: 'Angular: De cero a experto (v19+)',
      platform: 'Udemy',
      year: '2026'
    },
    {
      title: 'Testing y Calidad de Software',
      platform: 'TodoCode',
      year: '2026'
    },
    {
      title: 'Microservicios con Spring Cloud | Seguridad con Spring Security',
      platform: 'TodoCode',
      year: '2025'
    },
    {
      title: 'APIs en Java con Spring Boot',
      platform: 'TodoCode',
      year: '2024'
    }
  ];

  getLogo(edu: any): string {
    if (this.themeService.activeTheme() === 'dark' && edu.logoDark) {
      return edu.logoDark;
    }
    return edu.logoLight;
  }
}
