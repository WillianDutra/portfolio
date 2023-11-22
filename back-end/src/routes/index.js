const express = require('express');
const apiRoutes = express.Router();
const { sequelize } = require('../models');
const { User } = require('../controllers');
const { validateNewUser } = require('../middlewares');

apiRoutes.get('/health', async (_req, res) => {
  try {
    await sequelize.authenticate();
    return res.status(200).json({ message: 'Connection has been established successfully.' });
  } catch (error) {
    return res.status(500).json({ message: `Unable to connect to the database: ${error.message}` });
  }
});

apiRoutes.post('/user', validateNewUser, User.createUser);

module.exports = apiRoutes;
