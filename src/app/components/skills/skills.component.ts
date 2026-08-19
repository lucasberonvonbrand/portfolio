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
  skillsRow1 = [
    { name: 'Java 21', icon: 'java.svg' },
    { name: 'Spring Boot 3', icon: 'springboot.svg' },
    { name: 'TypeScript', icon: 'typescript.svg' },
    { name: 'Angular 19', icon: 'angular.svg' },
    { name: 'JavaScript', icon: 'javascript.svg' },
    { name: 'React', icon: 'react.svg' },
    { name: 'Node.js', icon: 'nodejs.svg' },
    { name: 'Docker', icon: 'docker.svg' },
    { name: 'HTML5', icon: 'html5.svg' },
    { name: 'CSS3', icon: 'css3.svg' },
    { name: 'Tailwind CSS', icon: 'tailwindcss.svg' },
  ];

  skillsRow2 = [
    { name: 'Spring Security', icon: 'springsecurity.svg' },
    { name: 'JWT', icon: 'jwt.svg' },
    { name: 'OAuth2', icon: 'oauth.svg' },
    { name: 'Hibernate / JPA', icon: 'hibernate.svg' },
    { name: 'MySQL', icon: 'mysql.svg' },
    { name: 'MongoDB', icon: 'mongodb.svg' },
    { name: 'JUnit 5', icon: 'junit.svg' },
    { name: 'Mockito', icon: 'mockito.png' },
    { name: 'SonarQube', icon: 'sonarqube.svg' },
    { name: 'Git', icon: 'git.svg' },
    { name: 'GitHub Actions', icon: 'github-actions.svg' },
    { name: 'Maven', icon: 'maven.svg' },
    { name: 'Postman', icon: 'postman.svg' },
    { name: 'IntelliJ IDEA', icon: 'intellij.svg' },
    { name: 'Google Antigravity', icon: 'google-antigravity.svg' },
    { name: 'Kiro', icon: 'kiro.svg' },
  ];
}
