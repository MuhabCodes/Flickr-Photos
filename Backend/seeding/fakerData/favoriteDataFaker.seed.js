const faker = require('faker');
const Favorite = require('../../components/favorites/favoritesModel');

module.exports.generateFavouritesData = function generateFavouritesData(userArray, photoArray) {
  const favoriteArray = [];
  photoArray.forEach((element) => {
    const favoriteDate = faker.date.between('01-01-2015', '06-07-2021');
    const photo = element._id;
    const shuffledArray = userArray.sort((a, b) => 0.5 - Math.random()); // here we shuffle userArray
    for (let j = 0; j < Math.floor(Math.random() * 5); j++) {
      const user = shuffledArray[j]._id;
      const favouriteObj = new Favorite({
        user,
        photo,
        favoriteDate,
      });
      favoriteArray.push(favouriteObj);
    }
  });
  return favoriteArray;
};
