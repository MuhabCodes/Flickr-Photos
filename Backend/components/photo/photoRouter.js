const express = require('express');
const commentsController = require('./comments/commentsController');

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

/// // Now the part of comment (photos.comments)
router.delete('/:photoId', deletePhoto);

router.post('/:photoId/comments',
  commentsController.add);
router.put('/:photoId/comments/:commentId',
  commentsController.editComment);

router.delete('/:photoId/comments/:commentId', commentsController.deleteComment);

router.get('/:photoId/comments', commentsController.findComment);

module.exports = router;
