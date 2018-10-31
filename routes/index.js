const express = require('express');
const db = require('../database');
const router = express.Router();
module.exports = router;



router.get('/health', function(req, res) {
  res.json({ status: 'ok' });
});

// router.get(`${apiDoc.basePath}/impacts`, function(req, res) {
// 	console.log(req.query);
// 	let {lat, lon, distance} = req.query;
//
//
// 	if(!distance){
//     distance = 100; //km
//   }
//
//   res.json({test: 'hey'})
// });


router.get('/:id', async function(req, res) {
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
