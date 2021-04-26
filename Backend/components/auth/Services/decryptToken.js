const jwt = require('jsonwebtoken');

module.exports.decryptToken = async function decryptToken(token, key) {
  const decrypted = await jwt.verify(token, key);
  return decrypted;
};
