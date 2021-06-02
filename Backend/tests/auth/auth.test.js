const supertest = require('supertest');
const mongoose = require('mongoose');
const { join } = require('path');
const testInfo = require('./info');
const app = require('../../bin/server');
require('dotenv').config({ path: join(__dirname, '/../../secret/', '.env') });

const request = supertest(app);

describe('auth tests', () => {
  let connection;
  beforeAll(async () => {
    connection = await mongoose
      .connect(process.env.MONGO_URI_CLOUD,
        { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await connection.close();
  });
  it('Auth_ login with unregistered account _Fail', async (done) => {
  // creates a request of method post and send the login Info created above as body
    request.post('/auth/login')
      .set('Accept', 'application/json') // sets the data type to be json
      .send(testInfo.newUser)
      .end((err, res) => {
        expect(res.statusCode).toEqual(401);
        expect(res.body.statusCode).toEqual(401);
        done();
      });
  });

  it('Auth_ ask to reset pw w/ unregistered account_ fail', async (done) => {
    request.put('auth/forgot-password')
      .set('Accept', 'application/json') // sets the data type to be json
      .send(testInfo.newUser)
      .expect(404)
      .end((err, res) => {
        done();
      });
  });

  it('Auth_ register new account  w/ new email _success', async (done) => {
    request.post('/auth/register')
      .set('Accept', 'application/json')
      .send(testInfo.newUser)
      .end((err, res) => {
        expect(res.statusCode).toEqual(201);
        done();
      });
  });

  it('Auth_ register account w/ old email registered above  fail', async (done) => {
    request.post('/auth/register')
      .set('Accept', 'application/json')
      .send(testInfo.newUser)
      .end((err, res) => {
        expect(res.statusCode).toEqual(409);
        done();
      });
  });

  it('Auth_ login with registered but unconfirmed account _Fail', async (done) => {
  // creates a request of method post and send the login Info created above as body
    request.post('/auth/login')
      .set('Accept', 'application/json') // sets the data type to be json
      .send(testInfo.nonActivatedUser1)
      .end((err, res) => {
        expect(res.statusCode).toEqual(403);
        expect(res.body.statusCode).toEqual(403);
        done();
      });
  });

  // Start of confirmation tests

  it('Auth_ user confirmation 1st time w/ correct link _success', async (done) => {
    request.post(testInfo.nonActivatedUser1.confirmationPath)
      .end((err, res) => {
        expect(res.statusCode).toEqual(201);
        expect(res.body.statusCode).toEqual(201);
        done();
      });
  });

  it('Auth_ user confirmation 2nd time w/ correct link _fail', async (done) => {
    request.post(testInfo.nonActivatedUser1.confirmationPath)
      .end((err, res) => {
        expect(res.statusCode).toEqual(409);
        expect(res.body.statusCode).toEqual(409);
        done();
      });
  });

  it('Auth_ user confirmation w/ incorrect link _fail', async (done) => {
  // creates a request of method post and send the login Info created above as body
    request.post('/auth/confirmation/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MD4MTZjZWUyZWExMzQ1ZGE3OTg5NmMiLCJpYXQiOjE2MTk1MzE0NzAsImV4cCI6MTYxOTYxNzg3MH0.l8BCsuiz7azxAdNLmCGZyu5FqaoDLKVM4DL1hssh6_8')
      .end((err, res) => {
        expect(res.statusCode).toEqual(400);
        expect(res.body.statusCode).toEqual(400);
        done();
      });
  });

  // End of confirmation tests

  // Start of login tests

  it('Auth_ login with correct account & pw _success', async (done) => {
  // creates a request of method post and send the login Info created above as body
    request.post('/auth/login')
      .set('Accept', 'application/json') // sets the data type to be json
      .send(testInfo.activatedUser1)
      .end((err, res) => {
        expect(res.statusCode).toEqual(201);
        expect(res.body.statusCode).toEqual(201);
        done();
      });
  });

  it('Auth_ login with correct account & wrong pw _fail', async (done) => {
  // creates a request of method post and send the login Info created above as body
    request.post('/auth/login')
      .set('Accept', 'application/json') // sets the data type to be json
      .send({ email: testInfo.activatedUser2.email, password: testInfo.newPassword })
      .end((err, res) => {
        expect(res.statusCode).toEqual(401);
        expect(res.body.statusCode).toEqual(401);
        done();
      });
  });

  // Start Forget pw test

  it('Auth_ ask to reset pw w/ unactivated account account_ fail', async (done) => {
    request.put('auth/forgot-password')
      .set('Accept', 'application/json') // sets the data type to be json
      .send(testInfo.nonActivatedUser2)
      .expect(409)
      .end((err, res) => {
        done();
      });
  });

  it('Auth_ ask to reset pw w/ correct token account_ success', async (done) => {
    request.put(testInfo.activatedUser1.resetPath)
      .set('Accept', 'application/json') // sets the data type to be json
      .send({ newPassword: testInfo.newPassword })
      .expect(200)
      .end((err, res) => {
        expect(res.body.statusCode).toEqual(200);
        done();
      });
  });

  it('Auth_ login with old pw _success', async (done) => {
  // creates a request of method post and send the login Info created above as body
    request.post('/auth/login')
      .set('Accept', 'application/json') // sets the data type to be json
      .send(testInfo.ActivatedUser1)
      .end((err, res) => {
        expect(res.statusCode).toEqual(401);
        expect(res.body.statusCode).toEqual(401);
        done();
      });
  });

  it('Auth_ login with new (changed) pw _success', async (done) => {
  // creates a request of method post and send the login Info created above as body
    request.post('/auth/login')
      .set('Accept', 'application/json') // sets the data type to be json
      .send({
        email: testInfo.nonActivatedUser1.email,
        password: testInfo.newPassword,
      })
      .end((err, res) => {
        expect(res.statusCode).toEqual(401);
        expect(res.body.statusCode).toEqual(401);
        done();
      });
  });

  // resend confirmation

  it('Auth_ resend confirmation to a non confirmed account _ success', async (done) => {
  // creates a request of method post and send the login Info created above as body
    request.post('/auth/resend-confirmation')
      .set('Accept', 'application/json') // sets the data type to be json
      .send({
        email: testInfo.nonActivatedUser2.email,
        password: testInfo.newPassword,
      })
      .end((err, res) => {
        expect(res.statusCode).toEqual(201);
        expect(res.body.statusCode).toEqual(201);
        done();
      });
  });

  // resend confirmation

  it('Auth_ resend confirmation to a non confirmed account _ success', async (done) => {
  // creates a request of method post and send the login Info created above as body
    request.post('/auth/resend-confirmation')
      .set('Accept', 'application/json') // sets the data type to be json
      .send({
        email: testInfo.nonActivatedUser2.email,
      })
      .end((err, res) => {
        expect(res.statusCode).toEqual(201);
        expect(res.body.statusCode).toEqual(201);
        done();
      });
  });

  it('Auth_ resend confirmation to a confirmed account _ fail', async (done) => {
  // creates a request of method post and send the login Info created above as body
    request.post('/auth/resend-confirmation')
      .set('Accept', 'application/json') // sets the data type to be json
      .send({
        email: testInfo.activatedUser2.email,
      })
      .end((err, res) => {
        expect(res.statusCode).toEqual(409);
        expect(res.body.statusCode).toEqual(409);
        done();
      });
  });

  it('Auth_ resend confirmation to a fake account _ fail', async (done) => {
  // creates a request of method post and send the login Info created above as body
    request.post('/auth/resend-confirmation')
      .set('Accept', 'application/json') // sets the data type to be json
      .send({
        email: 'accNotExist@aoqge.com',
      })
      .end((err, res) => {
        expect(res.statusCode).toEqual(409);
        expect(res.body.statusCode).toEqual(409);
        done();
      });
  });
});
