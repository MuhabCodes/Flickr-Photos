const Comment = require('./commentsModel');
const Photo = require('../photoModel');
require('../../User/userModel');

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
    _id: paramtersToEdit.commentID,
  }, { commentText: paramtersToEdit.commenttex })
    .exec();
  return editedcomment;
};
module.exports.deleteComment = async function deleteComment(commentToDeleteId) {
  const deletedComment = await Comment.findByIdAndDelete(commentToDeleteId)
    .exec();
  return deletedComment;
};
module.exports.findComment = async function findComment(photoID) {
  const foundComment = await Comment.find({ photo: photoID })
    .populate('user', 'displayName userAvatar ')
    .exec();
  return foundComment;
};
module.exports.findphoto = async function findphoto(photoID) {
  const foundPhoto = await Photo.findById(photoID)
    .exec();
  return foundPhoto;
};
