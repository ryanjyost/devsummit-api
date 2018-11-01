const database = require('../../database');
const { check, validationResult } = require('express-validator/check');

module.exports =  function() {
	let operations = {
		GET
	};

	async function GET(req, res, next) {
		let {lat, lon, distance} = req.query;

		lat = +lat;
		lon = +lon;
		distance = +distance;

		if(!lat || !lon){
			res.status(400).json({error: 'lat and lon must be numbers'})
		} else {
			if(!distance){
				res.status(200).json(await database.getImpacts(lat, lon));
			} else {
				res.status(200).json(await database.getImpacts(lat, lon, distance));
			}

		}


	}

	// NOTE: We could also use a YAML string here.
	GET.apiDoc = {
		summary: 'Returns worlds by name.',
		operationId: 'getImpacts',
		parameters: [
			{
				in: 'query',
				name: 'lat',
				required: true,
				type: 'number',
				"x-openapi-coercion-strict": true
			},
			{
				in: 'query',
				name: 'lon',
				required: true,
				type: 'number',
				"x-openapi-coercion-strict": true
			},
			{
				in: 'query',
				name: 'distance',
				required: false,
				type: 'number'
			}
		],
		responses: {
			200: {
				description: 'A list of impacts within distance radius of given latitude and longitude.',
				schema: {
					type: 'array',
					items: {
						$ref: '#/definitions/Impact'
					}
				}
			},
			default: {
				description: 'An error occurred',
				schema: {
					additionalProperties: true
				}
			}
		}
	};

	return operations;
}