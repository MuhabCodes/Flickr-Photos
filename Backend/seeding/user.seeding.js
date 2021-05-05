const mongoose = require('mongoose');
const { join } = require('path');
const utilsPassword = require('../utils/passwords');
const User = require('../components/User/userModel');
require('dotenv').config({ path: join(__dirname, '/../secret/', '.env') });

async function connect() {
  await mongoose
    .connect(process.env.MONGO_URI_CLOUD,
      { useNewUrlParser: true, useUnifiedTopology: true });
}

async function userSeed() {
  await User.collection.drop();
  const hashedPw = await utilsPassword.hashPassword('12345678');
  await User.insertMany([{
    email: 'hamoksha@live.com',
    password: hashedPw,
    _id: mongoose.Types.ObjectId('6092ea68326fa5101115dfad'),
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

  }]);
}
async function seed() {
  await connect();
  await userSeed();
  await mongoose.disconnect();
}

seed().then(() => console.log('done')).catch(() => console.log('error'));
