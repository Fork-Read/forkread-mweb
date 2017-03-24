'use strict';

let _assign = require('lodash').assign;

let secrets = require('./secrets.js');

let commonConfig = {
	port: 5050
};

module.exports = _assign(commonConfig, secrets);
