const mongoose = require('mongoose');

const favoritesSchema = mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  photo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Photo',
    required: true,

  },

  favoriteDate: {
    type: String,
    required: true,

  },
});

module.exports = mongoose.model('Favorites', favoritesSchema);
