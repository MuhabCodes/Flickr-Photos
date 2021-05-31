const express = require('express');
const tagsController = require('./tagsController');

const router = express.Router();

router.get('/photo/:photoId', tagsController.getPhotoTags);
router.get('/user/:userId', tagsController.getListUser);
router.post('/:photoId', tagsController.addTagToPhoto);

module.exports = router;
