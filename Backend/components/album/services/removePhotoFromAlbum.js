const removeFromAlbum = require('../albumDAL');

const removePhotoFromAlbum = async (albumId, photoId, res) => {
  try {
    await removeFromAlbum(albumId, photoId);
    return res.json({ statusCode: 200 });
  } catch (err) {
    return res.json({ error: err.message, statusCode: 401 });
  }
};

module.exports = {
  removePhotoFromAlbum,
};
