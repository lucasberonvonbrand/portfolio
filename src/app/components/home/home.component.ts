import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { AcademicEducationComponent } from '../academic-education/academic-education.component';
import { CoursesComponent } from '../courses/courses.component';
import { LinksComponent } from '../links/links.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    AcademicEducationComponent,
    CoursesComponent,
    LinksComponent,
    ContactComponent,
  ],
  template: `
    <app-hero />
    <app-about />
    <app-skills />
    <app-projects />
    <app-academic-education />
    <app-courses />
    <app-links />
    <app-contact />
  `,
})
export class HomeComponent {}
