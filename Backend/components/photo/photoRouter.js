const express = require('express');

const router = express.Router();
const {
  getRecentPhotos,
  addPhoto,
  showPhoto,
  editPhoto,
  deletePhoto,
} = require('./photoController');

// all the photos are within the /photos route

// get all photos
router.get('/recent', getRecentPhotos);

// add a new photo
router.post('/', addPhoto);

// get an image with an id
router.get('/:photoId', showPhoto);

// edit a photo
router.put('/:photoId', editPhoto);

// delete a photo
router.delete('/:photoId', deletePhoto);

module.exports = router;
