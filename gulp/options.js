'use strict';
var fs = require('fs');
var jsHint = JSON.parse(fs.readFileSync(require.resolve('../.jshintrc'), 'utf8'));

var options = {
    afr: require('../.afr.json'),
    appName: 'JobClip',
    appOutput: './client/dist',
    appServer: './server/app.js',
    jsHint: jsHint,
    karmaConfig: 'test/config/karma.conf.js',
    common: 'client/common/**/*.js',
    features: 'client/features/**/*.js',
    specs: {
        server: {
            sources: [
                './server/**/*.js',
                '!./server/config/**'
            ],
            tests: [
                './test/unit/server/**/*.js'
            ],
            coverageFolder: './test/reports/server/coverage'

        },
        client: {
            sources: [
                './client/common/**/*.js',
                './client/features/**/*.js'
            ],
            tests: [
                './test/unit/client/**/*.js'
            ]
        }
    }
};

module.exports = options;

