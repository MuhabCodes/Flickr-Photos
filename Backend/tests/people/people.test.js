const supertest = require('supertest');
const app = require('../../bin/server');

const request = supertest(app);

const peopleInfo = require('./info');

test('Should return user By displayName', async (done) => {
  await request
    .get(`/user/displayname/${peopleInfo.nonActivatedUser1.displayName}`)
    .set('Accept', 'application/json') // sets the data type to be json
    .expect(200);
  done();
});

test('Should return user by email', async (done) => {
  await request
    .get(`/user/email/${peopleInfo.nonActivatedUser1.email}`)
    .set('Accept', 'application/json') // sets the data type to be json
    .expect(200);
  done();
});

test('Should return userInfo by userId', async (done) => {
  await request
    .get(`/user/${peopleInfo.nonActivatedUser1.userId}/info`)
    .set('Accept', 'application/json') // sets the data type to be json
    .expect(200);
  done();
});

test('should return 404 since no photos are there in this user Fail', async (done) => {
  await request
    .get(`/user/${peopleInfo.nonActivatedUser1.userId}/photos`)
    .set('Accept', 'application/json') // sets the data type to be json
    .expect(404);
  done();
});
