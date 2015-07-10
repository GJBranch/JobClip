'use strict';
var express = require('express');
var middleware = require('./middleware');
var resources = require('./resources');

//app
var Dev = express();

//config
var env = Dev.get('env') || 'development';
var config = require('./config/' + env);

middleware.register(Dev);
resources.register(Dev, config);

console.log('Running: ', env);
console.log('Port: ', config.port);

Dev.listen(config.port);
