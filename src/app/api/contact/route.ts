  import { NextResponse } from 'next/server';
  import nodemailer from 'nodemailer';

  export async function POST(req: Request) {
    try {
      const { name, email, subject, message } = await req.json();

      // Vérification de TOUTES les variables nécessaires
      if (!process.env.MAIL_HOST || 
          !process.env.MAIL_USERNAME || 
          !process.env.MAIL_PASSWORD ||
          !process.env.MAIL_FROM_ADDRESS ||
          !process.env.MAIL_RECEIVER) {
        console.error('Missing mail configuration:', {
          host: !!process.env.MAIL_HOST,
          username: !!process.env.MAIL_USERNAME,
          password: !!process.env.MAIL_PASSWORD,
          from: !!process.env.MAIL_FROM_ADDRESS,
          receiver: !!process.env.MAIL_RECEIVER
        });
        return NextResponse.json({ message: 'Erreur de configuration serveur' }, { status: 500 });
      }

      const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT) || 587,
        secure: process.env.MAIL_PORT === '465',
        auth: {
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: `"${process.env.MAIL_FROM_NAME || 'Portfolio Contact'}" <${process.env.MAIL_FROM_ADDRESS}>`,
        to: process.env.MAIL_RECEIVER,
        subject: `Nouveau message Portfolio: ${subject}`,
        text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <h3>Nouveau message de votre portfolio</h3>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Sujet:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      };

      await transporter.sendMail(mailOptions);

      return NextResponse.json({ message: 'Email envoyé avec succès' }, { status: 200 });
    } catch (error) {
      console.error('Erreur d\'envoi d\'email:', error);
      return NextResponse.json({ message: 'Erreur lors de l\'envoi de l\'email' }, { status: 500 });
    }
  }