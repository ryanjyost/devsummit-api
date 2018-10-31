const database = require('../../database');

module.exports =  function() {
	let operations = {
		GET
	};

	async function GET(req, res, next) {
		res.status(200).json(await database.getImpacts(Number(req.query.lat), Number(req.query.lon), req.query.distance));
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
				type: 'number'
			},
			{
				in: 'query',
				name: 'lon',
				required: true,
				type: 'number'
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