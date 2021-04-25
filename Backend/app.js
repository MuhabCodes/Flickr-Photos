const express = require('express');

// require routes only here

// declaring app
const app = express();

// middleware here (no routing)
app.use(express.json());

// use routing i.e. app.use('foo', bar)
app.route('/').get((req, res) => {
  res.send('Hello world!');
});

//AE : ROUTING TO URL , GROUPS
const urlRoutes=require('./components/url/urlRoute')
const groupRoutes=require('./components/Group/groupRoute')

app.use('/groups',groupRoutes);
app.use('/urls',urlRoutes);

////




app.use(express.json());



// exporting
module.exports = app;
