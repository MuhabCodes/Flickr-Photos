const { getFollowersDAL } = require('../userDAL');

exports.getFollowersServ = async function getFoll(userId) {
  const followers = await getFollowersDAL(userId);

  return followers;
};
