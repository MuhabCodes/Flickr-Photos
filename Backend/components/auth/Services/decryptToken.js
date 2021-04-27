const jwt = require('jsonwebtoken');

module.exports.decryptToken = async function decryptToken(token, key) {
  try {
    const decrypted = await jwt.verify(token, key);
    return decrypted;
  } catch (err) {
    throw Error(JSON.stringify({ statusCode: 401, error: 'The client is not authorized to make this request' }));
  }
};
