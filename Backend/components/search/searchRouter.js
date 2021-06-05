const { Router } = require('express');
const { searchPhoto } = require('./searchController');

const searchRouter = Router();

searchRouter.route('/photos').get(async (req, res) => {
  try {
    await searchPhoto(req, res);
  } catch (err) {
    res.status(500).send({ statusCode: 500, error: 'The service couldn\'t handle the incoming request' });
  }
});

module.exports = searchRouter;
