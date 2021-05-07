const mongoose = require('mongoose');
const { join } = require('path');
const Gallery = require('../components/Gallery/galleryModel');
require('dotenv').config({ path: join(__dirname, '/../secret/', '.env') });

const gallery = new Gallery({
  _id: mongoose.Types.ObjectId('111111111111111111111111'),
  owner: 'testingOwner',
  primaryPhotoId: 'testingId',
  dateCreate: 'testingDate',
  countPhotos: 'testingCount',
  countVideos: 'testingCount',
  title: 'testingTitle',
  description: [],
});

async function gallerySeed() {
  if (await Gallery.findOne()) await Gallery.collection.drop();
  await gallery.save();
}
async function seedGallery() {
  await gallerySeed();
}

module.exports = seedGallery;
