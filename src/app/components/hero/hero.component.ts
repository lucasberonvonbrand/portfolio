import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, ThemeMode } from '../../services/theme.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
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
    const speed = 120; // Milisegundos por letra (escritura más pausada y natural)

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

  onMouseMove(event: MouseEvent, card: HTMLElement): void {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 14;
    const rotateY = ((x - centerX) / centerX) * 14;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotate(-4deg) scale(1.06)`;
  }

  onMouseLeave(card: HTMLElement): void {
    card.style.transform = `perspective(800px) rotate(-6deg) rotateX(0deg) rotateY(0deg) scale(1)`;
  }
}
