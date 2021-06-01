const express = require('express');

const router = express.Router();
const commentsController = require('./commentsController');

router.post('/:photoId',
  commentsController.add);
router.put('/:photoId/:commentId',
  commentsController.editComment);

router.delete('/:photoId/:commentId', commentsController.deleteComment);

router.get('/:photoId', commentsController.findComment);

module.exports = router;
