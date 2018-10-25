const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', routes);

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;
