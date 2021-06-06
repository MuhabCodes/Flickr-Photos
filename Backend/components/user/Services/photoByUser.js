module.exports.photoByUser = function photoByUser(photosByUser, photoId) {
  for (let index = 0; index < photosByUser.length; index++) {
    if ((String)(photoId) === (String)(photosByUser[index]._id)) return true;
  }
  return false;
};
