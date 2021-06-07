const mongoose = require('mongoose');
const { join } = require('path');
require('dotenv').config({ path: join(__dirname, '/../../secret/', '.env') });
const { getFollowerPhotos } = require('../../components/photo/services/getFollowerPhotos');
const User = require('../../components/user/userModel');

jest.setTimeout(30000);
describe('homepage test', async () => {
  let connection;
  beforeAll(async () => {
    connection = await mongoose
      .connect(process.env.MONGO_URI_CLOUD,
        { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 50000 });
    console.log('connected');
  });

  test('check home page', async () => {
    let users;
    let user;

    users = await User.find({});

    for (let i = 0; i < users.length; i++) {
      if (users[i].following.length >= 5) {
        user = users[i];
        break;
      }
    }

    const photos = await getFollowerPhotos(user.following);
    expect(photos[0]).toHaveProperty('userName');
    expect(photos[0]).toHaveProperty('userAvatar');
    expect(photos[0]).toHaveProperty('title');
    expect(photos[0]).toHaveProperty('faves');
    expect(photos[0]).toHaveProperty('comments');
    expect(photos[0]).toHaveProperty('isPro');
    expect(photos[0]).toHaveProperty('description');
    expect(photos[0]).toHaveProperty('ownerId');
    expect(photos[0]).toHaveProperty('photoId');
    expect(photos[0]).toHaveProperty('uploadDate');
    expect(photos[0]).toHaveProperty('photoUrl');
  });

  test('return empty homepage', async () => {
    const photos = await getFollowerPhotos([]);
    expect(photos).toEqual([]);
  });

  afterAll(async () => {
    await connection.close();
  });
});
