module.exports = {
	"swagger": "2.0",
	"basePath": "/v1",
	"info": {
	"title": "The SCTG developer summit project",
		"version": "1.0"
},
	"definitions": {
	"GeoLocation": {
		"description": "A lattitude and longitude pair representing a point",
			"type": "object",
			"properties": {
			"lat": {
				"description": "The lattitude component of the point",
					"type": "string"
			},
			"lon": {
				"description": "The longitude component of the point",
					"type": "string"
			}
		}
	},
	"Impact": {
		"description": "A single record from the NASA dataset",
			"type": "object",
			"properties": {
			"nasaId": {
				"description": "The unique id of the record",
					"type": "integer"
			},
			"geoLocation": {
				"$ref": "#/definitions/GeoLocation"
			},
			"year": {
				"description": "The year the incident occurred",
					"type": "string"
			},
			"mass_in_g": {
				"description": "The mass of the object in grams",
					"type": "string"
			},
			"name": {
				"description": "The name of the incident (?location?)",
					"type": "string"
			},
			"nametype": {
				"type": "string"
			},
			"recclass": {
				"type": "string"
			},
			"fall": {
				"description": "Manner of descovery of the incident, usually \"Fell\" but \"Found\" also exists",
					"type": "string"
			}
		}
	}
},
	"paths": {
}
}