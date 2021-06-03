const Photo = require('./photoModel');

module.exports = {
  async getLatestPhotos() {
    return Photo.find().sort({ $natural: -1 });
  },
  async addNewPhoto(photoInfo) {
    return Photo.collection.insertOne(photoInfo);
    // return photoInfo.save();
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
  async fetchUserPhotos(userId) {
    return Photo.find({ user: userId });
  },
};
