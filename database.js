// @ts-check

const elasticsearch = require('elasticsearch');

module.exports = {
	getById,
	getImpacts
};

const esClient = new elasticsearch.Client({
	host: process.env.ES_URL,
	log: 'warning',
});


async function getById(id) {
	const landing = await esClient.search({
		index: 'devsummit',
		type: 'meteorite_landing',
		body: {
			query: {
				match: {
					nasaId: id,
				}
			}
		}
	});
	return landing.hits.hits[0];
}

async function getImpacts(lat, lon, distance = 100, dataSize = 1000) {
	const impacts = await esClient.search({
		index: 'devsummit',
		type: 'meteorite_landing',
		body: {
			query: {
				bool: {
					must: {
						match_all: {}
					},
					filter: {
						geo_distance: {
							distance: distance + "km",
							geoLocation: lat + "," + lon
						}
					}
				}
			},
			size: dataSize,
			sort: [
				{
					_geo_distance: {
						geoLocation: lat + "," + lon,
						order: "desc",
						distance_type: "plane"
					}
				}
			]
		}
	});
	return impacts.hits.hits;
}

