const jwt = require('jsonwebtoken');
const { join } = require('path');
require('dotenv').config({ path: join(__dirname, '../../../secret/', '.env') });

const decryptToken = async function decryptToken(token, key) {
  const decrypted = await jwt.verify(token, key);
  return decrypted;
};

module.exports.decryptAuthToken = async function decryptAuthToken(token) {
  try {
    const decrypted = await decryptToken(token, process.env.ACCESS_TOKEN_KEY);
    return decrypted;
  } catch (_) {
    throw Error(JSON.stringify({ statusCode: 401, error: 'The client trying to access the server is unauthorized' }));
  }
};

module.exports.decryptConfirmationToken = async function decryptConfirmationToken(token) {
  try {
    const decrypted = await decryptToken(token, process.env.CONFIRMATION_KEY);
    return decrypted;
  } catch (_) {
    throw Error(JSON.stringify({ statusCode: 400, error: 'The token passed in the url is invalid' }));
  }
};

module.exports.decryptResetPasswordToken = async function decryptConfirmationToken(token) {
  try {
    const decrypted = await decryptToken(token, process.env.RESET_PASSWORD_KEY);
    return decrypted;
  } catch (_) {
    throw Error(JSON.stringify({ statusCode: 400, error: 'The token passed in the url is invalid' }));
  }
};

module.exports.decryptProToken = async function decryptProToken(token) {
  try {
    const decrypted = await decryptToken(token, process.env.PRO_KEY);
    return decrypted;
  } catch (_) {
    throw Error(JSON.stringify({ statusCode: 400, error: 'The token passed in the url is invalid' }));
  }
};
