const supertest = require('supertest');

// const mongoose = require('mongoose');
// const { join } = require('path');
// require('dotenv').config({ path: join(__dirname, '/../../secret/', '.env') });
const app = require('../../bin/server');

const request = supertest(app);

describe('Gallery tests', () => {
  // let connection;
  // jest.setTimeout(30000);
  // beforeAll(async () => {
  //   connection = await mongoose
  //     .connect(process.env.MONGO_URI_CLOUD,
  //       { useNewUrlParser: true, useUnifiedTopology: true });
  // });

  // afterAll(async () => {
  //   await connection.close();
  // });

  const url = 'https://www.flickr.com/photos/flickr/galleries/111111111111111111111111/';
  // this is the url to be passed to function in request body
  const gallery = {
    _id: mongoose.Types.ObjectId('111111111111111111111111'),
    owner: 'testingOwner',
    primaryPhotoId: 'testingId',
    dateCreate: 'testingDate',
    countPhotos: 'testingCount',
    countVideos: 'testingCount',
    title: 'testingTitle',
    description: [],
    url,
  };

  // this is the gallery object expected to be returned if you seeded it successfully

  it('Should return gallery info, by url', async (done) => {
    await request
      .get('/urls/gallery')
      .set('Accept', 'application/json') // sets the data type to be json
      .send({ url })
      .expect((response) => {
        expect(response.status).toBe(200);
        expect(JSON.stringify(response.body)).toEqual(JSON.stringify(gallery));
        // here i need to stringify response body and gallery because of the array in the gallery
        // because .toEqual makes a deep equality comparison
        done();
      });
  });

  const invalidUrl = 'https://www.flickr.com/photos/flickr/galleries/211111111111111111111111/';

  it('Should return gallery info not existing in DB, by url', async (done) => {
    await request
      .get('/urls/gallery')
      .set('Accept', 'application/json') // sets the data type to be json
      .send({ url: invalidUrl })
      .expect((response) => {
        expect(response.status).toBe(404);
        done();
      });
  });
});
