const supertest = require('supertest');
const app = require('../../bin/server');

const request = supertest(app);

const loginInfo = {
  email: 'whentmp+uqgtp@gmail.com',
  password: '12345',
};

const regInfo = {
  ...loginInfo,
  firstName: 'Hassouna',
  lastName: 'Yousry',
  age: 19,
};

it('Auth_ login with unregistered account _Fail', async (done) => {
  request.post('/auth/login')
    .set('Accept', 'application/json')
    .send(loginInfo)
    .end((err, res) => {
      expect(res.statusCode).toEqual(401);
      done();
    });
});

it('Auth_ register account _success', async (done) => {
  request.post('/auth/login')
    .set('Accept', 'application/json')
    .send(regInfo)
    .end((err, res) => {
      expect(res.statusCode).toEqual(201);
      done();
    });
});
