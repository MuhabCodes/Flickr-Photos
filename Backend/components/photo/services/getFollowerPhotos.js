const { fetchFollowerPhotos } = require('../photoDAL');

function mapHome(photo) {
  return {
    userName: photo.user.displayName,
    userAvatar: photo.user.userAvatar,
    title: photo.title,
    faves: photo.favs,
    comments: photo.comments,
    isPro: photo.user.isPro,
    description: photo.description,
    ownerId: photo.user._id,
    photoId: photo._id,
    uploadDate: photo.uploadDate,
    photoUrl: photo.imageUrl,

  };
}
const getFollowerPhotos = async (userIds) => {
  const photos = await fetchFollowerPhotos(userIds);
  return photos.map(mapHome);
};

module.exports = {
  getFollowerPhotos,
};
