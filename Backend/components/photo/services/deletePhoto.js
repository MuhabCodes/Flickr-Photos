const { getPhotoById, removePhoto } = require('../photoDAL');

const deletePhoto = async (photoId, res) => {
  const photo = await getPhotoById(photoId);
  await removePhoto(photo);
  return res.json({ statusCode: 200 });
};

module.exports = {
  deletePhoto,
};
