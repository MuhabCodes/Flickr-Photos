const mongoose = require('mongoose');

const commentsModel = mongoose.Schema({

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

  dateCreated: {
    type: Date,
    default: Date.now(),

  },
  commentText: {
    type: String,
    required: true,

  },

});

module.exports = mongoose.model('Comment', commentsModel);
