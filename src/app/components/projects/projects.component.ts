import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Sistema de Microservicios para E-commerce',
      description: 'Sistema distribuido que simula una tienda online, demostrando comunicación entre servicios, gestión centralizada de configuración y resiliencia del sistema ante fallos.',
      responsibilities: [
        'Diseño e implementación de APIs REST para cada microservicio.',
        'Configuración de Spring Cloud Gateway como punto de entrada único (API Gateway).',
        'Implementación de Eureka Server para el registro y descubrimiento de servicios.',
        'Uso de Resilience4j para implementar patrones de Circuit Breaker.',
        'Centralización de la configuración con Spring Cloud Config Server.'
      ],
      technologies: ['Java', 'Spring Boot', 'Spring Cloud', 'API Gateway', 'Eureka', 'Resilience4j', 'JPA'],
      githubUrl: 'https://github.com/tu-usuario/tu-repo-microservicios' // ¡Cambia esto!
    },
    {
      title: 'API REST con Seguridad JWT',
      description: 'API RESTful para gestionar usuarios y productos con un sistema de autenticación y autorización robusto basado en JSON Web Tokens (JWT).',
      responsibilities: [
        'Desarrollo de endpoints siguiendo el patrón MVC y arquitectura de capas.',
        'Implementación de Spring Security para proteger los endpoints.',
        'Creación de un sistema de registro y login que genera y valida JWTs.',
        'Manejo de roles y permisos a nivel de base de datos.',
        'Encriptación de contraseñas utilizando BCrypt.'
      ],
      technologies: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'JPA/Hibernate', 'PostgreSQL', 'Maven'],
      githubUrl: 'https://github.com/tu-usuario/tu-repo-seguridad' // ¡Cambia esto!
    },
    {
      title: 'API REST para Gestión de Clínica',
      description: 'API REST que implementa un CRUD completo para la gestión de una clínica. El proyecto se enfoca en el correcto diseño de la base de datos y la lógica de negocio.',
      responsibilities: [
        'Diseño del Diagrama Entidad-Relación (DER) y su implementación física.',
        'Mapeo de entidades y sus relaciones (@OneToOne, @OneToMany) con JPA/Hibernate.',
        'Implementación del patrón DTO para optimizar la transferencia de datos.',
        'Uso de Inyección de Dependencias para desacoplar componentes.'
      ],
      technologies: ['Java', 'Spring Boot', 'JPA/Hibernate', 'MySQL', 'Patrón DTO', 'Maven'],
      githubUrl: 'https://github.com/tu-usuario/tu-repo-api-crud' // ¡Cambia esto!
    }
  ];
}
