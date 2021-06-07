const mongoose = require('mongoose');
const { join } = require('path');
require('dotenv').config({ path: join(__dirname, '/../../secret/', '.env') });
const { seedUser } = require('./user.seed');
const { seedFavorite } = require('./favorite.seed');
const { seedComment } = require('./comment.seed');
const { seedPhoto } = require('./photo.seed');
const { seedPerson } = require('./person.seed');
const cameraBrandSeed = require('./camera.seed');
const cameraModelSeed = require('./cameraModel.seed');

async function connect() {
  await mongoose
    .connect(process.env.MONGO_URI_CLOUD,
      { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 50000 });
}

async function seed() {
  await connect();
  await seedUser();
  await seedPhoto();
  await seedPerson();
  await seedFavorite();
  await seedComment();
  await cameraBrandSeed();
  await cameraModelSeed();
}

seed().then(() => console.log('done')).catch((err) => console.log(err));
