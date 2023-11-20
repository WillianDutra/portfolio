const express = require('express');
// const {} = require('../controllers');
// const {} = require('../middlewares');

const apiRoutes = express.Router();

apiRoutes.get('/', (_req, res) => {
  res.send('Hello World!');
});

module.exports = apiRoutes;