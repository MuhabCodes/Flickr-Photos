const mongoose = require('mongoose');

const { Schema } = mongoose;

const AlbumSchema = new Schema({
  authorId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createDate: {
    type: Date,
  },
  updateDate: {
    type: Date,
  },
  photos: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Photo',
  },
});

module.exports = mongoose.model('Album', AlbumSchema);
