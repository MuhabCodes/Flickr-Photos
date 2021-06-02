const { Schema, model } = require('mongoose');

const groupSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  ownerId: {
    type: String,
    ref: 'User',
    required: 'true',
  },
  isPublic: {
    type: Boolean,
    default: true,
  },
  plusEighten: {
    type: Boolean,
    default: false,
  },
  requiresInvitaion: {
    type: Boolean,
    default: false,
  },
});

module.exports = model('Group', groupSchema);
