const supertest = require('supertest');
const app = require('../../bin/server');

const request = supertest(app);

const loginInfo = {
  email: 'whentmp+uqgtp@gmail.com',
  password: '12345Asdf',
};

const regInfo = {
  ...loginInfo,
  firstName: 'Hassouna',
  lastName: 'Yousry',
  age: 19,
};

it('Auth_ login with unregistered account _Fail', async (done) => {
  // creates a request of method post and send the login Info created above as body
  request.post('/auth/login')
    .set('Accept', 'application/json') // sets the data type to be json
    .send(loginInfo)
    .end((err, res) => {
      expect(res.statusCode).toEqual(401);
      expect(res.body.statusCode).toEqual(401);
      done();
    });
});

it('Auth_ register new account  w/ new email _success', async (done) => {
  request.post('/auth/register')
    .set('Accept', 'application/json')
    .send(regInfo)
    .end((err, res) => {
      expect(res.statusCode).toEqual(201);
      done();
    });
});

it('Auth_ register account w/ old email registered above _success(security reasons)', async (done) => {
  // after this you should have only one email in that mail
  // first one success and doesn't send email
  // but this one doesn't send an email
  request.post('/auth/register')
    .set('Accept', 'application/json')
    .send(regInfo)
    .end((err, res) => {
      expect(res.statusCode).toEqual(201);
      done();
    });
});
