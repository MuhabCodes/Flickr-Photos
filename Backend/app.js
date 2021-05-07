const express = require('express');
const morgan = require('morgan');

const cors = require('cors');
const cookieParser = require('cookie-parser');
// require routes only here
const favoritesRouter = require('./components/favorites/favoritesRouter');
const authRouter = require('./components/auth/authRouter');
const photosRouter = require('./components/photos/photosRouter');
const personRouter = require('./components/person/personRouter');
const userRouter = require('./components/User/userRoute');
const cameraRouter = require('./components/camera/cameraRouter');
const cameraBrandRouter = require('./components/cameraBrand/cameraBrandRouter');
const urlRouter = require('./components/url/urlRoute');
const groupRouter = require('./components/group/groupRoute');
const galleryRouter = require('./components/Gallery/galleryRoute');

// declaring app
const app = express();

// middleware here (no routing)
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));

// use routing i.e. app.use('foo', bar)
app.use('/auth', authRouter);
app.use('/favorites', favoritesRouter);
app.use('/photos', photosRouter);
app.use('/person', personRouter);
app.use('/user', userRouter);
app.use('/cameras', cameraRouter);
app.use('/cameras/brands', cameraBrandRouter);
app.use('/gallery', galleryRouter);
app.use('/groups', groupRouter);
app.use('/urls', urlRouter);
// exporting

module.exports = app;
