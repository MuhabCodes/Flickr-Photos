const userDAL = require('../User/userDAL');

exports.login = async function loginUser({ email, password }) {
  try {
    // placeholder
    console.log(email, password);
  } catch (error) {
    // placeholder
  }
};

exports.register = async function registerUser(
  req, res, next,
) {
  const { body } = req;
  const user = await userDAL.getUserByEmail(body);
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
