const supertest = require('supertest');
const app = require('../../bin/server');

const request = supertest(app);
const url = 'https://www.flickr.com/people/608dd1f51253c7348443ae76/';

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

test('Should return id and username of user given url', async (done) => {
  await request
    .get('/urls/user')
    .send({ url })
    .set('Accept', 'application/json') // sets the data type to be json
    .expect((response) => {
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ id: '608dd1f51253c7348443ae76', username: 'ahmedehabb8' });
      done();
    });
});

const id = '608dd1f51253c7348443ae76';
test('Should return url to a userprofile', async (done) => {
  await request
    .get('/urls/userprofile')
    .send({ id })
    .set('Accept', 'application/json') // sets the data type to be json
    .expect((response) => {
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ id: '608dd1f51253c7348443ae76', url });
      done();
    });
});

const urlPhotos = 'https://www.flickr.com/photos/608dd1f51253c7348443ae76';
test('Should return url to a userphotos', async (done) => {
  await request
    .get('/urls/userphotos')
    .send({ id })
    .set('Accept', 'application/json') // sets the data type to be json
    .expect((response) => {
      expect(response.status).toBe(200);
      expect(response.body).toEqual({ id: '608dd1f51253c7348443ae76', url: urlPhotos });
      done();
    });
});
