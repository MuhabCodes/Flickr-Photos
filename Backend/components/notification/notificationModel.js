const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }, // TODO WILL BE REMOVED
  senderName: {
    type: String,
  },
  recieverName: {
    type: String,
  },
  reciever: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  photoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Photo',
  },
  imageUrl: {
    type: String,
  },
  act: {
    type: String, // it will be one of three ("follow/like/comment")
    required: true,
  },
  notificationDate: {
    type: Date,
  },

});

module.exports = mongoose.model('Notification', notificationSchema);
