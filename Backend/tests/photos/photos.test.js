const supertest = require('supertest');
const { photoData } = require('./info');
const app = require('../../bin/server');

const request = supertest(app);

it('Gets the most recent photos', async (done) => {
  // create a get request to get the photos
  request.get('/photos/recent')
    .set('Accept', 'application/json') // sets the data type to be json
    .send().end((err, res) => {
      expect(res.statusCode).toEqual(200);
      done();
    });
});

it('Gets the info of a photo', async (done) => {
  request.get(`/photos/${photoData[1]._id}`)
    .set('Accept', 'application/json')
    .send().end((err, res) => {
      expect(res.statusCode).toEqual(200);
      done();
    });
});

it('Edits a photo based on the id', async (done) => {
  request.put(`/photos/${photoData[0]._id}`)
    .set('Accept', 'application/json')
    .send(photoData[1]).end((err, res) => {
      expect(res.statusCode).toEqual(200);
      done();
    });
});

it('Deletes a photo based on the id', async (done) => {
  request.delete(`/photos/${photoData[2]._id}`)
    .set('Accept', 'application/json')
    .send().end((err, res) => {
      expect(res.statusCode).toEqual(200);
      done();
    });
});

it('Adds a new photo to the database', async (done) => {
  request.post('/photos')
    .set('Accept', 'application/json')
    .send(photoData[3]).end((err, res) => {
      expect(res.statusCode).toEqual(200);
      done();
    });
});
