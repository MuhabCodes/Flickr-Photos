const { join } = require('path');
const app = require('../../bin/server');
const User = require('../../components/user/userModel');
const userDAL = require('../../components/user/userDAL');

require('dotenv').config({ path: join(__dirname, '/../../secret/', '.env') });

jest.setTimeout(30000);

async function getAllUsers() {
  const users = await User.find();
  return users;
}

// testing getInfo function DAL
test('should return user with the passed Id Success ', async () => {
  const users = await getAllUsers();
  const userToGetInfo = users[0]._id;
  const userFound = await userDAL.getUserById(userToGetInfo);
  expect(JSON.stringify(userFound._id)).toEqual(JSON.stringify(userToGetInfo));
});

test('should getUser By displayName  ', async () => {
  const users = await getAllUsers();
  const userToGetInfo = users[0].displayName;

  const userFound = await userDAL.getUserByDisplayName(userToGetInfo);
  expect(JSON.stringify(userFound.displayName)).toEqual(JSON.stringify(userToGetInfo));
});

test('should getUser By Email', async () => {
  const users = await getAllUsers();
  const userToGetInfo = users[0].email;

  const userFound = await userDAL.getUserByEmail(userToGetInfo);
  expect(JSON.stringify(userFound.email)).toEqual(JSON.stringify(userToGetInfo));
});

test('should unfollow a given user', async () => {
  const users = await getAllUsers();
  const userToUnfollow = users[0].following[0];
  const followingBefore = users[0].following.length;
  await userDAL.removeFromFollowing(users[0]._id, userToUnfollow);
  await userDAL.removeFromFollowers(userToUnfollow, users[0]._id);
  const updatedUser = await getAllUsers();
  expect(updatedUser[0].following.length).toEqual(followingBefore - 1);
});
