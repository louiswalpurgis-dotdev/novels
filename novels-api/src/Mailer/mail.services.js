import transporter from "../config/mailer.js";

const sendMail = async ({ to, subject, text, html }) => {
   return await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      text,
      html,
   });
};

export { sendMail };
