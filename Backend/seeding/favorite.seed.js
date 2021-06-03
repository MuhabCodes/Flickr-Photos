const mongoose = require('mongoose');
const { join } = require('path');
const Favorite = require('../components/favorites/favoritesModel');
require('dotenv').config({ path: join(__dirname, '/../secret/', '.env') });

async function favoriteSeed() {
  if (await Favorite.findOne()) await Favorite.collection.drop();
  await Favorite.insertMany([{
    _id: mongoose.Types.ObjectId('6091658b116c8c3a00403844'), user: mongoose.Types.ObjectId('507f191e810c19729de860ea'), favoriteDate: Date.now(), photo: mongoose.Types.ObjectId('5d6ede6a0ba62570afcedd3d'),
  },
  ]);
}

async function seedFavorite() {
  await favoriteSeed();
}

module.exports = seedFavorite;
