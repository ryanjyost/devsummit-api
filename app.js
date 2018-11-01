const express = require('express');
const cors = require('cors');
const path = require('path');
const initialize = require('express-openapi').initialize;
const v1ApiDoc = require('./api/api-doc.js');


const app = express();
app.use(cors());
app.use(express.json());


initialize({
	app,
	// NOTE: If using yaml it's necessary to use "fs" e.g.
	// apiDoc: fs.readFileSync(path.resolve(__dirname, './api-v1/api-doc.yml'), 'utf8'),
	apiDoc: v1ApiDoc,
	docsPath: "/",
	errorMiddleware: function(err, req, res, next) { // only handles errors for /v3/*
		res.json({error: err});
	},
	paths: path.resolve(__dirname, './api/paths')
});

module.exports = app;