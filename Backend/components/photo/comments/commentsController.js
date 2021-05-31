const mongoose = require('mongoose');

const commentsDAL = require('./commentsDAL');

const { decryptAuthToken } = require('../../auth/Services/decryptToken');

exports.add = async function addComment(req, res) {
  const { authorization } = req.headers;

  const { userId } = await decryptAuthToken(authorization);
  try {
    const comment = await commentsDAL.createComment({
      id: new mongoose.Types.ObjectId(),
      userID: userId,
      commentDa: req.body.dateCreated,
      photoId: req.params.photoId,
      commenttex: req.body.commentText,
    });
    return res.status(201).json({
      message: 'comment added succesfully',
      commentCreated:

  {
    _id: comment.id,
    user: comment.user,
    photo: comment.photo,
    dateCreated: comment.dateCreated,
    commentText: comment.commentText,

  },
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
exports.editComment = async function editComment(req, res) {
  const { authorization } = req.headers;
  const { userId } = await decryptAuthToken(authorization);
  const { photoId } = req.params;
  const commenttex = req.body.commentText;
  try {
    const commentEdited = await commentsDAL.Editcomment({ userId, photoId, commenttex });
    return res.status(200).json(commentEdited);
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
exports.deleteComment = async function deleteComment(req, res) {
  const { authorization } = req.headers;
  const { userId } = await decryptAuthToken(authorization);
  const { photoId } = req.params;
  try {
    const commentDeleted = await commentsDAL.deleteComment({ userId, photoId });
    return res.status(200).json(commentDeleted);
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
exports.findComment = async function findComment(req, res) {
  const photoID = req.params.photoId;
  try {
    if (!mongoose.isValidObjectId(photoID)) {
      return res.status(404).json({
        error: 'Invalid Photo',
      });
    }
    const commentOutput = await commentsDAL.findComment(photoID);
    return res.status(200).json(
      {
        photo_Id: photoID,
        total: commentOutput.length,
        comments: commentOutput.map((doc) => ({
          dateCreate: doc.dateCreated,
          commentId: doc._id,
          text: doc.commentText,
          author: doc.user.displayName,
          authorId: doc.user._id,

        })),
      },
    );
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};
