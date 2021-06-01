const express = require('express');
const userController = require('./userController');

const router = express.Router();
router.get('/displayname/:displayName', userController.getUserbyDisplayName);
router.get('/email/:email', userController.getUserByEmail);
router.get('/:userId/info', userController.getUserInfoById);
router.get('/:userId/groups', userController.getGroups);
router.get('/:userId/photos', userController.getPhotos);

router.route('/pro').post(userController.sendProEmail);
module.exports = router;
