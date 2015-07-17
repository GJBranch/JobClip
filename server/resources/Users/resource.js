'use strict';
var express = require('express'),
    _ = require('lodash'),
    jwt = require('jsonwebtoken');

function UsersResource(config) {
    function createUser(request, response) {
        function createToken(user) {
            return jwt.sign(_.omit(user, 'password'), config.secret, { expiresInMinutes: 60*5 });
        }

        if (!request.body.username || !request.body.password) {
            return response.status(400).send("You must send the username and the password");
        }
        if (_.find(config.users, {username: request.body.username, provider: 'local'})) {
            return response.status(400).send("A user with that username already exists");
        }

        var profile = _.pick(request.body, 'username', 'password', 'extra');
        profile.provider = 'local';
        profile.id = _.max(config.users, 'id').id + 1;

        config.users.push(profile);

        response.status(201).send({
            id_token: createToken(profile)
        });
    }

    this.post = createUser;
}

module.exports = UsersResource;
