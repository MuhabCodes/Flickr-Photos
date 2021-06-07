const { join } = require('path');
const { test } = require('media-typer');
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
