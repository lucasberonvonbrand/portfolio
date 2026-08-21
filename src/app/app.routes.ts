import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { EducationDetailComponent } from './components/education-detail/education-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: 'education/:id', component: EducationDetailComponent },
  { path: '**', redirectTo: '' },
];
