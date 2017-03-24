'use strict';

require('babel-register');

let express = require('express');
let morgan = require('morgan');
let path  = require('path');
let bodyParser = require('body-parser');
let config = require('../config');

let loginController = require('../server/login.controller');

let server = express();

server.use(morgan('dev'));
server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(bodyParser.json());

server.use('/assets', express.static('build'));

server.post('/login', loginController);

server.use('/', function(req, res, next){
	res.sendFile(path.normalize(__dirname + '/../app/index.html'));
});

server.listen(config.port, function(){
	console.log('\nListening on port ' + config.port);
});