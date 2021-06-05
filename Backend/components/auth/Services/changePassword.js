const { comparePassword } = require('../../../utils/passwords');
const { getUserById, changePasswordDAL } = require('../../User/userDAL');

exports.changePasswordServ = async function changePw(userId, oldPassword, newPasword) {
  // get user
  const user = await getUserById(userId);
  if (!user) throw Error(JSON.stringify({ statusCode: 404, error: 'The user doesn\'t exist' }));
  // check if password enetered in correct
  if (await comparePassword(oldPassword, user.password)) {
    // hash new password and replace it in the user object
    await changePasswordDAL(userId, newPasword);
  } else throw Error(JSON.stringify({ statusCode: 422, error: 'The old password was incorrect' }));
};
