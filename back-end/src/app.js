const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(apiRoutes);

app.use(express.static('public'));

module.exports = app;
