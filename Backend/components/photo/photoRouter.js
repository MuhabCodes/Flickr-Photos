const express = require('express');
const commentsController = require('./comments/commentsController');
const createCommentNotification = require('../../middleware/createNotification');

const router = express.Router();
const {
  getRecentPhotos,
  addPhoto,
  showPhoto,
  editPhoto,
  deletePhoto,
  addPersonToPhoto,
  removePersonFromPhoto,
  getPeopleInPhoto,
  addLocation,
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

/// // Now the part of comment (photos.comments)
router.delete('/:photoId', deletePhoto);

// add person to photo
router.route('/:photoId/people').post(addPersonToPhoto);

// remove person from photo
router.route('/:photoId/people').delete(removePersonFromPhoto);

// get people in photo
router.route('/:photoId/people').get(getPeopleInPhoto);
// add location to photo
router.post('/:photoId/:photoLocation', addLocation);

// to get location of certain photo : use get/:photoId and do Object destruction to
// get photoLocation as whole photo will be returned

// to edit location of certain photo : use put/:photoId and send only location so that it will be
// the only thing to be changed
router.post('/:photoId/comments', commentsController.add, createCommentNotification);

router.put('/:photoId/comments/:commentId', commentsController.editComment);

router.delete('/:photoId/comments/:commentId', commentsController.deleteComment);

router.get('/:photoId/comments', commentsController.findComment);

module.exports = router;
