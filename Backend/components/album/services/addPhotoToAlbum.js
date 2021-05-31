const addNewPhotoToAlbum = require('../albumDAL');

const addPhotoToAlbum = async (albumId, photoInfo, res) => {
  try {
    await addNewPhotoToAlbum(albumId, photoInfo);
    return res.json({ statusCode: 200 });
  } catch (err) {
    return res.json({ error: err.message, statusCode: 404 });
  }
};
module.exports = {
  addPhotoToAlbum,
};
