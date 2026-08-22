import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/sections/hero/hero.component';
import { AboutComponent } from '../../components/sections/about/about.component';
import { SkillsComponent } from '../../components/sections/skills/skills.component';
import { ProjectsComponent } from '../../components/sections/projects/projects.component';
import { AcademicEducationComponent } from '../../components/sections/academic-education/academic-education.component';
import { CoursesComponent } from '../../components/sections/courses/courses.component';
import { LinksComponent } from '../../components/sections/links/links.component';
import { ContactComponent } from '../../components/sections/contact/contact.component';

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
  templateUrl: './home.component.html',
})
export class HomeComponent {}
