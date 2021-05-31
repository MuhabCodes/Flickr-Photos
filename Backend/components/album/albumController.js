module.exports = {
  async getAlbum(req, res) {
    try {
      return await getAlbumById(req.params.albumId, res);
    } catch (err) {
      return res.json({
        error: err.message,
        statusCode: 500,
      });
    }
  },
  async addPhoto(req, res) {
    try {
      return addPhotoToAlbum(req.params.albumId, req.body, res);
    } catch (err) {
      return res.json({
        error: err.message,
        statusCode: 500,
      });
    }
  },
  async createAlbum(req, res) {
    try {
      return await createNewAlbum(req.body, res);
    } catch (err) {
      return res.json({
        error: err.message,
        statusCode: 500,
      });
    }
  },
  async removePhoto(req, res) {
    try {
      return await removePhotoFromAlbum(req.params.albumId, req.params.photoId, res);
    } catch (err) {
      return res.json({
        error: err.message,
        statusCode: 500,
      });
    }
  },
};
