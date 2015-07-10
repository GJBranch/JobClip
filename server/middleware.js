'use strict';
var express = require('express');
var path = require('path');
var compression = require('compression');
var bodyParser = require('body-parser');
//var allowCrossDomain = require('./middleware/allowCrossDomain');
//var resourceNotFound = require('./middleware/resourceNotFound');

var middleware = {
    register : function (Dev) {

        var sourcePath = path.dirname(__dirname),
            client = path.join(sourcePath, '/client/'),
            compressOpts = {
                threshold: 512,
                memLevel: 9,
                level: 5
            };

        Dev.use(compression(compressOpts));
        Dev.use(express.static(client));
        Dev.use(bodyParser.json());
        Dev.use(bodyParser.urlencoded());

    //Dev.use(allowCrossDomain);
    //Dev.use(resourceNotFound);
    }
};

module.exports = middleware;
