const mongoose = require('mongoose');
const { join } = require('path');
const User = require('../components/User/userModel');
require('dotenv').config({ path: join(__dirname, '/../secret/', '.env') });

const user = new User({
  _id: mongoose.Types.ObjectId('111111111111111111111111'),
  email: 'testing@gmail.com',
  password: '123456',
  username: 'testing',
});

async function connect() {
  await mongoose
    .connect(process.env.MONGO_URI_CLOUD,
      { useNewUrlParser: true, useUnifiedTopology: true });
}

async function userSeed() {
  await user.save();
}
async function seed() {
  await connect();
  await userSeed();
  await mongoose.disconnect();
}

seed().then(() => console.log('done')).catch(() => console.log('error'));
