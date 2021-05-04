const supertest = require('supertest');
const app = require('../../bin/server');

const request = supertest(app);

// const mongoose = require('mongoose');

// beforeAll(async () => {
//   // DB Connection
//   jest.setTimeout(30000);

//   await mongoose
//     .connect('mongodb+srv://ahmedehab:ahmedehab@cluster0.hyt1i.mongodb.net/ahmedehab?retryWrites=true&w=majority',
//       { useNewUrlParser: true, useUnifiedTopology: true })
//   // eslint-disable-next-line no-console
//     .then(() => console.log('MongoDB Connected'))
//   // eslint-disable-next-line no-console
//     .catch((err) => console.log(err));
// });

const url = 'https://www.flickr.com/groups/60860f86c649a259c0c9d82d/';
const id = '60860f86c649a259c0c9d82d';

test('Should return id and url a given group', async (done) => {
  await request
    .get(`/urls/groups/${id}`)
    .set('Accept', 'application/json') // sets the data type to be json
    .expect((response) => {
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ id, url });
      done();
    });
});

const name = 'ahmed ehab kicks';
test('Should return a group Id, given the url to a groups page or photo pool.', async (done) => {
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
