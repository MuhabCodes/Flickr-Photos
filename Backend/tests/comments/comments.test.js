const supertest = require('supertest');
const mongoose = require('mongoose');
const { join } = require('path');
const app = require('../../bin/server');

jest.setTimeout(30000);

require('dotenv').config({ path: join(__dirname, '/../../secret/', '.env') });
const commentsDAL = require('../../components/photo/comments/commentsDAL');
const { json } = require('body-parser');

const editedparameter = { commentID: '60b4bf4a1c6c752f50edd8de', commenttex: 'that was great ya hamada' };
const commentExample = {
  dateCreated: '2020-12-11T22:00:00.000Z',
  _id: '60b4bf4a1c6c752f50edd8de',
  user: { _id: '507f191e810c19729de860ea', displayName: 'anna' },
  photo: '5d6ede6a0ba62570afcedd3d',
  commentText: 'that was great ya hamada',
  __v: '0',
};
const commenttoadd = {
  id: '60b4bf4a1c6c752f50edd8d4',
  userID: '507f191e810c19729de860ea',
  commentDa: Date.now(),
  photoId: '5d6ede6a0ba62570afcedd3d',
  commenttex: 'Gamd ya basha ',
};
const photoExample = {
  _id: '5d6ede6a0ba62570afcedd3d',
};

test('should return a comment text of a photo if found', async () => {
  const commentFound = await commentsDAL.findComment('5d6ede6a0ba62570afcedd3d');
  expect(commentFound[0].commentText).toBe(commentExample.commentText);
});
test('should return a photo if found', async () => {
  const photoFound = await commentsDAL.findphoto('5d6ede6a0ba62570afcedd3d');
  expect(JSON.stringify(photoFound._id)).toEqual(JSON.stringify(photoExample._id));
});
test('should return a edited comment id ', async () => {
  const commentEdited = await commentsDAL.Editcomment(editedparameter);
  expect(JSON.stringify(commentEdited._id)).toEqual(JSON.stringify(editedparameter.commentID));
});
test('should return a added comment id ', async () => {
  const commentCreated = await commentsDAL.createComment(commenttoadd);
  expect(JSON.stringify(commentCreated._id)).toEqual(JSON.stringify(commenttoadd.id));
});
test('should return a deleted comment id ', async () => {
  const commentDeleted = await commentsDAL.deleteComment('60b4bf4a1c6c752f50edd8d4');
  expect(JSON.stringify(commentDeleted._id)).toEqual(JSON.stringify(commenttoadd.id));
});
