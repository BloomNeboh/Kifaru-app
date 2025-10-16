const nodemailer = require('nodemailer');
/**
 * Email service using Nodemailer. Configure environment variables:
 * - SMTP_HOST (e.g. smtp.gmail.com)
 * - SMTP_PORT (e.g. 587)
 * - SMTP_USER
 * - SMTP_PASS
 * - EMAIL_FROM
 */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  }
});

async function sendMail({ to, subject, text, html }){
  const msg = {
    from: process.env.EMAIL_FROM || process.env.SMTP_USER,
    to, subject, text, html
  };
  const info = await transporter.sendMail(msg);
  return info;
}

module.exports = { sendMail };
