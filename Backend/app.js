const express = require('express');
const morgan = require('morgan');



// require routes only here

// declaring app
const app = express();

// using morgan
app.use(morgan('dev'));

// middleware here (no routing)
app.use(express.json());


//AE : ROUTING TO URL , GROUPS

const urlRoutes=require('./components/url/urlRoute')
const groupRoutes=require('./components/Group/groupRoute')

app.use('/groups',groupRoutes);
app.use('/urls',urlRoutes);

////

// use routing i.e. app.use('foo', bar)
app.route('/').get((req, res) => {
  res.send('Hello world!');
});



app.use(express.json());



// exporting
module.exports = app;
