const Favorite = require('./favoritesModel');
require('../photos/photosModel');

module.exports.createFavorite = async function createFavorite(
  favoriteParameter,
) {
  const favoriteobject = new Favorite({
    _id: favoriteParameter.id,
    user: favoriteParameter.userID,
    favoriteDate: favoriteParameter.favoriteDa,
    photo: favoriteParameter.photoId,

  });
  const favoriteReturned = await favoriteobject.save();
  return favoriteReturned;
};
module.exports.findFavorite = async function findFavorite(userID) {
  const foundFavorite = await Favorite.find({ user: userID })
    .select('photo')
    .populate('photo', 'title isPublic ')
    .exec();
  return foundFavorite;
};
module.exports.deleteFavorite = async function deleteFavorite(favoriteToDelete) {
  const deletedFavorite = await Favorite.deleteOne({
    photo: favoriteToDelete.photoId,
    user: favoriteToDelete.userId,
  })
    .exec();
  return deletedFavorite;
};
module.exports.findFavoriteByUserAndPhoto = async function
findFavoriteByUserAndPhoto(favoriteToFind) {
  const foundFavorite = await
  Favorite.find({ user: favoriteToFind.userId, photo: favoriteToFind.photoId })
    .exec();
  return foundFavorite;
};
