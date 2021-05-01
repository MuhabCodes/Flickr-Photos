const express = require('express');
const morgan = require('morgan');

const cors = require('cors');
// require routes only here
const authRouter = require('./components/auth/authRouter');

// declaring app
const app = express();

// using morgan
app.use(morgan('dev'));

// middleware here (no routing)
app.use(express.json());
app.use(cors());

// AE : ROUTING TO URL , GROUPS

const urlRoutes = require('./components/url/urlRoute');
const groupRoutes = require('./components/Group/groupRoute');
const myUserRoutes = require('./components/myUser/myuserRoute');

app.use('/myuser', myUserRoutes);

app.use('/groups', groupRoutes);
app.use('/urls', urlRoutes);

// use routing i.e. app.use('foo', bar)
app.route('/').get((req, res) => {
  res.send('Hello world!');
});
app.use('/auth', authRouter);

app.use(express.json());

// exporting
module.exports = app;
