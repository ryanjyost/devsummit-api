require('dotenv').config(); // set env variables as the first thing in this app
const app = require('./app');
const initialize = require('express-openapi').initialize;
const v1ApiDoc = require('./api/api-doc');
const YAML = require('yamljs');

initialize({
	app,
	// NOTE: If using yaml it's necessary to use "fs" e.g.
	// apiDoc: fs.readFileSync(path.resolve(__dirname, './api-v1/api-doc.yml'), 'utf8'),
	apiDoc: v1ApiDoc,
	// dependencies: {
	// 	worldsService: v1WorldsService
	// },
	paths: './api/paths'
});


const port = 5000;
app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});
