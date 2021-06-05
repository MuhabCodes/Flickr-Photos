const express = require('express');

const router = express.Router();
const {
  getRecentPhotos,
  addPhoto,
  showPhoto,
  editPhoto,
  deletePhoto,
  getUserPhotos,
  addPhoto64,
} = require('./photoController');
// get the required functions from the controller

// all the photos are within the /photos route

// get the most recent photos
router.get('/recent', getRecentPhotos);

// add a new photo
router.post('/', addPhoto);

//  add new base 64 photo
router.post('/64', addPhoto64);
// router.post('/64', (req, res) => res.send('yayayayayay'));

// get photos of a user given his id
router.get('/user/:userId', getUserPhotos);

// get an image with an id
router.get('/:photoId', showPhoto);
// router.get('/:photoId', (req, res) => res.send('yeah'));

// edit a photo based on its id
router.put('/:photoId', editPhoto);

// delete a photo based on the id
router.delete('/:photoId', deletePhoto);

module.exports = router;
