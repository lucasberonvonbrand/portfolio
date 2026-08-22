import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProjectsService, Project } from '../../services/projects.service';
import { scrollToSection, activeAnchorId } from '../../utils/scroll-helper';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ProjectsComponent {
  scrollToSection = scrollToSection;
  activeAnchorId = activeAnchorId;
  private router = inject(Router);
  projectsService = inject(ProjectsService);

  get projects(): Project[] {
    return this.projectsService.getProjects();
  }

  onMouseMove(event: MouseEvent, cardElement: HTMLElement): void {
    const rect = cardElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    cardElement.style.setProperty('--mouse-x', `${x}px`);
    cardElement.style.setProperty('--mouse-y', `${y}px`);
  }

  navigateToProject(id: string): void {
    this.router.navigate(['/projects', id]);
  }

  getTechIcon(tech: string): string | null {
    return this.projectsService.getTechIcon(tech);
  }
}
