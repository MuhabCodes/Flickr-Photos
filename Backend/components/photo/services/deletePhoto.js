const { getPhotoById, removePhoto } = require('../photoDAL');

const deletePhoto = async (photoId, res) => {
  try {
    const photo = await getPhotoById(photoId);
    await removePhoto(photo);
    return res.json({ statusCode: 200 });
  } catch (err) {
    return res.json({ statusCode: 404, error: 'PhotoNotFound' });
  }
};

module.exports = {
  deletePhoto,
};
