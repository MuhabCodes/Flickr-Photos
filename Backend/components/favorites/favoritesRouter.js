const express = require('express');

const router = express.Router();
const favoriteController = require('./favoritesController');
const { createLikeNotification } = require('../../middleware/createNotification');

require('dotenv').config();

router.post('/:photoId',
  favoriteController.add, createLikeNotification);

router.delete('/:photoId', favoriteController.deleteFavorite);

router.get('/:userId', favoriteController.findFavorite);

router.get('/public/:userId', favoriteController.findPublicFavorite);

module.exports = router;
