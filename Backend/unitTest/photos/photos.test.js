const { test } = require('media-typer');
const { join } = require('path');
const app = require('../../bin/server');

jest.setTimeout(30000);
const photoDAL = require('../../components/photo/photoDAL');
require('dotenv').config({ path: join(__dirname, '/../../secret/', '.env') });

const photoToAdd = {
  _id: '5d6ede6a0ba62574afcede3d',
  isPublic: true,
  title: 'test image',
  uploadDate: '2021-05-01T14:16:11',
  secret: 'secret key',
  width: 1920,
  height: 1195,
  user: '6092ea68326fa5101115dfae',

};

test('return an array of photos', async () => {
  const photos = await photoDAL.getLatestPhotos();
  expect(photos).toBeDefined();
});

test('add a newPhoto', async () => {
  const response = await photoDAL.addNewPhoto(photoToAdd);
  expect(response.acknowledged).toBeTruthy();
});

test('get a photo by its id', async () => {
  const photo = await photoDAL.getPhotoById('5d6ede6a0ba62574afcede3d');
  expect(photo).toBeDefined();
});

test('delete a photo', async () => {
  const response = await photoDAL.removePhoto(photoToAdd);
  expect(response).toBeDefined();
});

test('get the photos of followers', async () => {
  const response = await photoDAL.fetchFollowerPhotos(['6092ea68326fa5101115dfae', '6092ea68326fa5101115dfae'], 0);
  expect(response).toBeDefined();
});
