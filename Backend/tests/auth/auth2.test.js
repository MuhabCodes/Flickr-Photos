// /* eslint-disable no-undef */
// // There was no way to automate confirmation of the email
// // So this has to be done manually then continuing the tests
// // by copying the  confirmation link in here
// const confirmationpath = '/auth/confirmation/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDg4MmFhNjQ1MTM5YTU1ODQwYTk4NGUiLCJpYXQiOjE2MTk1MzY1NTAsImV4cCI6MTYxOTYyMjk1MH0.N9naZd7a1uvqC0psKi8GhCcLb4biuzsNNd71s3TRqeg';

// const supertest = require('supertest');
// const app = require('../../bin/server');

// const request = supertest(app);

// const loginInfo = {
//   email: 'and.yk.in.gso.lom.o.ntmp@gmail.com',
//   password: '12345Asdf',
// };

// it('Auth_ user confirmation 1st time w/ correct link _success', async (done) => {
//   request.post(confirmationpath)
//     .end((err, res) => {
//       expect(res.statusCode).toEqual(201);
//       expect(res.body.statusCode).toEqual(201);
//       done();
//     });
// });

// it('Auth_ user confirmation 2nd time w/ correct link _fail', async (done) => {
//   request.post(confirmationpath)
//     .end((err, res) => {
//       expect(res.statusCode).toEqual(409);
//       expect(res.body.statusCode).toEqual(409);
//       done();
//     });
// });

// it('Auth_ user confirmation w/ incorrect link _fail', async (done) => {
//   // creates a request of method post and send the login Info created above as body
//   request.post('/auth/confirmation/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MD4MTZjZWUyZWExMzQ1ZGE3OTg5NmMiLCJpYXQiOjE2MTk1MzE0NzAsImV4cCI6MTYxOTYxNzg3MH0.l8BCsuiz7azxAdNLmCGZyu5FqaoDLKVM4DL1hssh6_8')
//     .end((err, res) => {
//       expect(res.statusCode).toEqual(400);
//       expect(res.body.statusCode).toEqual(400);
//       done();
//     });
// });

// // End of confirmation tests

// it('Auth_ login with correct account & pw _success', async (done) => {
//   // creates a request of method post and send the login Info created above as body
//   request.post('/auth/login')
//     .set('Accept', 'application/json') // sets the data type to be json
//     .send(loginInfo)
//     .end((err, res) => {
//       expect(res.statusCode).toEqual(201);
//       expect(res.body.statusCode).toEqual(201);
//       done();
//     });
// });

// it('Auth_ login with correct account & wrong pw _fail', async (done) => {
//   // creates a request of method post and send the login Info created above as body
//   request.post('/auth/login')
//     .set('Accept', 'application/json') // sets the data type to be json
//     .send({ email: loginInfo.email, password: '12341234' })
//     .end((err, res) => {
//       expect(res.statusCode).toEqual(401);
//       expect(res.body.statusCode).toEqual(401);
//       done();
//     });
// });
