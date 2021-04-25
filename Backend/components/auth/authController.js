const userDAL = require('../User/userDAL');

exports.login = async function loginUser(req, res, next) {
  const { email, password } = req.body;

  try {
    // placeholder
  } catch (error) {
    // placeholder
  }
};

exports.register = async function registerUser(body) {
  const user = await userDAL.getUserByEmail(body.email);
  if (!user) {
    // create user after checking for email and password
  } else {
    // say that an email is sent but don't send for security purposes
  }
};
