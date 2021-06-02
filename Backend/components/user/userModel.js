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
  isActivated: {
    type: Boolean,
    default: false,
  },
  isPro: {
    type: Boolean,
    default: false,
  },
  galleries: {
    type: [String], // TODO : Change to gallery array when gallery is done
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
  groups: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Group',
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

},
{ autoCreate: true });

module.exports = mongoose.model('User', userSchema);
