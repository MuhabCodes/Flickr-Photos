const mongoose = require('mongoose');
const { join } = require('path');

const cameraBrand = require('../components/cameraBrand/cameraBrandModel');
require('dotenv').config({ path: join(__dirname, '/../secret/', '.env') });

async function connect() {
  await mongoose
    .connect('mongodb+srv://keka:keka@cluster0.gg47n.mongodb.net/keka?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true });
}

async function cameraBrandSeed() {
  await cameraBrand.collection.drop();
  await cameraBrand.insertMany([{
    name: 'Nikon',
    _id: mongoose.Types.ObjectId('1092ea18321fa5101115dfad'),
  },
  {
    name: 'Canon',

    _id: mongoose.Types.ObjectId('1092ea18321fa5101115dfae'),
  }, {
    name: 'Apple',
    _id: mongoose.Types.ObjectId('1092ea18321fa5101115dfaf'),

  }, {
    name: 'Nokia',
    _id: mongoose.Types.ObjectId('1092ea18321fa5101115dfb0'),

  }]);
}
async function seed() {
  await connect();
  await cameraBrandSeed();
  await mongoose.disconnect();
}

seed().then(() => console.log('done')).catch(() => console.log('error'));
