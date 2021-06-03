const Photo = require('./photoModel');
require('../user/userModel');

const favoritesModel = require('../favorites/favoritesModel');

module.exports = {
  async getLatestPhotos() {
    return Photo.find().sort({ $natural: -1 });
  },
  async addNewPhotos(photosInfo) {
    return Photo.insertMany(photosInfo);
  },
  async getPhotoById(photoId) {
    return Photo.findById(photoId);
  },
  async savePhoto(photoToSave) {
    return photoToSave.save();
  },
  async removePhoto(photoToRemove) {
    return photoToRemove.remove();
  },
  async addPersonToPhotoDAL(photoId, userId) {
    await Photo.updateOne(
      { _id: photoId },
      { $push: { peopleInPhoto: userId } },
    );
  },
  async removePersonFromPhotoDAL(photoId, userId) {
    await Photo.updateOne(
      { _id: photoId },
      { $pull: { peopleInPhoto: userId } },
    );
  },
  async getPhotoFavs(photoId) {
    const photoFavs = await favoritesModel.find({ photo: photoId });
    return photoFavs;
  },
  async getPeopleInPhotoDAL(photoId) {
    // TODO : revisit the population to check what is needed per person
    const inPhoto = await Photo.findById(photoId)
      .select('peopleInPhoto')
      .populate('peopleInPhoto')
      .select('displayName personId')
      .populate('personId');

    return inPhoto;
  },
};

module.exports.removeFav = async function removeFav(photoId) {
  const photoObj = await Photo.findById(photoId);
  photoObj.favs -= 1;
  photoObj.save();
};

module.exports.addFav = async function addFav(photoId) {
  const photoObj = await Photo.findById(photoId);
  photoObj.favs += 1;
  photoObj.save();
};

module.exports.addComment = async function addComment(photoId) {
  const photoObj = await Photo.findById(photoId);
  photoObj.comments += 1;
  photoObj.save();
};

module.exports.removeComment = async function removeComment(photoId) {
  const photoObj = await Photo.findById(photoId);
  photoObj.comments -= 1;
  photoObj.save();
};
