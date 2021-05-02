const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  url: {
    type: String,
  }, // url will be turned virtual just now for testing
  owner: {
    type: String,
  },
  primaryPhotoId: {
    type: String,
  },
  dateCreate: {
    type: String,
  },
  countPhotos: {
    type: String,
  },
  // not completed just for testing urls..
});

module.exports = mongoose.model('Gallery', gallerySchema);
