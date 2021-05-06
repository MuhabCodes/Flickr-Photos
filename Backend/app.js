const express = require('express');
const photoRoutes = require('./components/photo/photoRouter');
// require routes only here

// declaring app
const app = express();

// middleware here (no routing)
app.use(express.json());

// use routing i.e. app.use('foo', bar)
app.route('/').get((req, res) => {
  res.send('Hello world!');
});

app.use('/photos', photoRoutes);

// exporting
module.exports = app;
