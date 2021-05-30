const Photo = require('./photoModel');

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
  async removePersonFromPhoto(photoId, userId) {
    Photo.updateOne(
      { _id: photoId },
      { $pull: { peopleInPhoto: userId } },
    );
  },
};
