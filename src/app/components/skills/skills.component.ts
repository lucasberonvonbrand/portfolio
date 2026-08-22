import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { scrollToSection, activeAnchorId } from '../../utils/scroll-helper';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class SkillsComponent {
  scrollToSection = scrollToSection;
  activeAnchorId = activeAnchorId;
  // Fila 1: Ecosistema Frontend, Web & JavaScript/Node.js
  skillsRow1 = [
    { name: 'TypeScript', icon: 'typescript.svg' },
    { name: 'Angular 19', icon: 'angular.svg' },
    { name: 'JavaScript', icon: 'javascript.svg' },
    { name: 'React', icon: 'react.svg' },
    { name: 'Vite', icon: 'vite.svg' },
    { name: 'HeroUI', icon: 'heroui.svg' },
    { name: 'Tailwind CSS', icon: 'tailwindcss.svg' },
    { name: 'TanStack', icon: 'tanstack.svg' },
    { name: 'HTML5', icon: 'html5.svg' },
    { name: 'CSS3', icon: 'css3.svg' },
    { name: 'Node.js', icon: 'nodejs.svg' },
    { name: 'Hono', icon: 'hono.svg' },
    { name: 'Better Auth', icon: 'better-auth.svg' },
    { name: 'Zod', icon: 'zod.svg' },
  ];

  // Fila 2: Ecosistema Java Backend, Seguridad, Databases, DevOps & AI
  skillsRow2 = [
    { name: 'Java 21', icon: 'java.svg' },
    { name: 'Spring Boot 3', icon: 'springboot.svg' },
    { name: 'Spring Security', icon: 'springsecurity.svg' },
    { name: 'JWT', icon: 'jwt.svg' },
    { name: 'OAuth2', icon: 'oauth.svg' },
    { name: 'Hibernate / JPA', icon: 'hibernate.svg' },
    { name: 'MySQL', icon: 'mysql.svg' },
    { name: 'MongoDB', icon: 'mongodb.svg' },
    { name: 'Docker', icon: 'docker.svg' },
    { name: 'Git', icon: 'git.svg' },
    { name: 'GitHub', icon: 'github-dark.svg' },
    { name: 'GitHub Actions', icon: 'github-actions.svg' },
    { name: 'Postman', icon: 'postman.svg' },
    { name: 'IntelliJ IDEA', icon: 'intellij.svg' },
    { name: 'JUnit 5', icon: 'junit.svg' },
    { name: 'Mockito', icon: 'mockito.png' },
    { name: 'Weka AI', icon: 'wekaio.webp' },
    { name: 'Google Gemini', icon: 'gemini.svg' },
    { name: 'Google Antigravity', icon: 'google-antigravity.svg' },
    { name: 'Kiro', icon: 'kiro.svg' },
  ];
}
