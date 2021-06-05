const { join } = require('path');
require('dotenv').config({ path: join(__dirname, '/../../../secret/', '.env') });
const jwt = require('jsonwebtoken');
const userDAL = require('../../User/userDAL');

module.exports.signInGoogleServ = async function signInGoogle(email, displayName) {
  // get user from DB
  const user = await userDAL.getUserByEmail(email);
  if (!user) {
    // if user is not in the database create him
    const newUser = await userDAL.createGoogleAccountDAL(email, displayName);
    // then return the token
    const tokenPayload = {
      userId: newUser._id,
    };
    return jwt.sign(tokenPayload, process.env.ACCESS_TOKEN_KEY);
  } if (user.isGoogleUser) {
    // if user is registered via google return the token
    const tokenPayload = {
      userId: user._id,
    };
    return jwt.sign(tokenPayload, process.env.ACCESS_TOKEN_KEY);
  }
  // if user is already registered through email but not google then return error
  throw Error(JSON.stringify({ statusCode: 409, error: 'The email is already registered' }));
};
