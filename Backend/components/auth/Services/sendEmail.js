const { join } = require('path');
require('dotenv').config({ path: join(__dirname, '/../../../secret/', '.env') });
const jwt = require('jsonwebtoken');
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
  { email, _id }, { firstName, lastName },
) {
  const transporter = nodemailer.createTransport(options);
  const confirmationToken = jwt.sign({
    userId: _id,
  },
  process.env.CONFIRMATION_KEY,
  {
    expiresIn: '1d',
  });
  const confirmationLink = `${process.env.HOST}:${process.env.PORT}/auth/confirmation/${confirmationToken}`;
  const message = {
    from: 'noreply@flick.photos',
    to: email,
    subject: 'Flick Photos Email verification',
    html: `<p>Hey ${firstName} ${lastName},\n\nPlease follow this link to verify your account on Flickr Photos : <a href=${confirmationLink}>Link</a></p>`, // TODO : Add real verification message
  };
  await transporter.sendMail(message);
};
