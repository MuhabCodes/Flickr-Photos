const supertest = require('supertest');
const app = require('../../bin/server');

const request = supertest(app);
const allBrands = require('./info');

test('Should return all brands in DataBase', async (done) => {
  await request
    .get('/cameras/brands')
    .set('Accept', 'application/json') // sets the data type to be json
    .expect((response) => {
      expect(response.status).toBe(200);
      // expect(response.body.brands).toEqual(allBrands);
    });
  done();
});

const brand = {
  brand: 'Kekkkkk',
  topModels: [
    'Nikon 500s',
    'D850',
    'D500',
  ],
  modelTypes: [
    'Digital SLR',
    'Mirrorless Camera',
    'Point and Shoot',
  ],
  image: 'https://live.staticflickr.com/cameras/72157647510174616_model_large_d5b7ef6582.jpg',
};
test('should create a brand', async (done) => {
  await request
    .post('/cameras/brands')
    .send(brand)
    .set('Accept', 'application/json') // sets the data type to be json

    .expect(200);
  done();
});

const brandName = {
  name: 'Nikon',
};
test('should return a brand given its name', async (done) => {
  await request
    .get(`/cameras/brands/${brandName.name}`)
    .set('Accept', 'application/json') // sets the data type to be json
    .expect(200);
  done();
});

const wrongBrand = {
  name: 'wrong',
};
test('should return brand not in db Fail', async (done) => {
  await request
    .get(`/cameras/brands/${wrongBrand.name}`)
    .set('Accept', 'application/json') // sets the data type to be json
    .expect(404);
  done();
});
