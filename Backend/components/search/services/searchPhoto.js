const { searchPhotosDAL } = require('../../photo/photoDAL');

function renameObject(photo) {
  return {
    title: photo.title,
    imagePath: photo.imageUrl,
    description: photo.description,
    favs: photo.favs,
    comments: photo.comments,
    photoId: photo._id,
    user: photo.user.displayName,
  };
}

module.exports.searchPhotosServ = async function searchPhoto(searchWord) {
  const searchPhotos = await searchPhotosDAL(searchWord);
  const returnVals = searchPhotos.map(renameObject);
  return returnVals;
};
