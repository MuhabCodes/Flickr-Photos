const { fetchAlbum } = require('../albumDAL');

const getAlbumById = async (albumId, res) => {
  try {
    const foundAlbum = await fetchAlbum(albumId);
    return res.json({
      authorId: foundAlbum.authorId,
      title: foundAlbum.title,
      description: foundAlbum.description,
      updateDate: foundAlbum.updateDate,
      createDate: foundAlbum.createDate,
      countPhotos: foundAlbum.photos.length,
      photos: foundAlbum.photos,
      statusCode: 200,
    });
  } catch (err) {
    return res.json({ error: err.message, statusCode: 401 });
  }
};
module.exports = {
  getAlbumById,
};
