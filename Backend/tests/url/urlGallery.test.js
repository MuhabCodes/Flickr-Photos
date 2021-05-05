const supertest = require('supertest');
const app = require('../../bin/server');

const request = supertest(app);

const mongoose = require('mongoose');

describe('Gallery tests', () => {
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

  const url = 'https://www.flickr.com/galleries/608e02a0627740193883e2fa/';

  const gallery = {
    id: '608e02a0627740193883e2fa',
    url: '/photos/flickr/galleries/72157617483228192',
    owner: 'ahmed ehab',
    primaryPhotoId: '2',
    dateCreate: '213123',
    countPhotos: '231',
  };
  it('Should return gallery info, by url', async (done) => {
    await request
      .get('/urls/gallery')
      .send({ url })
      .set('Accept', 'application/json') // sets the data type to be json
      .expect((response) => {
        expect(response.status).toBe(200);
        expect(response.body).toEqual(gallery);
        done();
      });
  });
});
