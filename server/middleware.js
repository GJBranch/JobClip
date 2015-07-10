'use strict';
var express = require('express');
var path = require('path');
var compression = require('compression');
var bodyParser = require('body-parser');
//var allowCrossDomain = require('./middleware/allowCrossDomain');
//var resourceNotFound = require('./middleware/resourceNotFound');

var middleware = {
    register : function (JobClip) {

        var sourcePath = path.dirname(__dirname),
            client = path.join(sourcePath, '/client/'),
            compressOpts = {
                threshold: 512,
                memLevel: 9,
                level: 5
            };

        JobClip.use(compression(compressOpts));
        JobClip.use(express.static(client));
        JobClip.use(bodyParser.json());
        JobClip.use(bodyParser.urlencoded());

    //JobClip.use(allowCrossDomain);
    //JobClip.use(resourceNotFound);
    }
};

module.exports = middleware;
