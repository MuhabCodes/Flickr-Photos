const express = require('express');

const router = express.Router();
const {

  addPhoto,
  createAlbum,
  getAlbum,
  removePhoto,
  getUserAlbums,
} = require('./albumController');
// get the required functions from the controller

// get the album based on the id
router.get('/:albumId', getAlbum);
// get the albums based on the user id
router.get('/', getUserAlbums);

// create a new album
router.post('/', createAlbum);

// add an existing photo to the album
router.post('/:albumId/photos', addPhoto);

// remove a photo from an album
router.delete('/:albumId/photos/:photoId', removePhoto);

module.exports = router;
