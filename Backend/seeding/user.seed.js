const mongoose = require('mongoose');
const { join } = require('path');

const User = require('../components/User/userModel');
require('dotenv').config({ path: join(__dirname, '/../secret/', '.env') });

async function connect() {
  await mongoose
    .connect('mongodb+srv://keka:keka@cluster0.gg47n.mongodb.net/keka?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true });
}

async function userSeed() {
  await User.collection.drop();

  await User.insertMany([{
    email: 'hamoksha@live.com',
    password: 'kjsadgjknadsgojsag',
    displayName: 'keka',
    _id: mongoose.Types.ObjectId('6092ea68326fa5101115dfad'),
  },
  {
    email: 'hamoksha@hotmail.com',
    password: 'kjsadgjknadsgojsag',
    displayName: 'lolo',
    _id: mongoose.Types.ObjectId('6092ea68326fa5101115dfae'),
  }, {
    email: 'activated@gmail.com',
    password: 'kjsadgjknadsgojsag',
    displayName: 'test',
    _id: mongoose.Types.ObjectId('6092ea68326fa5101115dfaf'),

  }, {
    email: 'activated@hotmail.com',
    password: 'kjsadgjknadsgojsag',
    displayName: 'test2',
    _id: mongoose.Types.ObjectId('6092ea68326fa5101115dfb0'),

  }]);
}
async function seed() {
  await connect();
  await userSeed();
  await mongoose.disconnect();
}

seed().then(() => console.log('done')).catch(() => console.log('error'));
