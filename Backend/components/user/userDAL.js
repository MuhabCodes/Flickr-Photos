const User = require('./userModel');
const utilsPassword = require('../../utils/passwords');
const Photo = require('../photo/photoModel');
const personDAL = require('../person/personDAL');

const isUniqueDisplayName = async function isUnique(displayName) {
  // checks whether or not display name is unique
  const user = await User.findOne({ displayName });
  return user;
};

const createUniqueDisplayName = async function createUniqueDP(email) {
  // checks whether or not display name is unique
  const emailBase = email.split('@')[0];

  let i = 0;
  // eslint-disable-next-line no-await-in-loop
  while (await isUniqueDisplayName(emailBase + i.toString())) {
    i += 1;
  }
  return emailBase + i.toString();
};

exports.getUserByEmail = async function getWithEmail(email) {
  const userObj = await User.findOne({ email });
  return userObj;
};

exports.createNewUser = async function createUser({
  email, password, firstName, lastName, age,
}) {
  // password encryption
  const hashedPassword = await utilsPassword.hashPassword(password);
  // create person
  const personObj = await personDAL.createPerson(firstName, lastName, age);
  // create user object
  const displayName = await createUniqueDisplayName(email);

  const userObj = new User({
    email,
    password: hashedPassword,
    displayName,
    personId: personObj._id,
  });
  // create user in db
  const user = await userObj.save();
  return user;
};

module.exports.activateUser = async function activateUser(id) {
  const user = await User.findById(id);
  if (!user) {
    // The user you're searching for and confirmation link doesn't exist
    throw Error(JSON.stringify({ statusCode: 400, error: 'The token passed in the url is invalid.' }));
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
    const hashedPassword = await utilsPassword.hashPassword(newPassword);

    await User.updateOne(
      { _id: id }, { $set: { password: hashedPassword } },
    );
  } else if (!user) {
    // The user you're searching for or reset link doesn't exist
    throw Error(JSON.stringify({ statusCode: 400, error: 'The token passed in the url is invalid.' }));
  } else if (!user.isActivated) { /// user is not activated.
    throw Error(JSON.stringify({ statusCode: 409, error: 'The request could not be completed due to a conflict with the current state of the resource.' }));
  } else throw Error({ statusCode: 500, error: 'The server couldn\'t handle the process' });
};

module.exports.getUserById = async (id) => {
  const user = await User.findById(id).exec();
  return user;
};
module.exports.addGroupToUser = async function addGroupToUser(userId, groupObj) {
  const userObj = await User.findById(userId);

  userObj.groups.push(groupObj._id);
  userObj.save();
  return userObj;
};

module.exports.getUserGroupsById = async function getUserById(userId) {
  const userObj = await User.findById(userId).populate('groups');
  return userObj;
};

module.exports.getUserByDisplayName = async function getUserByDisplayName(displayname) {
  const userObj = await User.find({ displayName: displayname });
  return userObj;
};

module.exports.getPhotos = async function getUserPhotos(userId) {
  const photoObj = await Photo.find({ user: userId });
  return photoObj;
};