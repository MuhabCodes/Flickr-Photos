const { join } = require('path');
require('dotenv').config({ path: join(__dirname, '/../../../secret/', '.env') });
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
const userDAL = require('../../User/userDAL');
const utilsPassword = require('../../../utils/passwords');

module.exports.verifyPassword = async function verifyPassword({ email, password }) {
  // get user from DB
  const user = await userDAL.getUserByEmail(email);
  // if user exists and account is activated check for matching passwords
  // and then return token if true
  if (user && user.isActivated) {
    if (await utilsPassword.comparePassword(password, user.password)) {
      const tokenPayload = {
        userId: user._id,
      };
      // return token in case of correct pw
      return jwt.sign(tokenPayload, process.env.ACCESS_TOKEN_KEY);
      // throws error if user doesn't exist or pw doesn't match
    } throw Error(JSON.stringify({ statusCode: 401, error: 'The client trying to access the server is unauthorized' }));
  } else if (user && !user.isActivated) throw Error(JSON.stringify({ statusCode: 403, error: 'This client hasn\'t activated' }));
  // if user isn't found in the db
  throw Error(JSON.stringify({ statusCode: 401, error: 'The client trying to access the server is unauthorized' }));
};
