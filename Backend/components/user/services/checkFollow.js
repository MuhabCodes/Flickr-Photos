module.exports.checkFollowing = function checkFollowing(userFollowingArr, followingId) {
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < userFollowingArr.length; index++) {
    if ((String)(followingId) === (String)(userFollowingArr[index])) return true;
  }
  return false;
};
