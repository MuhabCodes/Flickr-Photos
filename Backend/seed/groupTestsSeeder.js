const mongoose = require('mongoose');
const { join } = require('path');
const Group = require('../components/Group/groupModel');

const group = new Group({
  _id: mongoose.Types.ObjectId('111111111111111111111111'),
  name: 'testing',
});

async function connect() {
  await mongoose
    .connect(process.env.MONGO_URI_CLOUD,
      { useNewUrlParser: true, useUnifiedTopology: true });
}

async function groupSeed() {
  await group.save();
}
async function seed() {
  await connect();
  await groupSeed();
  await mongoose.disconnect();
}

seed().then(() => console.log('done')).catch(() => console.log('error'));
