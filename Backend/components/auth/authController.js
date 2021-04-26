// const bcrypt = require('bcrypt');
const userDAL = require('../User/userDAL');
const { verifyPassword } = require('./Services/verifyPassword');

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
      await userDAL.createNewUser(body);
      res.status(201).send({ statusCode: 201 });
    } catch (err) {
      res.status(500).send({ statusCode: 500, error: 'The server couldn\'t handle the registration process' });
    }
  } else {
    // say that an email is sent but don't send for security purposes
    next();
  }
};
