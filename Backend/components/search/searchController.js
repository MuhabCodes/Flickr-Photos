const { searchPhotosDAL } = require('../photo/photoDAL');

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
exports.searchPhoto = async function searchPhoto(req, res) {
  const { searchWord } = req.query;

  const searchPhotos = await searchPhotosDAL(searchWord);
  const returnVals = searchPhotos.map(renameObject);
  res.status(200).json({ photosSearch: returnVals });
};
