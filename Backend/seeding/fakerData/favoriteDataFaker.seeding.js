const faker = require('faker');
const Favorite = require('../../components/favorites/favoritesModel');

// const { photoArray } = require('./userDataFaker.seed');
const { userArray } = require('./userDataFaker.seed');

const photoArray = [];
const favoriteArray = [];

photoArray.forEach((element) => {
  const favoriteDate = faker.date.between('01-01-2015', '06-07-2021');
  const photo = element._id;
  for (let j = 0; j < 10; j++) {
    const user = userArray[j];
    const favouriteObj = new Favorite({
      user,
      photo,
      favoriteDate,
    });
    favoriteArray.push(favouriteObj);
  }
});
console.log(favoriteArray);
