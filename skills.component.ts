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
  skills = [
    {
      name: 'Java',
      icon: 'java.png',
      description: 'Lenguaje de Programación'
    },
    {
      name: 'Spring Boot',
      icon: 'springboot.svg',
      description: 'Framework Backend'
    },
    {
      name: 'Spring Cloud',
      icon: 'spring.svg', // Usamos el de Spring general
      description: 'Microservicios'
    },
    {
      name: 'Spring Security',
      icon: 'springsecurity.svg',
      description: 'Autenticación y Autorización'
    },
    {
      name: 'MySQL',
      icon: 'mysql.svg',
      description: 'Base de Datos Relacional'
    },
    {
      name: 'Git',
      icon: 'git.svg',
      description: 'Control de Versiones'
    },
    {
      name: 'GitHub',
      icon: 'github.svg',
      description: 'Plataforma de Desarrollo'
    },
    {
      name: 'JWT',
      icon: 'jwt.svg',
      description: 'Estándar de Autenticación'
    }
  ];
}
