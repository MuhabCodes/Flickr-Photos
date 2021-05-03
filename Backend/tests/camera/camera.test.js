const { test } = require('picomatch');
const supertest = require('supertest');
const app = require('../../bin/server');

const request = supertest(app);

test('Should add camera to a given brandName in req body', async () => {
  await request
    .post('/cameras')
    .send({
      name: 'nikon 500s',
      brandName: 'Nikon',
    })
    .expect(200);
});
