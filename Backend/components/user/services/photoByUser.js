module.exports.photoByUser = function photoByUser(photosByUser, photoId) {
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < photosByUser.length; index++) {
    if ((String)(photoId) === (String)(photosByUser[index]._id)) return true;
  }
  return false;
};

module.exports.inShowCase = function inShowCase(showCase, photoId) {
  for (let index = 0; index < showCase.length; index += 1) {
    if ((String)(photoId) === (String)(showCase[index])) return true;
  }
  return false;
};
