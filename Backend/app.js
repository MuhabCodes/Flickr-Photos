const express = require('express');
const morgan = require('morgan');

const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// require routes only here
const favoritesRouter = require('./components/favorites/favoritesRouter');
const authRouter = require('./components/auth/authRouter');
const photoRouter = require('./components/photo/photoRouter');
const personRouter = require('./components/person/personRouter');
const userRouter = require('./components/user/userRoute');
const cameraRouter = require('./components/camera/cameraRouter');
const cameraBrandRouter = require('./components/cameraBrand/cameraBrandRouter');
const urlRouter = require('./components/url/urlRoute');
const groupRouter = require('./components/group/groupRoute');
const galleryRouter = require('./components/Gallery/galleryRoute');
const notificationRouter = require('./components/notification/notificationRouter');

// declaring app
const app = express();

// middleware here (no routing)
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use routing i.e. app.use('foo', bar)
app.use('/auth', authRouter);
app.use('/favorites', favoritesRouter);
app.use('/photos', photoRouter);
app.use('/person', personRouter);
app.use('/user', userRouter);
app.use('/cameras', cameraRouter);
app.use('/cameras/brands', cameraBrandRouter);
app.use('/gallery', galleryRouter);
app.use('/groups', groupRouter);
app.use('/urls', urlRouter);
app.use('/notifications',notificationRouter);
// exporting

module.exports = app;
