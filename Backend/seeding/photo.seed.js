const mongoose = require('mongoose');
const { join } = require('path');
const Photo = require('../components/photos/photosModel');

require('dotenv').config({ path: join(__dirname, '/../secret/', '.env') });

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

async function seedPhoto() {
  await photoSeed();
}

module.exports = seedPhoto;
