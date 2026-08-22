import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, ThemeMode } from '../../../services/theme.service';
import { ThemeSwitcherComponent } from '../../shared/theme-switcher/theme-switcher.component';
import { Tilt3dDirective } from '../../../directives/tilt-3d.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ThemeSwitcherComponent, Tilt3dDirective],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  themeService = inject(ThemeService);

  fullName = 'Lucas Beron Von Brand';
  displayedName = signal('');
  isTypingComplete = signal(false);

  ngOnInit(): void {
    this.startTypingEffect();
  }

  setTheme(mode: ThemeMode): void {
    this.themeService.setTheme(mode);
  }

  startTypingEffect(): void {
    let index = 0;
    const speed = 120;

    const interval = setInterval(() => {
      if (index < this.fullName.length) {
        this.displayedName.update((val) => val + this.fullName.charAt(index));
        index++;
      } else {
        this.isTypingComplete.set(true);
        clearInterval(interval);
      }
    }, speed);
  }
}
