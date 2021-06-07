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
  { email, _id },
) {
  const transporter = nodemailer.createTransport(options);
  const confirmationToken = jwt.sign({
    userId: _id,
  },
  process.env.CONFIRMATION_KEY,
  {
    expiresIn: '1d',
  });
  const confirmationLinkFE = `${process.env.HOST}:${process.env.PORT}/auth/confirmation/${confirmationToken}`;
  const confirmationLinkAndroid = `https://verificationflickr.page.link.com/?emailConfirmToken=${confirmationToken}`;
  const message = {
    from: 'noreply@flick.photos',
    to: email,
    subject: 'Flick Photos Email verification',
    html: `<p>\n\nPlease follow this link to verify your account on Flickr Photos Webapp : <a href=${confirmationLinkFE}>Browser</a></p>\nor go to this link on android <a href=${confirmationLinkAndroid}>Android</a></p>`,
  };
  await transporter.sendMail(message);
};

module.exports.sendResetPasswordEmail = async function sendEmail(
  userId, email,
) {
  const transporter = nodemailer.createTransport(options);
  const resetToken = jwt.sign({
    userId,
  },
  process.env.RESET_PASSWORD_KEY,
  {
    expiresIn: '1d',
  });
  const resetLink = `${process.env.HOST}:${process.env.PORT}/auth/forgot-password/${resetToken}`;
  const message = {
    from: 'noreply@flick.photos',
    to: email,
    subject: 'Flick Photos - Reset Password',
    html: `<p>Hey,\n\nPlease follow this link to reset your password on Flickr Photos : <a href=${resetLink}>Link</a></p>`,
  };
  await transporter.sendMail(message);
};

module.exports.sendProEmail = async function sendEmail(
  userId, email,
) {
  const transporter = nodemailer.createTransport(options);
  const proToken = jwt.sign({
    userId,
  },
  process.env.PRO_KEY,
  {
    expiresIn: '1d',
  });
  const proLink = `${process.env.HOST}:${process.env.PORT}/user/pro/${proToken}`;
  const message = {
    from: 'noreply@flick.photos',
    to: email,
    subject: 'Flick Photos - Pro',
    html: `<p>Hey,\n\nPlease follow this link to get a pro membership on Flickr Photos : <a href=${proLink}>Link</a></p>`,
  };
  await transporter.sendMail(message);
};
