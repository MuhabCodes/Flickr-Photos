const { Schema, model } = require('mongoose');

const userSchema = new Schema({
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
  displayName: {
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
  groups: {
    type: [Schema.Types.ObjectId],
    ref: 'Group',
  },

  // personId: {
  //   type: String, // TODO : Change to person ID when person is added
  // },
  // TODO : Add proper data structure to store following and followers
},
{ autoCreate: true });

module.exports = model('User', userSchema);
