const bcrypt = require('bcryptjs');

module.exports.hashPassword = async function hashPw(password, saltRounds = 10) {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

module.exports.comparePassword = async function compPw(password, hashedPw) {
  const isMatch = await bcrypt.compare(password, hashedPw);
  return isMatch;
};
