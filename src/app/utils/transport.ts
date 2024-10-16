import nodemailer from "nodemailer";
import { IEmailDocument } from "../interfaces/main.interface";

const RECEIVER = "workostapuk@gmail.com";

const transporter = nodemailer.createTransport({
  host: process.env.NEXT_SMTP_HOST as string,
  port: parseInt(process.env.NEXT_SMTP_PORT as string, 10),
  secure: false, // only if port is 465
  auth: {
    user: process.env.NEXT_EMAIL_USERNAME as string,
    pass: process.env.NEXT_EMAIL_PASSWORD as string,
  },
} as nodemailer.TransportOptions);

export async function sendEmail(data: IEmailDocument) {
  await transporter.sendMail({
    from: process.env.NEXT_EMAIL_USERNAME as string,
    to: RECEIVER,
    subject: "Message from Portfolio | Ostapuk",
    text: data.message,
    html: `
      <h1>New message from ${data.firstName} ${data.lastName}</h1>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `,
  });
}
