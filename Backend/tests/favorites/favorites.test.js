/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const supertest = require('supertest');
const { join } = require('path');
const { json } = require('body-parser');
const app = require('../../bin/server');

jest.setTimeout(30000);
favoriteToAdd = {
  id: '60b4bf4a1c6c752f50edd8d4',
  userID: '507f191e810c19729de860e4',
  favoriteDa: Date.now(),
  photoId: '5d6ede6a0ba62570afcedd3a',

};
personIfFound = '507f191e810c19729de860ef';
favoriteDeleteParameters = {
  userId: '507f191e810c19729de860e4',
  photoId: '5d6ede6a0ba62570afcedd3a',

};
favoriteToCheckParameters = {
  UserId: '507f191e810c19729de860ea',
  photoId: '5d6ede6a0ba62570afcedd3d',

};
owner = {
  UserId: '507f191e810c19729de860ea',
  photoId: '5d6ede6a0ba62570afcedd3a',
};
favoriteId = '6091658b116c8c3a00403844';
userId = '507f191e810c19729de860ea';
require('dotenv').config({ path: join(__dirname, '/../../secret/', '.env') });
const favoritesDAL = require('../../components/favorites/favoritesDAL');
const personDAL = require('../../components/person/personDAL');

test('should return a added favorite id ', async () => {
  const favoriteCreated = await favoritesDAL.createFavorite(favoriteToAdd);
  expect(JSON.stringify(favoriteCreated._id)).toEqual(JSON.stringify(favoriteToAdd.id));
});

test('should return a user  liked photo id ', async () => {
  const favoriteFound = await favoritesDAL.findFavorite(userId);
  expect(JSON.stringify(favoriteFound[0]._id)).toEqual(JSON.stringify(favoriteId));
});
test('should return a favorite by userId and photoId (checker for existence)', async () => {
  const favoriteFound = await favoritesDAL.findFavoriteByUserAndPhoto(favoriteToCheckParameters);
  expect(JSON.stringify(favoriteFound.user))
    .toEqual(JSON.stringify(favoriteToCheckParameters.userID));
});
test('should return a deleted favorite photo id ', async () => {
  const favoriteDeleted = await favoritesDAL.deleteFavorite(favoriteDeleteParameters);
  expect(favoriteDeleted.deletedCount)
    .toEqual(1);
});
test('should return a added favorite id ', async () => {
  const profileFound = await personDAL.findProfile(userId);
  expect(JSON.stringify(profileFound.personId._id)).toEqual(JSON.stringify(personIfFound));
});
