const { getPhotoById } = require('../photoDAL');

module.exports.isInPhoto = async function validate(photoId, userId) {
  const checkPhoto = await getPhotoById(photoId);

  // returns true if user is in photo
  return checkPhoto.peopleInPhoto.some((user) => user.equals(userId));
};
