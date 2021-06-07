const express = require('express');

const router = express.Router();

const urlController = require('./urlController');

// #region urls_related_to_user
// Function (urls - lookupUser)-Returns a user NSID, given the url to a user's photos or profile
router.get('/user', async (req, res) => {
  try {
    await urlController.lookUpUser(req, res);
  } catch (err) {
    res.status(500).send({ statusCode: 500, error: 'We Couldnt return user due to server errors' });
  }
});

// Function (getUserProfile) - Returns the url to a user's profile.
// The Id of the user to fetch the url for is Optional so If omitted, the calling user is assumed.
router.get('/userprofile', async (req, res) => {
  try {
    await urlController.getUserProfile(req, res);
  } catch (err) {
    res.status(500).send({ statusCode: 500, error: 'We Couldnt return user due to server errors' });
  }
});

// Function (getUserPhotos) - Returns the url to a user's photos.
// The Id of the user to fetch the url for is Optional so If omitted, the calling user is assumed.
router.get('/userphotos', async (req, res) => {
  try {
    await urlController.getUserPhotos(req, res);
  } catch (err) {
    res.status(500).send({ statusCode: 500, error: 'We Couldnt return user due to server errors' });
  }
});
// #endregion

module.exports = router;
