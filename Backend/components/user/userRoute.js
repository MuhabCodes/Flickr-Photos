const express = require('express');
const userController = require('./userController');
const { createFollowNotification } = require('../../middleware/createNotification');

const router = express.Router();
router.get('/displayname/:displayName', userController.getUserbyDisplayName);
router.get('/email/:email', userController.getUserByEmail);
router.get('/:userId/info', userController.getUserInfoById);
router.get('/:userId/photos', userController.getPhotos);
router.get('/:userId/photos/public', userController.getPublicPhotos);

router.post('/unfollow', userController.unFollowUser);

router.route('/pro').put(async (req, res) => {
  try {
    await userController.sendProEmail(req, res);
  } catch (_) {
    res.status(500).send({ statusCode: 500, error: 'The server couldn\'t handle the request' });
  }
});

router.post('/follow', userController.followUser, createFollowNotification);
// router.post('/description/:userId', userController.addDescription);

router.route('/pro/:proToken').post(async (req, res) => {
  try {
    await userController.becomePro(req, res);
  } catch (_) {
    res.status(500).send({ statusCode: 500, error: 'The server couldn\'t handle the request' });
  }
});

router.route('/delete-account').delete(async (req, res) => {
  try {
    await userController.deleteAccount(req, res);
  } catch (_) {
    res.status(500).send({ statusCode: 500, error: 'The server couldn\'t handle the request' });
  }
});

router.route('/:userId/followers').get(async (req, res) => {
  try {
    await userController.getFollowers(req, res);
  } catch (_) {
    res.status(500).send({ statusCode: 500, error: 'The server couldn\'t handle the request' });
  }
});
router.post('/:userId/showcase', userController.addToShowCase);
router.delete('/:userId/showcase', userController.removeFromShowCase);
module.exports = router;
