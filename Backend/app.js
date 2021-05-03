const express = require('express');
const cors = require('cors');

// require routes only here
const favoritesRoutes = require('./components/favorites/favoritesRouter');
const authRouter = require('./components/auth/authRouter');
const photosRoutes = require('./components/photos/photosRouter');
const personRoutes = require('./components/person/personRouter');
const userRoutes = require('./components/User/userRoute');
// declaring app
const app = express();

// middleware here (no routing)
app.use(express.json());

app.use(cors());

// use routing i.e. app.use('foo', bar)
app.route('/').get((req, res) => {
  res.send('Hello world!');
});
app.use('/auth', authRouter);
app.use('/favorites', favoritesRoutes);
app.use('/photos', photosRoutes);
app.use('/person', personRoutes);
app.use('/user', userRoutes);
// exporting

module.exports = app;
