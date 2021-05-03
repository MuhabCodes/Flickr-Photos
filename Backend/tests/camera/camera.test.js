const supertest = require('supertest');
const app = require('../../bin/server');

const request = supertest(app);

test('Should add camera to a given brandName in req body', async (done) => {
  await request
    .post('/cameras')
    .send({
      name: 'nikon 500s',
      brandName: 'Nikon',
    })
    .expect(200);
  done();
});

const brandName = {
  brand: 'Nikon',
};

test('Should return all models of a given brand', async (done) => {
  await request
    .get(`/cameras/${brandName}/models`)
    .set('Accept', 'application/json') // sets the data type to be json
    .expect(200);
  done();
});
