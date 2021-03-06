const faker = require('faker');
const Photo = require('../../../components/photo/photoModel');

function generatePhotoData(userArray) {
  const photoArray = [];
  userArray.forEach((element) => {
    for (let i = 0; i < 1 + Math.floor(7 * Math.random()); i++) {
      const description = faker.lorem.sentence();
      const captureDate = faker.date.between('01-01-2015', '06-07-2021');
      const uploadDate = faker.date.between('06-07-2020', '06-07-2021');
      const title = faker.lorem.word();
      const height = Math.floor(500 + Math.random() * 1000);
      const width = Math.floor(500 + Math.random() * 1000);
      const imageUrl = `http://placeimg.com/${width}/${height}`;
      const isPublic = (Math.random() > 0.9);
      const favs = Math.floor(Math.random() * 5000);
      const comments = Math.floor(Math.random() * 5000);
      const user = element._id;
      const tag = ['60b7be952c71e90dcc0f5062', '60b7be952c71e90dcc0f5063', '60b7be952c71e90dcc0f5064', '60b7be952c71e90dcc0f5065'];
      const tagInPhoto = Math.floor(Math.random() * 3);
      const tags = [tag[tagInPhoto]];
      const photoObj = new Photo({
        description,
        captureDate,
        uploadDate,
        title,
        height,
        width,
        imageUrl,
        isPublic,
        favs,
        tags,
        comments,
        user,
      });
      photoArray.push(photoObj);
    }
  });
  return photoArray;
}

module.exports.generatePhotoData = generatePhotoData;
