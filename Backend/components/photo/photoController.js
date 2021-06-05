const multer = require('multer');
const path = require('path');
const base64Img = require('base64-img');

const { getRecent } = require('./services/getRecent');
const { addNew } = require('./services/addNew');
const { getInfo } = require('./services/getInfo');
const { editPhoto } = require('./services/editPhoto');
const { deletePhoto } = require('./services/deletePhoto');
const { getUserPhotosById } = require('./services/getUserPhotosById');

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

// Init Upload
const upload = multer({
  storage,
}).single('fileInput');

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
      upload(req, res, (err) => {
        if (err) {
          return res.json({
            error: err.message,
            statusCode: 500,
          });
        }
        return addNew(req.body, req.file.path, res);
      });
      // return await addNew(req.body, req.file.path, res);
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
  async getUserPhotos(req, res) {
    try {
      return await getUserPhotosById(req.params.userId, res);
    } catch (err) {
      return res.json({
        error: 'PhotoNotFound',
        statusCode: 404,
      });
    }
  },
  async addPhoto64(req, res) {
    try {
      const { photo } = req.body;
      const photoName = `fileInput-${Date.now()}`;
      base64Img.img(photo, './public/uploads', photoName, (err) => {
        if (err) {
          return res.json({
            error: err.message,
            statusCode: 500,
          });
        }
      });

      return await addNew(req.body, `/public/uploads/${photoName}.jpeg`, res);
    } catch (err) {
      return res.json({
        error: err.message,
        statusCode: 500,
      });
    }
  },
};
