import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Plataforma de Inversores - Backend (ProyPlus)',
      description: 'Backend para una plataforma que conecta estudiantes con inversores, gestionando proyectos desde la financiación hasta la liquidación. Incorpora IA para análisis de riesgos (Weka), categorización de proyectos y un chatbot de soporte (Google Gemini).',
      responsibilities: [
        'Diseño de una arquitectura monolítica en capas (controller, service, repository) para agilizar el desarrollo y la mantenibilidad.',
        'Implementación de seguridad stateless con Spring Security y JWT para autenticación y autorización basada en roles.',
        'Integración de un modelo de Machine Learning (Weka) para el análisis de riesgo de inversiones.',
        'Uso de IA generativa (Google Gemini) para la categorización automática de proyectos y un chatbot de soporte.',
        'Desarrollo de lógica de negocio compleja, incluyendo flujos de financiación, negociación de contratos y gestión multi-moneda.',
        'Implementación de tareas programadas (@Scheduled) para la gestión automática del ciclo de vida de los proyectos.',
        'Manejo centralizado de excepciones y uso del patrón DTO con MapStruct para una API robusta y desacoplada.'
      ],
      technologies: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'JPA/Hibernate', 'Maven', 'Weka', 'Google Gemini'],
      featured: true,
      githubUrl: 'https://github.com/lucasberonvonbrand/investor-platform-backend'
    },
    {
      title: 'Tienda de Productos - Arquitectura de Microservicios',
      description: 'Sistema distribuido que simula una tienda online, demostrando comunicación entre servicios, gestión centralizada de configuración y tolerancia a fallos con Circuit Breaker.',
      responsibilities: [
        'Diseño e implementación de microservicios independientes (Productos, Carrito, Ventas) con bases de datos MySQL separadas.',
        'Configuración de Spring Cloud Gateway como punto de entrada único (API Gateway) para enrutar las solicitudes.',
        'Implementación de Eureka Server para el registro y descubrimiento dinámico de servicios.',
        'Uso de Feign para la comunicación declarativa y resiliente entre servicios.',
        'Centralización de la configuración de todos los microservicios utilizando Spring Cloud Config Server.',
        'Implementación del patrón Circuit Breaker con Resilience4J para mejorar la tolerancia a fallos del sistema.'
      ],
      technologies: ['Java', 'Spring Boot', 'Spring Cloud', 'API Gateway', 'Eureka', 'Resilience4J', 'OpenFeign', 'MySQL', 'Maven'],
      githubUrl: 'https://github.com/lucasberonvonbrand/tienda-productos'
    },
    {
      title: 'Blog - Spring Security (JWT & OAuth2)',
      description: 'Backend para un blog que implementa un sistema de seguridad robusto con Spring Security. Incluye autenticación basada en JWT, integración con OAuth2 (GitHub) y autorización granular mediante roles y permisos.',
      responsibilities: [
        'Implementación de autenticación y autorización desde cero utilizando Spring Security.',
        'Creación de un sistema de registro y login que genera y valida JSON Web Tokens (JWT) para sesiones stateless.',
        'Integración de OAuth2 para permitir el inicio de sesión de usuarios a través de sus cuentas de GitHub.',
        'Definición de un sistema de control de acceso granular basado en roles (ADMIN, USER, AUTHOR) y permisos (CREATE, READ, UPDATE, DELETE).',
        'Protección de endpoints a nivel de método con anotaciones de seguridad para un control preciso.',
        'Cifrado de contraseñas de usuario en la base de datos utilizando el algoritmo BCrypt.'
      ],
      technologies: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'OAuth2', 'MySQL', 'JPA/Hibernate', 'Maven'],
      githubUrl: 'https://github.com/lucasberonvonbrand/blog-spring-security'
    }
  ];
}
