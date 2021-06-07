const { fetchAlbum } = require('../albumDAL');

const getAlbumById = async (albumId, res) => {
  try {
    const foundAlbum = await fetchAlbum(albumId);

    return res.json({
      authorId: foundAlbum[0].authorId,
      title: foundAlbum[0].title,
      description: foundAlbum[0].description,
      updateDate: foundAlbum[0].updateDate,
      createDate: foundAlbum[0].createDate,
      countPhotos: foundAlbum[0].photos.length,
      photos: foundAlbum[0].photos,
      statusCode: 200,
    });
  } catch (err) {
    return res.json({ error: err.message, statusCode: 401 });
  }
};
module.exports = {
  getAlbumById,
};
