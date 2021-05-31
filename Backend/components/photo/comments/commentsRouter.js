const express = require('express');

const router = express.Router();
const commentsController = require('./commentsController');

router.post('/:photoId',
  commentsController.add);
router.put('/:photoId',
  commentsController.editComment);

router.delete('/:photoId', commentsController.deleteComment);

router.get('/:photoId', commentsController.findComment);

module.exports = router;
