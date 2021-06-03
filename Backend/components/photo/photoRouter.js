const express = require('express');

const router = express.Router();
const {
  getRecentPhotos,
  addPhoto,
  showPhoto,
  editPhoto,
  deletePhoto,
} = require('./photoController');
// get the required functions from the controller

// all the photos are within the /photos route

// get the most recent photos
router.get('/recent', getRecentPhotos);

// add a new photo
router.post('/', addPhoto);

// get an image with an id
router.get('/:photoId', showPhoto);

// edit a photo based on its id
router.put('/:photoId', editPhoto);

// delete a photo based on the id
router.delete('/:photoId', deletePhoto);

module.exports = router;
