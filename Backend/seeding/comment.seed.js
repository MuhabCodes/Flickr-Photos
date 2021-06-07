const mongoose = require('mongoose');
const { join } = require('path');
const Comment = require('../components/photo/comments/commentsModel');
require('dotenv').config({ path: join(__dirname, '/../secret/', '.env') });

async function CommentSeed() {
  if (await Comment.findOne()) await Comment.collection.drop();
  await Comment.insertMany([{
    _id: mongoose.Types.ObjectId('60b4bf4a1c6c752f50edd8de'), user: mongoose.Types.ObjectId('507f191e810c19729de860ea'), DateCreated: Date.now(), photo: mongoose.Types.ObjectId('5d6ede6a0ba62570afcedd3d'), commentText: 'that was great ya hamada',
  },
  ]);
}

async function seedComment() {
  await CommentSeed();
}

module.exports = seedComment;
