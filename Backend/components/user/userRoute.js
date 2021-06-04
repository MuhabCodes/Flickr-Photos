const express = require('express');
const userController = require('./userController');
const { createFollowNotification } = require('../../middleware/createNotification');

const router = express.Router();
router.get('/displayname/:displayName', userController.getUserbyDisplayName);
router.get('/email/:email', userController.getUserByEmail);
router.get('/:userId/info', userController.getUserInfoById);
router.get('/:userId/groups', userController.getGroups);
router.get('/:userId/photos', userController.getPhotos);
router.get('/:userId/photos/public', userController.getPublicPhotos);

router.route('/pro').put(async (req, res) => {
  try {
    await userController.sendProEmail(req, res);
  } catch (_) {
    res.status(500).send({ statusCode: 500, error: 'The server couldn\'t handle the request' });
  }
});

router.post('/follow', userController.followUser, createFollowNotification);
router.post('/addDescription/:userId', userController.addDescription);

router.route('/pro/:proToken').post(async (req, res) => {
  try {
    await userController.becomePro(req, res);
  } catch (_) {
    res.status(500).send({ statusCode: 500, error: 'The server couldn\'t handle the request' });
  }
});

module.exports = router;
