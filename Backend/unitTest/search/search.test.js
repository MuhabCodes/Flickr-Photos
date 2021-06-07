const mongoose = require('mongoose');
const { join } = require('path');
require('dotenv').config({ path: join(__dirname, '/../../secret/', '.env') });
const { searchPhotosServ } = require('../../components/search/services/searchPhoto');

describe('search test', async () => {
  let connection;
  beforeAll(async () => {
    connection = await mongoose
      .connect(process.env.MONGO_URI_CLOUD,
        { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 50000 });
  });

  test('search for pictures', async () => {
    const searchResult = await searchPhotosServ('et');
    expect(searchResult[0]).toHaveProperty('title');
  });

  afterAll(async () => {
    await connection.close();
  });
});
