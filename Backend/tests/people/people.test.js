const supertest = require('supertest');
const app = require('../../bin/server');

const request = supertest(app);

const displayName = {
  displayName: 'keka',
};
test('Should return user By displayName', async (done) => {
  await request
    .get(`/user/displayname/${displayName}`)
    .set('Accept', 'application/json') // sets the data type to be json
    .expect(200);
  done();
});
const email = {
  email: 'keka',
};
test('Should return user by email', async (done) => {
  await request
    .get(`/user/email/${email}`)
    .set('Accept', 'application/json') // sets the data type to be json
    .expect(200);
  done();
});

const userId = '608de27c15eb171ea0f5b190';

test('Should return userInfo by userId', async (done) => {
  await request
    .get(`/user/${userId}/info`)
    .set('Accept', 'application/json') // sets the data type to be json
    .expect(200);
  done();
});

test('Should return all groups for user by userId', async (done) => {
  await request
    .get(`/user/${userId}/groups`)
    .set('Accept', 'application/json') // sets the data type to be json
    .expect(200);
  done();
});
