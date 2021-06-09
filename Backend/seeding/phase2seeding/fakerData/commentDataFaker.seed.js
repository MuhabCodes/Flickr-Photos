const faker = require('faker');
const Comment = require('../../../components/photo/comments/commentsModel');

module.exports.generateCommentData = function generateCommentData(userArray, photoArray) {
  const commentArray = [];
  photoArray.forEach((element) => {
    const commentDate = faker.date.between('01-01-2015', '06-07-2021');
    const photo = element._id;
    const shuffledArray = userArray.sort((a, b) => 0.5 - Math.random());
    // here we shuffle userArray

    for (let j = 0; j < Math.floor(Math.random() * 5); j++) {
      const user = shuffledArray[j]._id;
      const commentObj = new Comment({
        user,
        photo,
        commentDate,
        commentText: faker.lorem.sentence(),
      });
      commentArray.push(commentObj);
    }
  });
  return commentArray;
};
