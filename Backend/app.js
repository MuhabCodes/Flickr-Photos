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
const cameraRouter = require('./components/camera/cameraRouter');
const cameraBrandRouter = require('./components/cameraBrand/cameraBrandRouter');
const urlRoutes = require('./components/url/urlRoute');
const groupRoutes = require('./components/Group/groupRoute');
const galleryRoutes = require('./components/Gallery/galleryRoute');

// declaring app
const app = express();

// middleware here (no routing)
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));

// use routing i.e. app.use('foo', bar)
app.use('/auth', authRouter);
app.use('/favorites', favoritesRoutes);
app.use('/photos', photosRoutes);
app.use('/person', personRoutes);
app.use('/user', userRoutes);
app.use('/cameras', cameraRouter);
app.use('/cameras/brands', cameraBrandRouter);
app.use('/gallery', galleryRoutes);
app.use('/groups', groupRoutes);
app.use('/urls', urlRoutes);
// exporting

module.exports = app;
