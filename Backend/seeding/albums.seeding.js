const mongoose = require('mongoose');

const { join } = require('path');
const Album = require('../components/album/albumModel');
const Photo = require('../components/photo/photoModel');
require('dotenv').config({ path: join(__dirname, '/../secret/', '.env') });

async function connect() {
  await mongoose.connect(process.env.MONGO_URI_CLOUD,
    { useNewUrlParser: true, useUnifiedTopology: true });
}

async function albumSeed() {
  await Album.collection.drop();
  await Album.insertMany([{
    authorId: 'gb239v342',
    title: 'My Album',
    updateDate: '2021-12-01T19:11:08',
    createDate: '2020-05-01T01:50:08',
    _id: '7092ea68326fa5101215dfaa',
    countPhotos: 3,
    photos: [Photo({
      description: 'Great pic',
      captureDate: '2020-01-01T08:11:08',
      uploadDate: '2021-01-01T09:11:08',
      secret: 'secret key',
      title: 'photo 1',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
      width: 1920,
      height: 1195,
      user: '6092ea68326fa5101115dfae',

    }),
    Photo({
      description: 'Great pic',
      captureDate: '2020-05-01T01:50:08',
      uploadDate: '2021-12-01T19:11:08',
      secret: 'secret key',
      title: 'photo 2',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg',
      width: 3456,
      height: 2304,
      user: '6092ea68326fa5101115dfae',

    }),
    Photo({
      description: 'Great pic',
      captureDate: '2021-01-01T08:11:08',
      uploadDate: '2021-05-01T14:16:11',
      secret: 'secret key',
      title: 'photo 3',
      imageUrl: 'https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_1280.jpg',
      width: 2201,
      height: 1240,
      user: '6092ea68326fa5101115dfae',

    }),
    ],
  }]);
}

async function seed() {
  await connect();
  await albumSeed();
  await mongoose.disconnect();
}

seed().then(() => console.log('done')).catch((err) => console.log(err));
