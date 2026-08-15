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
      title: 'Plataforma de Inversores - Fullstack App (ProyPlus)',
      description: 'Proyecto de tesis de Licenciatura. Plataforma web fullstack (Spring Boot 3 + Angular 19 + MySQL + Docker) que conecta estudiantes con inversores, gestionando el ciclo completo del proyecto desde la financiación hasta la liquidación de ganancias. Incorpora IA para análisis de riesgo financiero (Weka), etiquetado automático de proyectos y chatbot de soporte 24/7 (Google Gemini).',
      responsibilities: [
        'Desarrollo integral del Frontend en Angular 19 utilizando Standalone Components, gestión de estado reactivo con Signals, sintaxis de Control Flow moderna (@if, @for) y Lazy Loading por dominios de negocio.',
        'Orquestación y despliegue simplificado mediante Docker Compose para levantar todos los contenedores (Frontend, Backend Spring Boot 3 y base de datos MySQL 8.0) con un solo comando.',
        'Diseño de una arquitectura monolítica en capas (controller, service, repository) para el Backend con Spring Boot 3, garantizando mantenibilidad y velocidad de entrega.',
        'Implementación de seguridad stateless con Spring Security y JWT, protección de endpoints por roles (ADMIN, STUDENT, INVESTOR) y hashing BCrypt.',
        'Integración híbrida de IA: modelo de Machine Learning (Weka Random Forest) para evaluación de riesgo financiero y Google Gemini NLP para categorización automática y chatbot conversacional.',
        'Desarrollo de flujos de negocio complejos: negociación de contratos, firma digital, cálculo automático de rendimientos a 3 años y transferencias multi-moneda.',
        'Manejo centralizado de excepciones, patrón DTO con MapStruct e intercepción de peticiones HTTP en Frontend mediante HttpInterceptors.',
        'Documentación funcional completa (Scrum): Visual Story Mapping, Product Backlog (>35 US), Release Planning, criterios de aceptación BDD y plan de pruebas con +40 escenarios.'
      ],
      technologies: ['Java', 'Spring Boot 3', 'Angular 19', 'Docker', 'MySQL', 'Spring Security', 'JWT', 'Weka AI', 'Google Gemini', 'Signals', 'JUnit', 'Mockito', 'MapStruct', 'Maven'],
      featured: true,
      githubUrl: 'https://github.com/lucasberonvonbrand/investor-platform-backend',
      docUrl: 'assets/ProyPlus-Documentacion-Funcional.pdf',
      galleryImages: [
        {
          url: 'assets/images-proyplus/Captura de pantalla 2026-08-14 203341.png',
          caption: 'Landing Page & Asistente Virtual 24/7 con Chatbot IA (Google Gemini)'
        },
        {
          url: 'assets/images-proyplus/Captura de pantalla 2026-08-14 201009.png',
          caption: 'Catálogo de Proyectos Universitarios por Categoría'
        },
        {
          url: 'assets/images-proyplus/Captura de pantalla 2026-08-14 201138.png',
          caption: 'Detalle del Proyecto e Integración con Análisis de Riesgo IA'
        },
        {
          url: 'assets/images-proyplus/Captura de pantalla 2026-08-14 201341.png',
          caption: 'Dashboard de Análisis de Riesgo de Inversión (Weka Random Forest ML)'
        },
        {
          url: 'assets/images-proyplus/Captura de pantalla 2026-08-14 200536.png',
          caption: 'Modal de Gestión del Ciclo de Vida del Contrato y Proyecciones'
        },
        {
          url: 'assets/images-proyplus/Captura de pantalla 2026-08-14 201802.png',
          caption: 'Pánel de Contratos Firmados y Estado de Inversiones'
        }
      ]
    },
    {
      title: 'Gestor de Tareas Fullstack - CI/CD Pipeline & Docker',
      description: 'Plataforma fullstack (Angular 19 + Spring Boot 3 + MySQL) enfocada en ingeniería de infraestructura, orquestación multi-contenedor con Docker Compose, optimización Multi-Stage Builds y automatización CI/CD con GitHub Actions hacia Render y Aiven.',
      responsibilities: [
        'Diseño e implementación de un pipeline completo de CI/CD con GitHub Actions que automatiza pruebas unitarias (JUnit 5, Mockito), pruebas de integración (MockMvc), compilación y despliegue continuo hacia Render y Aiven.',
        'Orquestación multi-contenedor con Docker Compose (Frontend Angular 19 + Nginx Alpine, Backend Java 21 Spring Boot 3 y base de datos MySQL 8.0 con salud verificada mediante healthchecks).',
        'Optimización extrema mediante Multi-Stage Builds en Dockerfiles, reduciendo la superficie de ataque y el tamaño de las imágenes finales de producción.',
        'Garantía de persistencia de datos mediante volúmenes lógicos (mysql-data), políticas de resiliencia (service_healthy), administración dinámica de credenciales (.env) y límites estrictos de hardware (CPU/RAM).',
        'Automatización del ciclo de entregables (Continuous Delivery) generando Releases públicas en GitHub con artefactos ejecutables (JAR/ZIP) ante cada tag en el repositorio.'
      ],
      technologies: ['Docker', 'Docker Compose', 'CI/CD', 'GitHub Actions', 'Java 21', 'Spring Boot 3', 'Angular 19', 'Nginx', 'MySQL', 'Render', 'Aiven', 'JUnit 5', 'Mockito'],
      featured: true,
      githubUrl: 'https://github.com/lucasberonvonbrand/app-tasks',
      demoUrl: 'https://app-tasks-frontend.onrender.com',
      galleryImages: [
        {
          url: 'assets/images-app-tasks/Captura de pantalla 2026-08-15 203226.png',
          caption: 'Pánel Principal de Gestión de Tareas (Angular 19 + Signals & Spring Boot API)'
        },
        {
          url: 'assets/images-app-tasks/Captura de pantalla 2026-08-15 203238.png',
          caption: 'Gestión de Estado y Filtros de Tareas Desplegadas en Producción (Render & Aiven)'
        }
      ]
    },
    {
      title: 'Gestor de Artículos Fullstack (Prueba Técnica)',
      description: 'Aplicación web fullstack desarrollada como prueba técnica con React, TypeScript, Hono (Node.js), MongoDB Atlas y Better Auth. Estructurada con Feature-Sliced Design en el frontend y Arquitectura en Capas en el backend, incluyendo CI/CD automatizado con GitHub Actions y despliegue cloud en Render.',
      responsibilities: [
        'Desarrollo integral del cliente en React + TypeScript + Vite aplicando Feature-Sliced Design (dominios desacoplados: articles, auth, public), TanStack Router, TanStack Query, TanStack Form, HeroUI y Tailwind CSS.',
        'Diseño de una arquitectura en capas (N-Tier: controller, service, repository, dto, mapper) para el servidor en Hono (Node.js) con persistencia directa en MongoDB mediante el driver nativo.',
        'Configuración de autenticación stateless mediante Better Auth y JWT almacenados en Cookies HTTP-Only, garantizando protección estricta contra ataques XSS y guards de navegación en el cliente.',
        'Validación de datos end-to-end con esquemas Zod sincronizados entre la API REST y los formularios del frontend, rechazando datos inconsistentes antes del acceso a la base de datos.',
        'Despliegue automatizado en la nube (Render Static Site + Web Service y MongoDB Atlas Cloud Cluster) respaldado por workflows de CI/CD en GitHub Actions y entorno local en Docker Compose con seeding automático de datos.'
      ],
      technologies: ['React', 'TypeScript', 'Hono', 'Node.js', 'MongoDB', 'Better Auth', 'JWT', 'Zod', 'TanStack Query', 'Tailwind CSS', 'Docker', 'CI/CD', 'Render'],
      featured: true,
      githubUrl: 'https://github.com/lucasberonvonbrand/prueba-tecnica',
      demoUrl: 'https://prueba-tecnica-lucas-beron.onrender.com/',
      galleryImages: [
        {
          url: 'assets/images-prueba-tecnica/Captura de pantalla 2026-08-15 204210.png',
          caption: 'Página Pública - Feed de Publicaciones, Buscador y Top Autores'
        },
        {
          url: 'assets/images-prueba-tecnica/Captura de pantalla 2026-08-15 204251.png',
          caption: 'Lectura Detallada de Artículo con Tipografía Editorial'
        },
        {
          url: 'assets/images-prueba-tecnica/Captura de pantalla 2026-08-15 204523.png',
          caption: 'Dashboard Privado de Gestión de Artículos (CRUD)'
        },
        {
          url: 'assets/images-prueba-tecnica/Captura de pantalla 2026-08-15 204533.png',
          caption: 'Modal de Creación y Edición con Validación Zod en Tiempo Real'
        }
      ]
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

  selectedGallery: { url: string; caption: string }[] | null = null;
  currentImageIndex: number = 0;

  openGallery(images: { url: string; caption: string }[], index: number = 0): void {
    this.selectedGallery = images;
    this.currentImageIndex = index;
  }

  closeGallery(): void {
    this.selectedGallery = null;
    this.currentImageIndex = 0;
  }

  nextImage(): void {
    if (this.selectedGallery) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.selectedGallery.length;
    }
  }

  prevImage(): void {
    if (this.selectedGallery) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.selectedGallery.length) % this.selectedGallery.length;
    }
  }

  selectImage(index: number): void {
    this.currentImageIndex = index;
  }
}
