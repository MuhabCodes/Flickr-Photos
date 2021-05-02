const { join } = require('path');
const userDAL = require('../User/userDAL');
const { verifyPassword } = require('./Services/verifyPassword');
const { sendConfirmationEmail, sendResetPasswordEmail } = require('./Services/sendEmail.js');
const { decryptConfirmationToken, decryptResetPasswordToken } = require('./Services/decryptToken');
require('dotenv').config({ path: join(__dirname, '/../../secret/', '.env') });

exports.login = async function loginUser(req, res) {
  const { body } = req;
  try {
    const token = await verifyPassword(body);
    res.status(201).send({ statusCode: 201, token });
  } catch (err) {
    const errMsg = JSON.parse(err.message);
    res.status(errMsg.statusCode).send({ statusCode: errMsg.statusCode, error: errMsg.error });
  }
};

exports.register = async function registerUser(
  req, res,
) {
  const { body } = req;
  const user = await userDAL.getUserByEmail(body.email);
  if (!user) {
    // create user after checking for email and password
    const userObj = await userDAL.createNewUser(body);
    await sendConfirmationEmail(userObj, body);
    res.status(201).send({ statusCode: 201 });
  } else {
    // say that an email is sent but don't send for security purposes
    res.status(201).send({ statusCode: 201 });
  }
};

exports.confirmUser = async function confirmUser(req, res) {
  const { confirmationToken } = req.params;
  try {
    const decoded = await decryptConfirmationToken(confirmationToken);
    await userDAL.activateUser(decoded.userId);
    res.status(201).send({ statusCode: 201, message: 'The account is now activated' });
  } catch (err) {
    const errMsg = JSON.parse(err.message);
    res.status(errMsg.statusCode).send({ statusCode: errMsg.statusCode, error: errMsg.error });
  }
};

exports.sendResetPasswordEmail = async function sendRstPw(req, res) {
  const { email } = req.body;

  const userObj = await userDAL.getUserByEmail(email);

  if (userObj && userObj.isActivated) {
    await sendResetPasswordEmail(userObj._id, email);

    res.status(200).json({ statusCode: 200 });
  } else res.status(200).json({ statusCode: 200 });
};

exports.resetPassword = async function resetPw(req, res) {
  const { resetToken } = req.params;
  const { newPassword } = req.body;

  try {
    const { userId } = await decryptResetPasswordToken(resetToken);
    await userDAL.resetPassword(userId, newPassword);
    res.status(200).json({ statusCode: 200 });
  } catch (err) {
    const errMsg = JSON.parse(err.message);
    res.status(errMsg.statusCode).send({ statusCode: errMsg.statusCode, error: errMsg.error });
  }
};
