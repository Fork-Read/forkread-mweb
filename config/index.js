'use strict';

let _assign = require('lodash').assign;

let env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
let envConfig = require('./' + env + '.config');

let commonConfig = {
	port: 5050
};

module.exports = _assign(commonConfig, envConfig);
