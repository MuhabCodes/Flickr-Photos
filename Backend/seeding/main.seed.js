const mongoose = require('mongoose');
const { join } = require('path');
const Person = require('../components/person/personModel');
const userSeed = require('./user.seed');
const groupSeed = require('./group.seed');
const gallerySeed = require('./gallery.seed');
const photoSeed = require('./photo.seed');
const favoriteSeed = require('./favorite.seed');

require('dotenv').config({ path: join(__dirname, '/../secret/', '.env') });

async function connect() {
  await mongoose
    .connect(process.env.MONGO_URI_CLOUD,
      { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 50000 });
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
async function seed() {
  await connect();
  await userSeed();
  await personSeed();
  await groupSeed();
  await gallerySeed();
  await photoSeed();
  await favoriteSeed();
  await mongoose.disconnect();
}

seed().then(() => console.log('done')).catch((err) => console.log(err));
