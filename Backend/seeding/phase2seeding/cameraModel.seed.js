const { join } = require('path');

const cameraModel = require('../../components/camera/cameraModel');
require('dotenv').config({ path: join(__dirname, '/../secret/', '.env') });

async function cameraModelSeed() {
  if (await cameraModel.findOne()) await cameraModel.collection.drop();
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
    name: 'iPhone X',
    brandName: 'Apple',
    _id: '1292ea18321fa5121115dfaf',

  }, {
    name: 'Galaxy S7',
    brandName: 'Samsung',
    _id: '1292ea18321fa5121115dfb2',

  },
  {
    name: 'iPhone XR',
    brandName: 'Apple',

  },
  {
    name: 'iPhone 7',
    brandName: 'Apple',

  },
  {
    name: 'D850',
    brandName: 'Nikon',

  },
  {
    name: 'D500',
    brandName: 'Nikon',

  },
  {
    name: 'CCANON EOS 5D MARK IV',
    brandName: 'Canon',

  },
  {
    name: 'CANON EOS 5D MARK IV',
    brandName: 'Canon',

  },
  {
    name: 'Galaxy S8',
    brandName: 'Samsung',

  },
  {
    name: 'Galaxy S9',
    brandName: 'Samsung',

  },

  ]);
}
async function seedCameraModel() {
  await cameraModelSeed();
}

module.exports = seedCameraModel;
