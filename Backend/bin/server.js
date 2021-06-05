const { join } = require('path');
require('dotenv').config({ path: join(__dirname, '/../secret/', '.env') });
const mongoose = require('mongoose');

// DB Connection
mongoose
  .connect(process.env.MONGO_URI_CLOUD,
    { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));
// Server Connection
const http = require('http');
const app = require('../app');

const port = process.env.PORT || 5000;
app.set('port', port);

const server = http.createServer(app);

if (process.env.NODE_ENV !== 'test') server.listen(port);

module.exports = app; //  exported for testing purposes
