const user = require('./userModel');

exports.getUserByEmail = async function getWithEmail(email) {
  const userObj = user.findOne({ email });
  return userObj;
};
