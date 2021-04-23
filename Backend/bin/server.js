const { resolve } = require('path');
require('dotenv').config({ path: resolve('../secrets/', '.env') });
const mongoose = require('mongoose');

// DB Connection
mongoose
  .connect('mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));
// Server Connection
const http = require('http');
const app = require('../app');

const port = process.env.PORT || 5000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
