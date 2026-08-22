import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';
import { scrollToSection, activeAnchorId } from '../../../utils/scroll-helper';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent {
  scrollToSection = scrollToSection;
  activeAnchorId = activeAnchorId;
}
