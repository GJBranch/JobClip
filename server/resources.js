'use strict';
var routes = require('./routes'),
    passport = require('passport'),
    jwt = require('jsonwebtoken'),
    _ = require('lodash'),
    FacebookStrategy = require('passport-facebook').Strategy;

var resources = {
    register: function register(JobClip, config) {
        for (var i = 0, ii = routes.length; i < ii; i++) {
            var route = routes[i];
            var Resource = require('./resources/' + route.name + '/resource');
            var resource = new Resource(config);
            JobClip[route.httpMethod](route.url, resource[route.method]);
        }

        var createToken = function createToken(user) {
            return jwt.sign(_.omit(user, 'password'), config.secret, {expiresInMinutes: 60 * 5});
        };

        var url = ['http://', config.baseUrl, ':', config.port].join('');

        JobClip.get('/auth/facebook', passport.authenticate('facebook', {session: false}));
        JobClip.get('/auth/facebook/callback',
            passport.authenticate('facebook', {failureRedirect: '/#/error', session: false}),
            function redirect(req, res) {
                var jwt = createToken(req.user);
                console.log('user dammit', req.user);
                //res.redirect('/#/');
                res.redirect('/#/#jwt=' + jwt);

            });

        passport.use(new FacebookStrategy({
                clientID: '1473242962991397',
                clientSecret: 'c47ba63c80b02d0a281c93171e02b688',
                callbackURL: '/auth/facebook/callback'
                //enableProof: false
            },
            function addNewUser(accessToken, refreshToken, profile, done) {
                var user = {
                    username: profile.displayName,
                    provider: 'facebook',
                    token: accessToken
                };
                user.id = _.max(config.users, 'id').id + 1;
                config.users.push(user);
                console.log('users', config.users);
                done(null, user);
            }
        ))
    }
};

module.exports = resources;
