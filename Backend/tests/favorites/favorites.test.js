/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const supertest = require('supertest');

const app = require('../../bin/server');

const profileReached = {
  _id: '507f191e810c19729de860ef',
  homeTown: 'ayhaga',
  country: 'frfr',
  description: 'dedd',
  dateCreated: 'ererer',
  birthDate: 'ccscds',
  realName: 'ewfwe',
  __v: 0,
};

const favoriteDate = '1212';
const request = supertest(app);
const photo = {
  total: 1,
  owner: '507f191e810c19729de860ea',
  photos: [
    {
      photo: {
        _id: '5d6ede6a0ba62570afcedd3d',
        isPublic: true,
        title: 'hi',
      },
    },
  ],
};

const photoPublic = {
  owner: '507f191e810c19729de860ea',
  photos: [
    {
      _id: '5d6ede6a0ba62570afcedd3d',
      isPublic: true,
      title: 'hi',
    },
  ],
};

test('Creating a favorite', async (done) => {
  await request
    .post('/favorites/5d6ede6a0ba62570afcedd3d')
    .send({ favoriteDate })
    .set('Accept', 'application/json') // sets the data type to be json
    .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1MDdmMTkxZTgxMGMxOTcyOWRlODYwZWEifQ.d01umbNhZzbLL3Y1TBRzcyhicvb4qH2WQE3sN5ZExLE')
    .expect((response) => {
      expect(response.status).toBe(201);

      done();
    });
});

test('Should return user favorites  photos', async (done) => {
  await request
    .get('/favorites/507f191e810c19729de860ea')
    .set('Accept', 'application/json') // sets the data type to be json
    .expect((response) => {
      expect(response.status).toBe(200);
      expect(response.body).toEqual(photo);
      done();
    });
});

test('Should return user public favorites  photos', async (done) => {
  await request
    .get('/favorites/public/507f191e810c19729de860ea')
    .set('Accept', 'application/json') // sets the data type to be json
    .expect((response) => {
      // eslint-disable-next-line no-undef
      expect(response.status).toBe(200);
      expect(response.body).toEqual(photoPublic);
      done();
    });
});

test('Creating a Done favorite', async (done) => {
  await request
    .post('/favorites/5d6ede6a0ba62570afcedd3d')
    .send({ favoriteDate })
    .set('Accept', 'application/json') // sets the data type to be json
    .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1MDdmMTkxZTgxMGMxOTcyOWRlODYwZWEifQ.d01umbNhZzbLL3Y1TBRzcyhicvb4qH2WQE3sN5ZExLE')
    .expect((response) => {
      expect(response.status).toBe(409);

      done();
    });
});

test('Should return user profileData', async (done) => {
  await request
    .get('/person/507f191e810c19729de860ea')
    .set('Accept', 'application/json') // sets the data type to be json
    .expect((response) => {
      expect(response.status).toBe(200);
      expect(response.body).toEqual(profileReached);
      done();
    });
});
test('Deleting a Favorite', async (done) => {
  await request
    .delete('/favorites/5d6ede6a0ba62570afcedd3d')
    .set('Accept', 'application/json') // sets the data type to be json
    .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1MDdmMTkxZTgxMGMxOTcyOWRlODYwZWEifQ.d01umbNhZzbLL3Y1TBRzcyhicvb4qH2WQE3sN5ZExLE')
    .expect((response) => {
      expect(response.status).toBe(200);
      done();
    });
});
test('Should return user favorites  photos but with invalid user', async (done) => {
  await request
    .get('/favorites/507f191e810c19729de863')
    .set('Accept', 'application/json') // sets the data type to be json
    .expect((response) => {
      expect(response.status).toBe(404);
      done();
    });
});

test('Should return user public favorites  photos but with invalid user', async (done) => {
  await request
    .get('/favorites/public/507f191e810c19729de86')
    .set('Accept', 'application/json') // sets the data type to be json
    .expect((response) => {
      expect(response.status).toBe(404);
      done();
    });
});
test('Should return user profileData but with invalid user ', async (done) => {
  await request
    .get('/person/507f191e810c19729de86')
    .set('Accept', 'application/json') // sets the data type to be json
    .expect((response) => {
      expect(response.status).toBe(404);
      done();
    });
});
