const { join } = require('path');
require('dotenv').config({ path: join(__dirname, '/../secret/', '.env') });
const mongoose = require('mongoose');

// DB Connection
mongoose
  .connect('mongodb+srv://ahmedehab:ahmedehab@cluster0.hyt1i.mongodb.net/ahmedehab?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true })
  // eslint-disable-next-line no-console
  .then(() => console.log('MongoDB Connected'))
  // eslint-disable-next-line no-console
  .catch((err) => console.log(err));
// Server Connection
const http = require('http');
const app = require('../app');

const port = process.env.PORT || 5000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
