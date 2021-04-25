const { Router } = require('express');
const authController = require('./authController');

const authRouter = Router();

authRouter.route('/login').post((req, res) => {
  // placeholder
});

authRouter.route('/register').post(async (req, res, next) => {
  // placeholder
  try {
    await authController.register(req, res, next);
    res.status(201).send({ statusCode: 201 });
  } catch {
    res.status(500).send({ statusCode: 500 });
  }
});

module.exports = authRouter;
