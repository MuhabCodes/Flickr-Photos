const supertest = require('supertest');
const app = require('../../bin/server');

const request = supertest(app);

test('Should return all brands in DataBase', async (done) => {
  await request
    .get('/cameras/brands')
    .set('Accept', 'application/json') // sets the data type to be json
    .expect(200);
  done();
});

const brand = {
  name: 'for testing',
};
test('should create a brand', async (done) => {
  await request
    .post('/cameras/brands')
    .send(brand)
    .set('Accept', 'application/json') // sets the data type to be json

    .expect(200);
  done();
});

const brandname = {
  name: 'Nikon',
};
test('should return a brand given its name', async (done) => {
  await request
    .get(`/cameras/brands/${brandname}`)
    .set('Accept', 'application/json') // sets the data type to be json
    .expect(200);
  done();
});
