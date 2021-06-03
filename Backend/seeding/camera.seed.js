const mongoose = require('mongoose');
const { join } = require('path');

const cameraBrand = require('../components/cameraBrand/cameraBrandModel');
require('dotenv').config({ path: join(__dirname, '/../secret/', '.env') });

async function cameraBrandSeed() {
  if (await cameraBrand.findOne()) await cameraBrand.collection.drop();
  await cameraBrand.insertMany([{
    name: 'Nikon',
    _id: mongoose.Types.ObjectId('1092ea18321fa5101115dfad'),
    topModels: [
      'Nikon 500s',
      'D850',
      'D500',
    ],
    modelTypes: [
      'Digital SLR',
      'Mirrorless Camera',
      'Point and Shoot',
    ],
    image: 'https://live.staticflickr.com/cameras/72157647510174616_model_large_d5b7ef6582.jpg',
  },
  {
    name: 'Canon',
    topModels: [
      'EOS 5D Mark III',
      'CANON EOS 5D MARK IV',
      'Canon600D',
    ],
    modelTypes: [
      'Digital SLR',
      'Film Scanner',
      'Mirrorless Camera',
      'Point and Shoot',
      'Video Camera',
    ],
    image: 'https://live.staticflickr.com/cameras/72157622292089908_model_large_497d3698ba.jpg',
    _id: mongoose.Types.ObjectId('1092ea18321fa5101115dfae'),
  }, {
    name: 'Apple',
    topModels: ['iPhone 7',
      'iPhone XR',
      'iPhone X'],
    modelTypes: ['Cameraphone',
      'Point and Shoot',
      'Tablet'],
    image: 'https://live.staticflickr.com/cameras/72157635062339950_model_large_d77764305a.jpg',
    _id: mongoose.Types.ObjectId('1092ea18321fa5101115dfaf'),

  }, {
    name: 'Samsung',
    topModels: [
      'Galaxy S7',
      'Galaxy S8',
      'Galaxy S6',
    ],
    modelTypes: [
      'Cameraphone',
      'Digital SLR',
      'Mirrorless Camera',
      'Point and Shoot',
      'Video Camera',
    ],
    image: 'https://mob4me.com/Assets/images/mobile/galaxy-s8-large.jpg',
    _id: mongoose.Types.ObjectId('1092ea18321fa5101115dfb0'),

  }]);
}
async function seedCameraBrand() {
  await cameraBrandSeed();
}

module.exports = seedCameraBrand;
