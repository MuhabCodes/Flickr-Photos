const { Schema, model } = require('mongoose');

const tagSchema = new Schema({
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  tagRaw: {
    type: String,
    unique: true,
    required: true,
  },
  tagText: {
    type: String,
    required: true,
  },
});

module.exports = model('Tag', tagSchema);
