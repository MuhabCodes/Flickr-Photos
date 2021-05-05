const { join } = require('path');
const userDAL = require('../User/userDAL');
const { verifyPassword } = require('./Services/verifyPassword');
const { sendConfirmationEmail, sendResetPasswordEmail } = require('./Services/sendEmail.js');
const { decryptConfirmationToken, decryptResetPasswordToken } = require('./Services/decryptToken');
require('dotenv').config({ path: join(__dirname, '/../../secret/', '.env') });

exports.login = async function loginUser(req, res) {
  const { body } = req;

  try {
    // return Authorization token if the password was correct
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
    await sendConfirmationEmail(userObj);
    res.status(201).send({ statusCode: 201 });
  } else {
    // say that an email is sent but don't send for security purposes
    res.status(201).send({ statusCode: 201 });
  }
};

exports.resendConfirmationMail = async function resendMail(
  req, res,
) {
  const { body } = req;

  const user = await userDAL.getUserByEmail(body.email);

  if (user && !user.isActivated) {
    // if a user exists and not activated, resend the request
    await sendConfirmationEmail(user);

    res.status(201).send({ statusCode: 201 });
  } else if (user && user.isActivated) {
    // if the user is already activated, we send a 409 error (conflict).
    res.status(409).send({ statusCode: 409, error: 'The request could not be completed due to a conflict with the current state of the resource.' });
  } else {
    // user doesn't exist, so will send 201 for security purposes
    res.status(409).send({ statusCode: 409, error: 'The request could not be completed due to a conflict with the current state of the resource.' });
  }
};
exports.confirmUser = async function confirmUser(req, res) {
  const { confirmationToken } = req.params;
  try {
    // decrypt confirmation token to get ID
    const decoded = await decryptConfirmationToken(confirmationToken);
    // uses ID to activate user
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
    // sends email if the user exists and is activated
    await sendResetPasswordEmail(userObj._id, email);

    res.status(200).json({ statusCode: 200 });
  } else res.status(200).json({ statusCode: 200 });
};

exports.resetPassword = async function resetPw(req, res) {
  const { resetToken } = req.params;
  const { newPassword } = req.body;

  try {
    // decrypt reset token to get userID
    const { userId } = await decryptResetPasswordToken(resetToken);
    // use the id and the new password to change the current pw
    await userDAL.resetPassword(userId, newPassword);

    res.status(200).json({ statusCode: 200 });
  } catch (err) {
    const errMsg = JSON.parse(err.message);

    res.status(errMsg.statusCode).send({ statusCode: errMsg.statusCode, error: errMsg.error });
  }
};
