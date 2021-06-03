const mongoose = require('mongoose');
const { join } = require('path');
const Tag = require('../components/tags/tagsModel');
require('dotenv').config({ path: join(__dirname, '/../secret/', '.env') });

// async function connect() {
//   await mongoose
//     .connect(process.env.MONGO_URI_CLOUD,
//       { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 50000 });
// }

async function tagSeed() {
  const tags = await Tag.find();
  if (tags.length > 0) await Tag.collection.drop();

  await Tag.insertMany([{
    _id: mongoose.Types.ObjectId('60b7be952c71e90dcc0f5062'),
    ownerId: '60b5fc46e8d98632bcdafc00',
    tagRaw: 'adding a new tag',
    tagText: 'addinganewtag',
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
