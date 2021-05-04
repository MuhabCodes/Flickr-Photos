const bcrypt = require('bcrypt');
const User = require('./userModel');

exports.getUserByEmail = async function getWithEmail(email) {
  const userObj = await User.findOne({ email });
  return userObj;
};

exports.createNewUser = async function createUser({
  email, password, displayName, firstName, lastName, age,
}) {
  // password encryption
  const hashedPassword = await bcrypt.hash(password, 10);
  // create user object
  const userObj = new User({
    email,
    password: hashedPassword,
    displayName,
    // TODO : add Person Id with firstName, lastName and age
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

module.exports.addGroupToUser = async function addGroupToUser(userId, groupObj) {
  const userObj = await User.findById(userId);

  // eslint-disable-next-line no-underscore-dangle
  userObj.groups.push(groupObj._id);
  userObj.save();
  return userObj;
};
module.exports.getUserById = async function getUserById(userId) {
  const userObj = await User.findById(userId);
  return userObj;
};

module.exports.getUserGroupsById = async function getUserById(userId) {
  const userObj = await User.findById(userId).populate('groups');
  return userObj;
};
