const mongoose = require('mongoose');
const { join } = require('path');

const cameraModel = require('../components/camera/cameraModel');
require('dotenv').config({ path: join(__dirname, '/../secret/', '.env') });

async function connect() {
  await mongoose
    .connect('mongodb+srv://keka:keka@cluster0.gg47n.mongodb.net/keka?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true });
}

async function cameraModelSeed() {
  await cameraModel.collection.drop();
  await cameraModel.insertMany([{
    name: 'Nikon 500s',
    brandName: 'Nikon',
    _id: '1292ea18321fa5121115dfad',
  },
  {
    name: 'Canon600D',
    brandName: 'Canon',
    _id: '1292ea18321fa5121115dfae',
  }, {
    name: 'iphone',
    brandName: 'Apple',
    _id: '1292ea18321fa5121115dfaf',

  }, {
    name: 'Nokia 400',
    brandName: 'Nokia',
    _id: '1292ea18321fa5121115dfb2',

  }]);
}
async function seed() {
  await connect();
  await cameraModelSeed();
  await mongoose.disconnect();
}

seed().then(() => console.log('done')).catch(() => console.log('error'));
