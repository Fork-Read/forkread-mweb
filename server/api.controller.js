'use strict';

let request = require('request');
let config = require('../config');

let controller = {

	login: function(req, res){
		request({
			method: 'POST',
			url: config.hostname + req.originalUrl,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(req.body)
		}, function(err, response, data){
				let __payload;

				try{
					__payload = JSON.parse(data);
				}catch(err){
					__payload = data
				}

				if(response.statusCode === 200 || response.statusCode === 201){
					if(__payload.uuid && req.session){
						req.session.uuid = __payload.uuid;
					}
				}

				res.status(response.statusCode).send(__payload);
		});
	},
	
	get: function(req, res){
		let queryParams, headers;

		queryParams = req.query || {};
		headers = {
			'Content-Type': 'application/json'
		};

		if(req.session.uuid){
			headers['uuid'] = req.session.uuid;
		};

		request({
			method: 'GET',
			url: config.hostname + req.originalUrl,
			qs: queryParams,
			headers: headers
		}, function(err, response, data){
				res.status(response.statusCode).send(JSON.parse(data));
		});
	},

	post: function(req, res){
		request({
			method: 'POST',
			url: config.hostname + req.originalUrl,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(req.body)
		}, function(err, response, data){
				let __payload;

				try{
					__payload = JSON.parse(data);
				}catch(err){
					__payload = data
				}

				res.status(response.statusCode).send(__payload);
		});
	},

	patch: function(req, res){
		let queryParams;

		queryParams = req.query || {};

		request({
			method: 'PATCH',
			url: config.hostname + req.originalUrl,
			headers: {
				'Content-Type': 'application/json'
			},
			qs: queryParams,
			body: JSON.stringify(req.body)
		}, function(err, response, data){
				res.status(response.statusCode).send(JSON.parse(data));
		});
	},

	delete: function(req, res){
		request({
			method: 'DELETE',
			url: config.hostname + req.originalUrl,
			headers: {
				'Content-Type': 'application/json'
			}
		}, function(err, response, data){
				res.status(response.statusCode).send(JSON.parse(data));
		});
	}
}

module.exports = controller;