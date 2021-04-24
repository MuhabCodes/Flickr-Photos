const { Schema, model } = require('mongoose');

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email field is required'],
    trim: true,
    match: emailRegex,
  },
  password: {
    type: String,
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
  // TODO : Add proper data structure to store following and followers
});

// Return photos from camera roll depending on permissions( public, friends, family ... and so on)
// TODO : Complete when photos are ready

// userSchema.virtual('photoStream').get(function getPhotoStream(visitorRelation) {
//   // populate photos
//   //cameraRoll.map the photos according to the permission of the viewer.
// });

module.exports = model('User', userSchema);
