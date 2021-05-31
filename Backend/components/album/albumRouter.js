const express = require('express');

const router = express.Router();
const {

  addPhoto,
  createAlbum,
  getAlbum,
  removePhoto,
} = require('./albumController');
// get the required functions from the controller

// get the album based on the id
router.get('/:albumId', getAlbum);

// create a new album
router.post('/', createAlbum);

// add an existing photo to the album
router.post('/:albumId/photos', addPhoto);

// remove a photo from an album
router.delete('/:albumId/photos/:photoId', removePhoto);

module.exports = router;
