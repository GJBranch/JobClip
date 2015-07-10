'use strict';
var express = require('express');
var middleware = require('./middleware');
var resources = require('./resources');

//app
var JobClip = express();

//config
var env = JobClip.get('env') || 'development';
var config = require('./config/' + env);

middleware.register(JobClip);
resources.register(JobClip, config);

console.log('Running: ', env);
console.log('Port: ', config.port);

JobClip.listen(config.port);
