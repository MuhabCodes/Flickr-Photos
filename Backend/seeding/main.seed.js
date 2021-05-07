const mongoose = require('mongoose');
const { join } = require('path');
const Photo = require('../components/photos/photosModel');
const Person = require('../components/person/personModel');
const Favorite = require('../components/favorites/favoritesModel');

require('dotenv').config({ path: join(__dirname, '/../secret/', '.env') });

async function connect() {
  await mongoose
    .connect(process.env.MONGO_URI_CLOUD,
      { useNewUrlParser: true, useUnifiedTopology: true });
}

async function photoSeed() {
  if (await Photo.findOne()) await Photo.collection.drop();
  await Photo.insertMany([{
    _id: mongoose.Types.ObjectId('5d6ede6a0ba62570afcedd3d'),
    isPublic: true,
    title: 'hi',
  },
  {
    _id: mongoose.Types.ObjectId('5d6ede6a0ba62570afcedd5d'),
    isPublic: false,
    title: 'Hello',
  },
  ]);
}
async function personSeed() {
  if (await Person.findOne()) await Person.collection.drop();
  await Person.insertMany([{
    _id: mongoose.Types.ObjectId('507f191e810c19729de860ef'),
    homeTown: 'ayhaga',
    country: 'frfr',
    description: 'dedd',
    dateCreated: 'ererer',
    birthDate: 'ccscds',
    realName: 'ewfwe',
  }]);
}
async function favoriteSeed() {
  if (await Favorite.findOne()) await Favorite.collection.drop();
  await Favorite.insertMany([{
    _id: mongoose.Types.ObjectId('6091658b116c8c3a00403844'), user: mongoose.Types.ObjectId('507f191e810c19729de86033'), favoriteDate: '121212', photo: mongoose.Types.ObjectId('5d6ede6a0ba62570afcedd3d'),
  },
  ]);
}

async function seed() {
  await connect();
  await photoSeed();
  await personSeed();
  await favoriteSeed();
  await mongoose.disconnect();
}

seed().then(() => console.log('done')).catch((err) => console.log(err));
