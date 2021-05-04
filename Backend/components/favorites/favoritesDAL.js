const Favorite = require('./favoritesModel');

module.exports.createFavorite = async function createFavorite(
  favoriteParameter,
) {
  const favoriteobject = new Favorite({
    _id: favoriteParameter.id,
    user: favoriteParameter.userID,
    favoriteDate: favoriteParameter.favoriteDa,
    photo: favoriteParameter.photoId,

  });
  favoriteobject.save();
  return favoriteobject;
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
