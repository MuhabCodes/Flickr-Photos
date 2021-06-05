const express = require('express');
const commentsController = require('./comments/commentsController');
const { createCommentNotification } = require('../../middleware/createNotification');

const router = express.Router();
const {
  getRecentPhotos,
  addPhoto,
  showPhoto,
  editPhoto,
  deletePhoto,
  getUserPhotos,
  addPhoto64,
  addPersonToPhoto,
  removePersonFromPhoto,
  getPeopleInPhoto,
  addLocation,

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

// add person to photo
router.route('/:photoId/people').post(addPersonToPhoto);

// remove person from photo
router.route('/:photoId/people').delete(removePersonFromPhoto);

// get people in photo
router.route('/:photoId/people').get(getPeopleInPhoto);
// add location to photo
router.post('/:photoId/location/:photoLocation', addLocation);

// to get location of certain photo : use get/:photoId and do Object destruction to
// get photoLocation as whole photo will be returned

// to edit location of certain photo : use put/:photoId and send only location so that it will be
// the only thing to be changed

router.post('/:photoId/comments', commentsController.add, createCommentNotification);

router.put('/:photoId/comments/:commentId', commentsController.editComment);

router.delete('/:photoId/comments/:commentId', commentsController.deleteComment);

router.get('/:photoId/comments', commentsController.findComment);

module.exports = router;
