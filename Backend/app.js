const express = require('express');
const morgan = require('morgan');

const cors = require('cors');
const cookieParser = require('cookie-parser');
// require routes only here
const favoritesRoutes = require('./components/favorites/favoritesRouter');
const authRouter = require('./components/auth/authRouter');
const photosRoutes = require('./components/photos/photosRouter');
const personRoutes = require('./components/person/personRouter');
const userRoutes = require('./components/User/userRoute');
// declaring app
const app = express();

// using morgan
app.use(morgan('dev'));

// using cookie-parser
app.use(cookieParser());
// middleware here (no routing)
app.use(express.json());

app.use(cors());

// AE : ROUTING TO URL , GROUPS

const urlRoutes = require('./components/url/urlRoute');
const groupRoutes = require('./components/Group/groupRoute');
const UserRoutes = require('./components/User/userRoute');
const galleryRoutes = require('./components/Gallery/galleryRoute');

app.use('/user', UserRoutes);
app.use('/gallery', galleryRoutes);
app.use('/groups', groupRoutes);
app.use('/urls', urlRoutes);

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
