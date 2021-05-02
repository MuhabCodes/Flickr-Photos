const { Router } = require('express');
const authController = require('./authController');

const authRouter = Router();

authRouter.route('/login').post(async (req, res) => {
  try {
    await authController.login(req, res);
  } catch (err) {
    res.status(500).send({ statusCode: 500, error: 'The server couldn\'t handle the registration process' });
  }
});

authRouter.route('/register').post(async (req, res) => {
  try {
    await authController.register(req, res);
  } catch {
    res.status(500).send({ statusCode: 500, error: 'The server couldn\'t handle the registration process' });
  }
});

authRouter.route('/confirmation/:confirmationToken').post(async (req, res) => {
  try {
    await authController.confirmUser(req, res);
  } catch (error) {
    res.status(500).send({ statusCode: 500, error: 'The server couldn\'t handle the registration process' });
  }
});

authRouter.route('/forgot-password').put(async (req, res) => {
  try {
    await authController.sendResetPasswordEmail(req, res);
  } catch (err) {
    res.status(500).send({ statusCode: 500, error: 'The server couldn\'t handle the registration process' });
  }
});

authRouter.route('/forgot-password/:resetToken').put(async (req, res) => {
  try {
    await authController.resetPassword(req, res);
  } catch (err) {
    res.status(500).send({ statusCode: 500, error: 'The server couldn\'t handle the registration process' });
  }
});

module.exports = authRouter;
