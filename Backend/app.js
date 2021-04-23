const express = require('express');

// require routes only here

// declaring app
const app = express();

// middleware here (no routing)
app.use(express.json());

// use routing i.e. app.use('foo', bar)
app.route('/').get((req, res) => {
  res.send('Hello world!');
});

// exporting
module.exports = app;
