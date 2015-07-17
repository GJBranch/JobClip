'use strict';
var express = require('express'),
    path = require('path'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    cors = require('cors');

var middleware = {
    register: function register(JobClip) {
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
        JobClip.use(bodyParser.urlencoded({extended: true}));
        JobClip.use(cors());
        JobClip.use(passport.initialize());
    }
};

module.exports = middleware;
