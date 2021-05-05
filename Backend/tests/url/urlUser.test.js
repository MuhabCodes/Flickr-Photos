const supertest = require('supertest');
const app = require('../../bin/server');

const request = supertest(app);

const mongoose = require('mongoose');

describe('User tests', () => {
  let connection;
  jest.setTimeout(30000);
  beforeAll(async () => {
    connection = await mongoose
      .connect('mongodb+srv://ahmedehab:ahmedehab@cluster0.hyt1i.mongodb.net/ahmedehab?retryWrites=true&w=majority',
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
        expect(response.body).toEqual({ id: '111111111111111111111111', username: 'testing' });
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
});
