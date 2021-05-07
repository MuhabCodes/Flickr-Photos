const supertest = require('supertest');

const mongoose = require('mongoose');
const { join } = require('path');
const app = require('../../bin/server');
require('dotenv').config({ path: join(__dirname, '/../../secret/', '.env') });

const request = supertest(app);
describe('Group tests', () => {
  let connection;
  jest.setTimeout(30000);
  beforeAll(async () => {
    connection = await mongoose
      .connect(process.env.MONGO_URI_CLOUD,
        { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await connection.close();
  });

  const url = 'https://www.flickr.com/groups/111111111111111111111111/';
  const id = '111111111111111111111111';

  it('Should return id and url a given group', async (done) => {
    await request
      .get(`/urls/groups/${id}`)
      .set('Accept', 'application/json') // sets the data type to be json
      .expect((response) => {
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ id, url });
        done();
      });
  });

  const name = 'testing';
  it('Should return a group Id, given the url to a groups page or photo pool.', async (done) => {
    await request
      .get('/urls/group')
      .send({ url })
      .set('Accept', 'application/json') // sets the data type to be json
      .expect((response) => {
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ id, name });
        done();
      });
  });

  const invalidUrl = 'https://www.flickr.com/groups/211111111111111111111111/';
  const invalidId = '211111111111111111111111';

  it('Should return id and url a given group', async (done) => {
    await request
      .get(`/urls/groups/${invalidId}`)
      .set('Accept', 'application/json') // sets the data type to be json
      .expect((response) => {
        expect(response.status).toBe(404);
        done();
      });
  });

  it('Should return a group Id, given the url to a groups page or photo pool.', async (done) => {
    await request
      .get('/urls/group')
      .send({ url: invalidUrl })
      .set('Accept', 'application/json') // sets the data type to be json
      .expect((response) => {
        expect(response.status).toBe(404);
        done();
      });
  });
});
