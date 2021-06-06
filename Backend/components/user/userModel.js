const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

  email: {
    type: String,
    required: [true, 'Email field is required'],
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
  },
  userAvatar: {
    type: String,
    default: 'https://i.imgur.com/PyVmvKL.jpg',
  },
  isActivated: {
    type: Boolean,
    default: false,
  },
  isPro: {
    type: Boolean,
    default: false,
  },
  albums: {
    type: [String], // TODO : Change to album when album is done.
  },
  personId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person',
  },
  displayName: {
    type: String,
  },
  followers: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
  },
  isGoogleUser: {
    type: Boolean,
    default: false,
  },
  following: {
    type: [mongoose.Schema.Types.ObjectId],
  },
  description: {
    type: String,
  },
  urlCover: {
    type: String,
    default: 'https://i.imgur.com/EWN8anz.png',
  },
  showCase: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Photo',
  },

},
{ autoCreate: true });

module.exports = mongoose.model('User', userSchema);
