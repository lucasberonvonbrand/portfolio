import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { scrollToSection, activeAnchorId } from '../../utils/scroll-helper';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  scrollToSection = scrollToSection;
  activeAnchorId = activeAnchorId;
}
