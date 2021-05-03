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
  name: 'Nikon',
};
test('should create a brand', async (done) => {
  await request
    .post('/cameras/brands')
    .send(brand)
    .set('Accept', 'application/json') // sets the data type to be json

    .expect(200);
  done();
});
