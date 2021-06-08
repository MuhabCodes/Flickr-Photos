const mongoose = require('mongoose');
const { join } = require('path');
const Group = require('../components/group/groupModel');
require('dotenv').config({ path: join(__dirname, '/../secret/', '.env') });

const group = new Group({
  _id: mongoose.Types.ObjectId('111111111111111111111111'),
  name: 'testing',
  ownerId: mongoose.Types.ObjectId('111111111111111111111112'),
});

async function groupSeed() {
  if (await Group.findOne()) await Group.collection.drop();
  await group.save();
}
async function seedGroup() {
  await groupSeed();
}

module.exports = seedGroup;
