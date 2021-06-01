const express = require('express');
const userController = require('./userController');

const router = express.Router();
router.get('/displayname/:displayName', userController.getUserbyDisplayName);
router.get('/email/:email', userController.getUserByEmail);
router.get('/:userId/info', userController.getUserInfoById);
router.get('/:userId/groups', userController.getGroups);
router.get('/:userId/photos', userController.getPhotos);

router.route('/pro').post(async (req, res) => {
  try {
    await userController.sendProEmail(req, res);
  } catch (_) {
    res.status(500).send({ statusCode: 500, error: 'The server couldn\'t handle the request' });
  }
});

module.exports = router;
