const Favorite = require('../../components/favorites/favoritesModel');
const { favouriteArray } = require('./fakerData/mainFaker');

async function favoriteSeed() {
  if (await Favorite.findOne()) await Favorite.collection.drop();
  await Favorite.insertMany(favouriteArray);
}
async function seedFavorite() {
  await favoriteSeed();
}

module.exports = { seedFavorite };
