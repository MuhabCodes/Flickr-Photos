const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  email: {
    type: String,
    required: [true, 'Email field is required'],
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  isActivated: {
    type: Boolean,
    default: false,
  },
  isPro: {
    type: Boolean,
    default: false,
  },
  cameraRoll: { // Contains all photos of user and only accessible to it (public,private ... etc)
    type: [String], // TODO : Change to photoId when photo is done.
  },
  galleries: {
    type: [String], // TODO : Change to gallery array when gallery is done
  },
  albums: {
    type: [String], // TODO : Change to album when album is done.
  },

  person: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person',
  },
  // TODO : Add proper data structure to store following and followers
// },
// { autoCreate: true });
});

module.exports = mongoose.model('User', userSchema);
