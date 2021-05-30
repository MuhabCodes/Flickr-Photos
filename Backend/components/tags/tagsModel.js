const { Schema, model } = require('mongoose');

const tagSchema = new Schema({
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  tagText: {
    type: String,
    unique: true,
  },
  tagRaw: {
    type: String,
    required: true,
  },
});

module.exports = model('Tag', tagSchema);
