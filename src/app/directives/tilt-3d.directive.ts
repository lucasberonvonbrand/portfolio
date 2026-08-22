import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTilt3d]',
  standalone: true,
})
export class Tilt3dDirective {
  @Input() maxRotation: number = 14;
  @Input() defaultRotateDeg: number = -6;
  @Input() hoverRotateDeg: number = -4;
  @Input() hoverScale: number = 1.06;

  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const card = this.el.nativeElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * this.maxRotation;
    const rotateY = ((x - centerX) / centerX) * this.maxRotation;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotate(${this.hoverRotateDeg}deg) scale(${this.hoverScale})`;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    const card = this.el.nativeElement;
    card.style.transform = `perspective(800px) rotate(${this.defaultRotateDeg}deg) rotateX(0deg) rotateY(0deg) scale(1)`;
  }
}
