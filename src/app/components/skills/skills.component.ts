import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular (v19+)', icon: 'angular.svg', description: 'Framework SPA Frontend' },
        { name: 'React', icon: 'react.svg', description: 'Librería UI' },
        { name: 'TypeScript', icon: 'typescript.svg', description: 'Superset Tipado' },
        { name: 'JavaScript', icon: 'javascript.svg', description: 'Lenguaje de Programación' },
        { name: 'HTML5', icon: 'html5.svg', description: 'Estructuración Web' },
        { name: 'CSS3', icon: 'css3.svg', description: 'Estilos Web' },
        { name: 'Tailwind CSS', icon: 'tailwindcss.svg', description: 'Framework CSS' },
      ],
    },
    {
      title: 'Backend y Cloud',
      skills: [
        { name: 'Java (v17/21)', icon: 'java.svg', description: 'Lenguaje de Programación' },
        { name: 'Spring Boot 3', icon: 'springboot.svg', description: 'Framework Backend' },
        { name: 'Spring Cloud', icon: 'springcloud.svg', description: 'Microservicios' },
        { name: 'Node.js', icon: 'nodejs.svg', description: 'Entorno de Ejecución' },
        { name: 'Docker', icon: 'docker.svg', description: 'Contenerización' },
      ],
    },
    {
      title: 'Seguridad y Datos',
      skills: [
        {
          name: 'Spring Security',
          icon: 'springsecurity.svg',
          description: 'Autenticación y Autorización',
        },
        { name: 'JWT', icon: 'jwt.svg', description: 'Tokens Stateless' },
        { name: 'OAuth2', icon: 'oauth.svg', description: 'Autorización Delegada' },
        { name: 'Hibernate / JPA', icon: 'hibernate.svg', description: 'ORM para Java' },
        { name: 'MySQL', icon: 'mysql.svg', description: 'Base de Datos Relacional' },
        { name: 'MongoDB', icon: 'mongodb.svg', description: 'Base de Datos NoSQL' },
      ],
    },
    {
      title: 'Testing y DevOps',
      skills: [
        { name: 'JUnit 5', icon: 'junit.svg', description: 'Pruebas Unitarias' },
        { name: 'Mockito', icon: 'mockito.png', description: 'Mocking' },
        { name: 'SonarQube', icon: 'sonarqube.svg', description: 'Calidad Continua' },
        { name: 'GitHub Actions', icon: 'github-actions.svg', description: 'Pipelines CI/CD' },
      ],
    },
    {
      title: 'Herramientas',
      skills: [
        { name: 'Git', icon: 'git.svg', description: 'Control de Versiones' },
        { name: 'GitHub', icon: 'github.svg', description: 'Plataforma de Desarrollo' },
        { name: 'Postman', icon: 'postman.svg', description: 'Plataforma para APIs' },
        { name: 'Maven', icon: 'maven.svg', description: 'Gestión de Dependencias' },
        { name: 'IntelliJ IDEA', icon: 'intellij.svg', description: 'IDE de Desarrollo' },
        { name: 'Google Antigravity', icon: 'google-antigravity.svg', description: 'Agente de IA' },
        { name: 'Kiro', icon: 'kiro.svg', description: 'IDE & Asistente IA' },
      ],
    },
  ];
}
