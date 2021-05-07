const mongoose = require('mongoose');
const { join } = require('path');

const cameraBrand = require('../components/cameraBrand/cameraBrandModel');
require('dotenv').config({ path: join(__dirname, '/../secret/', '.env') });

async function cameraBrandSeed() {
  if (await cameraBrand.findOne()) await cameraBrand.collection.drop();
  await cameraBrand.insertMany([{
    name: 'Nikon',
    _id: mongoose.Types.ObjectId('1092ea18321fa5101115dfad'),
  },
  {
    name: 'Canon',

    _id: mongoose.Types.ObjectId('1092ea18321fa5101115dfae'),
  }, {
    name: 'Apple',
    _id: mongoose.Types.ObjectId('1092ea18321fa5101115dfaf'),

  }, {
    name: 'Nokia',
    _id: mongoose.Types.ObjectId('1092ea18321fa5101115dfb0'),

  }]);
}
async function seedCameraBrand() {
  await cameraBrandSeed();
}

module.exports = seedCameraBrand;
