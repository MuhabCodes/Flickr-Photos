const mongoose = require('mongoose');

const favoritesSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,

    required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  photo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Photos',
    required: true,

  },

  favoriteDate: {
    type: String,
    required: true,

  },
});

module.exports = mongoose.model('Favorites', favoritesSchema);
