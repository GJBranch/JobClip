'use strict';
var express = require('express'),
    _ = require('lodash'),
    jwt = require('jsonwebtoken');

function ApiResource(config) {
    function callAPI(request, response, next) {
        response.send({message: 'This is where you can access the API'})
    }

    this.get = callAPI;
}

module.exports = ApiResource;
