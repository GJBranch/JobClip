'use strict';
var routes = require('./routes');

var resources = {
    register: function register(JobClip, config) {
        for (var i = 0, ii = routes.length; i < ii; i++) {
            var route = routes[i];
            var Resource = require('./resources/' + route.name + '/resource');
            var resource = new Resource(config);
            JobClip[route.httpMethod](route.url, resource[route.method]);
        }
    }
};

module.exports = resources;
