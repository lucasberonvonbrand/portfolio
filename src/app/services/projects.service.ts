import { Injectable } from '@angular/core';

export interface GalleryImage {
  url: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  category?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  featured?: boolean;
  githubUrl?: string;
  demoUrl?: string;
  docUrl?: string;
  coverImage?: string;
  coverFit?: 'cover' | 'contain';
  coverBg?: string;
  coverType?: 'tasks' | 'microservices' | 'security';
  galleryImages?: GalleryImage[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 'proyplus',
      title: 'Plataforma de Inversores - Fullstack App (ProyPlus)',
      category: 'Proyecto de Tesis • Fullstack',
      coverImage: 'assets/proyplus-logo.png',
      coverFit: 'cover',
      coverBg: '#e2e8f0',
      description:
        'Proyecto de tesis de Licenciatura. Plataforma web fullstack (Spring Boot 3 + Angular 19 + MySQL + Docker) que conecta estudiantes con inversores, gestionando el ciclo completo del proyecto desde la financiación hasta la liquidación de ganancias. Incorpora IA para análisis de riesgo financiero (Weka), etiquetado automático de proyectos y chatbot de soporte 24/7 (Google Gemini).',
      responsibilities: [
        'Desarrollo integral del Frontend en Angular 19 utilizando Standalone Components, gestión de estado reactivo con Signals, sintaxis de Control Flow moderna (@if, @for) y Lazy Loading por dominios de negocio.',
        'Orquestación y despliegue simplificado mediante Docker Compose para levantar todos los contenedores (Frontend, Backend Spring Boot 3 y base de datos MySQL 8.0) con un solo comando.',
        'Diseño de una arquitectura monolítica en capas (controller, service, repository) para el Backend con Spring Boot 3, garantizando mantenibilidad y velocidad de entrega.',
        'Implementación de seguridad stateless con Spring Security y JWT, protección de endpoints por roles (ADMIN, STUDENT, INVESTOR) y hashing BCrypt.',
        'Integración híbrida de IA: modelo de Machine Learning (Weka Random Forest) para evaluación de riesgo financiero y Google Gemini NLP para categorización automática y chatbot conversacional.',
        'Desarrollo de flujos de negocio complejos: negociación de contratos, firma digital, cálculo automático de rendimientos a 3 años y transferencias multi-moneda.',
        'Manejo centralizado de excepciones, patrón DTO con MapStruct e intercepción de peticiones HTTP en Frontend mediante HttpInterceptors.',
        'Documentación funcional completa (Scrum): Visual Story Mapping, Product Backlog (>35 US), Release Planning, criterios de aceptación BDD y plan de pruebas con +40 escenarios.',
      ],
      technologies: [
        'Java',
        'Spring Boot 3',
        'Spring Security',
        'JWT',
        'TypeScript',
        'Angular 19',
        'Docker',
        'MySQL',
        'Weka AI',
        'Google Gemini',
        'JUnit',
        'Mockito',
        'Maven',
      ],
      featured: true,
      githubUrl: 'https://github.com/lucasberonvonbrand/investor-platform-backend',
      docUrl: 'assets/ProyPlus-Documentacion-Funcional.pdf',
      galleryImages: [
        {
          url: 'assets/images-proyplus/1.png',
          caption: 'Catálogo de Proyectos Universitarios por Categorías',
        },
        {
          url: 'assets/images-proyplus/2.png',
          caption: 'Autenticación Segura - Inicio de Sesión con JWT & Spring Security',
        },
        {
          url: 'assets/images-proyplus/3.png',
          caption: 'Registro de Usuario - Selección de Perfil (Estudiante / Inversor)',
        },
        {
          url: 'assets/images-proyplus/4.png',
          caption: 'Detalle del Proyecto Universitario - Información General y Progreso',
        },
        {
          url: 'assets/images-proyplus/5.png',
          caption: 'Detalle del Proyecto - Equipo Integrante y Documentación de Negocios',
        },
        {
          url: 'assets/images-proyplus/5-2.png',
          caption: 'Visor Integrado de Documentación PDF (Plan de Negocios)',
        },
        {
          url: 'assets/images-proyplus/6.png',
          caption: 'Análisis de Riesgo de Inversión con IA - Calculadora de Retorno a 3 Años',
        },
        {
          url: 'assets/images-proyplus/7.png',
          caption: 'Dictamen del Modelo de ML (Weka Random Forest) - Alerta de Riesgo y Ratios',
        },
        {
          url: 'assets/images-proyplus/8.png',
          caption: 'Factores Clave del Análisis de IA y Tabla de Proyección de Ganancias',
        },
        {
          url: 'assets/images-proyplus/9.png',
          caption: 'Gráfico de Donut - Composición del Riesgo Desglosado por Puntos',
        },
        {
          url: 'assets/images-proyplus/10.png',
          caption: 'Detalles y Ciclo de Vida del Contrato - Estado Aprobado y Firma Digital',
        },
        {
          url: 'assets/images-proyplus/11.png',
          caption: 'Cláusulas del Acuerdo Legal y Descarga Directa en PDF',
        },
        {
          url: 'assets/images-proyplus/12.png',
          caption: 'Gestión de Contratos e Inversiones por Proyecto',
        },
        {
          url: 'assets/images-proyplus/13.png',
          caption: 'Editor de Contrato - Configuración Dinámica de Rentabilidad y Cláusulas',
        },
        {
          url: 'assets/images-proyplus/14.png',
          caption: 'Estado del Proyecto Financiado al 100% y Contratos Cerrados',
        },
        {
          url: 'assets/images-proyplus/15.png',
          caption: 'Dashboard del Inversor - Pánel de Inversiones Activas y Capital Invertido',
        },
        {
          url: 'assets/images-proyplus/16.png',
          caption: 'Monitor de Ganancias y Cronograma de Liquidaciones Programadas a 3 Años',
        },
      ],
    },
    {
      id: 'el-periodico',
      title: 'Blog de Artículos - El Periódico (Prueba Técnica)',
      category: 'Prueba Técnica • Fullstack',
      coverImage: 'assets/el-periodico-logo-actualizado.jpg',
      coverFit: 'cover',
      coverBg: '#fdfbf7',
      description:
        'Aplicación web fullstack desarrollada como prueba técnica para importante Startup del sector AdTech con React, TypeScript, Hono (Node.js), MongoDB Atlas y Better Auth. Estructurada con Feature-Sliced Design en el frontend y Arquitectura en Capas en el backend, incluyendo CI/CD automatizado con GitHub Actions y despliegue cloud en Render.',
      responsibilities: [
        'Desarrollo integral del cliente en React + TypeScript + Vite aplicando Feature-Sliced Design (dominios desacoplados: articles, auth, public), TanStack Router, TanStack Query, TanStack Form, HeroUI y Tailwind CSS.',
        'Diseño de una arquitectura en capas (N-Tier: controller, service, repository, dto, mapper) para el servidor en Hono (Node.js) con persistencia directa en MongoDB mediante el driver nativo.',
        'Configuración de autenticación stateless mediante Better Auth y JWT almacenados en Cookies HTTP-Only, garantizando protección estricta contra ataques XSS y guards de navegación en el cliente.',
        'Validación de datos end-to-end con esquemas Zod sincronizados entre la API REST y los formularios del frontend, rechazando datos inconsistentes antes del acceso a la base de datos.',
        'Despliegue automatizado en la nube (Render Static Site + Web Service y MongoDB Atlas Cloud Cluster) respaldado por workflows de CI/CD en GitHub Actions y entorno local en Docker Compose con seeding automático de datos.',
      ],
      technologies: [
        'TypeScript',
        'React',
        'Node.js',
        'Hono',
        'MongoDB',
        'Better Auth',
        'JWT',
        'Zod',
        'TanStack Query',
        'Tailwind CSS',
        'Docker',
      ],
      featured: true,
      githubUrl: 'https://github.com/lucasberonvonbrand/prueba-tecnica',
      demoUrl: 'https://prueba-tecnica-lucas-beron.onrender.com/',
      galleryImages: [
        {
          url: 'assets/images-prueba-tecnica/Captura de pantalla 2026-08-15 204210.png',
          caption: 'Página Pública - Feed de Publicaciones, Buscador y Top Autores',
        },
        {
          url: 'assets/images-prueba-tecnica/Captura de pantalla 2026-08-15 204251.png',
          caption: 'Lectura Detallada de Artículo con Tipografía Editorial - Parte 1',
        },
        {
          url: 'assets/images-prueba-tecnica/Captura de pantalla 2026-08-15 204306.png',
          caption: 'Lectura Detallada de Artículo con Tipografía Editorial - Parte 2',
        },
        {
          url: 'assets/images-prueba-tecnica/Captura de pantalla 2026-08-15 204523.png',
          caption: 'Dashboard Privado de Gestión de Artículos (CRUD)',
        },
        {
          url: 'assets/images-prueba-tecnica/Captura de pantalla 2026-08-15 204533.png',
          caption: 'Modal de Creación y Edición con Validación Zod en Tiempo Real',
        },
      ],
    },
    {
      id: 'gestor-tareas',
      title: 'Gestor de Tareas Fullstack - CI/CD Pipeline & Docker',
      category: 'DevOps & Fullstack App',
      coverImage: 'assets/ci-cd-diagram.png',
      coverFit: 'contain',
      coverBg: '#ffffff',
      description:
        'Plataforma fullstack (Angular 19 + Spring Boot 3 + MySQL) enfocada en ingeniería de infraestructura, orquestación multi-contenedor con Docker Compose, optimización Multi-Stage Builds y automatización CI/CD con GitHub Actions hacia Render y Aiven.',
      responsibilities: [
        'Diseño e implementación de un pipeline completo de CI/CD con GitHub Actions que automatiza pruebas unitarias (JUnit 5, Mockito), pruebas de integración (MockMvc), compilación y despliegue continuo hacia Render y Aiven.',
        'Orquestación multi-contenedor con Docker Compose (Frontend Angular 19 + Nginx Alpine, Backend Java 21 Spring Boot 3 y base de datos MySQL 8.0 con salud verificada mediante healthchecks).',
        'Optimización extrema mediante Multi-Stage Builds en Dockerfiles, reduciendo la superficie de ataque y el tamaño de las imágenes finales de producción.',
        'Garantía de persistencia de datos mediante volúmenes lógicos (mysql-data), políticas de resiliencia (service_healthy), administración dinámica de credenciales (.env) y límites estrictos de hardware (CPU/RAM).',
        'Automatización del ciclo de entregables (Continuous Delivery) generando Releases públicas en GitHub con artefactos ejecutables (JAR/ZIP) ante cada tag en el repositorio.',
      ],
      technologies: [
        'Java 21',
        'Spring Boot 3',
        'TypeScript',
        'Angular 19',
        'Docker',
        'GitHub Actions',
        'Nginx',
        'MySQL',
        'JUnit 5',
        'Mockito',
      ],
      featured: true,
      githubUrl: 'https://github.com/lucasberonvonbrand/app-tasks',
      demoUrl: 'https://app-tasks-frontend.onrender.com',
      galleryImages: [
        {
          url: 'assets/images-app-tasks/Captura de pantalla 2026-08-15 203226.png',
          caption: 'Pánel Principal de Gestión de Tareas (Angular 19 + Signals & Spring Boot API)',
        },
        {
          url: 'assets/images-app-tasks/Captura de pantalla 2026-08-15 203238.png',
          caption:
            'Gestión de Estado y Filtros de Tareas Desplegadas en Producción (Render & Aiven)',
        },
      ],
    },
    {
      id: 'tienda-microservicios',
      title: 'Tienda de Productos - Arquitectura de Microservicios (Backend Java)',
      category: 'Backend Microservicios',
      coverImage: 'assets/microservices-architecture.png',
      coverFit: 'contain',
      coverBg: '#ffffff',
      description:
        'Sistema distribuido backend que simula una tienda online, demostrando comunicación entre servicios, gestión centralizada de configuración y tolerancia a fallos con Circuit Breaker.',
      responsibilities: [
        'Diseño e implementación de microservicios independientes (Productos, Carrito, Ventas) con bases de datos MySQL separadas.',
        'Configuración de Spring Cloud Gateway como punto de entrada único (API Gateway) para enrutar las solicitudes.',
        'Implementación de Eureka Server para el registro y descubrimiento dinámico de servicios.',
        'Uso de Feign para la comunicación declarativa y resiliente entre servicios.',
        'Centralización de la configuración de todos los microservicios utilizando Spring Cloud Config Server.',
        'Implementación del patrón Circuit Breaker con Resilience4J para mejorar la tolerancia a fallos del sistema.',
      ],
      technologies: ['Java', 'Spring Boot', 'Spring Cloud', 'MySQL', 'Maven'],
      githubUrl: 'https://github.com/lucasberonvonbrand/tienda-productos',
    },
    {
      id: 'api-blog-security',
      title: 'API REST Blog - Spring Security (Backend Java)',
      category: 'Backend Security',
      coverImage: 'assets/spring-security-architecture.webp',
      coverFit: 'contain',
      coverBg: '#f4f4f4',
      description:
        'Aplicación backend para un blog que implementa un sistema de seguridad robusto con Spring Security. Incluye autenticación basada en JWT, integración con OAuth2 (GitHub) y autorización granular mediante roles y permisos.',
      responsibilities: [
        'Implementación de autenticación y autorización desde cero utilizando Spring Security.',
        'Creación de un sistema de registro y login que genera y valida JSON Web Tokens (JWT) para sesiones stateless.',
        'Integración de OAuth2 para permitir el inicio de sesión de usuarios a través de sus cuentas de GitHub.',
        'Definición de un sistema de control de acceso granular basado en roles (ADMIN, USER, AUTHOR) y permisos (CREATE, READ, UPDATE, DELETE).',
        'Protección de endpoints a nivel de método con anotaciones de seguridad para un control preciso.',
        'Cifrado de contraseñas de usuario en la base de datos utilizando el algoritmo BCrypt.',
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'Spring Security',
        'JWT',
        'OAuth2',
        'MySQL',
        'JPA/Hibernate',
        'Maven',
      ],
      githubUrl: 'https://github.com/lucasberonvonbrand/blog-spring-security',
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find((p) => p.id === id);
  }

  getTechIcon(tech: string): string | null {
    const normalized = tech.toLowerCase();
    if (normalized.includes('angular')) return 'angular.svg';
    if (normalized.includes('react')) return 'react.svg';
    if (normalized.includes('typescript')) return 'typescript.svg';
    if (normalized.includes('javascript')) return 'javascript.svg';
    if (normalized.includes('html')) return 'html5.svg';
    if (normalized.includes('css') && !normalized.includes('tailwind')) return 'css3.svg';
    if (normalized.includes('tailwind')) return 'tailwindcss.svg';
    if (normalized.includes('spring boot')) return 'springboot.svg';
    if (normalized.includes('spring cloud')) return 'springcloud.svg';
    if (normalized.includes('spring security')) return 'springsecurity.svg';
    if (normalized.includes('java')) return 'java.svg';
    if (normalized.includes('hono')) return 'hono.svg';
    if (normalized.includes('node')) return 'nodejs.svg';
    if (normalized.includes('docker')) return 'docker.svg';
    if (normalized.includes('nginx')) return 'nginx.svg';
    if (normalized.includes('jwt')) return 'jwt.svg';
    if (normalized.includes('oauth')) return 'oauth.svg';
    if (normalized.includes('better auth')) return 'better-auth.svg';
    if (normalized.includes('zod')) return 'zod.svg';
    if (normalized.includes('tanstack')) return 'tanstack.svg';
    if (normalized.includes('hibernate') || normalized.includes('jpa')) return 'hibernate.svg';
    if (normalized.includes('mysql')) return 'mysql.svg';
    if (normalized.includes('mongo')) return 'mongodb.svg';
    if (normalized.includes('weka')) return 'wekaio.webp';
    if (normalized.includes('render')) return 'render.svg';
    if (normalized.includes('aiven')) return 'aiven.svg';
    if (normalized.includes('junit')) return 'junit.svg';
    if (normalized.includes('mockito')) return 'mockito.png';
    if (normalized.includes('sonarqube')) return 'sonarqube.svg';
    if (normalized.includes('github actions')) return 'github-actions.svg';
    if (normalized.includes('ci/cd')) return 'cicd.png';
    if (normalized.includes('git')) return 'git.svg';
    if (normalized.includes('postman')) return 'postman.svg';
    if (normalized.includes('maven')) return 'maven.svg';
    if (normalized.includes('gemini')) return 'gemini.svg';
    return null;
  }
}
