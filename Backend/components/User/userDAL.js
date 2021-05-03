const bcrypt = require('bcryptjs');
const User = require('./userModel');

exports.getUserByEmail = async function getWithEmail(email) {
  const userObj = await User.findOne({ email });
  return userObj;
};

exports.createNewUser = async function createUser({
  email, password, firstName, lastName, age,
}) {
  // password encryption
  const hashedPassword = await bcrypt.hash(password, 10);
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
  if (user && !(user.isActivated)) {
    await User.updateOne({ _id: id }, { $set: { isActivated: true } });
  } else {
    throw Error(JSON.stringify({ statusCode: 410, error: 'This resource is gone from the server.' }));
  }
};
