const User = require('../../components/user/userModel');
const { userArray } = require('./fakerData/mainFaker');

async function userSeed() {
  if (await User.findOne()) await User.collection.drop();
  await User.insertMany(userArray);
}
async function seedUser() {
  await userSeed();
}

module.exports = { seedUser };
