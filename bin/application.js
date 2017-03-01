'use strict';

require('babel-register');

let express = require('express');
let morgan = require('morgan');
let path  = require('path');
let config = require('../config');

let server = express();

server.use(morgan('dev'));

server.use('/assets', express.static('build'));

server.use('/', function(req, res, next){
	res.sendFile(path.normalize(__dirname + '/../app/index.html'));
});

server.listen(config.port, function(){
	console.log('\nListening on port ' + config.port);
});