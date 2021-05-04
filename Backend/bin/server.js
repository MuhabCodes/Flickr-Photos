const { join } = require('path');
require('dotenv').config({ path: join(__dirname, '/../secret/', '.env') });
const mongoose = require('mongoose');

// DB Connection
mongoose
  .connect('mongodb+srv://MohamedAmr:flickr@flickr.60kk5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
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

module.exports = app;