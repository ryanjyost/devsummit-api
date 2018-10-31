const express = require('express');
const db = require('../database');
const router = express.Router();
const apiDoc = require('../api/api-doc');
module.exports = router;



router.get('/api-doc', function(req, res) {
  res.json({doc: apiDoc});
});

router.get(`${apiDoc.basePath}/impacts`, async function(req, res) {
	console.log(req.query);
	let {lat, lon, distance} = req.query;

	const response = await db.getImpacts(Number(req.query.lat), Number(req.query.lon), req.query.distance);
  res.json(response)
});


router.get('/:id', async function(req, res) {
  console.log('Should not log')
  const landing = await db.getById(req.params.id);
  res.json({ metoerite: landing });
});

// put these routes at the end
router.use('*', function(req, res) {
  res.status(404).json({
    error: `Route ${req.baseUrl} not found`,
  });
});

router.use(function(err, req, res, next) {
  res.status(500).json({
    error: 'Internal Server Error',
  });
});
