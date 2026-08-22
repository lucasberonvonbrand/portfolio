# 💼 Portfolio Profesional - Lucas Beron Von Brand

[![Angular](https://img.shields.io/badge/Angular-19%2B-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SCSS](https://img.shields.io/badge/SCSS-Modular_Design-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Netlify Status](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://lucasberonvonbrand.netlify.app/)

Este repositorio contiene el código fuente completo de mi portfolio web profesional. Diseñado y desarrollado de forma nativa desde cero bajo una **Arquitectura Limpia (*Clean Architecture / Domain-Driven*)**, utilizando **Angular 19+**, **Signals**, **Standalone Components** y **SCSS**.

Aunque mi especialización principal radica en el **desarrollo Backend con Java y Spring Boot**, construí este sitio frontend para demostrar mis capacidades técnicas en el diseño de interfaces web modernas, limpias, interactivas y altamente responsivas.

---

## 🚀 Demo en Vivo

Podés visitar la versión en vivo publicada en Netlify:

👉 **[https://lucasberonvonbrand.netlify.app/](https://lucasberonvonbrand.netlify.app/)**

---

## ✨ Características y Funcionalidades

- 🌓 **Sistema de Tema Claro / Oscuro (*Light & Dark Mode*)**: Alternancia de temas en tiempo real mediante CSS Variables y persistencia con `ThemeService`.
- ⚡ **Angular 19+ Standalone & Signals**: Gestión del estado reactivo de la aplicación sin dependencias pesadas de terceros.
- 📐 **Diseño Responsivo Ultra-Cuidado**: Layout adaptable (Desktop, Tablet y Mobile) con prevención de saltos de línea incómodos.
- 🎡 **Carrusel Marquee Infinito**: Muestra de tecnologías en dos filas continuas en movimiento opuesto.
- 🖼️ **Visor Galería Lightbox**: Modal dinámico para inspeccionar capturas de pantalla de proyectos con soporte para zoom, track de miniaturas y bloqueo de scroll del fondo.
- 🪄 **Directiva 3D Tilt (`Tilt3dDirective`)**: Efecto interactivo de perspectiva 3D en la foto de tarjeta de perfil según la posición del cursor.
- 📜 **Revelado Suave por Scroll (`ScrollAnimationDirective`)**: Animaciones de entrada progresivas mediante `IntersectionObserver`.
- ✉️ **Formulario de Contacto**: Integración directa con **EmailJS** y fallback automático por cliente de correo (`mailto`).

---

## 📂 Arquitectura del Proyecto

El código está organizado siguiendo las mejores prácticas de **Clean Architecture y Reutilización de Componentes**:

```text
src/app/
├── pages/                                 # Vistas Principales (Rutas)
│   ├── home/                              # HomeComponent (Portada principal)
│   └── project-detail/                    # ProjectDetailComponent (Página de detalle)
│
├── components/
│   ├── sections/                          # Bloques Seccionales Modularizados
│   │   ├── hero/                          # Hero & Presentación
│   │   ├── about/                         # Sobre Mí
│   │   ├── skills/                        # Habilidades Técnicas (Marquee)
│   │   ├── projects/                      # Proyectos Destacados
│   │   ├── academic-education/            # Formación Académica (UNLaM / UNLZ)
│   │   ├── courses/                       # Cursos & Certificaciones
│   │   ├── links/                         # Mis Redes & Enlaces
│   │   └── contact/                       # Contacto & Formulario Directo
│   │
│   ├── shared/                            # UI Primitives Reutilizables
│   │   └── theme-switcher/                # Selector de Modo Claro/Oscuro
│   │
│   └── footer/                            # Pie de página
│
├── directives/                            # Directivas de Comportamiento DOM
│   ├── scroll-animation.directive.ts      # Animación de revelado por scroll
│   └── tilt-3d.directive.ts               # Inclinación 3D en tarjeta fotográfica
│
├── services/                              # Servicios de Negocio & Estado
│   ├── projects.service.ts                # Catálogo de datos de proyectos
│   ├── theme.service.ts                   # Control reactivo del tema visual
│   └── email.service.ts                   # Servicio de envío de mails
│
└── utils/                                 # Helpers Globales
    └── scroll-helper.ts                   # Desplazamiento suave y señales globales
```

---

## 🛠️ Tecnologías y Herramientas

- **Framework**: Angular 19+ (Standalone Components, Signals, Router)
- **Lenguaje**: TypeScript 5.0+
- **Estilos**: SCSS (Sass), CSS Variables nativas, Flexbox & CSS Grid
- **Lógica e Integración**: RxJS, EmailJS (`@emailjs/browser`)
- **Despliegue**: Netlify (con soporte SPA `_redirects`)

---

## ⚙️ Cómo Ejecutar el Proyecto Localmente

Si querés clonar y levantar el proyecto en tu entorno local:

1️⃣ **Clonar el repositorio**:
```bash
git clone https://github.com/lucasberonvonbrand/portfolio.git
cd portfolio
```

2️⃣ **Instalar dependencias**:
```bash
npm install
```

3️⃣ **Levantar el servidor de desarrollo**:
```bash
npm start
```
La aplicación estará disponible en `http://localhost:4200/`. El servidor se recargará automáticamente al guardar cambios en el código.

4️⃣ **Compilar para Producción**:
```bash
npm run build
```
*(El bundle compilado listo para desplegar se generará dentro de `dist/portfolio/browser`).*

---

## 👨‍💻 Autor

- **Lucas Beron Von Brand**
  - **LinkedIn**: [lucas-beron-von-brand](https://www.linkedin.com/in/lucas-beron-von-brand-5aa37919a/)
  - **GitHub**: [@lucasberonvonbrand](https://github.com/lucasberonvonbrand)
  - **Email**: [lucasberonvonbrand@gmail.com](mailto:lucasberonvonbrand@gmail.com)
