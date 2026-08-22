import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ThemeService, ThemeMode } from '../../services/theme.service';

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  status: string;
  logoLight: string;
  logoDark: string;
  summary: string;
  modules: { title: string; items: string[] }[];
  skills: string[];
}

@Component({
  selector: 'app-education-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.scss']
})
export class EducationDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  themeService = inject(ThemeService);

  education = signal<EducationItem | null>(null);

  setTheme(mode: ThemeMode): void {
    this.themeService.setTheme(mode);
  }

  private educationData: Record<string, EducationItem> = {
    unlam: {
      id: 'unlam',
      degree: 'Licenciatura en Gestión de Tecnología',
      institution: 'Universidad Nacional de La Matanza (UNLaM)',
      period: '2023 – 2025',
      location: 'San Justo, Buenos Aires, Argentina',
      status: 'Graduado / Finalizado',
      logoLight: 'assets/unlam.webp',
      logoDark: 'assets/unlam-dark-theme.png',
      summary: 'Perfil universitario integral que fusiona el desarrollo de software con la visión estratégica de negocio y la gestión tecnológica avanzada.',
      modules: [
        {
          title: 'Arquitectura de Software y Patrones',
          items: [
            'Diseño de arquitectura en capas, MVC, Clean Architecture y Microservicios.',
            'Aplicación de patrones de diseño GoF (Creacionales, Estructurales y de Comportamiento).',
            'Definición de contratos de API RESTful, desacoplamiento y escalabilidad.'
          ]
        },
        {
          title: 'Ingeniería de Software y Gestión Ágil',
          items: [
            'Relevamiento y documentación de alcance (Épicas y User Stories).',
            'Creación de Visual Story Mapping y gestión de Product Backlog con estimación en Story Points.',
            'Planificación de Sprints (Release Planning) y redacción de criterios de aceptación BDD (Gherkin).',
            'Diseño y ejecución de planes de prueba de software.'
          ]
        },
        {
          title: 'Bases de Datos Relacionales y Consultas Complejas',
          items: [
            'Modelado entidad-relación (DER) y diseño físico de bases de datos relacionales.',
            'Optimización e implementación de consultas SQL complejas (JOINs, Subconsultas, Triggers, Stored Procedures).'
          ]
        },
        {
          title: 'Inteligencia de Negocios y Minería de Datos (BI / Data Mining)',
          items: [
            'Diseño de Data Warehouses (modelos estrella y copo de nieve).',
            'Desarrollo de tableros interactivos de visualización con Power BI.',
            'Aplicación de algoritmos de minería de datos (Árboles de decisión, Clustering, Naive Bayes).'
          ]
        },
        {
          title: 'Gestión de Calidad y Procesos de Negocio',
          items: [
            'Aplicación de estándares de gestión de calidad (Normas ISO/IEC 25000 y 9001).',
            'Modelado y optimización de procesos de negocio con notación BPMN.'
          ]
        }
      ],
      skills: ['Arquitectura Software', 'Scrum / Agile', 'Microservicios', 'SQL Avanzado', 'Power BI / Data Mining', 'BPMN', 'ISO Quality', 'BDD / Testing']
    },
    unlz: {
      id: 'unlz',
      degree: 'Tecnicatura en Programación',
      institution: 'Universidad Nacional de Lomas de Zamora (UNLZ)',
      period: '2020 – 2022',
      location: 'Lomas de Zamora, Buenos Aires, Argentina',
      status: 'Graduado / Finalizado',
      logoLight: 'assets/unlz.png',
      logoDark: 'assets/unlz.png',
      summary: 'Formación técnica universitaria orientada al dominio profundo de la lógica algorítmica, programación estructurada y orientada a objetos, e ingeniería backend.',
      modules: [
        {
          title: 'Fundamentos de Programación y Lógica',
          items: [
            'Estructuras de datos complejas (Listas, Pilas, Colas, Árboles, Grafos).',
            'Resolución de problemas algorítmicos con enfoque en complejidad temporal y espacial.'
          ]
        },
        {
          title: 'Programación Orientada a Objetos (POO)',
          items: [
            'Desarrollo sólido en Java, C# y Python aplicando principios SOLID.',
            'Manejo de excepciones, concurrencia y persistencia de datos.'
          ]
        },
        {
          title: 'Desarrollo Web & Bases de Datos',
          items: [
            'Backend web con PHP y arquitectura MVC.',
            'Maquetado e interfaces adaptables con HTML5, CSS3, JavaScript y Bootstrap.',
            'Bases de datos relacionales con MySQL.'
          ]
        },
        {
          title: 'Seguridad Informática y Requerimientos',
          items: [
            'Principios de Seguridad Informática, autenticación y protección de datos.',
            'Técnicas de relevamiento de requisitos de software.'
          ]
        }
      ],
      skills: ['Java', 'C#', 'Python', 'POO & SOLID', 'Estructuras de Datos', 'PHP / Backend', 'MySQL', 'Bootstrap']
    }
  };

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id && this.educationData[id]) {
        this.education.set(this.educationData[id]);
      } else {
        this.goBack();
      }
    });
  }

  goBack() {
    this.location.back();
  }

  getLogo(edu: EducationItem): string {
    if (this.themeService.activeTheme() === 'dark' && edu.logoDark) {
      return edu.logoDark;
    }
    return edu.logoLight;
  }
}
