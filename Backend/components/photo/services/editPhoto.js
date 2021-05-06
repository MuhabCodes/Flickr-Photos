const { getPhotoById, savePhoto } = require('../photoDAL');

const editPhoto = async (photoId, newPhotoInfo, res) => {
  let photo = await getPhotoById(photoId);
  photo = newPhotoInfo;
  await savePhoto(photo);
  return res.json({ statusCode: 200 });
};
module.exports = {
  editPhoto,
};
