const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const { ObjectId } = require('mongoose').Types;
const Favorite = require('./favoritesModel');
const favoriteController = require('./favoritesController');

require('dotenv').config();
const { decryptAuthToken } = require('../auth/Services/decryptToken');

router.post('/:photoId',
  favoriteController.add);

router.delete('/:photoId', favoriteController.deleteFavorite);

router.get('/:userId', favoriteController.findFavorite);

router.get('/public/:userId', favoriteController.findPublicFavorite);

module.exports = router;
