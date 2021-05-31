const Comment = require('./commentsModel');
require('../photoModel');
require('../../user/userModel');

module.exports.createComment = async function createComment(
  CommentParameter,
) {
  const CommentObject = new Comment({
    _id: CommentParameter.id,
    user: CommentParameter.userID,
    dateCreated: CommentParameter.commentDa,
    photo: CommentParameter.photoId,
    commentText: CommentParameter.commenttex,

  });
  const CommentReturned = await CommentObject.save();
  return CommentReturned;
};
module.exports.Editcomment = async function Editcomment(paramtersToEdit) {
  const editedcomment = await Comment.findOneAndUpdate({
    photo: paramtersToEdit.photoId,
    user: paramtersToEdit.userId,
  }, { commentText: paramtersToEdit.commenttex })
    .exec();
  return editedcomment;
};
module.exports.deleteComment = async function deleteComment(commentToDelete) {
  const deletedComment = await Comment.deleteOne({
    photo: commentToDelete.photoId,
    user: commentToDelete.userId,
  })
    .exec();
  return deletedComment;
};
module.exports.findComment = async function findComment(photoID) {
  const foundComment = await Comment.find({ photo: photoID })
    .populate('user', 'displayName')
    .exec();
  return foundComment;
};
