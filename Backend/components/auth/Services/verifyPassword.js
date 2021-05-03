const { join } = require('path');
require('dotenv').config({ path: join(__dirname, '/../../../secret/', '.env') });
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userDAL = require('../../User/userDAL');

module.exports.verifyPassword = async function verifyPassword({ email, password }) {
  // get user from DB
  const user = await userDAL.getUserByEmail(email);
  // if user exists check fof matching passwords and then return token if true
  if (user) {
    if (await bcrypt.compare(password, user.password)) {
      const tokenPayload = {
        userId: user._id,
      };
      return jwt.sign(tokenPayload, process.env.ACCESS_TOKEN_KEY);
    }
  }
  // throws error if user doesn't exist or pw doesn't match
  throw new Error();
};
