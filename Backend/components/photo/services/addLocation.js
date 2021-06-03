const { getPhotoById, savePhoto } = require('../photoDAL');

const addLocation = async (photoId, photoLocation, res) => {
  try {
    const photo = await getPhotoById(photoId);
    if (photo) {
      photo.location = photoLocation;
      await savePhoto(photo);
      return res.json({ statusCode: 200, photo });
    }
    return res.json({ statusCode: 404, error: 'PhotoNotFound' });
  } catch (err) {
    return res.json({ statusCode: 505, error: err });
  }
};

module.exports = {
  addLocation,
};
