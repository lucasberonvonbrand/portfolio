import { Component, ChangeDetectorRef, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { environment } from '../../../environments/environment';
import { scrollToSection, activeAnchorId } from '../../utils/scroll-helper';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  scrollToSection = scrollToSection;
  activeAnchorId = activeAnchorId;
  contactForm: FormGroup;
  isSubmitting = false;
  submissionStatus: 'success' | 'error' | null = null;
  isModalOpen = signal(false);

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private cdr: ChangeDetectorRef,
  ) {
    this.contactForm = this.fb.group({
      message: ['', [Validators.required, Validators.maxLength(1000)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get charCount(): number {
    return this.contactForm.get('message')?.value?.length || 0;
  }

  autoGrow(event: Event): void {
    const textarea = event.target as HTMLTextAreaElement;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }

  openModal(): void {
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
    this.submissionStatus = null;
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submissionStatus = null;

    const formValue = this.contactForm.value;
    const subject = 'Mensaje Directo desde Portfolio Web - Lucas Beron';
    const mailtoUrl = `mailto:lucasberonvonbrand@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(`Mensaje de: ${formValue.email}\n\n${formValue.message}`)}`;

    // Si las claves de EmailJS son los placeholders iniciales ('TU_SERVICE_ID'), usamos mailto directo
    if (
      !environment.emailjs_service_id ||
      environment.emailjs_service_id === 'TU_SERVICE_ID' ||
      environment.emailjs_service_id.includes('TU_')
    ) {
      window.location.href = mailtoUrl;
      this.submissionStatus = 'success';
      this.contactForm.reset();
      this.isSubmitting = false;
      this.cdr.detectChanges();
      setTimeout(() => this.closeModal(), 2000);
      return;
    }

    try {
      await this.emailService.sendEmail({
        name: 'Visitante del Portfolio Web',
        from_name: `Visitante del Portfolio Web (${formValue.email})`,
        email: formValue.email,
        from_email: formValue.email,
        reply_to: formValue.email,
        subject: subject,
        message: formValue.message,
      });

      this.submissionStatus = 'success';
      this.contactForm.reset();

      setTimeout(() => {
        this.closeModal();
      }, 2500);
    } catch (error) {
      console.error('Error en EmailJS, usando fallback mailto:', error);
      window.location.href = mailtoUrl;
      this.submissionStatus = 'success';
      this.contactForm.reset();
      setTimeout(() => this.closeModal(), 2000);
    } finally {
      this.isSubmitting = false;
      this.cdr.detectChanges();
    }
  }
}
