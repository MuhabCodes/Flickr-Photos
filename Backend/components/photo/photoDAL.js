const Photo = require('./photoModel');
require('../user/userModel');

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
      { $push: { inPhoto: userId } },
    );
  },
  async removePersonFromPhotoDAL(photoId, userId) {
    await Photo.updateOne(
      { _id: photoId },
      { $pull: { inPhoto: userId } },
    );
  },
  async getPeopleInPhotoDAL(photoId) {
    // TODO : revisit the population to check what is needed per person
    const inPhoto = await Photo.findById(photoId)
      .select('inPhoto')
      .populate('inPhoto')
      .select('displayName personId')
      .populate('personId');

    return inPhoto;
  },
};
