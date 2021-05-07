const mongoose = require('mongoose');
const { join } = require('path');
const utilsPassword = require('../utils/passwords');
const User = require('../components/User/userModel');
require('dotenv').config({ path: join(__dirname, '/../secret/', '.env') });

async function userSeed() {
  if (await User.findOne()) await User.collection.drop();
  const hashedPw = await utilsPassword.hashPassword('12345678');
  await User.insertMany([{
    email: 'hamoksha@live.com',
    password: hashedPw,
    _id: mongoose.Types.ObjectId('6092ea68326fa5101115dfad'),
    displayName: 'keka',
  },
  {
    email: 'hamoksha@hotmail.com',
    password: hashedPw,
    _id: mongoose.Types.ObjectId('6092ea68326fa5101115dfae'),
  }, {
    email: 'activated@gmail.com',
    password: hashedPw,
    _id: mongoose.Types.ObjectId('6092ea68326fa5101115dfaf'),
    isActivated: true,
  }, {
    email: 'activated@hotmail.com',
    password: hashedPw,
    _id: mongoose.Types.ObjectId('6092ea68326fa5101115dfb0'),
    isActivated: true,

  }, {
    _id: mongoose.Types.ObjectId('507f191e810c19729de860ea'),
    personId: mongoose.Types.ObjectId('507f191e810c19729de860ef'),
    email: 'mhmd@amr.com',
    password: 'e3e3e3',

  },
  {
    _id: mongoose.Types.ObjectId('111111111111111111111111'),
    email: 'testing@gmail.com',
    password: '123456',
    displayName: 'testing',
  }]);
}
async function seedUser() {
  await userSeed();
}

module.exports = seedUser;
