'use strict';

let request = require('request');
let config = require('../config');

let controller = function(req, res){
	console.log(req.body);

	request({
		method: 'POST',
		url: config.hostname + '/api/user/login',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(req.body)
	}, function(err, response, data){
			res.status(response.statusCode).send(JSON.parse(data));
	});
};

module.exports = controller;