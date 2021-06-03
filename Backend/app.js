const express = require('express');
const photoRoutes = require('./components/photo/photoRouter');
const albumRoutes = require('./components/album/albumRouter');
// require routes only here

// declaring app
const app = express();

// middleware here (no routing)
app.use(express.json());
// use the static path
app.use(express.static('./public'));

// use routing i.e. app.use('foo', bar)
app.route('/').get((req, res) => {
  res.send('Hello world!');
});

app.use('/photos', photoRoutes);
app.use('/albums', albumRoutes);

// exporting
module.exports = app;
