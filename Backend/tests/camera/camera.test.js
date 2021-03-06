const supertest = require('supertest');
const app = require('../../bin/server');

const request = supertest(app);

test('Should not be added since there is already a model with this name Fail', async (done) => {
  await request
    .post('/cameras')
    .send({
      name: 'Nikon 500s',
      brandName: 'Nikon',
    })
    .expect(403);
  done();
});

test('Should be added to model Success', async (done) => {
  await request
    .post('/cameras')
    .send({
      name: 'Nikon 534',
      brandName: 'Nikon',
    })
    .expect(200);
  done();
});
const brandName = 'Nikon';
test('Should return all models of a given brand', async (done) => {
  await request
    .get(`/cameras/${brandName}/models`)
    .set('Accept', 'application/json') // sets the data type to be json
    .expect(200);
  done();
});
