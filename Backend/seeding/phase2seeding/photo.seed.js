const Photo = require('../../components/photo/photoModel');
const { photoArray } = require('./fakerData/mainFaker');

async function photoSeed() {
  if (await Photo.findOne()) await Photo.collection.drop();
  await Photo.insertMany(photoArray);
}
async function seedPhoto() {
  await photoSeed();
}

module.exports = { seedPhoto };
