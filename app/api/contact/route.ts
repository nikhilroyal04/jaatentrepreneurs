import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  let name: string, email: string, message: string;
  try {
    const body = await req.json();
    name = body.name;
    email = body.email;
    message = body.message;
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error in contact form submission:', error);
    return NextResponse.json(
      { success: false, message: 'Invalid request body' },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER, // apne email par bhejna hai
    subject: `New Contact Form Submission from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Email sending failed', error }, { status: 500 });
  }
}
// If you get a type error for nodemailer, install types: npm i --save-dev @types/nodemailer
