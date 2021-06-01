const express = require('express');
const tagsController = require('./tagsController');

const router = express.Router();

router.get('/', tagsController.getAllTags);
router.get('/photo/:photoId', tagsController.getPhotoTags);
router.get('/user/:userId', tagsController.getUserTags);
router.post('/:photoId', tagsController.addTagToPhoto);
router.delete('/photo/:photoId', tagsController.removeTagFromPhoto);
router.delete('/:tagId', tagsController.deleteTag);

module.exports = router;
