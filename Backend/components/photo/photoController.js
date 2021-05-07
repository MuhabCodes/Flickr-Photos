const { getRecent } = require('./services/getRecent');
const { addNew } = require('./services/addNew');
const { getInfo } = require('./services/getInfo');
const { editPhoto } = require('./services/editPhoto');
const { deletePhoto } = require('./services/deletePhoto');

module.exports = {
  async getRecentPhotos(req, res) {
    try {
      // get all recent photos within the database from the services
      return await getRecent(res);
    } catch (err) {
      return res.json({
        error: err.message,
        statusCode: 500,
      });
    }
  },
  async addPhoto(req, res) {
    try {
      return await addNew(req.body.photo, res);
    } catch (err) {
      return res.json({
        error: err.message,
        statusCode: 500,
      });
    }
  },
  async showPhoto(req, res) {
    try {
      return getInfo(req.params.photoId, res);
    } catch (err) {
      return res.json({
        error: 'PhotoNotFound',
        statusCode: 404,
      });
    }
  },
  async editPhoto(req, res) {
    try {
      return await editPhoto(req.params.photoId, req.body.photo, res);
    } catch (err) {
      return res.json({
        error: 'PhotoNotFound',
        statusCode: 404,
      });
    }
  },
  async deletePhoto(req, res) {
    try {
      return await deletePhoto(req.params.photoId, res);
    } catch (err) {
      return res.json({
        error: 'PhotoNotFound',
        statusCode: 404,
      });
    }
  },
};
