const moment = require('moment');
const Photo = require('./photoModel');
require('../user/userModel');

const favoritesModel = require('../favorites/favoritesModel');

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
  async getPhotoFavs(photoId) {
    const photoFavs = await favoritesModel.find({ photo: photoId });
    return photoFavs;
  },
  async getPeopleInPhotoDAL(photoId) {
    const inPhoto = await Photo.findById(photoId)
      .select('inPhoto')
      .populate({

        path: 'inPhoto',
        model: 'User',
        select: 'userAvatar displayName personId isPro',
        populate: {
          path: 'personId',
          model: 'Person',
        },

      });

    return inPhoto;
  },
  async fetchFollowerPhotos(userIds) {
    // gets the most recent 100 photos
    const found = await Photo.find({
      $and:
       [{ user: { $in: userIds } }, { uploadDate: { $gte: moment().subtract(6, 'months') } }],
    })
      .sort({ uploadDate: -1 })
      .limit(100)
      .populate({
        path: 'user',
        model: 'User',
      });
    return found;
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

module.exports.searchPhotosDAL = async function searchPhotosDAL(searchWord) {
  // searches the title description and title of all photos and return them
  const searchPhotos = await Photo.find({ $text: { $search: searchWord } })
    .select('title favs comments user imageUrl description _id')
    .populate('user', '_id displayName');

  return searchPhotos;
};

module.exports.deleteUserPhotosDAL = async function deleteUserPhotos(userId) {
  // delete all user photos
  await Photo.deleteMany({ user: userId });
};
