const { searchPhotosServ } = require('./services/searchPhoto');

exports.searchPhoto = async function searchPhoto(req, res) {
  const { searchWord } = req.query;
  const returnVals = await searchPhotosServ(searchWord);
  res.status(200).json({ photosSearch: returnVals });
};
