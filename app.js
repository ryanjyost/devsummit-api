// configure app-wide settings here

const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', routes);

// Export your Express configuration
module.exports = app;
