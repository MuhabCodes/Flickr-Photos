const Comment = require('../../components/photo/comments/commentsModel');
const { commentArray } = require('./fakerData/mainFaker');

async function commentSeed() {
  if (await Comment.findOne()) await Comment.collection.drop();
  await Comment.insertMany(commentArray);
}
async function seedComment() {
  await commentSeed();
}

module.exports = { seedComment };
