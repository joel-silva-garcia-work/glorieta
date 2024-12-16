   // src/mail/mail.service.ts
   import { Injectable } from '@nestjs/common';
   import { createTransport } from 'nodemailer';

   @Injectable()
   export class MailService {
     private transporter;

     constructor() {
       this.transporter = createTransport({
         host: 'sandbox.smtp.mailtrap.io', // Cambia esto por tu servidor SMTP
         port: 2525, // Cambia esto si es necesario
         auth: {
           user: 'd7c7cb37690432', // Tu correo
           pass: '1eaa2d89fce7e4', // Tu contraseña
         },
       });
     }
     async sendEmail(to: string, subject: string, html: string) {
      try {
        await this.transporter.sendMail({ to, subject, html });
        console.log('Email enviado exitosamente'); // Mensaje de éxito
      } catch (error) {
        console.error('Error al enviar el correo:', error); // Manejo de errores
        throw new Error('No se pudo enviar el correo'); // Lanzar error
      }
    }
   }