const { getFollowersDAL } = require('../userDAL');

function mapFn(user) {
  return {
    userAvatar: user.userAvatar,
    userName: user.displayName,
    userId: user._id,
  };
}

exports.getFollowersServ = async function getFoll(userId) {
  const followers = await getFollowersDAL(userId);

  const followersMapped = followers.followers.map(mapFn);

  return { followers: followersMapped };
};
