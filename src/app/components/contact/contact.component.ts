import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submissionStatus: 'success' | 'error' | null = null;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    private cdr: ChangeDetectorRef
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  async onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched(); // Marca todos los campos para mostrar errores
      return;
    }

    this.isSubmitting = true;
    this.submissionStatus = null;

    try {
      const formValue = this.contactForm.value;
      await this.emailService.sendEmail({
        name: formValue.name,
        email: formValue.email,
        subject: formValue.subject,
        message: formValue.message,
      });
      this.submissionStatus = 'success';
      this.contactForm.reset();

      // Ocultar el mensaje de éxito después de 5 segundos
      setTimeout(() => {
        this.submissionStatus = null;
        this.cdr.detectChanges(); // Aseguramos que la vista se actualice
      }, 5000);
    } catch (error) {
      console.error('Error al enviar el email:', error);
      this.submissionStatus = 'error';
      // Opcional: Ocultar también el mensaje de error después de un tiempo
      setTimeout(() => {
        this.submissionStatus = null;
        this.cdr.detectChanges();
      }, 7000);
    } finally {
      this.isSubmitting = false;
      this.cdr.detectChanges(); // Forzar la detección de cambios
    }
  }
}
