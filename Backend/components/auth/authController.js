// const bcrypt = require('bcrypt');
const { join } = require('path');
const userDAL = require('../User/userDAL');
const { verifyPassword } = require('./Services/verifyPassword');
const { sendConfirmationEmail } = require('./Services/sendEmail.js');
const { decryptToken } = require('./Services/decryptToken');
require('dotenv').config({ path: join(__dirname, '/../../secret/', '.env') });

exports.login = async function loginUser(req, res) {
  const { body } = req;
  verifyPassword(body)
    .then((token) => res.status(201).send({ statusCode: 201, token }))
    .catch(() => res.status(401).send({ statusCode: 401, error: 'The user is unauthorized' }));
};

exports.register = async function registerUser(
  req, res, next,
) {
  const { body } = req;
  const user = await userDAL.getUserByEmail(body.email);
  if (!user) {
    // create user after checking for email and password
    try {
      const userObj = await userDAL.createNewUser(body);
      await sendConfirmationEmail(userObj);
      res.status(201).send({ statusCode: 201 });
    } catch (err) {
      res.status(500).send({ statusCode: 500, error: 'The server couldn\'t handle the registration process' });
    }
  } else {
    // say that an email is sent but don't send for security purposes
    next();
  }
};

exports.confirmUser = async function confirmUser(req, res) {
  const { confirmationToken } = req.params;
  try {
    const decoded = await decryptToken(confirmationToken, process.env.CONFIRMATION_KEY);
    await userDAL.activateUser(decoded.userId);
    res.status(201).send({ statusCode: 201, message: 'The account is now activated' });
  } catch (err) {
    const errMsg = JSON.parse(err.message);
    res.status(errMsg.statusCode).send({ statusCode: errMsg.statusCode, error: errMsg.error });
  }
};
