const { getLatestPhotos } = require('../photoDAL');

const getRecent = async (res) => {
  const photos = await getLatestPhotos();
  res.json({
    statusCode: 200,
    photos,
  });
};
module.exports = {
  getRecent,
};
