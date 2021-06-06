const express = require('express');

// require routes only here
const morgan = require('morgan');

const cors = require('cors');
const cookieParser = require('cookie-parser');
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
const tagsRouter = require('./components/tags/tagsRouter');
const notificationRouter = require('./components/notification/notificationRouter');
const searchRouter = require('./components/search/searchRouter');

const albumRouter = require('./components/album/albumRouter');
// declaring app
const app = express();

// middleware here (no routing)
app.use(express.json());

// use the static path
app.use(express.static('./public'));

// use routing i.e. app.use('foo', bar)
// app.route('/').get((req, res) => {
//   res.send('Hello world!');
// });

app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use routing i.e. app.use('foo', bar)
app.use('/auth', authRouter);
app.use('/favorites', favoritesRouter);
app.use('/photos', photoRouter);
app.use('/albums', albumRouter);
app.use('/person', personRouter);
app.use('/people', userRouter);
app.use('/cameras', cameraRouter);
app.use('/cameras/brands', cameraBrandRouter);
app.use('/groups', groupRouter);
app.use('/urls', urlRouter);
app.use('/tags', tagsRouter);
app.use('/notifications', notificationRouter);
app.use('/search', searchRouter);
app.use('/user', userRouter);

// exporting

module.exports = app;
