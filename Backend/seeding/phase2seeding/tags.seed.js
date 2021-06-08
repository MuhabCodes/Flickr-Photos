const mongoose = require('mongoose');
const { join } = require('path');
const Tag = require('../../components/tags/tagsModel');
const { userArray } = require('./fakerData/mainFaker');
require('dotenv').config({ path: join(__dirname, '/../secret/', '.env') });

async function tagSeed() {
  const tags = await Tag.find();
  if (tags.length > 0) await Tag.collection.drop();

  await Tag.insertMany([{
    _id: mongoose.Types.ObjectId('60b7be952c71e90dcc0f5062'),
    ownerId: userArray[0]._id,
    tagRaw: 'adding a new tag',
    tagText: 'addinganewtag',
  },
  {
    _id: mongoose.Types.ObjectId('60b7be952c71e90dcc0f5063'),
    ownerId: userArray[1]._id,
    tagRaw: 'Keka Tag',
    tagText: 'KekaTag',
  },
  {
    _id: mongoose.Types.ObjectId('60b7be952c71e90dcc0f5064'),
    ownerId: userArray[2]._id,
    tagRaw: 'sunset',
    tagText: 'sunset',
  },
  {
    _id: mongoose.Types.ObjectId('60b7be952c71e90dcc0f5065'),
    ownerId: userArray[3]._id,
    tagRaw: 'nightlife',
    tagText: 'nightlife',
  },
  ]);
}

async function seedTag() {
  // await connect();
  await tagSeed();
  // const tags = await Tag.find();
}

module.exports = seedTag;
// seedTag().then(() => console.log('done')).catch((err) => console.log(err));
