import { Injectable } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() {}

  sendEmail(templateParams: any): Promise<EmailJSResponseStatus> {
    return emailjs.send(environment.emailjs_service_id, environment.emailjs_template_id, templateParams, {
      publicKey: environment.emailjs_public_key,
    });
  }
}
