// const bcrypt = require('bcrypt');
const User = require('./userModel');
const utilsPassword = require('../../utils/passwords');

exports.getUserByEmail = async function getWithEmail(email) {
  const userObj = await User.findOne({ email });
  return userObj;
};

exports.createNewUser = async function createUser({
  email, password, firstName, lastName, age,
}) {
  // password encryption
  const hashedPassword = await utilsPassword.hashPassword(password);
  // create user object
  const userObj = new User({
    email,
    password: hashedPassword, // TODO : add Person Id with firstName, lastName and age
  });
  // create user in db
  const user = await userObj.save();
  return user;
};

module.exports.activateUser = async function activateUser(id) {
  const user = await User.findById(id);
  if (!user) {
    // The user you're searching for and confirmation link doesn't exist
    throw Error(JSON.stringify({ statusCode: 404, error: 'This resource doesn\'t exist on the server.' }));
  } else if (!user.isActivated) {
    // user is in db and not activated
    await User.updateOne({ _id: id }, { $set: { isActivated: true } });
  } else {
    // user is in db and already activated
    throw Error(JSON.stringify({ statusCode: 409, error: 'The request could not be completed due to a conflict with the current state of the resource.' }));
  }
};

module.exports.resetPassword = async function rstPw(id, newPassword) {
  const user = await User.findById(id);

  if (user && user.isActivated) { // user is in db so will change password
    const hashedPassword = utilsPassword.hashPassword(newPassword);
    await User.updateOne(
      { _id: id }, { $set: { password: hashedPassword } },
    );
  } else if (!user) {
    // The user you're searching for or reset link doesn't exist
    throw Error(JSON.stringify({ statusCode: 404, error: 'This resource doesn\'t exist on the server.' }));
  } else if (!user.isActivated) { /// user is not activated.
    throw Error(JSON.stringify({ statusCode: 409, error: 'The request could not be completed due to a conflict with the current state of the resource.' }));
  } else throw Error({ statusCode: 500, error: 'The server couldn\'t handle the process' });
};
