require('dotenv').config(); // set env variables as the first thing in this app
const initialize = require('express-openapi').initialize;
const v1ApiDoc = require('./api/api-doc.js');
const YAML = require('yamljs');
const express = require('express');
const cors = require('cors');
// const routes = require('./routes');
var path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
// app.use('/', routes);


initialize({
	app,
	// NOTE: If using yaml it's necessary to use "fs" e.g.
	// apiDoc: fs.readFileSync(path.resolve(__dirname, './api-v1/api-doc.yml'), 'utf8'),
	apiDoc: v1ApiDoc,
	// dependencies: {
	// 	worldsService: v1WorldsService
	// },
	paths: path.resolve(__dirname, './api/paths')
});


const port = 5000;
app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
