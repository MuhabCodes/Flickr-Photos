const supertest = require('supertest');
const app = require('../../bin/server');

const request = supertest(app);
const { join } = require('path');
require('dotenv').config({ path: join(__dirname, '/../../secret/', '.env') });
const mongoose = require('mongoose');

// TODO STILL TESTING THE FUNCTION THAT ACCEPT TOKEN FROM COOKIES IS DONE ONLY ON QUERY SIDE
// AND DIDNT TEST COOKIES BECAUSE NOT SURE IT WILL BE COOKIES OR HEADERS
describe('User tests', () => {
  let connection;
  jest.setTimeout(30000);
  beforeAll(async () => {
    connection = await mongoose
      .connect(process.env.MONGO_URI_CLOUD,
        { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await connection.close();
  });

  const url = 'https://www.flickr.com/people/111111111111111111111111/';

  it('Should return id and username of user given url', async (done) => {
    await request
      .get('/urls/user')
      .set('Accept', 'application/json') // sets the data type to be json
      .send({ url })
      .expect((response) => {
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ id: '111111111111111111111111', displayName: 'testing' });
        done();
      });
  });

  const id = '111111111111111111111111';
  it('Should return url to a userprofile', async (done) => {
    await request
      .get('/urls/userprofile?id=111111111111111111111111')
      .set('Accept', 'application/json') // sets the data type to be json
      .expect((response) => {
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ id: '111111111111111111111111', url });
        done();
      });
  });

  const urlPhotos = 'https://www.flickr.com/photos/111111111111111111111111';
  it('Should return url to a userphotos', async (done) => {
    await request
      .get('/urls/userphotos?id=111111111111111111111111')
      .set('Accept', 'application/json') // sets the data type to be json
      .expect((response) => {
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ id: '111111111111111111111111', url: urlPhotos });
        done();
      });
  });

  const invalidUrl = 'https://www.flickr.com/people/211111111111111111111111/';

  it('Should return user not in DB _ so will fail', async (done) => {
    await request
      .get('/urls/user')
      .set('Accept', 'application/json') // sets the data type to be json
      .send({ url: invalidUrl })
      .expect((response) => {
        expect(response.status).toBe(404);
        done();
      });
  });

  const invalidId = '211111111111111111111111';
  it('Should return url to a userprofile not existing in db ', async (done) => {
    await request
      .get(`/urls/userprofile?id=${invalidId}`)
      .set('Accept', 'application/json') // sets the data type to be json
      .expect((response) => {
        expect(response.status).toBe(404);
        done();
      });
  });

  it('Should return url to a userphotos not existing in data base', async (done) => {
    await request
      .get(`/urls/userphotos?id=${invalidId}`)
      .set('Accept', 'application/json') // sets the data type to be json
      .expect((response) => {
        expect(response.status).toBe(404);
        done();
      });
  });
});
