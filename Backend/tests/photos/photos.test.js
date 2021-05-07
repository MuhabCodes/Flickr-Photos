const supertest = require('supertest');
const { photoData } = require('./info');
const app = require('../../bin/server');

const request = supertest(app);

it('Gets the most recent photos', async (done) => {
  // create a get request to get the photos
  request.get('/photos/recent')
    .set('Accept', 'application/json') // sets the data type to be json
    .send().end((err, res) => {
      expect(res.body.statusCode).toEqual(200);
      done();
    });
});

it('Gets the info of a photo', async (done) => {
  request.get(`/photos/${photoData[1].photo._id}`)
    .set('Accept', 'application/json')
    .send().end((err, res) => {
      expect(res.body.statusCode).toEqual(200);
      done();
    });
});

it('Gives a 404 error when the photoId is not found', async (done) => {
  request.get('/photos/86gd61jns89lm62nb8h61hv6')
    .set('Accept', 'application/json')
    .send().end((err, res) => {
      expect(res.body.statusCode).toEqual(404);
      done();
    });
});

it('Edits a photo based on the id', async (done) => {
  request.put(`/photos/${photoData[0].photo._id}`)
    .set('Accept', 'application/json')
    .send(photoData[1]).end((err, res) => {
      expect(res.body.statusCode).toEqual(200);
      done();
    });
});
it('Gives an error when photo id is not found on editing', async (done) => {
  request.put('/photos/86gd61jns89lm62nb8h61hv6')
    .set('Accept', 'application/json')
    .send(photoData[1]).end((err, res) => {
      expect(res.body.statusCode).toEqual(404);
      expect(res.body.error).toEqual('PhotoNotFound');
      done();
    });
});

it('Deletes a photo based on the id', async (done) => {
  request.delete(`/photos/${photoData[2].photo._id}`)
    .set('Accept', 'application/json')
    .send().end((err, res) => {
      expect(res.body.statusCode).toEqual(200);
      done();
    });
});
it('Gives a 404 error when the deleted photo is not found', async (done) => {
  request.delete('/photos/86gd61jns89lm62nb8h61hv6')
    .set('Accept', 'application/json')
    .send().end((err, res) => {
      expect(res.body.statusCode).toEqual(404);
      expect(res.body.error).toEqual('PhotoNotFound');
      done();
    });
});

it('Adds a new photo to the database', async (done) => {
  request.post('/photos')
    .set('Accept', 'application/json')
    .send(photoData[3]).end((err, res) => {
      expect(res.body.statusCode).toEqual(201);
      done();
    });
});
