'use strict';

import express from 'express';
import morgan from 'morgan';
import path from 'path';

let server = express();

server.use(morgan('dev'));

server.use('/assets', express.static('build'));

server.use('/', function(req, res, next){
	res.sendFile(path.normalize(__dirname + '/../app/index.html'));
});

server.listen(3000, function(){
	console.log('\nListening on port 3000');
});