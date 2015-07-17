'use strict';
var express = require('express'),
    _ = require('lodash'),
    jwt = require('jsonwebtoken');

function SessionsResource(config) {
    function createSession(request, response) {
        function createToken(user) {
            return jwt.sign(_.omit(user, 'password'), config.secret, {expiresInMinutes: 60 * 5});
        }

        if (!request.body.username || !request.body.password) {
            return response.status(400).send("You must send the username and the password");
        }

        var user = _.find(config.users, {username: request.body.username});
        if (!user || (user.password !== request.body.password)) {
            return response.status(401).send('The username or password is incorrect');
        }

        response.status(201).send({
            id_token: createToken(user)
        });
    }

    this.post = createSession;
}

module.exports = SessionsResource;
