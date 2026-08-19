import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProjectsService, Project } from '../../services/projects.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  projectsService = inject(ProjectsService);

  project: Project | undefined;
  selectedGallery: { url: string; caption: string }[] | null = null;
  currentImageIndex: number = 0;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.project = this.projectsService.getProjectById(id);
        if (!this.project) {
          this.router.navigate(['/']);
        }
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  getTechIcon(tech: string): string | null {
    return this.projectsService.getTechIcon(tech);
  }

  openGallery(images: { url: string; caption: string }[], index: number = 0): void {
    this.selectedGallery = images;
    this.currentImageIndex = index;
  }

  closeGallery(): void {
    this.selectedGallery = null;
    this.currentImageIndex = 0;
  }

  nextImage(): void {
    if (this.selectedGallery) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.selectedGallery.length;
    }
  }

  prevImage(): void {
    if (this.selectedGallery) {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.selectedGallery.length) % this.selectedGallery.length;
    }
  }

  selectImage(index: number): void {
    this.currentImageIndex = index;
  }
}
