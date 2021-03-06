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
  const user = await User.findById(id).populate('personId showCase');
  return user;
};

module.exports.getUserByDisplayName = async function getUserByDisplayName(displayname) {
  const userObj = await User.findOne({ displayName: displayname });
  return userObj;
};

module.exports.getPhotos = async function getUserPhotos(userId) {
  const photoObj = await Photo.find({ user: userId });
  return photoObj;
};

exports.createGoogleAccountDAL = async function createGoogleAcc(email, googleName) {
  // create person

  // first and last names from name of google account
  const names = googleName.split(' ');
  const firstName = names[0];
  const lastName = names[1];

  // create person object
  const personObj = await personDAL.createPerson(firstName, lastName, null);
  // create user object
  const displayName = await createUniqueDisplayName(email);

  const userObj = new User({
    email,
    displayName,
    isGoogleUser: true,
    personId: personObj._id,
    isActivated: true,
  });
  // create user in db
  const user = await userObj.save();
  return user;
};

module.exports.addPersonToFollowing = async function addToFollowers(userId, followingId) {
  const userObj = await User.findById(userId);
  userObj.following.push(followingId);
  userObj.save();
};

module.exports.addPersonToFollowers = async function addPersonToFollowers(userId, followerId) {
  const userObj = await User.findById(userId);
  userObj.followers.push(followerId);
  userObj.save();
};

// module.exports.addDescription = async function addDescription(userId, description) {
//   const userObj = await User.findById(userId);
//   userObj.description = description;
//   userObj.save();
//   return userObj;
// };

exports.becomePro = async function becomePro(userId) {
  const user = await User.findById(userId);
  if (!user) {
    // The user you're searching for and confirmation link doesn't exist
    throw Error(JSON.stringify({ statusCode: 400, error: 'The token passed in the url is invalid.' }));
  } else if (!user.isPro) {
    // user is in db and not pro
    await User.updateOne({ _id: userId }, { $set: { isPro: true } });
  } else {
    // user is in db and already pro
    throw Error(JSON.stringify({ statusCode: 409, error: 'The request could not be completed due to a conflict with the current state of the resource.' }));
  }
};

module.exports.getUserPublicPhotos = async function getUserPublicPhotos(userId) {
  const photoObj = await Photo.find({ $and: [{ user: userId }, { isPublic: true }] });

  return photoObj;
};

module.exports.removeFromFollowing = async function removeFromFollowing(userId, followingId) {
  const userObj = await User.findById(userId);
  userObj.following = userObj.following.filter((user) => (String)(user) !== (String)(followingId));
  userObj.save();
};

module.exports.removeFromFollowers = async function removeFromFollower(userId, followerId) {
  const userObj = await User.findById(userId);
  userObj.followers = userObj.followers.filter((user) => (String)(user) !== (String)(followerId));
  userObj.save();
};
module.exports.changePasswordDAL = async function changePwDal(userId, newPassword) {
  const hashedPassword = await utilsPassword.hashPassword(newPassword);

  await User.updateOne(
    { _id: userId }, { $set: { password: hashedPassword } },
  );
};

module.exports.deleteUserDAL = async function deleteUser(userId) {
  // deletes user and returns personId to delete person related to user
  const user = await User.findByIdAndDelete({ _id: userId });
  if (!user) throw Error(JSON.stringify({ statusCode: 404, error: 'This user is not found.' }));
  return user.personId;
};

module.exports.getFollowersDAL = async function getFollow(userId) {
  // check if a user exists
  const user = await User.findById({ _id: userId });
  if (!user) throw Error(JSON.stringify({ statusCode: 404, error: 'This user is not found.' }));
  // return the list of followers
  const followers = await User.findById({ _id: userId })
    .select('followers')
    .populate('followers');
  return followers;
};

module.exports.getPersonId = async function getPersonId(userId) {
  const user = await User.findById(userId).select('personId');
  if (!user) throw Error(JSON.stringify({ statusCode: 404, error: 'This user is not found.' }));
  return user;
};

module.exports.getShowCase = async function getShowCase(userId) {
  const user = await User.findById(userId).select('showCase');
  if (!user) throw Error(JSON.stringify({ statusCode: 404, error: 'This user is not found.' }));
  return user;
};

module.exports.addToShowCase = async function addToShowCase(userId, photoId) {
  const userObj = await User.findById(userId).select('showCase');
  userObj.showCase.push(photoId);
  userObj.save();
};

module.exports.removeFromShowCase = async function removeFromShowCase(userId, photoId) {
  const userObj = await User.findById(userId).select('showCase');
  userObj.showCase = userObj.showCase.filter((photo) => (String)(photo) !== (String)(photoId));
  userObj.save();
};
