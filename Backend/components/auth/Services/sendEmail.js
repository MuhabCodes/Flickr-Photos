const { join } = require('path');
require('dotenv').config({ path: join(__dirname, '/../../../secret/', '.env') });
const nodemailer = require('nodemailer');

// setting options for sending mail via smtp
const options = {
  host: process.env.SMTP_SERVER,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
};

module.exports.sendConfirmationEmail = async function sendEmail(
  email, firstName, lastName, confirmationLink,
) {
  const transporter = nodemailer.createTransport(options);
  const message = {
    from: 'noreply@flick.photos',
    to: email,
    subject: 'Flick Photos Email verification',
    text: `Hey ${firstName} ${lastName},\n\nPlease follow this link to verify your account on Flickr Photos : ${confirmationLink}`, // TODO : Add real verification message
  };
  await transporter.sendMail(message);
};
