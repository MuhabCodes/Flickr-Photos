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
  // TODO : Add proper data structure to store following and followers
},
{ autoCreate: true });

module.exports = mongoose.model('User', userSchema);
