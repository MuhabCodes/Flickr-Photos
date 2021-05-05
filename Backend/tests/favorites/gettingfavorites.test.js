// I have here all tests because when divided in multiple files it gives "server already in user"

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
  owner: '507f191e810c19729de86333',
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

const photopublic = {
  owner: '507f191e810c19729de86333',
  photo: [
    {
      photo: {
        _id: '5d6ede6a0ba62570afcedd3d',
        isPublic: true,
        title: 'hi',
      },
    },
  ],
};
const responseadding = {
  message: 'Favorite added succesfully',
  favoriteCreated: {
    _id: '60906703ee33242f7c561993',
    user: '507f191e810c19729de860ee',
    photoId: '5d6ede6a0ba62570afcedd3d',
    favoriteDate: '1212',
  },
  request: {
    type: 'Get',
    url: 'http://localhost:3000/favorites/:photoId',
  },
};

test('Should return user favorites  photos', async (done) => {
  await request
    .get('/favorites/507f191e810c19729de86333')
    .set('Accept', 'application/json') // sets the data type to be json
    .expect((response) => {
      expect(response.status).toBe(200);
      expect(response.body).toEqual(photo);
      done();
    });
});

test('Should return user public favorites  photos', async (done) => {
  await request
    .get('/favorites/public/507f191e810c19729de86333')
    .set('Accept', 'application/json') // sets the data type to be json
    .expect((response) => {
      expect(response.status).toBe(200);
      expect(response.body).toEqual(photopublic);
      done();
    });
});
test('Creating a favorite', async (done) => {
  await request
    .post('/favorites/5d6ede6a0ba62570afcedd3d')
    .send({ favoriteDate })
    .set('Accept', 'application/json') // sets the data type to be json
    .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1MDdmMTkxZTgxMGMxOTcyOWRlODYxNTkifQ.HeRuLoNHxU_sATr8hj9a0Uur0badmjJEf1NULAnnA2w')
    .expect((response) => {
      expect(response.status).toBe(201);

      done();
    });
});
test('Creating a Done favorite', async (done) => {
  await request
    .post('/favorites/5d6ede6a0ba62570afcedd3d')
    .send({ favoriteDate })
    .set('Accept', 'application/json') // sets the data type to be json
    .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1MDdmMTkxZTgxMGMxOTcyOWRlODYxMDUifQ.4_VLjQEdjrsodEPQTmzfAiFzM9MVTdx2ubcGfKBbWJo')
    .expect((response) => {
      expect(response.status).toBe(400);

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
    .set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1MDdmMTkxZTgxMGMxOTcyOWRlODYxMDkifQ.whYd91UZbYyuj3UE_EC1ET_0L5nAtp6k1hOOCMhsHgE')
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
