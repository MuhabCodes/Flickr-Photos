const express = require('express');
const router = express.Router();
const {
	getPhotos,
	addPhoto,
	showPhoto,
	editPhoto,
	deletePhoto,
} = require('./photoController');

// get all photos
router.get('/photos', getPhotos);

//add a new photo
router.post('/photos', addPhoto);

//get an image with an id
router.get('/photos/:photoId', showPhoto);

//edit a photo
router.put('/photos/:photoId', editPhoto);

//delete a photo
router.delete('/photos/:photoId', deletePhoto);

module.exports = router;
