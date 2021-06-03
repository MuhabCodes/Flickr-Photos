const { join } = require('path');
const userDAL = require('../user/userDAL');
const { verifyPassword } = require('./Services/verifyPassword');
const { sendConfirmationEmail, sendResetPasswordEmail } = require('./Services/sendEmail.js');
const { decryptConfirmationToken, decryptResetPasswordToken } = require('./Services/decryptToken');
const { signInGoogleServ } = require('./Services/signInGoogle');
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
    // user already exists
    res.status(409).send({ statusCode: 409, error: 'The request could not be completed due to a conflict with the current state of the resource.' });
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
    // user doesn't exist, so will send 404
    res.status(404).send({ statusCode: 404, error: 'The user is not registered on our website.' });
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

    res.status(201).json({ statusCode: 201 });
  } else if (userObj && !userObj.isActivated) {
    // user in db but not activated
    res.status(409).send({ statusCode: 409, error: 'The request could not be completed due to a conflict with the current state of the resource.' });
  } else res.status(404).json({ statusCode: 404, error: 'The User is not found' });
};

exports.resetPassword = async function resetPw(req, res) {
  const { resetToken } = req.params;
  const { newPassword } = req.body;

  try {
    // decrypt reset token to get userID
    const { userId } = await decryptResetPasswordToken(resetToken);
    // use the id and the new password to change the current pw
    await userDAL.resetPassword(userId, newPassword);

    res.status(201).json({ statusCode: 201 });
  } catch (err) {
    const errMsg = JSON.parse(err.message);

    res.status(errMsg.statusCode).send({ statusCode: errMsg.statusCode, error: errMsg.error });
  }
};

exports.signInGoogle = async function signInGoogle(req, res) {
  const { email, displayName } = req.body;

  try {
    // create Account Google
    const token = await signInGoogleServ(email, displayName);
    res.status(201).send({ statusCode: 201, token });
  } catch (err) {
    const errMsg = JSON.parse(err.message);

    res.status(errMsg.statusCode).send({ statusCode: errMsg.statusCode, error: errMsg.error });
  }
};
