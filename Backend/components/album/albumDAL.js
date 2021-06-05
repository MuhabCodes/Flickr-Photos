const mongoose = require('mongoose');
const Album = require('./albumModel');
const Photo = require('../photo/photoModel');

module.exports = {
  async fetchAlbum(albumId) {
    const objectId = mongoose.Types.ObjectId(albumId);
    return Album.find({ _id: objectId });
    // return Album.find({ });
  },
  async removeFromAlbum(albumId, photoId) {
    // first find the image in the album
    const foundAlbum = await Album.find({ _id: albumId });
    let index = -1;
    for (let i = 0; i < foundAlbum.photos.length; i++) {
      if (foundAlbum.photos[i]._id === photoId) {
        index = i;
        break;
      }
    }

    // then remove the element from the array
    if (index !== -1) {
      foundAlbum.photos.splice(index, 1);
    }
    return foundAlbum.save();
  },
  async addNewAlbum(albumInfo) {
    return Album.insertOne(albumInfo);
  },
  async addNewPhotoToAlbum(albumId, photoId) {
    // first get the album based on the id
    const foundAlbum = await Album.find({ _Id: albumId });
    // get the photo to be added to the album
    const foundPhoto = await Photo.find({ _Id: photoId });
    // add the photo to the photos in this album
    foundAlbum.photos.push(foundPhoto);
    // then save the album to the database
    return foundAlbum.save();
  },
  async fetchUserAlbums(authorId) {
    return await Album.find({ authorId });
  },
};
