'use strict';

require('babel-register');

let express 			= require('express');
let morgan 				= require('morgan');
let path  				= require('path');
let bodyParser 		= require('body-parser');
let config 				= require('../config');
let session				= require('express-session');
let RedisStore 		= require('connect-redis')(session);

let server = express();
let apiMiddleware = require('../server/routes');

server.use(morgan('dev'));
server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(bodyParser.json());
server.use(session({
	store: new RedisStore,
	secret: 'FORKREAD98',
	resave: false,
  saveUninitialized: true,
}));

server.use('/assets', express.static('build'));

server.use('/api', apiMiddleware);

server.use('/', function(req, res, next){
	res.sendFile(path.normalize(__dirname + '/../app/index.html'));
});

server.listen(config.port, function(){
	console.log('\nListening on port ' + config.port);
});