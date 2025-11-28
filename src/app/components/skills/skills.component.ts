import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Backend y Cloud',
      skills: [
        { name: 'Java', icon: 'java.svg', description: 'Lenguaje de Programación' },
        { name: 'Spring Boot', icon: 'springboot.svg', description: 'Framework Backend' },
        { name: 'Spring Cloud', icon: 'springcloud.svg', description: 'Microservicios' }
      ]
    },
    {
      title: 'Seguridad y Datos',
      skills: [
        { name: 'Spring Security', icon: 'springsecurity.svg', description: 'Autenticación y Autorización' },
        { name: 'JWT', icon: 'jwt.svg', description: 'Estándar de Autenticación' },
        { name: 'OAuth', icon: 'oauth.svg', description: 'Framework de Autorización' },
        { name: 'Hibernate', icon: 'hibernate.svg', description: 'ORM para Java' },
        { name: 'MySQL', icon: 'mysql.svg', description: 'Base de Datos Relacional' }
      ]
    },
    {
      title: 'Herramientas',
      skills: [
        { name: 'Git', icon: 'git.svg', description: 'Control de Versiones' },
        { name: 'GitHub', icon: 'github.svg', description: 'Plataforma de Desarrollo' },
        { name: 'Postman', icon: 'postman.svg', description: 'Plataforma para APIs' },
        { name: 'Maven', icon: 'maven.svg', description: 'Gestión de Dependencias' },
        { name: 'IntelliJ IDEA', icon: 'intellij.svg', description: 'IDE de Desarrollo' }
      ]
    }
  ];
}
